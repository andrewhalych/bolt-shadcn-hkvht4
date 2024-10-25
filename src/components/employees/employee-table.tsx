import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { EmployeeTimeline } from './employee-timeline';

interface EmployeeSchedule {
  project: string;
  startDate: string;
  endDate: string;
  color: string;
}

interface Employee {
  id: number;
  name: string;
  department: string;
  schedule: EmployeeSchedule[];
}

interface EmployeeTableProps {
  employees: Employee[];
}

export function EmployeeTable({ employees }: EmployeeTableProps) {
  const navigate = useNavigate();

  const handleRowClick = (employeeId: number) => {
    navigate(`/employees/${employeeId}`);
  };

  return (
    <div className="rounded-md border">
      <div className="grid grid-cols-[200px_200px_1fr]">
        {/* Fixed Header Columns */}
        <div className="bg-background border-r">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow
                  key={employee.id}
                  className="cursor-pointer hover:bg-muted/50 h-[69px]"
                  onClick={() => handleRowClick(employee.id)}
                >
                  <TableCell className="font-medium">{employee.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="bg-background border-r">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow
                  key={employee.id}
                  className="cursor-pointer hover:bg-muted/50 h-[69px]"
                  onClick={() => handleRowClick(employee.id)}
                >
                  <TableCell className="h-[40px]">
                    {employee.department}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Scrollable Schedule Column */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[500px] min-w-[500px]">
                  Schedule
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow
                  key={employee.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => handleRowClick(employee.id)}
                >
                  <TableCell>
                    <EmployeeTimeline schedule={employee.schedule} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
