import { Link, useParams } from 'react-router-dom';
import { HomeIcon, Circle } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

const timelineData = {
  1: [
    {
      date: '2024-03-01',
      title: 'Project Kickoff',
      description:
        'Initial meeting with client to discuss project scope and objectives',
      status: 'completed',
    },
    {
      date: '2024-03-15',
      title: 'Creative Brief Approval',
      description: 'Client approved creative direction and project timeline',
      status: 'completed',
    },
    {
      date: '2024-04-15',
      title: 'Production Planning',
      description: 'Team assembled and production schedule finalized',
      status: 'in-progress',
    },
    {
      date: '2024-05-20',
      title: 'Content Creation',
      description: 'Main production phase with multiple shooting days',
      status: 'upcoming',
    },
    {
      date: '2024-06-15',
      title: 'Project Delivery',
      description: 'Final deliverables handover to client',
      status: 'upcoming',
    },
  ],
};

function getStatusColor(status: string) {
  switch (status) {
    case 'completed':
      return 'bg-green-500/15 text-green-500';
    case 'in-progress':
      return 'bg-blue-500/15 text-blue-500';
    case 'upcoming':
      return 'bg-gray-500/15 text-gray-500';
    default:
      return 'bg-gray-500/15 text-gray-500';
  }
}

export function ProjectTimelinePage() {
  const { id } = useParams();
  const timeline = timelineData[id as keyof typeof timelineData] || [];

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
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={`/projects/${id}`}>Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={`/projects/${id}`}>Project Details</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Timeline</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-8">
            <div className="absolute top-0 bottom-0 left-[21px] border-l-2 border-muted" />
            {timeline.map((event, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-muted">
                  <Circle className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-semibold">{event.title}</div>
                    <Badge
                      variant="secondary"
                      className={getStatusColor(event.status)}
                    >
                      {event.status.charAt(0).toUpperCase() +
                        event.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {format(new Date(event.date), 'MMM d, yyyy')}
                  </div>
                  <p className="text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
