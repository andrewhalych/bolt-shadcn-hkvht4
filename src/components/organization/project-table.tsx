import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { format } from "date-fns";

interface Project {
  id: number;
  name: string;
  client: string;
  status: string;
  startDate: string;
  completion: number;
}

interface ProjectTableProps {
  projects: Project[];
}

function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-green-500';
    case 'completed':
      return 'bg-blue-500';
    case 'on hold':
      return 'bg-yellow-500';
    case 'planning':
      return 'bg-purple-500';
    default:
      return 'bg-gray-500';
  }
}

export function ProjectTable({ projects }: ProjectTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Progress</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{project.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Started {format(new Date(project.startDate), 'MMM d, yyyy')}
                  </div>
                </div>
              </TableCell>
              <TableCell>{project.client}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${getStatusColor(project.status)}`} />
                  {project.status}
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-2">
                  <Progress value={project.completion} />
                  <div className="text-sm text-muted-foreground">
                    {project.completion}% complete
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}