import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectStatusProps {
  title: string;
  data: {
    active: number;
    bidding: number;
    lost: number;
  };
}

export function ProjectStatus({ title, data }: ProjectStatusProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg border bg-card p-4">
            <div className="text-3xl font-bold">{data.active}</div>
            <div className="text-sm text-muted-foreground mt-1">Active</div>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <div className="text-3xl font-bold">{data.bidding}</div>
            <div className="text-sm text-muted-foreground mt-1">Bidding</div>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <div className="text-3xl font-bold">{data.lost}</div>
            <div className="text-sm text-muted-foreground mt-1">Lost</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}