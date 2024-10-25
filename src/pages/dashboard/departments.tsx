import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardDepartments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Department Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Department statistics will be displayed here</p>
      </CardContent>
    </Card>
  );
}