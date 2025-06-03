import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { RecommendationTable } from '../tables/RecommendationTable';

export const Recommendation: React.FC = () => {
  return (
    <section id="recommendation" className="py-8 scroll-mt-24">
      <SectionTitle 
        title="Recommendation Summary for 300GB/week (HA Setup)" 
        emoji="📌" 
        description="At-a-glance comparison of resource requirements and suitability."
      />
      
      <Card className="mt-6 p-6">
        <RecommendationTable />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-5 border-t-4 border-blue-600">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Splunk Best For</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                <span className="text-slate-700">Organizations with higher budget, seeking quick deployment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                <span className="text-slate-700">Teams that prefer GUI-based workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                <span className="text-slate-700">Environments with diverse log sources</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                <span className="text-slate-700">When powerful search capabilities are prioritized</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-5 border-t-4 border-indigo-600">
            <h3 className="text-lg font-semibold text-indigo-800 mb-3">QRadar Best For</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">→</span>
                <span className="text-slate-700">Organizations wanting a pre-packaged solution</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">→</span>
                <span className="text-slate-700">Teams that value IBM's enterprise support</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">→</span>
                <span className="text-slate-700">Environments needing network flow analysis integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">→</span>
                <span className="text-slate-700">When out-of-box compliance reporting is important</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-emerald-50 rounded-lg p-5 border-t-4 border-emerald-600">
            <h3 className="text-lg font-semibold text-emerald-800 mb-3">Elastic Stack Best For</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">→</span>
                <span className="text-slate-700">Budget-conscious organizations with technical expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">→</span>
                <span className="text-slate-700">Teams that want maximum customization control</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">→</span>
                <span className="text-slate-700">Environments already using Elastic for other use cases</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">→</span>
                <span className="text-slate-700">When open-source technology is strategically preferred</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-slate-100 rounded-lg">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Key Decision Factors for 300GB/week</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-slate-700 mb-2">Budget Constraints</h4>
              <p className="text-slate-600">
                If budget is the primary concern, Elastic Stack (open source) provides the most cost-effective solution, 
                followed by QRadar, then Splunk. However, factor in the operational costs of maintaining each platform.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-700 mb-2">Technical Expertise Available</h4>
              <p className="text-slate-600">
                QRadar requires the least specialized knowledge, Splunk is in the middle, and Elastic Stack requires the 
                most expertise, especially for tuning and optimization.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-700 mb-2">Integration Requirements</h4>
              <p className="text-slate-600">
                All three platforms support extensive integrations, but Splunk has the largest ecosystem of pre-built apps, 
                QRadar has strong IBM ecosystem integration, and Elastic requires more custom development but offers 
                greater flexibility.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-700 mb-2">Scalability Path</h4>
              <p className="text-slate-600">
                For future growth beyond 300GB/week, Elastic Stack generally scales more cost-effectively in terms of 
                hardware, Splunk offers the most straightforward scaling path but at higher cost, and QRadar may require 
                more substantial appliance upgrades.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};