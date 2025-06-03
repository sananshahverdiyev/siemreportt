import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { MaintenanceTable } from '../tables/MaintenanceTable';

export const Maintenance: React.FC = () => {
  return (
    <section id="maintenance" className="py-8 scroll-mt-24">
      <SectionTitle 
        title="Maintenance & Operational Overhead" 
        emoji="⚙️" 
        description="Comparison of ongoing maintenance requirements and operational considerations."
      />
      
      <Card className="mt-6 p-6">
        <MaintenanceTable />
        
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Detailed Maintenance Considerations</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-md font-medium text-blue-700 mb-2">Splunk Maintenance</h4>
                <div className="space-y-3">
                  <p className="text-slate-700">
                    Splunk's maintenance is streamlined through its deployment server and web interface. 
                    Updates can be applied through the GUI, and many configuration changes can be done without 
                    server restarts. However, Splunk requires regular optimization of:
                  </p>
                  <ul className="list-disc pl-5 text-slate-700 space-y-1">
                    <li>Search head dispatch directory (temp files)</li>
                    <li>Index buckets and rolling policy</li>
                    <li>Summary indexes and accelerations</li>
                    <li>Knowledge objects and permissions</li>
                  </ul>
                  <p className="text-slate-700">
                    For HA environments, the cluster master simplifies management but adds complexity during upgrades, 
                    which must be done in a specific order to maintain availability.
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-indigo-700 mb-2">QRadar Maintenance</h4>
                <div className="space-y-3">
                  <p className="text-slate-700">
                    QRadar is designed as an appliance-based solution which makes maintenance more straightforward. 
                    Updates are managed through the IBM update server, and the system applies patches in a 
                    controlled manner. Key maintenance tasks include:
                  </p>
                  <ul className="list-disc pl-5 text-slate-700 space-y-1">
                    <li>Regular backup of configuration</li>
                    <li>DSM updates for new log sources</li>
                    <li>Tuning correlation rules</li>
                    <li>Managing disk usage and data retention</li>
                  </ul>
                  <p className="text-slate-700">
                    QRadar's HA setup requires specific configuration but operates smoothly once established. 
                    IBM's support structure provides assistance for complex issues.
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-emerald-700 mb-2">Elastic Stack Maintenance</h4>
                <div className="space-y-3">
                  <p className="text-slate-700">
                    Elastic Stack requires the most hands-on maintenance of the three solutions, especially 
                    in the open-source variant. Administrators need to manage:
                  </p>
                  <ul className="list-disc pl-5 text-slate-700 space-y-1">
                    <li>Cluster health (shard allocation, node failures)</li>
                    <li>Index lifecycle management</li>
                    <li>Manual upgrades across components</li>
                    <li>JVM tuning and memory management</li>
                    <li>Kibana saved objects migration</li>
                  </ul>
                  <p className="text-slate-700">
                    The enterprise version eases some of this burden through better tooling and support, 
                    but still requires more technical expertise than the other platforms. Automation tools 
                    like Ansible or Puppet are highly recommended for Elastic Stack deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Operational Impact Assessment</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-md font-medium text-slate-700 mb-2">Time Commitment</h4>
                <div className="flex items-center">
                  <div className="w-1/3 text-right pr-4">
                    <span className="text-blue-700 font-medium">Splunk</span>
                  </div>
                  <div className="w-2/3">
                    <div className="w-[60%] bg-blue-200 h-4 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-1/3 text-right pr-4">
                    <span className="text-indigo-700 font-medium">QRadar</span>
                  </div>
                  <div className="w-2/3">
                    <div className="w-[40%] bg-indigo-200 h-4 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-1/3 text-right pr-4">
                    <span className="text-emerald-700 font-medium">Elastic (Free)</span>
                  </div>
                  <div className="w-2/3">
                    <div className="w-[85%] bg-emerald-200 h-4 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-1/3 text-right pr-4">
                    <span className="text-emerald-700 font-medium">Elastic (Paid)</span>
                  </div>
                  <div className="w-2/3">
                    <div className="w-[70%] bg-emerald-200 h-4 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-slate-700 mb-2">Required Expertise Level</h4>
                <div className="flex items-center">
                  <div className="w-1/3 text-right pr-4">
                    <span className="text-blue-700 font-medium">Splunk</span>
                  </div>
                  <div className="w-2/3">
                    <div className="w-[70%] bg-blue-200 h-4 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-1/3 text-right pr-4">
                    <span className="text-indigo-700 font-medium">QRadar</span>
                  </div>
                  <div className="w-2/3">
                    <div className="w-[65%] bg-indigo-200 h-4 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-1/3 text-right pr-4">
                    <span className="text-emerald-700 font-medium">Elastic (Free)</span>
                  </div>
                  <div className="w-2/3">
                    <div className="w-[90%] bg-emerald-200 h-4 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-1/3 text-right pr-4">
                    <span className="text-emerald-700 font-medium">Elastic (Paid)</span>
                  </div>
                  <div className="w-2/3">
                    <div className="w-[80%] bg-emerald-200 h-4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};