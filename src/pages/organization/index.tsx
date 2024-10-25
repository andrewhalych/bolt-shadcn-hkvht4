import { HomeIcon } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { OrganizationTable } from '@/components/organization/organization-table';
import { OrganizationFilters } from '@/components/organization/organization-filters';

const organizations = [
  {
    id: 1,
    name: 'Marketing',
    type: 'Department',
    employees: 45,
    manager: 'Sarah Wilson',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Engineering',
    type: 'Department',
    employees: 78,
    manager: 'Michael Chen',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Project X',
    type: 'Project Team',
    employees: 12,
    manager: 'Emily Brown',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Sales',
    type: 'Department',
    employees: 34,
    manager: 'David Miller',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Innovation Lab',
    type: 'Division',
    employees: 23,
    manager: 'Alex Johnson',
    status: 'Active',
  },
];

export function OrganizationPage() {
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
              <BreadcrumbPage>
                <BreadcrumbLink>Organization</BreadcrumbLink>
              </BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="space-y-4">
        <OrganizationFilters />
        <OrganizationTable organizations={organizations} />
      </div>
    </div>
  );
}
