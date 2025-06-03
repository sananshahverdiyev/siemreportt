import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { SiemCard } from '../ui/SiemCard';
import { Database, Shield, Code } from 'lucide-react';

export const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-8 scroll-mt-24">
      <SectionTitle 
        title="Overview of Each SIEM" 
        emoji="🔍" 
        description="A comprehensive introduction to each SIEM platform's core capabilities and strengths."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <SiemCard
          title="Splunk Enterprise Security"
          icon={<Database className="h-10 w-10 text-blue-500" />}
          color="blue"
        >
          <ul className="space-y-2 mt-4">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Commercial-grade SIEM platform</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Advanced analytics, threat detection, correlation searches</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>GUI-friendly, used in many SOC environments</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Powerful search language (SPL)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Extensive app ecosystem and marketplace</span>
            </li>
          </ul>
        </SiemCard>

        <SiemCard
          title="IBM QRadar"
          icon={<Shield className="h-10 w-10 text-indigo-500" />}
          color="indigo"
        >
          <ul className="space-y-2 mt-4">
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Enterprise SIEM with built-in threat detection</span>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Integrates with flow collectors and vulnerability management tools</span>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Powerful correlation engine</span>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Integrated network flow analysis</span>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>DSM-based event normalization</span>
            </li>
          </ul>
        </SiemCard>

        <SiemCard
          title="Elastic Stack"
          icon={<Code className="h-10 w-10 text-emerald-500" />}
          color="emerald"
        >
          <ul className="space-y-2 mt-4">
            <li className="flex items-start">
              <span className="bg-emerald-100 text-emerald-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Open-source by default; Elastic Security adds SIEM features</span>
            </li>
            <li className="flex items-start">
              <span className="bg-emerald-100 text-emerald-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Highly customizable</span>
            </li>
            <li className="flex items-start">
              <span className="bg-emerald-100 text-emerald-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Offers both free (Basic) and paid (Platinum/Enterprise) tiers</span>
            </li>
            <li className="flex items-start">
              <span className="bg-emerald-100 text-emerald-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Elasticsearch + Logstash + Kibana + Beats components</span>
            </li>
            <li className="flex items-start">
              <span className="bg-emerald-100 text-emerald-800 rounded-full p-1 mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Strong full-text search capabilities</span>
            </li>
          </ul>
        </SiemCard>
      </div>
    </section>
  );
};