import React from 'react';
import { Eye, Code, Download, Star } from 'lucide-react';
import { Page } from '../App';

interface TemplateGalleryProps {
  onNavigate: (page: Page) => void;
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ onNavigate }) => {
  const templates = [
    {
      id: 1,
      name: 'Modern Developer',
      category: 'Developer',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#3B82F6', '#8B5CF6', '#14B8A6'],
      rating: 4.8,
      downloads: '2.1k'
    },
    {
      id: 2,
      name: 'Creative Designer',
      category: 'Designer',
      image: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#F97316', '#EF4444', '#F59E0B'],
      rating: 4.9,
      downloads: '1.8k'
    },
    {
      id: 3,
      name: 'Data Scientist',
      category: 'Data Science',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#059669', '#0D9488', '#10B981'],
      rating: 4.7,
      downloads: '1.5k'
    },
    {
      id: 4,
      name: 'Marketing Pro',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#8B5CF6', '#A855F7', '#EC4899'],
      rating: 4.6,
      downloads: '1.2k'
    },
    {
      id: 5,
      name: 'Minimalist',
      category: 'General',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#374151', '#6B7280', '#9CA3AF'],
      rating: 4.8,
      downloads: '2.5k'
    },
    {
      id: 6,
      name: 'Photography',
      category: 'Creative',
      image: 'https://images.pexels.com/photos/291732/pexels-photo-291732.jpeg?auto=compress&cs=tinysrgb&w=400',
      colors: ['#DC2626', '#F97316', '#FBBF24'],
      rating: 4.9,
      downloads: '1.9k'
    }
  ];

  const categories = ['All', 'Developer', 'Designer', 'Data Science', 'Marketing', 'Creative', 'General'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Template Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our collection of professionally designed portfolio templates. 
            Each template is fully customizable and ready to use.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="relative">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex space-x-3">
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <Eye className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <Code className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {template.category}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{template.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{template.downloads}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {template.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => onNavigate('builder')}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                  >
                    Use Template
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Don't see what you're looking for?</h2>
            <p className="text-blue-100 mb-6">
              Use our AI builder to create a completely custom portfolio tailored to your needs
            </p>
            <button
              onClick={() => onNavigate('builder')}
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Create Custom Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateGallery;