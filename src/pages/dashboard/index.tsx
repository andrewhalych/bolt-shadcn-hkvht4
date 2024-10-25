import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { HomeIcon } from 'lucide-react';
import { DashboardOverview } from './overview';
import { DashboardDepartments } from './departments';
import { DashboardProjects } from './projects';
import { DashboardPeople } from './people';

export function DashboardPage() {
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
                <BreadcrumbLink>Dashboard</BreadcrumbLink>
              </BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div>
        <Tabs defaultValue="overall" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overall">Overall</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
          </TabsList>
          <TabsContent value="overall" className="space-y-6">
            <DashboardOverview />
          </TabsContent>
          <TabsContent value="departments" className="space-y-6">
            <DashboardDepartments />
          </TabsContent>
          <TabsContent value="projects" className="space-y-6">
            <DashboardProjects />
          </TabsContent>
          <TabsContent value="people" className="space-y-6">
            <DashboardPeople />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
