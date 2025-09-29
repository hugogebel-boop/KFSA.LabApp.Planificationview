import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/ui/tabs'
import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card'
import { Badge } from '@/ui/badge'
import { CalendarDays, KanbanSquare, ListChecks } from 'lucide-react'
import { KanbanView } from './KanbanView'
import { WeekView } from './WeekView'
import { ListView } from './ListView'

export function PlanningWorkspace(){
  return (
    <div className="p-6 mx-auto max-w-7xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow">
          <CalendarDays className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-emerald-900">Planification — Workspace multi‑vues</h1>
          <p className="text-sm text-emerald-900/70">Basculer entre Kanban, Semaine et Liste suivant le besoin.</p>
        </div>
      </div>

      <Tabs defaultValue="kanban" className="w-full">
        <TabsList className="mb-4 grid w-full grid-cols-3">
          <TabsTrigger value="kanban" className="gap-2"><KanbanSquare className="h-4 w-4"/>Kanban</TabsTrigger>
          <TabsTrigger value="week" className="gap-2"><CalendarDays className="h-4 w-4"/>Semaine</TabsTrigger>
          <TabsTrigger value="list" className="gap-2"><ListChecks className="h-4 w-4"/>Liste</TabsTrigger>
        </TabsList>

        <TabsContent value="kanban">
          <KanbanView />
        </TabsContent>
        <TabsContent value="week">
          <WeekView />
        </TabsContent>
        <TabsContent value="list">
          <ListView />
        </TabsContent>
      </Tabs>
    </div>
  )
}