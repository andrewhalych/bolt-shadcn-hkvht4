import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HomeIcon, ChevronDown } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { AddTaskModal } from '@/components/projects/add-task-modal';
import { KanbanColumn } from '@/components/projects/kanban-column';

interface Task {
  id: string;
  title: string;
  assignee: string;
  dueDate: Date;
  department: string;
}

interface StageTasks {
  todo: Task[];
  inProgress: Task[];
  done: Task[];
}

interface Stage {
  name: string;
  description: string;
  color: string;
  tasks: StageTasks;
  isOpen?: boolean;
}

const initialStages: Stage[] = [
  {
    name: 'Bidding',
    description: 'Initial project proposals and negotiations',
    color: 'bg-blue-500',
    tasks: {
      todo: [
        {
          assignee: 'John Dow',
          department: 'Legal',
          dueDate: new Date(2024, 9, 10),
          id: 'task-01',
          title: 'Customer Research',
        },
      ],
      inProgress: [
        {
          assignee: 'John Dow',
          department: 'Production',
          dueDate: new Date(2024, 10, 10),
          id: 'task-02',
          title: 'Docs Prep',
        },
      ],
      done: [
        {
          assignee: 'John Dow',
          department: 'Marketing',
          dueDate: new Date(2024, 10, 10),
          id: 'task-02',
          title: 'Docs Prep',
        },
        {
          assignee: 'John Dow',
          department: 'HR',
          dueDate: new Date(2024, 10, 10),
          id: 'task-02',
          title: 'Scouting',
        },
      ],
    },
    isOpen: true,
  },
  {
    name: 'Creative Recco',
    description: 'Creative concept development',
    color: 'bg-purple-500',
    tasks: {
      todo: [
        {
          assignee: 'John Dow',
          department: 'Creative',
          dueDate: new Date(2024, 10, 10),
          id: 'task-02',
          title: 'Docs Prep',
        },
        {
          assignee: 'John Dow',
          department: 'Casting',
          dueDate: new Date(2024, 10, 10),
          id: 'task-02',
          title: 'Scouting',
        },
      ],
      inProgress: [],
      done: [],
    },
    isOpen: true,
  },
  {
    name: 'Pre-Shoot',
    description: 'Preparation and planning',
    color: 'bg-orange-500',
    tasks: {
      todo: [],
      inProgress: [],
      done: [],
    },
    isOpen: true,
  },
  {
    name: 'Shooting',
    description: 'Active production phase',
    color: 'bg-green-500',
    tasks: {
      todo: [],
      inProgress: [],
      done: [],
    },
    isOpen: true,
  },
  {
    name: 'Closing',
    description: 'Project wrap-up and delivery',
    color: 'bg-red-500',
    tasks: {
      todo: [],
      inProgress: [],
      done: [],
    },
    isOpen: true,
  },
];

const getStageColor = (color: string) => {
  return color.replace('bg-', 'text-').replace('-500', '-700');
};

export function ProjectStagesPage() {
  const { id } = useParams();
  const [stagesData, setStagesData] = useState<Stage[]>(initialStages);

  const handleAddTask = (stageIndex: number, task: Task) => {
    setStagesData((prevStages) => {
      const newStages = [...prevStages];
      newStages[stageIndex].tasks.todo.push(task);
      return newStages;
    });
  };

  const toggleStage = (index: number) => {
    setStagesData((prevStages) => {
      const newStages = [...prevStages];
      newStages[index].isOpen = !newStages[index].isOpen;
      return newStages;
    });
  };

  return (
    <div className="space-y-8">
      <div className="border-b">
        <div className="flex items-center justify-between py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-2">
                  <HomeIcon className="h-4 w-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={'/projects'}>Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={`/projects/${id}`}>Project Details</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Stages</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="grid gap-6">
        {stagesData.map((stage, index) => (
          <Card key={stage.name}>
            <Collapsible
              open={stage.isOpen}
              onOpenChange={() => toggleStage(index)}
            >
              <CardHeader
                className="cursor-pointer"
                onClick={() => toggleStage(index)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-4">
                    <Badge
                      variant="secondary"
                      className={getStageColor(stage.color)}
                    >
                      Stage {index + 1}
                    </Badge>
                    {stage.name}
                  </CardTitle>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                      {stage.description}
                    </div>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            stage.isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </Button>
                    </CollapsibleTrigger>
                    <AddTaskModal
                      stageName={stage.name}
                      onAddTask={(task) => handleAddTask(index, task)}
                    />
                  </div>
                </div>
              </CardHeader>
              <CollapsibleContent>
                <CardContent>
                  <div className="grid grid-cols-3 gap-6">
                    <KanbanColumn title="To Do" tasks={stage.tasks.todo} />
                    <KanbanColumn
                      title="In Progress"
                      tasks={stage.tasks.inProgress}
                    />
                    <KanbanColumn title="Done" tasks={stage.tasks.done} />
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>
    </div>
  );
}
