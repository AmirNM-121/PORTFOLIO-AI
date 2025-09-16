import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PortfolioData } from './Builder';

interface PortfolioPreviewProps {
  data: PortfolioData;
  isGenerating: boolean;
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ data, isGenerating }) => {
  if (isGenerating) {
    return (
      <div className="h-96 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Generating your portfolio...</p>
        </div>
      </div>
    );
  }

  if (!data.name) {
    return (
      <div className="h-96 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">👆</span>
          </div>
          <p className="text-gray-600">Enter a prompt to generate your portfolio</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-h-96 overflow-y-auto bg-white">
      <div style={{ 
        fontFamily: data.theme.font,
        color: '#374151'
      }}>
        {/* Hero Section */}
        <div 
          className="p-8 text-white"
          style={{ background: `linear-gradient(135deg, ${data.theme.primaryColor}, ${data.theme.secondaryColor})` }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
            <p className="text-xl opacity-90 mb-4">{data.title}</p>
            <p className="text-sm opacity-80 leading-relaxed">{data.bio}</p>
          </div>
        </div>

        {/* Skills Section */}
        {data.skills.length > 0 && (
          <div className="p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full text-white"
                    style={{ backgroundColor: data.theme.accentColor }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {data.projects.length > 0 && (
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-semibold mb-6">Projects</h2>
              <div className="space-y-6">
                {data.projects.slice(0, 2).map((project, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-32 sm:h-full object-cover"
                        />
                      </div>
                      <div className="sm:w-2/3 p-4">
                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              +{project.tech.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="p-8 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
            <div className="flex justify-center space-x-6">
              {data.contact.email && (
                <a href={`mailto:${data.contact.email}`} className="flex items-center space-x-2 hover:opacity-80">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Email</span>
                </a>
              )}
              {data.contact.linkedin && (
                <a href={`https://${data.contact.linkedin}`} className="flex items-center space-x-2 hover:opacity-80">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              )}
              {data.contact.github && (
                <a href={`https://${data.contact.github}`} className="flex items-center space-x-2 hover:opacity-80">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreview;