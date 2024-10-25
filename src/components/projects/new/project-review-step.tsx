import { UseFormReturn } from "react-hook-form";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projectTypes = {
  movie: "Movie Production",
  photo: "Photo Shoot",
  ad: "Ad Campaign",
};

const producers = {
  "1": "Sarah Wilson",
  "2": "Michael Chen",
  "3": "Emily Brown",
  "4": "David Miller",
  "5": "Lisa Kumar",
};

const stages = {
  concept: "Concept Development",
  script: "Script Writing",
  storyboard: "Storyboarding",
  casting: "Casting",
  location: "Location Scouting",
  filming: "Principal Photography",
  sound: "Sound Recording",
  lighting: "Lighting Setup",
  props: "Props and Set Design",
  editing: "Video Editing",
  vfx: "Visual Effects",
  color: "Color Grading",
  "sound-mix": "Sound Mixing",
  final: "Final Review",
};

interface ProjectReviewStepProps {
  form: UseFormReturn<any>;
}

export function ProjectReviewStep({ form }: ProjectReviewStepProps) {
  const values = form.getValues();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Type</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium">
            {projectTypes[values.type as keyof typeof projectTypes]}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Producer
            </div>
            <p className="text-lg font-medium">
              {producers[values.producer as keyof typeof producers]}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-sm font-medium text-muted-foreground">
                Start Date
              </div>
              <p className="text-lg font-medium">
                {format(values.startDate, "PPP")}
              </p>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">
                End Date
              </div>
              <p className="text-lg font-medium">{format(values.endDate, "PPP")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Selected Stages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {values.stages.map((stage: string) => (
              <Badge key={stage} variant="secondary">
                {stages[stage as keyof typeof stages]}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}