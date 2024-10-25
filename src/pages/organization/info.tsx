import { useParams } from "react-router-dom";
import { HomeIcon, Building2, Users2, FolderKanban } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmployeeTable } from "@/components/organization/employee-table";
import { ProjectTable } from "@/components/organization/project-table";

// Mock data - in a real app, this would come from an API
const organizationsData = {
  1: {
    name: "Marketing",
    founded: "2010",
    headquarters: "New York, NY",
    employees: 45,
    departments: 3,
    revenue: "$12M",
    description: "Leading marketing department focused on digital campaigns and brand development.",
    keyEmployees: [
      { id: 1, name: "Sarah Wilson", role: "Head of Marketing", department: "Marketing", joinDate: "2019-06-22" },
      { id: 2, name: "John Davis", role: "Creative Director", department: "Marketing", joinDate: "2020-03-15" },
      { id: 3, name: "Emma Thompson", role: "Digital Marketing Lead", department: "Marketing", joinDate: "2021-01-10" }
    ],
    projects: [
      { id: 1, name: "Brand Refresh", client: "Internal", status: "Active", startDate: "2024-01-15", completion: 75 },
      { id: 2, name: "Q1 Campaign", client: "Various", status: "Completed", startDate: "2024-01-01", completion: 100 }
    ]
  },
  2: {
    name: "Engineering",
    founded: "2008",
    headquarters: "San Francisco, CA",
    employees: 78,
    departments: 5,
    revenue: "$28M",
    description: "Core engineering division responsible for product development and technical innovation.",
    keyEmployees: [
      { id: 1, name: "Michael Chen", role: "CTO", department: "Engineering", joinDate: "2019-08-10" },
      { id: 2, name: "Lisa Kumar", role: "Lead Architect", department: "Engineering", joinDate: "2020-02-15" },
      { id: 3, name: "James Wilson", role: "DevOps Lead", department: "Engineering", joinDate: "2021-03-22" }
    ],
    projects: [
      { id: 1, name: "Platform Migration", client: "Internal", status: "Active", startDate: "2024-02-01", completion: 45 },
      { id: 2, name: "Mobile App v2", client: "Various", status: "Planning", startDate: "2024-03-15", completion: 10 }
    ]
  }
};

export function OrganizationInfoPage() {
  const { id } = useParams();
  const organizationInfo = organizationsData[id as keyof typeof organizationsData];

  if (!organizationInfo) {
    return <div>Organization not found</div>;
  }

  return (
    <div className="space-y-8">
      <div className="border-b">
        <div className="flex items-center justify-between py-4">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-2">
                <HomeIcon className="h-4 w-4" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/organization">
                Organization
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>
                {organizationInfo.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Company Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Founded</div>
              <div className="text-lg font-semibold">{organizationInfo.founded}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Headquarters</div>
              <div className="text-lg font-semibold">{organizationInfo.headquarters}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Revenue</div>
              <div className="text-lg font-semibold">{organizationInfo.revenue}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Employees</div>
              <div className="text-lg font-semibold">{organizationInfo.employees}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Departments</div>
              <div className="text-lg font-semibold">{organizationInfo.departments}</div>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-sm font-medium text-muted-foreground">About</div>
            <p className="mt-2 text-sm">{organizationInfo.description}</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users2 className="h-5 w-5" />
              Key Personnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <EmployeeTable employees={organizationInfo.keyEmployees} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderKanban className="h-5 w-5" />
              Recent Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectTable projects={organizationInfo.projects} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}