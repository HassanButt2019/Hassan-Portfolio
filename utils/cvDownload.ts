import { RESUME_DATA } from '../constants';

export const generateCVContent = (): string => {
  const cv = `
${RESUME_DATA.name}
${RESUME_DATA.title}
${'='.repeat(50)}

CONTACT INFORMATION
${'-'.repeat(20)}
Email: ${RESUME_DATA.contact.email}
Phone: ${RESUME_DATA.contact.phone}
Location: ${RESUME_DATA.contact.location}
LinkedIn: ${RESUME_DATA.contact.linkedin}
GitHub: ${RESUME_DATA.contact.github}

ABOUT
${'-'.repeat(20)}
${RESUME_DATA.about}

SKILLS
${'-'.repeat(20)}
${RESUME_DATA.skills.map(skillGroup => 
  `${skillGroup.name}:\n${skillGroup.skills.map(skill => `  • ${skill}`).join('\n')}`
).join('\n\n')}

EXPERIENCE
${'-'.repeat(20)}
${RESUME_DATA.experience.map(exp => 
  `${exp.title} at ${exp.company}\n${exp.duration}\nLocation: ${exp.location}\n\n${exp.description}\n\nKey Achievements:\n${exp.achievements.map(achievement => `  • ${achievement}`).join('\n')}\n\nTechnologies: ${exp.technologies.join(', ')}\n`
).join('\n' + '-'.repeat(30) + '\n\n')}

PROJECTS
${'-'.repeat(20)}
${RESUME_DATA.projects.map(project => 
  `${project.title}\n${project.description}\n\nTechnologies: ${project.technologies.join(', ')}\nGitHub: ${project.github || 'N/A'}\nDemo: ${project.demo || 'N/A'}\n`
).join('\n' + '-'.repeat(30) + '\n\n')}

EDUCATION
${'-'.repeat(20)}
${RESUME_DATA.education.map(edu => 
  `${edu.degree}\n${edu.institution}, ${edu.location}\n${edu.duration}\n${edu.gpa ? `GPA: ${edu.gpa}` : ''}\n`
).join('\n')}
`.trim();

  return cv;
};

export const downloadCV = () => {
  const cvContent = generateCVContent();
  const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  // Create a temporary anchor element to trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = `${RESUME_DATA.name.replace(/\s+/g, '_')}_CV.txt`;
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Alternative function to generate and download as PDF-like formatted text
export const downloadFormattedCV = () => {
  // Download CV from public folder
  const link = document.createElement('a');
  link.href = '/HassanRaufButt-DataEng.pdf'; // This will be served from public folder
  link.download = 'HassanRaufButt-DataEng.pdf';
  link.target = '_blank'; // Open in new tab as fallback
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
