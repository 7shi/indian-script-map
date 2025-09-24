import { useEffect, useRef, useState, useCallback } from 'react'
import * as d3 from 'd3'
import { ScriptData, scriptData } from '@/lib/script-data'

interface ScriptTreeProps {
  onScriptSelect: (script: ScriptData | null) => void
  selectedScript: ScriptData | null
  zoomLevel: number
  onZoomChange: (newZoom: number) => void
}

interface TreeNode extends d3.HierarchyNode<ScriptData> {
  x?: number
  y?: number
}

export default function ScriptTree({ onScriptSelect, selectedScript, zoomLevel, onZoomChange }: ScriptTreeProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })
  const [transform, setTransform] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  // Handle wheel zoom centered on mouse position
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    
    if (!containerRef.current) return
    
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    const newZoom = Math.max(0.5, Math.min(2, zoomLevel + delta))
    
    if (newZoom === zoomLevel) return
    
    // Get mouse position relative to the container
    const rect = containerRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    // Calculate the zoom scale factor
    const scaleFactor = newZoom / zoomLevel
    
    // Calculate the new transform to keep mouse position as zoom center
    const newTransformX = mouseX - (mouseX - transform.x) * scaleFactor
    const newTransformY = mouseY - (mouseY - transform.y) * scaleFactor
    
    setTransform({
      x: newTransformX,
      y: newTransformY
    })
    
    onZoomChange(newZoom)
  }, [zoomLevel, onZoomChange, transform])

  // Handle drag scrolling
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.target === svgRef.current || e.target === containerRef.current) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y })
      e.preventDefault()
    }
  }, [transform])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      setTransform({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }, [isDragging, dragStart])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Set up global mouse event listeners for drag
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = 'grabbing'
    } else {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = ''
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = ''
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current?.parentElement) {
        const rect = svgRef.current.parentElement.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const margin = { top: 50, right: 300, bottom: 50, left: 50 }  // Increased right margin for horizontal layout
    const width = dimensions.width - margin.left - margin.right
    const height = dimensions.height - margin.top - margin.bottom

    // Create hierarchy
    const rootScript = scriptData.find(s => s.id === 'brahmi')!
    const hierarchy = d3.hierarchy(rootScript, (d) => {
      return scriptData.filter(s => s.parent === d.id)
    })

    // Create horizontal tree layout with increased width for each level
    const treeLayout = d3.tree<ScriptData>()
      .size([height * 0.9, width * 1.2])  // Increased width multiplier from 0.9 to 1.2
      .separation((a, b) => {
        // Increase separation based on depth to prevent crowding
        const baseSeparation = (a.parent === b.parent ? 1.8 : 3.6)  // Further increased separation (1.2x)
        const depthFactor = Math.max(a.depth, b.depth) * 0.24 + 1.2  // Increased depth factor (1.2x)
        return baseSeparation * depthFactor / Math.max(a.depth, 1)
      })

    const treeData = treeLayout(hierarchy)
    const nodes = treeData.descendants()
    const links = treeData.links()

    // Transform nodes for horizontal layout (swap x and y)
    nodes.forEach(d => {
      const temp = d.x
      d.x = d.y
      d.y = temp
    })

    // Create main group with zoom and drag transform
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left + transform.x}, ${margin.top + transform.y}) scale(${zoomLevel})`)

    // Draw links with improved visibility - horizontal layout
    g.selectAll('.tree-branch')
      .data(links)
      .enter()
      .append('path')
      .attr('class', 'tree-branch')
      .attr('d', d3.linkHorizontal<any, TreeNode>()
        .x((d: TreeNode) => d.x || 0)
        .y((d: TreeNode) => d.y || 0)
      )
      .attr('stroke', (d) => {
        // Different stroke colors based on depth for better visibility
        if (d.target.depth === 1) return 'hsl(var(--primary) / 0.9)'
        if (d.target.depth === 2) return 'hsl(var(--primary) / 0.7)'
        if (d.target.depth === 3) return 'hsl(var(--accent) / 0.8)'
        if (d.target.depth === 4) return 'hsl(var(--secondary) / 0.9)'
        return 'hsl(var(--muted-foreground) / 0.7)'
      })
      .attr('stroke-width', (d) => {
        // Thicker strokes for main branches
        if (d.target.depth === 1) return 3
        if (d.target.depth === 2) return 2.5
        if (d.target.depth === 3) return 2
        return 1.5
      })
      .attr('fill', 'none')
      .attr('opacity', 0.9)

    // Draw nodes
    const nodeGroups = g.selectAll('.tree-node')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'tree-node')
      .attr('transform', (d: TreeNode) => `translate(${d.x || 0}, ${d.y || 0})`)
      .style('cursor', 'pointer')
      .on('click', (event, d) => {
        onScriptSelect(d.data)
      })

    // Node circles
    nodeGroups.append('circle')
      .attr('r', (d) => {
        if (d.depth === 0) return 14  // Brahmi - largest
        if (d.depth === 1) return 12  // Gupta, Southern Brahmi, Pallava
        if (d.depth === 2) return 10  // Siddham, Nagari, etc.
        if (d.depth === 3) return 8   // Modern scripts
        return 6                      // Latest descendants
      })
      .attr('fill', (d) => {
        if (selectedScript?.id === d.data.id) return 'hsl(var(--accent))'
        if (d.depth === 0) return 'hsl(var(--primary))'           // Brahmi
        if (d.depth === 1) return 'hsl(var(--primary) / 0.8)'    // Second generation
        if (d.depth === 2) return 'hsl(var(--secondary))'        // Third generation
        if (d.depth === 3) return 'hsl(var(--secondary) / 0.8)'  // Modern scripts
        return 'hsl(var(--muted))'                                // Latest
      })
      .attr('stroke', (d) => {
        if (selectedScript?.id === d.data.id) return 'hsl(var(--accent-foreground))'
        return 'hsl(var(--border))'
      })
      .attr('stroke-width', (d) => d.depth === 0 ? 3 : 2)
      .on('mouseenter', function(event, d) {
        d3.select(this)
          .attr('filter', 'brightness(1.2)')
      })
      .on('mouseleave', function(event, d) {
        d3.select(this)
          .attr('filter', 'none')
      })

    // Node labels - adjusted for horizontal layout
    nodeGroups.append('text')
      .attr('dx', (d) => {
        if (d.depth === 0) return 18      // Brahmi
        if (d.depth === 1) return 16      // Second generation
        if (d.depth === 2) return 14      // Third generation  
        if (d.depth === 3) return 12      // Modern scripts
        return 10                         // Latest
      })
      .attr('dy', '0.35em')  // Center vertically
      .attr('text-anchor', 'start')  // Left-align for horizontal layout
      .attr('font-size', (d) => {
        if (d.depth === 0) return '16px'  // Brahmi - largest
        if (d.depth === 1) return '14px'  // Second generation
        if (d.depth === 2) return '12px'  // Third generation
        return '11px'                     // Modern and later
      })
      .attr('font-weight', (d) => {
        if (d.depth === 0) return '700'   // Brahmi - boldest
        if (d.depth === 1) return '600'   // Second generation
        if (d.depth === 2) return '500'   // Third generation
        return '400'                      // Modern scripts
      })
      .attr('fill', 'hsl(var(--foreground))')
      .text((d) => d.data.name)
      // Remove text wrapping for horizontal layout as we have more horizontal space

    // Add period labels for leaf nodes - removed as requested
    // Period information is no longer displayed to avoid text overlap

  }, [dimensions, selectedScript, zoomLevel, transform, onScriptSelect])

  return (
    <div 
      ref={containerRef}
      className="w-full h-full overflow-hidden bg-gradient-to-br from-background to-muted/30 select-none"
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
      />
    </div>
  )
}