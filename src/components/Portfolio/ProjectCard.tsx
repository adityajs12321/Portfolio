import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "Work" | "Personal" | "Academic";
}

export default function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl, category }: ProjectCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Work": return "bg-gradient-primary text-primary-foreground";
      case "Personal": return "bg-gradient-secondary text-secondary-foreground";
      default: return "bg-accent text-accent-foreground";
    }
  };

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden shadow-portfolio-sm hover:shadow-portfolio-md transition-all duration-300 hover:-translate-y-1">
      {image && (
        <div className="aspect-video bg-muted overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display font-semibold text-xl text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <Badge className={getCategoryColor(category)}>
            {category}
          </Badge>
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          {liveUrl && (
            <Button variant="default" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}