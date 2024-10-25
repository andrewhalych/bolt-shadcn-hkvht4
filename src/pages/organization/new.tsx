import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon, Building2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  basicInfo: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    type: z.string().min(1, "Please select a type"),
    description: z.string().min(10, "Description must be at least 10 characters"),
  }),
  details: z.object({
    founded: z.string().min(4, "Please enter a valid year"),
    headquarters: z.string().min(2, "Please enter headquarters location"),
    employees: z.string().min(1, "Please enter number of employees"),
    revenue: z.string().min(1, "Please enter revenue"),
  }),
  management: z.object({
    manager: z.string().min(2, "Please enter manager name"),
    departments: z.string().min(1, "Please enter number of departments"),
  }),
});

const steps = [
  {
    id: "basic-info",
    name: "Basic Information",
    fields: ["name", "type", "description"],
  },
  {
    id: "details",
    name: "Company Details",
    fields: ["founded", "headquarters", "employees", "revenue"],
  },
  {
    id: "management",
    name: "Management",
    fields: ["manager", "departments"],
  },
];

export function NewOrganizationPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      basicInfo: {
        name: "",
        type: "",
        description: "",
      },
      details: {
        founded: "",
        headquarters: "",
        employees: "",
        revenue: "",
      },
      management: {
        manager: "",
        departments: "",
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would be an API call
    console.log(values);
    navigate("/organization");
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
              <BreadcrumbLink href="/organization">Organization</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>New Company</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            {steps[currentStep].name}
          </CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              {currentStep === 0 && (
                <>
                  <FormField
                    control={form.control}
                    name="basicInfo.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="basicInfo.type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select company type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="department">Department</SelectItem>
                            <SelectItem value="division">Division</SelectItem>
                            <SelectItem value="project-team">Project Team</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="basicInfo.description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter company description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {currentStep === 1 && (
                <>
                  <FormField
                    control={form.control}
                    name="details.founded"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Founded Year</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter founded year" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="details.headquarters"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Headquarters</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter headquarters location" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="details.employees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Employees</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter number of employees" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="details.revenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Revenue</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter annual revenue" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {currentStep === 2 && (
                <>
                  <FormField
                    control={form.control}
                    name="management.manager"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Manager Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter manager name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="management.departments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Departments</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter number of departments" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              <Button
                type={currentStep === steps.length - 1 ? "submit" : "button"}
                onClick={() => {
                  if (currentStep < steps.length - 1) {
                    setCurrentStep((prev) => prev + 1);
                  }
                }}
              >
                {currentStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}