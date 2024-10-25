import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon, Video, Camera, Megaphone, Check } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { ProjectTypeStep } from "@/components/projects/new/project-type-step";
import { ProjectDetailsStep } from "@/components/projects/new/project-details-step";
import { ProjectStagesStep } from "@/components/projects/new/project-stages-step";
import { ProjectReviewStep } from "@/components/projects/new/project-review-step";

const formSchema = z.object({
  type: z.enum(["movie", "photo", "ad"]),
  producer: z.string().min(1, "Producer is required"),
  startDate: z.date({ required_error: "Start date is required" }),
  endDate: z.date({ required_error: "End date is required" }),
  stages: z.array(z.string()).min(1, "At least one stage must be selected"),
});

const steps = [
  { id: "type", name: "Project Type" },
  { id: "details", name: "Project Details" },
  { id: "stages", name: "Project Stages" },
  { id: "review", name: "Review" },
];

export function NewProjectPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stages: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(values);
    setIsSubmitting(false);
    navigate("/projects");
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
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>New Project</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>

      <div className="mx-auto max-w-3xl">
        {/* Progress Steps */}
        <nav aria-label="Progress" className="mb-8">
          <ol role="list" className="flex items-center">
            {steps.map((step, index) => (
              <li
                key={step.id}
                className={cn(
                  "flex items-center",
                  index !== steps.length - 1 && "w-full"
                )}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full border-2",
                      currentStep > index
                        ? "border-primary bg-primary text-primary-foreground"
                        : currentStep === index
                        ? "border-primary"
                        : "border-muted"
                    )}
                  >
                    {currentStep > index ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span className="text-sm font-medium mt-2">{step.name}</span>
                </div>
                {index !== steps.length - 1 && (
                  <div
                    className={cn(
                      "h-0.5 w-full bg-muted",
                      currentStep > index && "bg-primary"
                    )}
                  />
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card>
              <CardContent className="p-6">
                {currentStep === 0 && <ProjectTypeStep form={form} />}
                {currentStep === 1 && <ProjectDetailsStep form={form} />}
                {currentStep === 2 && <ProjectStagesStep form={form} />}
                {currentStep === 3 && <ProjectReviewStep form={form} />}
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
                {currentStep === steps.length - 1 ? (
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create Project"}
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                  >
                    Next
                  </Button>
                )}
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
}