import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  description?: string;
}

export function ContactCard({ icon: Icon, label, value, href, description }: ContactCardProps) {
  return (
    <div className="group bg-gradient-card border border-border rounded-xl p-6 shadow-portfolio-sm hover:shadow-portfolio-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">{label}</h3>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4">{value}</p>
      
      <Button variant="outline" size="sm" asChild className="w-full">
        <a href={href} target="_blank" rel="noopener noreferrer">
          Connect
        </a>
      </Button>
    </div>
  );
}