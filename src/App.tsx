import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { MagnifyingGlassPlus, MagnifyingGlassMinus, ArrowCounterClockwise } from '@phosphor-icons/react'
import ScriptTree from '@/components/ScriptTree'
import { ScriptData } from '@/lib/script-data'

function App() {
  const [selectedScript, setSelectedScript] = useState<ScriptData | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 2))
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5))
  }

  const handleReset = () => {
    setZoomLevel(1)
    setSelectedScript(null)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">インド系文字の系統樹</h1>
              <p className="text-muted-foreground">Indian Script Family Tree</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleZoomOut}>
                <MagnifyingGlassMinus className="h-4 w-4" />
              </Button>
              <Badge variant="secondary" className="px-3">
                {Math.round(zoomLevel * 100)}%
              </Badge>
              <Button variant="outline" size="sm" onClick={handleZoomIn}>
                <MagnifyingGlassPlus className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleReset}>
                <ArrowCounterClockwise className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Tree View */}
        <div className="flex-1 relative overflow-hidden">
          <ScriptTree 
            onScriptSelect={setSelectedScript}
            selectedScript={selectedScript}
            zoomLevel={zoomLevel}
          />
        </div>

        {/* Detail Panel */}
        {selectedScript && (
          <div className="w-96 border-l bg-card/30 backdrop-blur-sm">
            <ScrollArea className="h-full">
              <Card className="m-4 border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {selectedScript.name}
                      </CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {selectedScript.localName}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {selectedScript.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Script Sample */}
                  {selectedScript.sample && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">サンプル文字</p>
                      <div className="script-sample text-center">
                        {selectedScript.sample}
                      </div>
                    </div>
                  )}

                  {/* Basic Info */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">使用地域</h4>
                      <p className="text-sm">{selectedScript.regions.join(', ')}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">文字体系</h4>
                      <p className="text-sm">{selectedScript.type}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">方向</h4>
                      <p className="text-sm">{selectedScript.direction}</p>
                    </div>
                  </div>

                  {/* Description */}
                  {selectedScript.description && (
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">説明</h4>
                      <p className="text-sm leading-relaxed">{selectedScript.description}</p>
                    </div>
                  )}

                  {/* Languages */}
                  {selectedScript.languages && selectedScript.languages.length > 0 && (
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">使用言語</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedScript.languages.map(lang => (
                          <Badge key={lang} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </ScrollArea>
          </div>
        )}
      </div>
    </div>
  )
}

export default App