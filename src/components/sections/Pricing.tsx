import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { DollarSign, Calculator } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [volumeGB, setVolumeGB] = useState(300);
  const [retentionDays, setRetentionDays] = useState(90);
  
  // Calculate pricing estimates
  const weeklyToDaily = volumeGB / 7;
  const monthlyGB = volumeGB * 4.3;
  
  const splunkPrice = {
    lowEnd: Math.round(weeklyToDaily * 150 * 12),
    highEnd: Math.round(weeklyToDaily * 200 * 12)
  };
  
  const qradarPrice = {
    lowEnd: Math.round(35000),
    highEnd: Math.round(50000)
  };
  
  const elasticPaidPrice = {
    lowEnd: Math.round(weeklyToDaily * 20 * 12),
    highEnd: Math.round(weeklyToDaily * 25 * 12)
  };
  
  const elasticCloudPrice = Math.round(95 * (monthlyGB * (retentionDays / 30) / 120));

  return (
    <section id="pricing" className="py-8 scroll-mt-24">
      <SectionTitle 
        title="Licensing and Pricing" 
        emoji="💸" 
        description="Cost comparison for each SIEM solution based on your log volume."
      />
      
      <Card className="mt-6 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="h-6 w-6 text-slate-700" />
          <h3 className="text-xl font-semibold text-slate-800">Cost Calculator</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Weekly Log Volume (GB)
            </label>
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={volumeGB}
              onChange={(e) => setVolumeGB(Number(e.target.value))}
              className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-1">
              <span className="text-sm text-slate-600">100 GB</span>
              <span className="text-sm font-medium text-blue-700">{volumeGB} GB</span>
              <span className="text-sm text-slate-600">1000 GB</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Retention Period (days)
            </label>
            <input
              type="range"
              min="30"
              max="365"
              step="30"
              value={retentionDays}
              onChange={(e) => setRetentionDays(Number(e.target.value))}
              className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-1">
              <span className="text-sm text-slate-600">30 days</span>
              <span className="text-sm font-medium text-blue-700">{retentionDays} days</span>
              <span className="text-sm text-slate-600">365 days</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="h-5 w-5 text-blue-600" />
              <h4 className="text-lg font-semibold text-blue-800">Splunk</h4>
            </div>
            
            <div>
              <p className="text-sm text-slate-600 mb-1">Pricing Model:</p>
              <p className="text-slate-700 font-medium mb-4">Per ingested GB/day</p>
              
              <p className="text-sm text-slate-600 mb-1">Daily Ingestion Rate:</p>
              <p className="text-slate-700 font-medium mb-4">~{weeklyToDaily.toFixed(1)} GB/day</p>
              
              <p className="text-sm text-slate-600 mb-1">Estimated Annual Cost:</p>
              <p className="text-2xl font-bold text-blue-700 mb-1">
                ${splunkPrice.lowEnd.toLocaleString()} - ${splunkPrice.highEnd.toLocaleString()}
              </p>
              <p className="text-xs text-slate-500">Based on $150-$200 per GB/day</p>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="h-5 w-5 text-indigo-600" />
              <h4 className="text-lg font-semibold text-indigo-800">QRadar</h4>
            </div>
            
            <div>
              <p className="text-sm text-slate-600 mb-1">Pricing Model:</p>
              <p className="text-slate-700 font-medium mb-4">EPS-based</p>
              
              <p className="text-sm text-slate-600 mb-1">Estimated EPS:</p>
              <p className="text-slate-700 font-medium mb-4">~1,000 EPS</p>
              
              <p className="text-sm text-slate-600 mb-1">Estimated Annual Cost:</p>
              <p className="text-2xl font-bold text-indigo-700 mb-1">
                ${qradarPrice.lowEnd.toLocaleString()} - ${qradarPrice.highEnd.toLocaleString()}
              </p>
              <p className="text-xs text-slate-500">Includes Console + Event Processor</p>
            </div>
          </div>
          
          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="h-5 w-5 text-emerald-600" />
              <h4 className="text-lg font-semibold text-emerald-800">Elastic Stack</h4>
            </div>
            
            <div>
              <p className="text-sm text-slate-600 mb-1">Pricing Models:</p>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-700 font-medium">Free Version (Self-hosted)</p>
                  <p className="text-xl font-bold text-emerald-700">$0</p>
                  <p className="text-xs text-slate-500">Requires self-hosting and tuning</p>
                </div>
                
                <div>
                  <p className="text-slate-700 font-medium">Elastic Security Standard</p>
                  <p className="text-xl font-bold text-emerald-700">
                    ${elasticPaidPrice.lowEnd.toLocaleString()} - ${elasticPaidPrice.highEnd.toLocaleString()}
                  </p>
                  <p className="text-xs text-slate-500">Based on $20-$25 per GB/day</p>
                </div>
                
                <div>
                  <p className="text-slate-700 font-medium">Elastic Cloud</p>
                  <p className="text-xl font-bold text-emerald-700">${elasticCloudPrice.toLocaleString()}/month</p>
                  <p className="text-xs text-slate-500">Based on storage needs with {retentionDays} days retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
          <h4 className="text-md font-medium text-amber-800 mb-2">Additional Cost Considerations</h4>
          <ul className="space-y-1 text-amber-700">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">⚠</span>
              <span><strong>Hardware costs:</strong> Self-hosted solutions require additional infrastructure investment</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">⚠</span>
              <span><strong>Staff expertise:</strong> More complex solutions require more skilled personnel</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">⚠</span>
              <span><strong>Add-on costs:</strong> QRadar may require additional modules for full functionality</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">⚠</span>
              <span><strong>Maintenance overhead:</strong> Open-source solutions have lower license costs but higher maintenance costs</span>
            </li>
          </ul>
        </div>
      </Card>
    </section>
  );
};