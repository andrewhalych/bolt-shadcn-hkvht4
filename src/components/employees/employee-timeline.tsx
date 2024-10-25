import { useEffect, useRef } from 'react';
import {
  eachWeekOfInterval,
  format,
  isSameDay,
  isWithinInterval,
  subMonths,
} from 'date-fns';

interface TimelineProject {
  project: string;
  startDate: string;
  endDate: string;
  color: string;
}

interface EmployeeTimelineProps {
  schedule: TimelineProject[];
}

export function EmployeeTimeline({ schedule }: EmployeeTimelineProps) {
  const today = new Date();
  const startDate = subMonths(today, 2);
  const endDate = today;

  const days = eachWeekOfInterval({ start: startDate, end: endDate });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const todayElement = containerRef.current.querySelector(
        '[data-today="true"]'
      );
      if (todayElement) {
        todayElement.scrollIntoView({ block: 'nearest', inline: 'center' });
      }
    }
  }, []);

  const getProjectsForDay = (date: Date) => {
    return schedule.filter((project) =>
      isWithinInterval(date, {
        start: new Date(project.startDate),
        end: new Date(project.endDate),
      })
    );
  };

  return (
    <div className="relative w-full overflow-x-auto" ref={containerRef}>
      <div className="flex min-w-[800px]">
        {days.map((date, index) => {
          const isToday = isSameDay(date, today);
          const projects = getProjectsForDay(date);
          //const showDate = date.getDate() === 1 || index === 0;
          const showDate = true;

          return (
            <div
              key={date.toISOString()}
              data-today={isToday}
              className="flex flex-col items-center flex-1 min-w-[30px]"
            >
              {showDate && (
                <div className="text-xs text-muted-foreground mb-1">
                  {format(date, 'MMM d')}
                </div>
              )}
              <div
                className={`w-full h-8 border-r relative ${
                  isToday ? 'bg-accent' : ''
                }`}
              >
                {projects.map((project, projectIndex) => (
                  <div
                    key={project.project}
                    className={`absolute h-2 ${project.color} rounded-full`}
                    style={{
                      top: `${projectIndex * 10 + 4}px`,
                      left: 0,
                      right: 0,
                    }}
                    title={project.project}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
