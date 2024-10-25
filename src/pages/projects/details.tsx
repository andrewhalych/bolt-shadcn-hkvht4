import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  HomeIcon,
  CalendarIcon,
  Users2,
  ClockIcon,
  CheckCircle2Icon,
  LayoutList,
  GanttChartSquare,
} from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

// Mock data - in a real app, this would come from an API
const projectsData = {
  1: {
    name: 'Summer Campaign 2024',
    customer: 'Nike',
    producer: 'Sarah Wilson',
    releaseDate: '2024-06-15',
    stage: 'Creative Recco',
    budget: '$250,000',
    team: [
      { name: 'Sarah Wilson', role: 'Producer' },
      { name: 'John Davis', role: 'Creative Director' },
      { name: 'Emma Thompson', role: 'Art Director' },
    ],
    timeline: [
      { date: '2024-03-01', milestone: 'Project Start' },
      { date: '2024-04-15', milestone: 'Creative Approval' },
      { date: '2024-05-20', milestone: 'Production' },
      { date: '2024-06-15', milestone: 'Launch' },
    ],
    description:
      'Major summer campaign focusing on new product line launch with multiple video and photo deliverables.',
  },
  2: {
    name: 'Product Launch Video',
    customer: 'Apple',
    producer: 'Michael Chen',
    releaseDate: '2024-05-01',
    stage: 'Pre-Shoot',
    budget: '$180,000',
    team: [
      { name: 'Michael Chen', role: 'Producer' },
      { name: 'Lisa Kumar', role: 'Director' },
      { name: 'James Wilson', role: 'DOP' },
    ],
    timeline: [
      { date: '2024-02-15', milestone: 'Project Start' },
      { date: '2024-03-20', milestone: 'Script Approval' },
      { date: '2024-04-10', milestone: 'Production' },
      { date: '2024-05-01', milestone: 'Launch' },
    ],
    description:
      'High-end product launch video for the next generation device, featuring innovative filming techniques and CGI integration.',
  },
};

function getStageColor(stage: string) {
  switch (stage) {
    case 'Bidding':
      return 'bg-blue-500/15 text-blue-500 hover:bg-blue-500/25';
    case 'Creative Recco':
      return 'bg-purple-500/15 text-purple-500 hover:bg-purple-500/25';
    case 'Pre-Shoot':
      return 'bg-yellow-500/15 text-yellow-500 hover:bg-yellow-500/25';
    case 'Shooting':
      return 'bg-green-500/15 text-green-500 hover:bg-green-500/25';
    case 'Closing':
      return 'bg-gray-500/15 text-gray-500 hover:bg-gray-500/25';
    default:
      return 'bg-gray-500/15 text-gray-500 hover:bg-gray-500/25';
  }
}

export function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectInfo = projectsData[id as keyof typeof projectsData];

  if (!projectInfo) {
    return <div>Project not found</div>;
  }

  return (
    <div className="space-y-8">
      <div className="border-b">
        <div className="flex items-center justify-between pb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-2">
                  <HomeIcon className="h-4 w-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={`/projects`}>Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{projectInfo.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => navigate(`/projects/${id}/stages`)}
            >
              <LayoutList className="h-4 w-4" />
              Stages
            </Button>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => navigate(`/projects/${id}/timeline`)}
            >
              <GanttChartSquare className="h-4 w-4" />
              Timeline
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{projectInfo.name}</CardTitle>
              <Badge
                variant="secondary"
                className={getStageColor(projectInfo.stage)}
              >
                {projectInfo.stage}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <div className="text-sm font-medium text-muted-foreground">
                  Description
                </div>
                <p className="text-sm">{projectInfo.description}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Users2 className="h-4 w-4" />
                    Customer
                  </div>
                  <div className="text-sm font-medium">
                    {projectInfo.customer}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    Release Date
                  </div>
                  <div className="text-sm font-medium">
                    {format(new Date(projectInfo.releaseDate), 'MMM d, yyyy')}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Users2 className="h-4 w-4" />
                    Producer
                  </div>
                  <div className="text-sm font-medium">
                    {projectInfo.producer}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <ClockIcon className="h-4 w-4" />
                    Budget
                  </div>
                  <div className="text-sm font-medium">
                    {projectInfo.budget}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users2 className="h-5 w-5" />
                Team Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectInfo.team.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {member.role}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2Icon className="h-5 w-5" />
                Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectInfo.timeline.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="font-medium">{milestone.milestone}</div>
                    <div className="text-sm text-muted-foreground">
                      {format(new Date(milestone.date), 'MMM d, yyyy')}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
