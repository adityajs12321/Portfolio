import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SkillCard } from "@/components/Portfolio/SkillCard";
import ProjectCard from "@/components/Portfolio/ProjectCard";
import { TimelineItem } from "@/components/Portfolio/TimelineItem";
import { ContactCard } from "@/components/Portfolio/ContactCard";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  Award,
  Code,
  Palette,
  Database,
  Globe,
  BookOpen,
  Users,
  Heart,
  ExternalLink
} from "lucide-react";

const Portfolio = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-display font-bold text-xl text-foreground">Aditya Jamuna Sunil</h1>
            <div className="hidden md:flex items-center gap-6">
              {['About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-4xl text-primary-foreground font-display font-bold">
            AJ
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            Aditya Jamuna Sunil
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up">
            ML Engineer & Data Science Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up">
            Passionate about machine learning and data science with a focus on creating intelligent 
            solutions that solve real-world problems. Currently pursuing AI/DS B.Tech at IIIT Sri City.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-up">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary hover:shadow-portfolio-glow transition-all duration-300"
            >
              Get In Touch
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm a passionate ML engineer with a strong interest in data science and artificial intelligence. 
                  Currently pursuing my AI/DS B.Tech degree at IIIT Sri City, I love working on projects that 
                  combine machine learning with practical applications to solve complex problems.
                </p>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  My expertise spans across Python, TensorFlow, PyTorch, and various data science tools. 
                  I enjoy exploring new ML algorithms, building intelligent systems, and contributing to 
                  projects that have real-world impact. Always eager to learn and apply cutting-edge AI technologies.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gradient-primary text-primary-foreground">ML Engineer</Badge>
                  <Badge className="bg-gradient-secondary text-secondary-foreground">Data Scientist</Badge>
                  <Badge className="bg-accent text-accent-foreground">AI Enthusiast</Badge>
                  <Badge className="bg-muted text-muted-foreground">Problem Solver</Badge>
                </div>
              </div>
              
              <div className="bg-gradient-card border border-border rounded-xl p-8 shadow-portfolio-md">
                <h3 className="font-display font-semibold text-xl text-foreground mb-6"></h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">IIIT Sri City, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">AI/DS B.Tech Student</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">ML & Data Science</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Video Editing Team Member</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Education
            </h2>
            
            <div className="space-y-8">
              <TimelineItem
                title="B.Tech in Artificial Intelligence & Data Science"
                organization="IIIT Sri City"
                period="2022 - Present"
                description="Pursuing comprehensive education in AI, machine learning, and data science with focus on practical applications."
                achievements={[
                  "CGPA: 8.0/10.0",
                  "Core member - Video Editing Team",
                  "Focus on ML algorithms and data analysis",
                  "Active in technical projects and research"
                ]}
              />
              
              <TimelineItem
                title="Class 12th - Higher Secondary Education"
                organization="Whitefield Global School, Bangalore"
                period="2010 - 2025"
                description="Completed higher secondary education with strong foundation in mathematics and science."
                achievements={[
                  "95% in Class 12th Boards",
                  "Strong foundation in Mathematics",
                  "Science stream with Computer Science",
                  "Active participant in academic competitions"
                ]}
                isLast
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Skills & Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard
                category="Machine Learning"
                skills={["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks", "Deep Learning"]}
                level="Advanced"
                icon="🤖"
              />
              
              <SkillCard
                category="Programming Languages"
                skills={["Python", "R", "JavaScript", "SQL", "C++"]}
                level="Advanced"
                icon="💻"
              />
              
              <SkillCard
                category="Data Science"
                skills={["Pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Analysis"]}
                level="Advanced"
                icon="📊"
              />
              
              <SkillCard
                category="Game Development"
                skills={["Unity", "Unreal Engine", "Game Design", "3D Modeling", "Animation"]}
                level="Intermediate"
                icon="🎮"
              />
              
              <SkillCard
                category="Web Development"
                skills={["FastAPI", "Flask", "React", "HTML/CSS", "RESTful APIs"]}
                level="Intermediate"
                icon="🌐"
              />
              
              <SkillCard
                category="Tools & Technologies"
                skills={["Git", "Docker", "MongoDB", "Elastic Search", "Blender"]}
                level="Intermediate"
                icon="🛠️"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Travel Agent"
                description="An intelligent travel planning system that looks up flights and hotels online and creates comprehensive travel plans for any destination using AI-powered recommendations."
                technologies={["FastAPI", "Python", "Amadeus API", "Gemini"]}
                category="Personal"
              />
              
              <ProjectCard
                title="QueryLog"
                description="Advanced log management system that returns relevant records from log files stored in MongoDB using Elasticsearch for fast querying and ETL processes."
                technologies={["MongoDB", "Elastic Search", "FastAPI", "Python", "ETL"]}
                category="Academic"
              />
              
              <ProjectCard
                title="NNAO - Neural Network Ambient Occlusion"
                description="Machine learning algorithm for approximating ambient occlusion in 3D scenes using depth and normal buffers, enhancing real-time rendering performance."
                technologies={["TensorFlow", "Python", "Blender", "Computer Graphics"]}
                category="Academic"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Extracurricular & Volunteering
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-card border border-border rounded-xl p-6 shadow-portfolio-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground">Core Team Member - Video Editing</h3>
                    <p className="text-primary">IIIT Sri City</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Jan - Apr 2025</span>
                </div>
                <p className="text-muted-foreground">
                  Active core member of the video editing team at IIIT Sri City, responsible for creating 
                  engaging visual content for college events, promotional materials, and student activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Let's Connect
            </h2>
            
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always interested in new opportunities, collaborations, and conversations. 
                Whether you have a project in mind or just want to chat about technology, feel free to reach out!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ContactCard
                icon={Mail}
                label="Email"
                value="adityajs12321@gmail.com"
                href="mailto:adityajs12321@gmail.com"
                description="Drop me a line"
              />
              
              <ContactCard
                icon={Phone}
                label="Phone"
                value="+91 6362643596"
                href="tel:+916362643596"
                description="Let's talk"
              />
              
              <ContactCard
                icon={Linkedin}
                label="LinkedIn"
                value="Connect with me"
                href="https://www.linkedin.com/in/aditya-jamuna-sunil-b2079b211/"
                description="Professional network"
              />
              
              <ContactCard
                icon={Github}
                label="GitHub"
                value="View my projects"
                href="https://github.com/adityajs12321"
                description="See my code"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              © 2024 Aditya Jamuna Sunil. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;