import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function EmployeeFilters() {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search employees..."
          className="pl-8"
        />
      </div>
      <Select defaultValue="all-companies">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Companies" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-companies">All Companies</SelectItem>
          <SelectItem value="acme-corp">Acme Corp</SelectItem>
          <SelectItem value="globex">Globex</SelectItem>
          <SelectItem value="initech">Initech</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-projects">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Projects" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-projects">All Projects</SelectItem>
          <SelectItem value="summer-campaign">Summer Campaign</SelectItem>
          <SelectItem value="product-launch">Product Launch</SelectItem>
          <SelectItem value="brand-refresh">Brand Refresh</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-departments">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Departments" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-departments">All Departments</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
          <SelectItem value="engineering">Engineering</SelectItem>
          <SelectItem value="creative">Creative</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}