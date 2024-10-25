import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardPeople() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>People Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Employee statistics will be displayed here</p>
      </CardContent>
    </Card>
  );
}