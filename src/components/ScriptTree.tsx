import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { ScriptData, scriptFamilyData } from '@/lib/script-data'

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

    const margin = { top: 50, right: 50, bottom: 50, left: 50 }
    const width = dimensions.width - margin.left - margin.right
    const height = dimensions.height - margin.top - margin.bottom

    // Create hierarchy
    const rootScript = scriptFamilyData.find(s => s.id === 'brahmi')!
    const hierarchy = d3.hierarchy(rootScript, (d) => {
      return scriptFamilyData.filter(s => s.parent === d.id)
    })

    // Create tree layout
    const treeLayout = d3.tree<ScriptData>()
      .size([width, height * 0.9])  // Leave more space at bottom
      .separation((a, b) => {
        // Increase separation based on depth to prevent crowding
        const baseSeparation = (a.parent === b.parent ? 1.2 : 2.5)
        const depthFactor = Math.max(a.depth, b.depth) * 0.3 + 1
        return baseSeparation * depthFactor / Math.max(a.depth, 1)
      })

    const treeData = treeLayout(hierarchy)
    const nodes = treeData.descendants()
    const links = treeData.links()

    // Create main group with zoom transform
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top}) scale(${zoomLevel})`)

    // Draw links
    g.selectAll('.tree-branch')
      .data(links)
      .enter()
      .append('path')
      .attr('class', 'tree-branch')
      .attr('d', d3.linkVertical<any, TreeNode>()
        .x((d: TreeNode) => d.x || 0)
        .y((d: TreeNode) => d.y || 0)
      )
      .style('stroke', (d) => {
        // Different stroke colors based on depth
        if (d.target.depth === 1) return 'hsl(var(--primary) / 0.7)'
        if (d.target.depth === 2) return 'hsl(var(--primary) / 0.5)'
        if (d.target.depth === 3) return 'hsl(var(--secondary) / 0.7)'
        return 'hsl(var(--border))'
      })
      .style('stroke-width', (d) => {
        // Thicker strokes for main branches
        if (d.target.depth === 1) return 3
        if (d.target.depth === 2) return 2.5
        return 2
      })
      .style('fill', 'none')
      .style('opacity', 0.8)

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
      .style('fill', (d) => {
        if (selectedScript?.id === d.data.id) return 'hsl(var(--accent))'
        if (d.depth === 0) return 'hsl(var(--primary))'           // Brahmi
        if (d.depth === 1) return 'hsl(var(--primary) / 0.8)'    // Second generation
        if (d.depth === 2) return 'hsl(var(--secondary))'        // Third generation
        if (d.depth === 3) return 'hsl(var(--secondary) / 0.8)'  // Modern scripts
        return 'hsl(var(--muted))'                                // Latest
      })
      .style('stroke', (d) => {
        if (selectedScript?.id === d.data.id) return 'hsl(var(--accent-foreground))'
        return 'hsl(var(--border))'
      })
      .style('stroke-width', (d) => d.depth === 0 ? 3 : 2)
      .on('mouseenter', function(event, d) {
        const baseRadius = d.depth === 0 ? 14 : d.depth === 1 ? 12 : d.depth === 2 ? 10 : d.depth === 3 ? 8 : 6
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', baseRadius * 1.3)
      })
      .on('mouseleave', function(event, d) {
        const baseRadius = d.depth === 0 ? 14 : d.depth === 1 ? 12 : d.depth === 2 ? 10 : d.depth === 3 ? 8 : 6
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', baseRadius)
      })

    // Node labels
    nodeGroups.append('text')
      .attr('dy', (d) => {
        if (d.depth === 0) return 28      // Brahmi
        if (d.depth === 1) return 25      // Second generation
        if (d.depth === 2) return 22      // Third generation  
        if (d.depth === 3) return 20      // Modern scripts
        return 18                         // Latest
      })
      .attr('text-anchor', 'middle')
      .style('font-size', (d) => {
        if (d.depth === 0) return '16px'  // Brahmi - largest
        if (d.depth === 1) return '14px'  // Second generation
        if (d.depth === 2) return '12px'  // Third generation
        return '11px'                     // Modern and later
      })
      .style('font-weight', (d) => {
        if (d.depth === 0) return '700'   // Brahmi - boldest
        if (d.depth === 1) return '600'   // Second generation
        if (d.depth === 2) return '500'   // Third generation
        return '400'                      // Modern scripts
      })
      .style('fill', 'hsl(var(--foreground))')
      .text((d) => d.data.name)
      .each(function(d) {
        const text = d3.select(this)
        const words = d.data.name.split(/\s+/)
        if (words.length > 1 && d.depth > 1) {  // Only wrap for deeper levels
          text.text('')
          words.forEach((word, i) => {
            text.append('tspan')
              .attr('x', 0)
              .attr('dy', i === 0 ? 0 : '1.1em')
              .text(word)
          })
        }
      })

    // Add period labels for leaf nodes
    nodeGroups.filter((d) => !d.children || d.children.length === 0)
      .append('text')
      .attr('dy', (d) => {
        if (d.depth === 0) return 50
        if (d.depth === 1) return 45
        if (d.depth === 2) return 40
        if (d.depth === 3) return 35
        return 30
      })
      .attr('text-anchor', 'middle')
      .style('font-size', '9px')
      .style('fill', 'hsl(var(--muted-foreground))')
      .text((d) => d.data.period)

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