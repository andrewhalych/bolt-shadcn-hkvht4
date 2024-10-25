import { BarChart } from "@/components/charts/bar-chart";
import { LineChart } from "@/components/charts/line-chart";
import { ProjectStatus } from "@/components/charts/project-status";

const projectActivity = [
  { name: "Week 1", value: 12 },
  { name: "Week 2", value: 15 },
  { name: "Week 3", value: 18 },
  { name: "Week 4", value: 14 },
  { name: "Week 5", value: 16 },
  { name: "Week 6", value: 19 },
  { name: "Week 7", value: 21 },
  { name: "Week 8", value: 17 },
];

const employeeGrowth = [
  { name: "Week 1", value: 150 },
  { name: "Week 2", value: 152 },
  { name: "Week 3", value: 155 },
  { name: "Week 4", value: 158 },
  { name: "Week 5", value: 162 },
  { name: "Week 6", value: 165 },
  { name: "Week 7", value: 168 },
  { name: "Week 8", value: 172 },
  { name: "Week 9", value: 175 },
  { name: "Week 10", value: 178 },
  { name: "Week 11", value: 182 },
  { name: "Week 12", value: 185 },
];

const projectStatus = {
  active: 24,
  bidding: 12,
  lost: 8,
};

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      <BarChart title="Project Activity" data={projectActivity} />
      <ProjectStatus title="Active Projects" data={projectStatus} />
      <LineChart title="Employee Growth" data={employeeGrowth} />
    </div>
  );
}