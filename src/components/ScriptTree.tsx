import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { ScriptData, scriptData } from '@/lib/script-data'

interface ScriptTreeProps {
  onScriptSelect: (script: ScriptData | null) => void
  selectedScript: ScriptData | null
  zoomLevel: number
}

interface TreeNode extends d3.HierarchyNode<ScriptData> {
  x?: number
  y?: number
}

export default function ScriptTree({ onScriptSelect, selectedScript, zoomLevel }: ScriptTreeProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })

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

    // Create main group with zoom transform
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top}) scale(${zoomLevel})`)

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

  }, [dimensions, selectedScript, zoomLevel, onScriptSelect])

  return (
    <div className="w-full h-full overflow-hidden bg-gradient-to-br from-background to-muted/30">
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
      />
    </div>
  )
}