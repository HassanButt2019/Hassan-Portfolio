import React from 'react';
import { SectionId } from '../types';
import { RESUME_DATA } from '../constants';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something <span className="text-blue-500">Scalable</span></h2>
        <p className="text-slate-400 mb-12 text-lg">
          I'm currently open to new opportunities in Backend Engineering, Data Engineering, or Full Stack roles.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex flex-col items-center p-6 bg-slate-800 rounded-xl hover:bg-slate-750 transition-colors border border-slate-700 hover:border-blue-500">
            <Mail className="w-8 h-8 text-blue-400 mb-3" />
            <span className="text-slate-300 font-medium">Email Me</span>
            <span className="text-slate-500 text-sm mt-1">{RESUME_DATA.contact.email}</span>
          </a>

          <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-slate-800 rounded-xl hover:bg-slate-750 transition-colors border border-slate-700 hover:border-blue-500">
            <Linkedin className="w-8 h-8 text-blue-400 mb-3" />
            <span className="text-slate-300 font-medium">LinkedIn</span>
            <span className="text-slate-500 text-sm mt-1">Connect professionally</span>
          </a>

          <a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-slate-800 rounded-xl hover:bg-slate-750 transition-colors border border-slate-700 hover:border-blue-500">
            <Github className="w-8 h-8 text-blue-400 mb-3" />
            <span className="text-slate-300 font-medium">GitHub</span>
            <span className="text-slate-500 text-sm mt-1">Check my code</span>
          </a>
        </div>

        <div className="text-slate-600 text-sm font-mono">
          <p>&copy; {new Date().getFullYear()} Hassan Rauf Butt. Built with React, Tailwind & Gemini API.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
