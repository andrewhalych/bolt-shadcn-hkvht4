import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const stages = [
  "Bidding",
  "Creative Recco",
  "Pre-Shoot",
  "Shooting",
  "Closing"
];

export function ProjectFilters() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4 flex-1">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-8"
          />
        </div>
        <Select defaultValue="all-stages">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Stages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-stages">All Stages</SelectItem>
            {stages.map((stage) => (
              <SelectItem key={stage} value={stage.toLowerCase()}>
                {stage}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="all-customers">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Customers" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-customers">All Customers</SelectItem>
            <SelectItem value="nike">Nike</SelectItem>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="spotify">Spotify</SelectItem>
            <SelectItem value="microsoft">Microsoft</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={() => navigate("/projects/new")}>New Project</Button>
    </div>
  );
}