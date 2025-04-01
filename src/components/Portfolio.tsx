
import React from 'react';
import { Eye, Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web-dev' | 'ui-design' | 'photography';
  tech?: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

const Portfolio = () => {
  const projects: Project[] = [
    // Web Development Projects
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "web-dev",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A clean and intuitive task management application with drag-and-drop capabilities.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "web-dev",
      tech: ["React", "TypeScript", "Redux", "Firebase"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data.",
      image: "https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "web-dev",
      tech: ["JavaScript", "Weather API", "CSS3", "HTML5"],
      links: {
        github: "#",
        live: "#"
      }
    },
    
    // UI Design Projects
    {
      id: 4,
      title: "Finance App Redesign",
      description: "A modern redesign of a banking application focusing on user experience and accessibility.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "ui-design",
      tech: ["Figma", "Design System", "Prototyping"],
      links: {
        live: "#"
      }
    },
    {
      id: 5,
      title: "Health Tracking Dashboard",
      description: "A user interface for a health tracking application with data visualization.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "ui-design",
      tech: ["Adobe XD", "Illustrator", "UI Components"],
      links: {
        live: "#"
      }
    },
    {
      id: 6,
      title: "Travel App UI Kit",
      description: "A comprehensive UI kit for travel applications with over 100 components.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "ui-design",
      tech: ["Sketch", "UI Kit", "Responsive Design"],
      links: {
        live: "#"
      }
    },
    
    // Photography Projects
    {
      id: 7,
      title: "Urban Landscapes",
      description: "A collection of urban landscape photographs highlighting city architecture.",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "photography"
    },
    {
      id: 8,
      title: "Portrait Series",
      description: "A series of environmental portraits capturing individuals in their natural settings.",
      image: "https://images.unsplash.com/photo-1551772610-7d0748c01d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "photography"
    },
    {
      id: 9,
      title: "Minimalist Products",
      description: "Product photography with a minimalist aesthetic for a lifestyle brand.",
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "photography"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">My Portfolio</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Explore my work across web development, UI design, and photography. Each project reflects my passion for creating beautiful, functional, and meaningful experiences.
        </p>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-10">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web-dev" id="web-dev">Web Development</TabsTrigger>
            <TabsTrigger value="ui-design" id="ui-design">UI Design</TabsTrigger>
            <TabsTrigger value="photography" id="photography">Photography</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web-dev">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === 'web-dev')
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ui-design">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === 'ui-design')
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="photography">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === 'photography')
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {project.links?.github && (
            <a href={project.links.github} className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
              <Github size={20} />
            </a>
          )}
          {project.links?.live && (
            <a href={project.links.live} className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
          {project.category === 'photography' && (
            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
              <Eye size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        {project.tech && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((tech) => (
              <span key={tech} className="bg-secondary text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
