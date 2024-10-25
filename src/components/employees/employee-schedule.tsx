import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface Task {
  id: number;
  name: string;
  project: string;
  startDate: string;
  endDate: string;
  status: string;
}

interface EmployeeScheduleProps {
  tasks: Task[];
}

function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case "completed":
      return "bg-green-500/15 text-green-500 hover:bg-green-500/25";
    case "in progress":
      return "bg-blue-500/15 text-blue-500 hover:bg-blue-500/25";
    case "planned":
      return "bg-yellow-500/15 text-yellow-500 hover:bg-yellow-500/25";
    default:
      return "bg-gray-500/15 text-gray-500 hover:bg-gray-500/25";
  }
}

export function EmployeeSchedule({ tasks }: EmployeeScheduleProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.name}</TableCell>
              <TableCell>{task.project}</TableCell>
              <TableCell>{format(new Date(task.startDate), 'MMM d, yyyy')}</TableCell>
              <TableCell>{format(new Date(task.endDate), 'MMM d, yyyy')}</TableCell>
              <TableCell>
                <Badge variant="secondary" className={getStatusColor(task.status)}>
                  {task.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}