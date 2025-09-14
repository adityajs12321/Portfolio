import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  category: string;
  skills: string[];
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  icon?: string;
}

export function SkillCard({ category, skills, level, icon }: SkillCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-gradient-primary text-primary-foreground";
      case "Advanced": return "bg-gradient-secondary text-secondary-foreground";
      case "Intermediate": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="group relative bg-gradient-card border border-border rounded-xl p-6 shadow-portfolio-sm hover:shadow-portfolio-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground text-xl">
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground">{category}</h3>
          <Badge className={`mt-1 ${getLevelColor(level)}`}>
            {level}
          </Badge>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border hover:bg-muted-dark transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}