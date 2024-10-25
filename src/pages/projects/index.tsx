import { HomeIcon } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ProjectsTable } from '@/components/projects/projects-table';
import { ProjectFilters } from '@/components/projects/project-filters';

const projects = [
  {
    id: 1,
    name: 'Summer Campaign 2024',
    customer: 'Nike',
    producer: 'Sarah Wilson',
    releaseDate: '2024-06-15',
    stage: 'Creative Recco',
  },
  {
    id: 2,
    name: 'Product Launch Video',
    customer: 'Apple',
    producer: 'Michael Chen',
    releaseDate: '2024-05-01',
    stage: 'Pre-Shoot',
  },
  {
    id: 3,
    name: 'Brand Refresh',
    customer: 'Spotify',
    producer: 'Emily Brown',
    releaseDate: '2024-07-30',
    stage: 'Bidding',
  },
  {
    id: 4,
    name: 'Annual Report',
    customer: 'Microsoft',
    producer: 'James Wilson',
    releaseDate: '2024-04-10',
    stage: 'Shooting',
  },
  {
    id: 5,
    name: 'Holiday Special',
    customer: 'Amazon',
    producer: 'Lisa Kumar',
    releaseDate: '2024-12-01',
    stage: 'Creative Recco',
  },
  {
    id: 6,
    name: 'Store Opening',
    customer: 'Tesla',
    producer: 'David Miller',
    releaseDate: '2024-08-15',
    stage: 'Closing',
  },
];

export function ProjectsPage() {
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
                <BreadcrumbLink>Projects</BreadcrumbLink>
              </BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="space-y-4">
        <ProjectFilters />
        <ProjectsTable projects={projects} />
      </div>
    </div>
  );
}
