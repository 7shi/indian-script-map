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
      .size([width, height])
      .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth)

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
      .style('stroke', 'hsl(var(--border))')
      .style('stroke-width', 2)
      .style('fill', 'none')

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
      .attr('r', (d) => d.depth === 0 ? 12 : 8)
      .style('fill', (d) => {
        if (selectedScript?.id === d.data.id) return 'hsl(var(--accent))'
        return d.depth === 0 ? 'hsl(var(--primary))' : 'hsl(var(--secondary))'
      })
      .style('stroke', (d) => {
        if (selectedScript?.id === d.data.id) return 'hsl(var(--accent-foreground))'
        return 'hsl(var(--border))'
      })
      .style('stroke-width', 2)
      .on('mouseenter', function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', (d.depth === 0 ? 12 : 8) * 1.2)
      })
      .on('mouseleave', function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', d.depth === 0 ? 12 : 8)
      })

    // Node labels
    nodeGroups.append('text')
      .attr('dy', (d) => d.depth === 0 ? 25 : 20)
      .attr('text-anchor', 'middle')
      .style('font-size', (d) => d.depth === 0 ? '14px' : '12px')
      .style('font-weight', (d) => d.depth === 0 ? '600' : '500')
      .style('fill', 'hsl(var(--foreground))')
      .text((d) => d.data.name)
      .each(function(d) {
        const text = d3.select(this)
        const words = d.data.name.split(/\s+/)
        if (words.length > 1 && d.depth > 0) {
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
      .attr('dy', (d) => d.depth === 0 ? 40 : 35)
      .attr('text-anchor', 'middle')
      .style('font-size', '10px')
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