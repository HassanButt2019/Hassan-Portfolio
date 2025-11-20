import React from 'react';
import { RESUME_DATA } from '../constants';
import { SectionId } from '../types';
import { ArrowRight, Download, Database, Smartphone, Server } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      
      {/* Background Abstract Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-green-400 text-xs font-mono font-bold uppercase tracking-widest">Available for Hire</span>
          </div>

          <div>
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight mb-4">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {RESUME_DATA.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 font-light max-w-2xl">
              {RESUME_DATA.title}
            </p>
          </div>

          <p className="text-slate-400 leading-relaxed max-w-lg">
            {RESUME_DATA.tagline} <br/>
            Specializing in constructing robust data pipelines, scalable backend architectures, and intuitive cross-platform mobile applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToProjects}
              className="group flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20"
            >
              View Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-semibold transition-all border border-slate-700">
              Download CV
              <Download className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Visual Tech Representation */}
        <div className="hidden lg:block relative">
          <div className="relative z-10 grid grid-cols-2 gap-4 p-8 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 shadow-2xl">
             
             {/* Card 1 */}
             <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 flex flex-col items-start transform hover:-translate-y-1 transition-transform">
                <div className="bg-blue-500/20 p-3 rounded-lg mb-4">
                  <Server className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Backend</h3>
                <p className="text-slate-400 text-sm mt-2">FastAPI, Microservices, Event-Driven Arch</p>
             </div>

             {/* Card 2 */}
             <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 flex flex-col items-start transform hover:-translate-y-1 transition-transform mt-8">
                <div className="bg-purple-500/20 p-3 rounded-lg mb-4">
                  <Database className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Data Eng</h3>
                <p className="text-slate-400 text-sm mt-2">ETL Pipelines, DuckDB, PostgreSQL, Kafka</p>
             </div>

             {/* Card 3 */}
             <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 flex flex-col items-start transform hover:-translate-y-1 transition-transform -mt-8">
                <div className="bg-emerald-500/20 p-3 rounded-lg mb-4">
                  <Smartphone className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Mobile</h3>
                <p className="text-slate-400 text-sm mt-2">Flutter, Dart, Cross-Platform</p>
             </div>

             {/* Code Snippet */}
             <div className="col-span-2 mt-4 bg-black/50 rounded-lg p-4 font-mono text-xs text-slate-300 border border-slate-800 overflow-hidden">
               <div className="flex space-x-2 mb-2">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <p><span className="text-purple-400">class</span> <span className="text-yellow-400">Engineer</span> <span className="text-slate-500">{'{'}</span></p>
               <p className="pl-4"><span className="text-blue-400">constructor</span>() <span className="text-slate-500">{'{'}</span></p>
               <p className="pl-8">this.stack = [<span className="text-green-400">'Flutter'</span>, <span className="text-green-400">'FastAPI'</span>, <span className="text-green-400">'Data'</span>];</p>
               <p className="pl-8">this.passion = <span className="text-green-400">'Scalability'</span>;</p>
               <p className="pl-4"><span className="text-slate-500">{'}'}</span></p>
               <p className="pl-4"><span className="text-blue-400">solve</span>(problem) <span className="text-slate-500">{'{'}</span></p>
               <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-blue-400">deploy</span>(problem);</p>
               <p className="pl-4"><span className="text-slate-500">{'}'}</span></p>
               <p><span className="text-slate-500">{'}'}</span></p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
