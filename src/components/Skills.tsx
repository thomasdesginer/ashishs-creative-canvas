
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { FileCode, TerminalSquare, Aperture } from 'lucide-react';

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
    { id: 'development', name: 'Web Development', icon: <FileCode size={20} className="text-blue-400" /> },
    { id: 'design', name: 'UI Design', icon: <TerminalSquare size={20} className="text-purple-400" /> },
    { id: 'photography', name: 'Photography', icon: <Aperture size={20} className="text-green-400" /> },
  ];

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      {/* Matrix rain animated background */}
      <div className="absolute inset-0 matrix-rain"></div>
      <div className="absolute inset-0 code-particles"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="terminal-box mb-12 w-fit mx-auto backdrop-blur-xl bg-black/30 border border-white/10">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red"></div>
            <div className="terminal-dot terminal-dot-yellow"></div>
            <div className="terminal-dot terminal-dot-green"></div>
            <span className="ml-2 text-xs text-gray-400">skills.js</span>
          </div>
          <div className="code-line">
            <span className="text-purple-400">function</span> <span className="text-yellow-300">displaySkills</span><span className="text-white">()</span> <span className="text-purple-400">{`{`}</span>
          </div>
          <div className="ml-4 code-line">
            <span className="text-blue-400">return</span> <span className="text-green-300">'My Skills'</span>;
          </div>
          <div><span className="text-purple-400">{`}`}</span></div>
        </div>
        
        <h2 className="section-title text-center">My Skills</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-mono">
          <span className="text-blue-400">const</span> <span className="text-yellow-300">skills</span> = [ <span className="text-primary">webDev</span>, <span className="text-accent">uiDesign</span>, <span className="text-green-400">photography</span> ];
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="neo-blur backdrop-blur-xl bg-black/40 border border-white/10 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(31,38,135,0.2)] transition-all duration-300 p-0 overflow-hidden">
              <div className="p-4 border-b border-[#403E43]/50">
                <div className="flex items-center">
                  {category.icon}
                  <h3 className="text-xl font-bold font-mono ml-2 text-foreground">{category.name}</h3>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-mono text-foreground">
                          <span className="text-muted-foreground mr-2">{">"}</span>
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className={`h-2 ${
                          category.id === 'development' 
                            ? "bg-blue-500/20" 
                            : category.id === 'design' 
                              ? "bg-purple-500/20" 
                              : "bg-green-500/20"
                        }`}
                      />
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
