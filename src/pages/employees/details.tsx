import { useParams } from "react-router-dom";
import { HomeIcon, Mail, Phone, Building2, Calendar, Briefcase, User2 } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { EmployeeSchedule } from "@/components/employees/employee-schedule";

// Mock data - in a real app, this would come from an API
const employeesData = {
  1: {
    name: "Sarah Wilson",
    email: "sarah.wilson@company.com",
    phone: "+1 (555) 123-4567",
    department: "Marketing",
    position: "Marketing Director",
    joinDate: "2020-03-15",
    location: "New York, NY",
    manager: "John Davis",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    tasks: [
      { 
        id: 1,
        name: "Summer Campaign Planning",
        project: "Summer Campaign 2024",
        startDate: "2024-01-01",
        endDate: "2024-02-15",
        status: "Completed"
      },
      { 
        id: 2,
        name: "Brand Guidelines Update",
        project: "Brand Refresh",
        startDate: "2024-02-20",
        endDate: "2024-03-30",
        status: "In Progress"
      },
      { 
        id: 3,
        name: "Q2 Strategy Development",
        project: "Q2 Planning",
        startDate: "2024-03-15",
        endDate: "2024-04-15",
        status: "Planned"
      }
    ],
    attribution: [
      { project: "Summer Campaign", role: "Project Lead", contribution: 45 },
      { project: "Brand Refresh", role: "Creative Director", contribution: 30 },
      { project: "Social Media Strategy", role: "Consultant", contribution: 25 },
    ],
  },
  2: {
    name: "Michael Chen",
    email: "michael.chen@company.com",
    phone: "+1 (555) 234-5678",
    department: "Engineering",
    position: "Senior Developer",
    joinDate: "2019-06-01",
    location: "San Francisco, CA",
    manager: "Lisa Kumar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    tasks: [
      { 
        id: 1,
        name: "System Architecture Design",
        project: "Platform Migration",
        startDate: "2024-01-15",
        endDate: "2024-02-28",
        status: "Completed"
      },
      { 
        id: 2,
        name: "Backend Development",
        project: "Product Launch",
        startDate: "2024-03-01",
        endDate: "2024-04-15",
        status: "In Progress"
      }
    ],
    attribution: [
      { project: "Product Launch", role: "Tech Lead", contribution: 60 },
      { project: "Platform Migration", role: "System Architect", contribution: 40 },
    ],
  },
};

export function EmployeeDetailsPage() {
  const { id } = useParams();
  const employee = employeesData[id as keyof typeof employeesData];

  if (!employee) {
    return <div>Employee not found</div>;
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
              <BreadcrumbLink href="/employees">Employees</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>{employee.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[350px_1fr]">
        {/* Left Column - Employee Info */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src={employee.avatar} alt={employee.name} />
                <AvatarFallback>
                  <User2 className="h-16 w-16" />
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{employee.name}</h2>
                <Badge variant="secondary" className="text-sm">
                  {employee.position}
                </Badge>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Department</span>
                  <span className="font-medium">{employee.department}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium">{employee.email}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Phone</span>
                  <span className="font-medium">{employee.phone}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">{employee.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <User2 className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Manager</span>
                  <span className="font-medium">{employee.manager}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Join Date</span>
                  <span className="font-medium">
                    {new Date(employee.joinDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Tabs */}
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="schedule" className="space-y-6">
              <TabsList>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="attribution">Attribution</TabsTrigger>
              </TabsList>
              <TabsContent value="schedule" className="space-y-4">
                <EmployeeSchedule tasks={employee.tasks} />
              </TabsContent>
              <TabsContent value="attribution" className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Project Attribution</h3>
                  <div className="space-y-4">
                    {employee.attribution.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{item.project}</div>
                            <div className="text-sm text-muted-foreground">{item.role}</div>
                          </div>
                          <Badge variant="secondary">{item.contribution}%</Badge>
                        </div>
                        <div className="h-2 bg-secondary rounded-full">
                          <div
                            className="h-2 bg-primary rounded-full"
                            style={{ width: `${item.contribution}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}