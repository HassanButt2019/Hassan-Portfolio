import React from 'react';
import { SectionId } from '../types';
import { RESUME_DATA } from '../constants';
import { Folder, ExternalLink, Github, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
           <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured <span className="text-purple-400">Projects</span></h2>
            <p className="text-slate-400">A selection of independent applications and enterprise solutions.</p>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.projects.map((project, index) => (
            <div key={index} className="group relative bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-purple-500/50 transition-all hover:-translate-y-1 flex flex-col h-full">
              
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    {project.type === 'Work' ? <Layers className="w-6 h-6 text-purple-400" /> : <Folder className="w-6 h-6 text-blue-400" />}
                  </div>
                  <div className="flex space-x-3">
                    {project.link && <a href={project.link} className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>}
                    {/* Assuming github link is generic for now unless specified */}
                    <a href={RESUME_DATA.contact.github} className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <div className="flex items-center space-x-2 mb-4">
                   <span className={`text-xs px-2 py-0.5 rounded border ${project.type === 'Work' ? 'border-purple-900 text-purple-400 bg-purple-900/20' : 'border-blue-900 text-blue-400 bg-blue-900/20'}`}>
                     {project.type}
                   </span>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="px-6 pb-6 pt-0 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-slate-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
