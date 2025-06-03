import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-blue-400" />
              <h2 className="text-xl font-bold">SIEM Solutions</h2>
            </div>
            <p className="text-slate-300">
              Comprehensive comparison of enterprise SIEM solutions for effective security monitoring and threat detection.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Download Full Report</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Sizing Calculator</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Vendor Documentation</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Request a Consultation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-slate-300 mb-4">
              Have questions about which SIEM solution is right for your organization? Our security experts can help.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Contact an Expert
            </button>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Cybersecurity Solutions. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This comparison is provided for informational purposes only. Prices and specifications are subject to change.
          </p>
        </div>
      </div>
    </footer>
  );
};