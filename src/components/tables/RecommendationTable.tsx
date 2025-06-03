import React from 'react';

export const RecommendationTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-200">
        <thead>
          <tr className="bg-slate-50">
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">SIEM</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700"># Servers (Min)</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Total RAM</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">CPU</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Disk (Fast SSD)</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Suitability</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          <tr className="bg-blue-50">
            <td className="px-4 py-3 text-sm font-medium text-blue-800">Splunk</td>
            <td className="px-4 py-3 text-sm text-slate-700">7–8</td>
            <td className="px-4 py-3 text-sm text-slate-700">~512 GB</td>
            <td className="px-4 py-3 text-sm text-slate-700">~120 vCPU</td>
            <td className="px-4 py-3 text-sm text-slate-700">8–12 TB</td>
            <td className="px-4 py-3 text-sm text-slate-700">Enterprise-ready, simple scaling</td>
          </tr>
          <tr className="bg-indigo-50">
            <td className="px-4 py-3 text-sm font-medium text-indigo-800">QRadar</td>
            <td className="px-4 py-3 text-sm text-slate-700">5–6</td>
            <td className="px-4 py-3 text-sm text-slate-700">~384 GB</td>
            <td className="px-4 py-3 text-sm text-slate-700">~100 vCPU</td>
            <td className="px-4 py-3 text-sm text-slate-700">8 TB</td>
            <td className="px-4 py-3 text-sm text-slate-700">Easy to deploy, IBM support</td>
          </tr>
          <tr className="bg-emerald-50">
            <td className="px-4 py-3 text-sm font-medium text-emerald-800">Elastic</td>
            <td className="px-4 py-3 text-sm text-slate-700">6–9</td>
            <td className="px-4 py-3 text-sm text-slate-700">~384–512 GB</td>
            <td className="px-4 py-3 text-sm text-slate-700">~120 vCPU</td>
            <td className="px-4 py-3 text-sm text-slate-700">12–15 TB</td>
            <td className="px-4 py-3 text-sm text-slate-700">Cost-efficient, high flexibility</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-4 p-4 bg-slate-50 rounded text-sm text-slate-600">
        <p>
          <strong>Note:</strong> These requirements are for a high-availability setup handling 300GB/week (~43GB/day) with 90-day retention. 
          Storage requirements may vary based on compression rates and retention policies.
        </p>
      </div>
    </div>
  );
};