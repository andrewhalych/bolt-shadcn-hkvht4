import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectStatusCardProps {
  status: string;
  count: number;
  color: string;
  total: number;
}

export function ProjectStatusCard({ status, count, color, total }: ProjectStatusCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">{status} Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold" style={{ color }}>{count}</div>
        <div className="mt-4 h-2 w-full rounded-full bg-secondary">
          <div
            className="h-2 rounded-full"
            style={{
              width: `${(count / total) * 100}%`,
              backgroundColor: color,
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}