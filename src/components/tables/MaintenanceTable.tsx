import React from 'react';

export const MaintenanceTable: React.FC = () => {
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
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Ease of Setup</td>
            <td className="px-4 py-3 text-sm text-slate-700">
              <div className="flex items-center">
                <div className="relative w-16 bg-slate-200 h-3 rounded-full overflow-hidden mr-2">
                  <div className="absolute top-0 left-0 h-full bg-blue-500 w-[70%]"></div>
                </div>
                <span>Moderate</span>
              </div>
            </td>
            <td className="px-4 py-3 text-sm text-slate-700">
              <div className="flex items-center">
                <div className="relative w-16 bg-slate-200 h-3 rounded-full overflow-hidden mr-2">
                  <div className="absolute top-0 left-0 h-full bg-indigo-500 w-[85%]"></div>
                </div>
                <span>Easy (appliance style)</span>
              </div>
            </td>
            <td className="px-4 py-3 text-sm text-slate-700">
              <div className="flex items-center">
                <div className="relative w-16 bg-slate-200 h-3 rounded-full overflow-hidden mr-2">
                  <div className="absolute top-0 left-0 h-full bg-emerald-500 w-[40%]"></div>
                </div>
                <span>Moderate to High</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Customization</td>
            <td className="px-4 py-3 text-sm text-slate-700">
              <div className="flex items-center">
                <div className="relative w-16 bg-slate-200 h-3 rounded-full overflow-hidden mr-2">
                  <div className="absolute top-0 left-0 h-full bg-blue-500 w-[75%]"></div>
                </div>
                <span>Medium</span>
              </div>
            </td>
            <td className="px-4 py-3 text-sm text-slate-700">
              <div className="flex items-center">
                <div className="relative w-16 bg-slate-200 h-3 rounded-full overflow-hidden mr-2">
                  <div className="absolute top-0 left-0 h-full bg-indigo-500 w-[50%]"></div>
                </div>
                <span>Limited</span>
              </div>
            </td>
            <td className="px-4 py-3 text-sm text-slate-700">
              <div className="flex items-center">
                <div className="relative w-16 bg-slate-200 h-3 rounded-full overflow-hidden mr-2">
                  <div className="absolute top-0 left-0 h-full bg-emerald-500 w-[95%]"></div>
                </div>
                <span>High</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Updates & Patch</td>
            <td className="px-4 py-3 text-sm text-slate-700">Managed via GUI</td>
            <td className="px-4 py-3 text-sm text-slate-700">IBM update server</td>
            <td className="px-4 py-3 text-sm text-slate-700">Manual or via automation</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">HA Management</td>
            <td className="px-4 py-3 text-sm text-slate-700">Mature</td>
            <td className="px-4 py-3 text-sm text-slate-700">Requires HA configuration</td>
            <td className="px-4 py-3 text-sm text-slate-700">Requires experience (cluster tuning)</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Community</td>
            <td className="px-4 py-3 text-sm text-slate-700">Strong</td>
            <td className="px-4 py-3 text-sm text-slate-700">IBM Partner Ecosystem</td>
            <td className="px-4 py-3 text-sm text-slate-700">Strong Open Source Community</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Documentation</td>
            <td className="px-4 py-3 text-sm text-slate-700">Excellent</td>
            <td className="px-4 py-3 text-sm text-slate-700">Good</td>
            <td className="px-4 py-3 text-sm text-slate-700">Extensive but fragmented</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm font-medium text-slate-800">Backup/Recovery</td>
            <td className="px-4 py-3 text-sm text-slate-700">Built-in tools</td>
            <td className="px-4 py-3 text-sm text-slate-700">Built-in appliance backup</td>
            <td className="px-4 py-3 text-sm text-slate-700">Snapshot-based (manual setup)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};