import React from 'react';
import { SectionId } from '../types';
import { RESUME_DATA } from '../constants';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

const Skills: React.FC = () => {
  
  // Transform skills data for the Radar Chart
  // We will assign arbitrary competency values for visualization purposes based on resume emphasis
  const chartData = [
    { subject: 'Backend', A: 95, fullMark: 100 },
    { subject: 'Data Eng', A: 90, fullMark: 100 },
    { subject: 'Mobile/Flutter', A: 85, fullMark: 100 },
    { subject: 'DevOps', A: 80, fullMark: 100 },
    { subject: 'AI/ML', A: 75, fullMark: 100 },
    { subject: 'Frontend', A: 70, fullMark: 100 },
  ];

  return (
    <section id={SectionId.SKILLS} className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical <span className="text-blue-500">Arsenal</span></h2>
           <p className="text-slate-400 max-w-2xl mx-auto">A robust foundation in modern distributed systems, data architecture, and application development.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
           {/* Chart Column */}
           <div className="lg:col-span-1 h-80 lg:h-auto bg-slate-900/50 rounded-2xl border border-slate-800 p-4 flex flex-col items-center justify-center">
              <h3 className="text-slate-300 mb-4 font-mono text-sm uppercase tracking-widest">Discipline Balance</h3>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skill Level"
                    dataKey="A"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fill="#3b82f6"
                    fillOpacity={0.4}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}
                    itemStyle={{ color: '#60a5fa' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
           </div>

           {/* Skills Grid */}
           <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {RESUME_DATA.skills.map((category, idx) => (
                <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                  <h3 className="text-lg font-bold text-white mb-4 border-l-4 border-blue-500 pl-3">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700 hover:text-white hover:bg-slate-700 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
