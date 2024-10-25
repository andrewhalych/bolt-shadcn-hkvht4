import { HomeIcon } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import { EmployeeTable } from '@/components/employees/employee-table';
import { EmployeeFilters } from '@/components/employees/employee-filters';

const employees = [
  {
    id: 1,
    name: 'Sarah Wilson',
    department: 'Marketing',
    schedule: [
      {
        project: 'Summer Campaign',
        startDate: '2024-08-18',
        endDate: '2024-09-15',
        color: 'bg-blue-500',
      },
      {
        project: 'Brand Refresh',
        startDate: '2024-08-20',
        endDate: '2024-09-30',
        color: 'bg-green-500',
      },
    ],
  },
  {
    id: 2,
    name: 'Michael Chen',
    department: 'Engineering',
    schedule: [
      {
        project: 'Product Launch',
        startDate: '2024-09-01',
        endDate: '2024-09-21',
        color: 'bg-purple-500',
      },
      {
        project: 'Platform Migration',
        startDate: '2024-09-10',
        endDate: '2024-10-30',
        color: 'bg-orange-500',
      },
    ],
  },
  {
    id: 3,
    name: 'Emily Brown',
    department: 'Creative',
    schedule: [
      {
        project: 'Client Pitch',
        startDate: '2024-08-01',
        endDate: '2024-09-28',
        color: 'bg-yellow-500',
      },
      {
        project: 'Brand Refresh',
        startDate: '2024-08-25',
        endDate: '2024-09-25',
        color: 'bg-green-500',
      },
    ],
  },
];

export function EmployeesPage() {
  return (
    <div className="space-y-8">
      <div className="border-b">
        <div className="flex items-center justify-between py-4">
          <Breadcrumb separator="/">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-2">
                  <HomeIcon className="h-4 w-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>
                <BreadcrumbLink>Employees</BreadcrumbLink>
              </BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="space-y-4">
        <EmployeeFilters />
        <EmployeeTable employees={employees} />
      </div>
    </div>
  );
}
