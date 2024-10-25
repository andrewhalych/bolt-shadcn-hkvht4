import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Organization {
  id: number;
  name: string;
  type: string;
  employees: number;
  manager: string;
  status: string;
}

interface OrganizationTableProps {
  organizations: Organization[];
}

export function OrganizationTable({ organizations }: OrganizationTableProps) {
  const navigate = useNavigate();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Employees</TableHead>
            <TableHead>Manager</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {organizations.map((org) => (
            <TableRow 
              key={org.id}
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => navigate(`/organization/info/${org.id}`)}
            >
              <TableCell className="font-medium">{org.name}</TableCell>
              <TableCell>{org.type}</TableCell>
              <TableCell>{org.employees}</TableCell>
              <TableCell>{org.manager}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                  {org.status}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}