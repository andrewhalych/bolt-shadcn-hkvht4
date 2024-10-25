import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users2 } from "lucide-react";
import { format } from "date-fns";

interface Task {
  id: string;
  title: string;
  assignee: string; 
  dueDate: Date;
  department: string;
}

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
}

const getDepartmentColor = (department: string) => {
  const colors: { [key: string]: string } = {
    Sales: "bg-blue-100 text-blue-800",
    Finance: "bg-green-100 text-green-800",
    "Project Management": "bg-purple-100 text-purple-800",
    Legal: "bg-gray-100 text-gray-800",
    HR: "bg-pink-100 text-pink-800",
    Marketing: "bg-yellow-100 text-yellow-800",
    Creative: "bg-orange-100 text-orange-800",
    Design: "bg-indigo-100 text-indigo-800",
    "Account Management": "bg-red-100 text-red-800",
    Production: "bg-cyan-100 text-cyan-800",
    Casting: "bg-emerald-100 text-emerald-800",
  };
  return colors[department] || "bg-gray-100 text-gray-800";
};

export function KanbanColumn({ title, tasks }: KanbanColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-sm">{title}</h3>
        <span className="text-sm text-muted-foreground">{tasks.length}</span>
      </div>
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <Card key={task.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 space-y-3">
              <div className="space-y-2">
                <h4 className="font-medium">{task.title}</h4>
                <Badge variant="secondary" className={getDepartmentColor(task.department)}>
                  {task.department}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users2 className="h-4 w-4" />
                  {task.assignee}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {format(new Date(task.dueDate), "MMM d")}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}