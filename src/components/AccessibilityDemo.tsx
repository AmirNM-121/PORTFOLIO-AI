import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const AccessibilityDemo: React.FC = () => {
  const { isDark } = useDarkMode();

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Dark Mode Accessibility Demo
        </h1>
        <p className="text-secondary text-lg">
          This demo showcases proper color contrast and accessibility features in both light and dark modes.
        </p>
      </div>

      {/* Color Contrast Examples */}
      <section className="bg-elevated border border-primary rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Color Contrast Examples</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-primary">Text Hierarchy</h3>
            <div className="space-y-2">
              <p className="text-primary text-lg font-semibold">Primary text (AA+ compliant)</p>
              <p className="text-secondary">Secondary text (AA compliant)</p>
              <p className="text-tertiary text-sm">Tertiary text (AA compliant)</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-primary">Interactive Elements</h3>
            <div className="space-y-3">
              <button className="px-4 py-2 accent-bg-primary text-white rounded-md hover:opacity-90 focus-ring">
                Primary Button
              </button>
              <button className="px-4 py-2 bg-secondary border border-primary text-primary rounded-md hover:bg-tertiary focus-ring">
                Secondary Button
              </button>
              <a href="#" className="accent-primary hover:underline focus-ring">
                Link Example
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section className="bg-elevated border border-primary rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Form Elements</h2>
        
        <div className="space-y-4 max-w-md">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-primary border border-primary rounded-md text-primary focus-ring"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              className="w-full px-3 py-2 bg-primary border border-primary rounded-md text-primary focus-ring"
              placeholder="Enter your message"
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="newsletter"
              className="h-4 w-4 accent-primary focus-ring"
            />
            <label htmlFor="newsletter" className="ml-2 text-sm text-primary">
              Subscribe to newsletter
            </label>
          </div>
        </div>
      </section>

      {/* Status Messages */}
      <section className="bg-elevated border border-primary rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Status Messages</h2>
        
        <div className="space-y-3">
          <div className="p-3 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-md">
            <p className="text-green-800 dark:text-green-200">Success: Your changes have been saved!</p>
          </div>
          
          <div className="p-3 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded-md">
            <p className="text-yellow-800 dark:text-yellow-200">Warning: Please review your input.</p>
          </div>
          
          <div className="p-3 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-md">
            <p className="text-red-800 dark:text-red-200">Error: Something went wrong.</p>
          </div>
        </div>
      </section>

      {/* Current Theme Info */}
      <section className="bg-elevated border border-primary rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Theme Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-primary mb-2">Current Mode</h3>
            <p className="text-secondary">
              {isDark ? 'Dark Mode Active' : 'Light Mode Active'}
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-primary mb-2">System Preference</h3>
            <p className="text-secondary">
              {window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityDemo;