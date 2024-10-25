import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardProjects() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Project statistics will be displayed here</p>
      </CardContent>
    </Card>
  );
}