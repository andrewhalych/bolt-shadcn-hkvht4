import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface Project {
  id: number;
  name: string;
  customer: string;
  producer: string;
  releaseDate: string;
  stage: string;
}

interface ProjectsTableProps {
  projects: Project[];
}

function getStageColor(stage: string) {
  switch (stage) {
    case "Bidding":
      return "bg-blue-500/15 text-blue-500 hover:bg-blue-500/25";
    case "Creative Recco":
      return "bg-purple-500/15 text-purple-500 hover:bg-purple-500/25";
    case "Pre-Shoot":
      return "bg-yellow-500/15 text-yellow-500 hover:bg-yellow-500/25";
    case "Shooting":
      return "bg-green-500/15 text-green-500 hover:bg-green-500/25";
    case "Closing":
      return "bg-gray-500/15 text-gray-500 hover:bg-gray-500/25";
    default:
      return "bg-gray-500/15 text-gray-500 hover:bg-gray-500/25";
  }
}

export function ProjectsTable({ projects }: ProjectsTableProps) {
  const navigate = useNavigate();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project Name</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Producer</TableHead>
            <TableHead>Release Date</TableHead>
            <TableHead>Stage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow 
              key={project.id}
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>{project.customer}</TableCell>
              <TableCell>{project.producer}</TableCell>
              <TableCell>{format(new Date(project.releaseDate), 'MMM d, yyyy')}</TableCell>
              <TableCell>
                <Badge variant="secondary" className={getStageColor(project.stage)}>
                  {project.stage}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}