import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Brain, Download } from 'lucide-react';

export const FinalThoughts: React.FC = () => {
  return (
    <section id="final-thoughts" className="py-8 scroll-mt-24">
      <SectionTitle 
        title="Final Thoughts" 
        emoji="🧠" 
        description="Strategic considerations for your SIEM selection process."
      />
      
      <Card className="mt-6 p-6">
        <div className="prose max-w-none text-slate-700">
          <p className="lead text-lg">
            When selecting a SIEM solution for a 300GB/week environment, consider not just the technical specifications
            but also your organization's operational model, skill sets, and security objectives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-blue-800 font-semibold mb-3">Choose Splunk if:</h3>
              <p>You want quick deployment, rich UI, and can afford premium pricing. Splunk offers the most streamlined
              experience with the widest array of pre-built content, making it ideal for teams that need to show immediate
              value.</p>
            </div>
            
            <div className="bg-indigo-50 p-5 rounded-lg">
              <h3 className="text-indigo-800 font-semibold mb-3">Choose QRadar if:</h3>
              <p>You're looking for an IBM-supported solution with EPS-based billing. QRadar provides a well-integrated
              security platform with strong out-of-box detection capabilities and a more predictable licensing model.</p>
            </div>
            
            <div className="bg-emerald-50 p-5 rounded-lg">
              <h3 className="text-emerald-800 font-semibold mb-3">Choose Elastic (Free) if:</h3>
              <p>You're capable of managing your own stack and want cost efficiency with maximum control. The open-source
              route requires more expertise but offers unmatched flexibility and can grow with your organization.</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Implementation Strategy</h3>
          
          <p>
            Regardless of which platform you select, we recommend the following implementation approach:
          </p>
          
          <ol className="list-decimal pl-5 space-y-2 mt-4">
            <li>
              <strong>Start with a pilot deployment</strong> - Begin with a subset of critical log sources before
              expanding to the full environment.
            </li>
            <li>
              <strong>Develop use cases iteratively</strong> - Focus on implementing a few high-value detection use
              cases first, then expand.
            </li>
            <li>
              <strong>Plan for growth</strong> - Design your architecture to accommodate at least 2x your current log
              volume to prevent frequent redesigns.
            </li>
            <li>
              <strong>Document thoroughly</strong> - Create comprehensive documentation for your configuration and
              customizations to ensure knowledge transfer.
            </li>
            <li>
              <strong>Allocate sufficient resources</strong> - Budget not just for the platform but also for training,
              professional services, and ongoing optimization.
            </li>
          </ol>
          
          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Long-term Considerations</h3>
          
          <p>
            SIEM solutions are long-term investments, often with 3-5 year lifecycles before major reconsideration.
            Factor in the following long-term considerations:
          </p>
          
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>
              <strong>Vendor roadmap alignment</strong> - Ensure the vendor's development priorities align with your
              future security needs.
            </li>
            <li>
              <strong>Skills availability</strong> - Consider the availability of talent for your chosen platform in
              your hiring market.
            </li>
            <li>
              <strong>Exit strategy</strong> - Plan for how you would migrate to a different solution if needed in
              the future.
            </li>
            <li>
              <strong>Compliance evolution</strong> - Evaluate how well the platform can adapt to changing compliance
              requirements.
            </li>
          </ul>
          
          <div className="flex justify-center mt-12">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-5 w-5 mr-2" />
              Download Comparison PDF
            </button>
          </div>
        </div>
      </Card>
    </section>
  );
};