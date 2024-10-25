import { Video, Camera, Megaphone } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";

const projectTypes = [
  {
    id: "movie",
    icon: Video,
    title: "Movie Production",
    description: "Full-scale movie production including pre-production, filming, and post-production phases.",
  },
  {
    id: "photo",
    icon: Camera,
    title: "Photo Shoot",
    description: "Professional photography sessions for advertising, editorial, or commercial purposes.",
  },
  {
    id: "ad",
    icon: Megaphone,
    title: "Ad Campaign",
    description: "Comprehensive advertising campaigns across multiple media channels.",
  },
];

interface ProjectTypeStepProps {
  form: UseFormReturn<any>;
}

export function ProjectTypeStep({ form }: ProjectTypeStepProps) {
  return (
    <FormField
      control={form.control}
      name="type"
      render={({ field }) => (
        <FormItem className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {projectTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card
                  key={type.id}
                  className={cn(
                    "cursor-pointer transition-colors hover:bg-muted",
                    field.value === type.id && "border-primary"
                  )}
                  onClick={() => field.onChange(type.id)}
                >
                  <CardHeader>
                    <Icon className="h-8 w-8 mb-2" />
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}