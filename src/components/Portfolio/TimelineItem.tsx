import { Calendar } from "lucide-react";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements?: string[];
  isLast?: boolean;
}

export function TimelineItem({ title, organization, period, description, achievements, isLast }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 pb-8">
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-portfolio-sm"></div>
        {!isLast && <div className="w-0.5 bg-border flex-1 mt-2"></div>}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-4">
        <div className="bg-gradient-card border border-border rounded-xl p-6 shadow-portfolio-sm hover:shadow-portfolio-md transition-all duration-300">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-display font-semibold text-lg text-foreground">{title}</h3>
              <p className="text-primary font-medium">{organization}</p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              {period}
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4">
            {description}
          </p>
          
          {achievements && achievements.length > 0 && (
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}