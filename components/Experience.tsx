import React from 'react';
import { SectionId } from '../types';
import { RESUME_DATA } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Professional <span className="text-emerald-400">Experience</span></h2>
          <p className="text-slate-400">My journey in the tech industry.</p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          
          {RESUME_DATA.experience.map((job, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon on line */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-[.is-active]:bg-blue-600 group-[.is-active]:border-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg hover:border-blue-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-lg">{job.role}</h3>
                  <span className="text-emerald-400 text-sm font-mono font-bold hidden sm:block">{job.company}</span>
                </div>
                <div className="sm:hidden text-emerald-400 text-sm font-mono font-bold mb-2">{job.company}</div>
                
                <div className="flex items-center space-x-4 text-xs text-slate-400 mb-4 font-mono">
                   <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {job.period}</span>
                   <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {job.location}</span>
                </div>

                <ul className="space-y-2">
                  {job.details.map((detail, i) => (
                    <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
