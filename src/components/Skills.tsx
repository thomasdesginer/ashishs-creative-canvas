
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: 'development' | 'design' | 'photography';
}

const Skills = () => {
  const skills: Skill[] = [
    // Development
    { name: 'React', level: 90, category: 'development' },
    { name: 'JavaScript', level: 92, category: 'development' },
    { name: 'TypeScript', level: 85, category: 'development' },
    { name: 'Node.js', level: 80, category: 'development' },
    { name: 'HTML/CSS', level: 95, category: 'development' },
    { name: 'Next.js', level: 83, category: 'development' },
    
    // Design
    { name: 'Figma', level: 88, category: 'design' },
    { name: 'UI/UX', level: 87, category: 'design' },
    { name: 'Adobe XD', level: 80, category: 'design' },
    { name: 'Sketch', level: 75, category: 'design' },
    { name: 'Design Systems', level: 85, category: 'design' },
    { name: 'Prototyping', level: 82, category: 'design' },
    
    // Photography
    { name: 'Composition', level: 90, category: 'photography' },
    { name: 'Lightroom', level: 85, category: 'photography' },
    { name: 'Photoshop', level: 78, category: 'photography' },
    { name: 'Portrait', level: 85, category: 'photography' },
    { name: 'Landscape', level: 92, category: 'photography' },
    { name: 'Product', level: 80, category: 'photography' },
  ];

  const categories = [
    { id: 'development', name: 'Web Development' },
    { id: 'design', name: 'UI Design' },
    { id: 'photography', name: 'Photography' },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">My Skills</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          I've honed a diverse set of skills across web development, UI design, and photography,
          allowing me to bring a unique perspective to every project.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold font-serif mb-6 text-center">{category.name}</h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
