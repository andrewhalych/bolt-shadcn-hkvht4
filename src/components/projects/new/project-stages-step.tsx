import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stages = {
  "Pre-Production": [
    { id: "concept", label: "Concept Development" },
    { id: "script", label: "Script Writing" },
    { id: "storyboard", label: "Storyboarding" },
    { id: "casting", label: "Casting" },
    { id: "location", label: "Location Scouting" },
  ],
  "Production": [
    { id: "filming", label: "Principal Photography" },
    { id: "sound", label: "Sound Recording" },
    { id: "lighting", label: "Lighting Setup" },
    { id: "props", label: "Props and Set Design" },
  ],
  "Post-Production": [
    { id: "editing", label: "Video Editing" },
    { id: "vfx", label: "Visual Effects" },
    { id: "color", label: "Color Grading" },
    { id: "sound-mix", label: "Sound Mixing" },
    { id: "final", label: "Final Review" },
  ],
};

interface ProjectStagesStepProps {
  form: UseFormReturn<any>;
}

export function ProjectStagesStep({ form }: ProjectStagesStepProps) {
  return (
    <FormField
      control={form.control}
      name="stages"
      render={() => (
        <FormItem>
          <div className="space-y-4">
            {Object.entries(stages).map(([group, items]) => (
              <Card key={group}>
                <CardHeader>
                  <CardTitle className="text-lg">{group}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2">
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="stages"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value: string) => value !== item.id
                                      )
                                    );
                              }}
                            />
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </CardContent>
              </Card>
            ))}
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}