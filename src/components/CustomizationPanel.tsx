import React from 'react';
import { Palette, Type, User, Briefcase, Mail } from 'lucide-react';
import { PortfolioData } from './Builder';

interface CustomizationPanelProps {
  portfolioData: PortfolioData;
  onUpdateData: (data: PortfolioData) => void;
}

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ portfolioData, onUpdateData }) => {
  const colorPresets = [
    { name: 'Ocean Blue', primary: '#3B82F6', secondary: '#8B5CF6', accent: '#14B8A6' },
    { name: 'Sunset', primary: '#F97316', secondary: '#EF4444', accent: '#F59E0B' },
    { name: 'Forest', primary: '#059669', secondary: '#0D9488', accent: '#10B981' },
    { name: 'Purple Dream', primary: '#8B5CF6', secondary: '#A855F7', accent: '#EC4899' },
    { name: 'Monochrome', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF' },
  ];

  const fonts = [
    'Inter',
    'Poppins',
    'Roboto',
    'Open Sans',
    'Lato'
  ];

  const handleUpdate = (updates: Partial<PortfolioData>) => {
    onUpdateData({ ...portfolioData, ...updates });
  };

  const handleThemeUpdate = (themeUpdates: Partial<PortfolioData['theme']>) => {
    handleUpdate({
      theme: { ...portfolioData.theme, ...themeUpdates }
    });
  };

  const handleContactUpdate = (contactUpdates: Partial<PortfolioData['contact']>) => {
    handleUpdate({
      contact: { ...portfolioData.contact, ...contactUpdates }
    });
  };

  const addSkill = () => {
    const newSkill = prompt('Enter a new skill:');
    if (newSkill) {
      handleUpdate({
        skills: [...portfolioData.skills, newSkill]
      });
    }
  };

  const removeSkill = (index: number) => {
    handleUpdate({
      skills: portfolioData.skills.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="space-y-6">
      {/* Personal Info */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-2 mb-4">
          <User className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={portfolioData.name}
              onChange={(e) => handleUpdate({ name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title/Role</label>
            <input
              type="text"
              value={portfolioData.title}
              onChange={(e) => handleUpdate({ title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea
              rows={3}
              value={portfolioData.bio}
              onChange={(e) => handleUpdate({ bio: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
          </div>
          <button
            onClick={addSkill}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Skill
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {portfolioData.skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
            >
              {skill}
              <button
                onClick={() => removeSkill(index)}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Mail className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={portfolioData.contact.email}
              onChange={(e) => handleContactUpdate({ email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
            <input
              type="text"
              value={portfolioData.contact.linkedin}
              onChange={(e) => handleContactUpdate({ linkedin: e.target.value })}
              placeholder="linkedin.com/in/username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
            <input
              type="text"
              value={portfolioData.contact.github}
              onChange={(e) => handleContactUpdate({ github: e.target.value })}
              placeholder="github.com/username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Theme Customization */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Palette className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Theme & Colors</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Color Presets</label>
            <div className="grid grid-cols-1 gap-2">
              {colorPresets.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => handleThemeUpdate({
                    primaryColor: preset.primary,
                    secondaryColor: preset.secondary,
                    accentColor: preset.accent
                  })}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-medium">{preset.name}</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.primary }}></div>
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.secondary }}></div>
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.accent }}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
            <select
              value={portfolioData.theme.font}
              onChange={(e) => handleThemeUpdate({ font: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {fonts.map((font) => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizationPanel;