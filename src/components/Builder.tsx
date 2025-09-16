import React, { useState } from 'react';
import { Sparkles, Eye, Palette, Download, Settings, Code, RefreshCw } from 'lucide-react';
import { Page } from '../App';
import PromptInterface from './PromptInterface';
import PortfolioPreview from './PortfolioPreview';
import CustomizationPanel from './CustomizationPanel';

interface BuilderProps {
  onNavigate: (page: Page) => void;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  projects: Array<{
    title: string;
    description: string;
    tech: string[];
    image: string;
  }>;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    font: string;
  };
}

const Builder: React.FC<BuilderProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'customize' | 'export'>('prompt');
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    name: '',
    title: '',
    bio: '',
    skills: [],
    projects: [],
    contact: { email: '', linkedin: '', github: '' },
    theme: {
      primaryColor: '#3B82F6',
      secondaryColor: '#8B5CF6',
      accentColor: '#14B8A6',
      font: 'Inter'
    }
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const tabs = [
    { id: 'prompt' as const, label: 'AI Prompt', icon: Sparkles },
    { id: 'customize' as const, label: 'Customize', icon: Palette },
    { id: 'export' as const, label: 'Export', icon: Download }
  ];

  const handleGenerate = async (prompt: string) => {
    setIsGenerating(true);
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock AI generated data based on prompt
    const mockData: PortfolioData = {
      name: 'Alex Johnson',
      title: 'Full Stack Developer',
      bio: 'Passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating user-friendly interfaces and robust backend systems.',
      skills: ['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL'],
      projects: [
        {
          title: 'E-commerce Platform',
          description: 'Built a full-featured e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
          tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
          image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'Task Management App',
          description: 'Developed a collaborative task management application with real-time updates using Socket.io and MongoDB.',
          tech: ['React', 'Socket.io', 'MongoDB', 'Express'],
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          title: 'Weather Analytics Dashboard',
          description: 'Created a data visualization dashboard for weather analytics using D3.js and Python backend with machine learning predictions.',
          tech: ['D3.js', 'Python', 'TensorFlow', 'FastAPI'],
          image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ],
      contact: {
        email: 'alex@example.com',
        linkedin: 'linkedin.com/in/alexjohnson',
        github: 'github.com/alexjohnson'
      },
      theme: {
        primaryColor: '#3B82F6',
        secondaryColor: '#8B5CF6',
        accentColor: '#14B8A6',
        font: 'Inter'
      }
    };
    
    setPortfolioData(mockData);
    setIsGenerating(false);
    setActiveTab('customize');
  };

  const handleExport = () => {
    // Mock export functionality
    const exportData = {
      html: '<!DOCTYPE html>...',
      css: '/* Portfolio Styles */',
      js: '// Portfolio JavaScript',
      assets: ['images/', 'fonts/']
    };
    
    console.log('Exporting portfolio:', exportData);
    alert('Portfolio exported successfully! Check your downloads folder.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Portfolio Builder</h1>
          <p className="text-gray-600">Create your perfect portfolio with AI assistance</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel */}
          <div className="space-y-6">
            {activeTab === 'prompt' && (
              <PromptInterface onGenerate={handleGenerate} isGenerating={isGenerating} />
            )}
            
            {activeTab === 'customize' && (
              <CustomizationPanel 
                portfolioData={portfolioData}
                onUpdateData={setPortfolioData}
              />
            )}
            
            {activeTab === 'export' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Download className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Export Portfolio</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Ready to Export</h3>
                    <p className="text-blue-700 text-sm mb-4">
                      Your portfolio is ready! Choose your export format below.
                    </p>
                    
                    <div className="space-y-3">
                      <button
                        onClick={handleExport}
                        className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download HTML/CSS/JS</span>
                      </button>
                      
                      <button
                        className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Code className="w-4 h-4" />
                        <span>View Source Code</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <h4 className="font-medium mb-2">What's included:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Responsive HTML structure</li>
                      <li>Modern CSS with Tailwind classes</li>
                      <li>JavaScript for interactions</li>
                      <li>Optimized images and assets</li>
                      <li>SEO-friendly meta tags</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Preview */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-900">Live Preview</h2>
              </div>
              
              {portfolioData.name && (
                <button
                  onClick={() => handleGenerate('regenerate')}
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Regenerate</span>
                </button>
              )}
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <PortfolioPreview data={portfolioData} isGenerating={isGenerating} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;