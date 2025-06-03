import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { PerformanceTable } from '../tables/PerformanceTable';

export const Performance: React.FC = () => {
  return (
    <section id="performance" className="py-8 scroll-mt-24">
      <SectionTitle 
        title="Performance & Scalability" 
        emoji="📈" 
        description="Comparative analysis of performance metrics and scalability factors for each SIEM solution."
      />
      
      <Card className="mt-6 p-6">
        <PerformanceTable />
        
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Performance Deep Dive</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-md font-medium text-blue-700">Splunk Performance</h4>
                <p className="text-slate-700 mt-1">
                  Splunk's architecture excels at horizontal scaling through the addition of indexers. For 300GB/week, 
                  search performance remains excellent with proper summary indexing and accelerated data models. 
                  Splunk's SmartStore can offload cold data to object storage, reducing local storage costs while 
                  maintaining accessibility.
                </p>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-indigo-700">QRadar Performance</h4>
                <p className="text-slate-700 mt-1">
                  QRadar uses a batch-processing approach that can handle high volumes efficiently, though real-time 
                  search performance may be slower than Splunk for historical data. QRadar's strength lies in its 
                  correlation engine, which can process complex rules with minimal latency, making it suitable for 
                  environments where immediate detection is critical.
                </p>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-emerald-700">Elastic Stack Performance</h4>
                <p className="text-slate-700 mt-1">
                  Elasticsearch is extremely fast for well-designed queries and properly mapped indices. The challenge 
                  with Elastic is properly designing the index templates and lifecycle policies to maintain performance 
                  as data grows. With proper hot-warm-cold architecture and ILM policies, Elastic can maintain consistent 
                  performance even at scale.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Scaling Considerations for 300GB/week</h3>
            
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-slate-700 mb-4">
                At 300GB/week, all three platforms can handle the load with proper architecture. The key scaling factors to consider are:
              </p>
              
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  <span><strong>Retention Period:</strong> Longer retention periods will significantly impact storage requirements and may require additional nodes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  <span><strong>Search Concurrency:</strong> High numbers of concurrent users will require more search capacity (more Search Heads for Splunk, more Kibana nodes for Elastic).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  <span><strong>Peak EPS Handling:</strong> Systems should be sized for peak EPS, which could be 2-3x the average rate.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-2">•</span>
                  <span><strong>Future Growth:</strong> Consider building in 30-50% additional capacity for future growth to avoid frequent upgrades.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};