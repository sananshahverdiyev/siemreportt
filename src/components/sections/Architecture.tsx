import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Tabs } from '../ui/Tabs';
import { ArchitectureDiagram } from '../diagrams/ArchitectureDiagram';

export const Architecture: React.FC = () => {
  const [activeTab, setActiveTab] = useState('splunk');

  return (
    <section id="architecture" className="py-8 scroll-mt-24">
      <SectionTitle 
        title="Architecture & Cluster Design (HA)" 
        emoji="🛠️" 
        description="Recommended high-availability cluster architectures for each SIEM platform."
      />
      
      <Tabs
        tabs={[
          { id: 'splunk', label: 'Splunk' },
          { id: 'qradar', label: 'QRadar' },
          { id: 'elastic', label: 'Elastic Stack' }
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      
      <Card className="mt-6 p-6">
        {activeTab === 'splunk' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-700">Splunk Indexer Cluster (HA)</h3>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/2">
                <ArchitectureDiagram type="splunk" />
              </div>
              
              <div className="md:w-1/2 mt-6 md:mt-0">
                <h4 className="text-lg font-medium text-slate-800 mb-3">Recommended Configuration</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>3 Indexers</strong> (RF=2, SF=2)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>1 Cluster Master</strong> (optional in small setups but recommended)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>2 Search Heads</strong> (HA via Search Head Clustering)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>1 Deployment Server</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Forwarders:</strong> Heavy or Universal Forwarders on log sources</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium text-slate-800 mb-3">Resource Requirements (per node)</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Node Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">CPU</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">RAM</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Storage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-slate-700">Indexer</td>
                      <td className="px-4 py-3 text-sm text-slate-700">16–32 CPU</td>
                      <td className="px-4 py-3 text-sm text-slate-700">64–128 GB RAM</td>
                      <td className="px-4 py-3 text-sm text-slate-700">2 TB SSD</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-slate-700">Search Head</td>
                      <td className="px-4 py-3 text-sm text-slate-700">16 CPU</td>
                      <td className="px-4 py-3 text-sm text-slate-700">64 GB RAM</td>
                      <td className="px-4 py-3 text-sm text-slate-700">500 GB SSD</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-slate-700">Master/Deployment</td>
                      <td className="px-4 py-3 text-sm text-slate-700">8 CPU</td>
                      <td className="px-4 py-3 text-sm text-slate-700">32 GB RAM</td>
                      <td className="px-4 py-3 text-sm text-slate-700">200 GB SSD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'qradar' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-indigo-700">QRadar Architecture (HA)</h3>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/2">
                <ArchitectureDiagram type="qradar" />
              </div>
              
              <div className="md:w-1/2 mt-6 md:mt-0">
                <h4 className="text-lg font-medium text-slate-800 mb-3">Recommended Configuration</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span><strong>1 Console</strong> (Primary + Secondary via HA pair)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span><strong>2 Event Processors</strong> (HA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span><strong>1 Data Node</strong> (optional; for log storage offload)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span><strong>Flow Collector</strong> (if needed)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium text-slate-800 mb-3">Resource Requirements (per node)</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Node Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">CPU</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">RAM</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Storage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-slate-700">Console</td>
                      <td className="px-4 py-3 text-sm text-slate-700">8–16 CPU</td>
                      <td className="px-4 py-3 text-sm text-slate-700">32–64 GB RAM</td>
                      <td className="px-4 py-3 text-sm text-slate-700">500 GB SSD</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-slate-700">Event Processor</td>
                      <td className="px-4 py-3 text-sm text-slate-700">16 CPU</td>
                      <td className="px-4 py-3 text-sm text-slate-700">64–128 GB RAM</td>
                      <td className="px-4 py-3 text-sm text-slate-700">2 TB fast disk</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-slate-700">Data Node</td>
                      <td className="px-4 py-3 text-sm text-slate-700">8 CPU</td>
                      <td className="px-4 py-3 text-sm text-slate-700">64 GB RAM</td>
                      <td className="px-4 py-3 text-sm text-slate-700">2 TB high IOPS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'elastic' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-emerald-700">Elastic Stack (SIEM Free + Commercial)</h3>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/2">
                <ArchitectureDiagram type="elastic" />
              </div>
              
              <div className="md:w-1/2 mt-6 md:mt-0">
                <h4 className="text-lg font-medium text-slate-800 mb-3">Recommended Configuration</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span><strong>3 Master-eligible nodes</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span><strong>2+ Data nodes</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span><strong>2 Ingest nodes</strong> (optional if Logstash is used)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span><strong>2 Kibana nodes</strong> (behind load balancer)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium text-slate-800 mb-3">Resource Requirements (per node)</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Node Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">CPU</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">RAM</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Storage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-slate-700">Master node</td>
                      <td className="px-4 py-3 text-sm text-slate-700">4 CPU</td>
                      <td className="px-4 py-3 text-sm text-slate-700">16 GB RAM</td>
                      <td className="px-4 py-3 text-sm text-slate-700">100 GB SSD</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-slate-700">Data node</td>
                      <td className="px-4 py-3 text-sm text-slate-700">16–32 CPU</td>
                      <td className="px-4 py-3 text-sm text-slate-700">64–128 GB RAM</td>
                      <td className="px-4 py-3 text-sm text-slate-700">2 TB SSD</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-slate-700">Logstash</td>
                      <td className="px-4 py-3 text-sm text-slate-700">8 CPU</td>
                      <td className="px-4 py-3 text-sm text-slate-700">32 GB RAM</td>
                      <td className="px-4 py-3 text-sm text-slate-700">100 GB SSD</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-slate-700">Kibana</td>
                      <td className="px-4 py-3 text-sm text-slate-700">4–8 CPU</td>
                      <td className="px-4 py-3 text-sm text-slate-700">16–32 GB RAM</td>
                      <td className="px-4 py-3 text-sm text-slate-700">100 GB SSD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <h4 className="text-md font-medium text-red-800 mb-2">Free Version Limitations</h4>
              <ul className="space-y-1 text-red-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠</span>
                  <span>No machine learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠</span>
                  <span>No case management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠</span>
                  <span>No alerting via Watcher (use Open Distro or community plugins)</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
};