import React from 'react';

export const PerformanceTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-200">
        <thead>
          <tr className="bg-slate-50">
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 w-1/4">Feature</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Splunk</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700">QRadar</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-700">Elastic Stack</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Ingestion Rate</td>
            <td className="px-4 py-3 text-sm text-slate-700">
              <div className="flex items-center">
                <span className="font-medium text-blue-700 mr-2">High</span>
                <span>(uses Indexers)</span>
              </div>
            </td>
            <td className="px-4 py-3 text-sm text-slate-700">
              <div className="flex items-center">
                <span className="font-medium text-indigo-700 mr-2">Medium</span>
                <span>(batch-style)</span>
              </div>
            </td>
            <td className="px-4 py-3 text-sm text-slate-700">
              <div className="flex items-center">
                <span className="font-medium text-emerald-700 mr-2">High</span>
                <span>(scales horizontally)</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Query Speed</td>
            <td className="px-4 py-3 text-sm text-slate-700">Fast, optimized</td>
            <td className="px-4 py-3 text-sm text-slate-700">Fast for recent data</td>
            <td className="px-4 py-3 text-sm text-slate-700">Fast with well-designed mappings</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Real-Time Alerting</td>
            <td className="px-4 py-3 text-sm text-slate-700">Yes</td>
            <td className="px-4 py-3 text-sm text-slate-700">Yes</td>
            <td className="px-4 py-3 text-sm text-slate-700">
              <div className="flex items-center">
                <span className="mr-2">Yes (paid) /</span>
                <span className="text-red-600">No (free)</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Machine Learning</td>
            <td className="px-4 py-3 text-sm text-slate-700">Yes</td>
            <td className="px-4 py-3 text-sm text-slate-700">Yes</td>
            <td className="px-4 py-3 text-sm text-slate-700">Only in paid tier</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Custom Parsing</td>
            <td className="px-4 py-3 text-sm text-slate-700">GUI-based & regex</td>
            <td className="px-4 py-3 text-sm text-slate-700">DSM mapping</td>
            <td className="px-4 py-3 text-sm text-slate-700">Flexible with grok, ingest pipeline</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Dashboards</td>
            <td className="px-4 py-3 text-sm text-slate-700">Advanced</td>
            <td className="px-4 py-3 text-sm text-slate-700">Limited design</td>
            <td className="px-4 py-3 text-sm text-slate-700">Highly customizable</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Correlation Capabilities</td>
            <td className="px-4 py-3 text-sm text-slate-700">Strong (SPL)</td>
            <td className="px-4 py-3 text-sm text-slate-700">Very strong (built-in)</td>
            <td className="px-4 py-3 text-sm text-slate-700">Moderate (requires custom rules)</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Data Source Support</td>
            <td className="px-4 py-3 text-sm text-slate-700">Extensive</td>
            <td className="px-4 py-3 text-sm text-slate-700">Good (DSM-based)</td>
            <td className="px-4 py-3 text-sm text-slate-700">Extensive (via Beats/Logstash)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};