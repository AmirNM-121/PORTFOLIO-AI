import React, { useState } from 'react';
import { Sparkles, Send, Lightbulb } from 'lucide-react';

interface PromptInterfaceProps {
  onGenerate: (prompt: string) => void;
  isGenerating: boolean;
}

const PromptInterface: React.FC<PromptInterfaceProps> = ({ onGenerate, isGenerating }) => {
  const [prompt, setPrompt] = useState('');

  const examplePrompts = [
    "Create a portfolio for a frontend developer specializing in React and modern UI/UX design",
    "Build a portfolio for a data scientist with experience in Python, machine learning, and data visualization",
    "Generate a portfolio for a graphic designer focusing on branding and digital art",
    "Create a portfolio for a full-stack developer with expertise in Node.js, databases, and cloud technologies"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isGenerating) {
      onGenerate(prompt);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Sparkles className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">AI Portfolio Generator</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Describe your ideal portfolio
          </label>
          <textarea
            id="prompt"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what kind of portfolio you want. Include your profession, skills, experience level, and any specific requirements..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
        
        <button
          type="submit"
          disabled={!prompt.trim() || isGenerating}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Generate Portfolio</span>
            </>
          )}
        </button>
      </form>
      
      <div className="mt-8">
        <div className="flex items-center space-x-2 mb-4">
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm font-medium text-gray-900">Example Prompts</h3>
        </div>
        
        <div className="space-y-2">
          {examplePrompts.map((example, index) => (
            <button
              key={index}
              onClick={() => setPrompt(example)}
              className="w-full text-left p-3 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptInterface;