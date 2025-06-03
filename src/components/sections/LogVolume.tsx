import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { BarChart, Database, Clock } from 'lucide-react';

export const LogVolume: React.FC = () => {
  return (
    <section id="log-volume" className="py-8 scroll-mt-24">
      <SectionTitle 
        title="Log Volume Calculation and Impact" 
        emoji="📦" 
        description="Understanding how 300GB/week of logs affects your SIEM implementation."
      />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="bg-blue-100 p-3 rounded-full mb-4">
            <Database className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Weekly Logs</h3>
          <p className="text-3xl font-bold text-blue-700">300 GB</p>
          <p className="text-slate-600 mt-2">Total log volume per week</p>
        </Card>
        
        <Card className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100">
          <div className="bg-indigo-100 p-3 rounded-full mb-4">
            <Clock className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Daily Average</h3>
          <p className="text-3xl font-bold text-indigo-700">~43 GB</p>
          <p className="text-slate-600 mt-2">Average log volume per day</p>
        </Card>
        
        <Card className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100">
          <div className="bg-emerald-100 p-3 rounded-full mb-4">
            <BarChart className="h-8 w-8 text-emerald-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">EPS Estimate</h3>
          <p className="text-3xl font-bold text-emerald-700">~1,000</p>
          <p className="text-slate-600 mt-2">Events per second (peak)</p>
        </Card>
      </div>

      <Card className="mt-8 p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Impact on SIEM Sizing</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-blue-700 mb-2">Splunk Impact</h4>
            <p className="text-slate-700">
              For Splunk, 43 GB/day requires at least 3 indexers in a cluster with replication factor of 2.
              This volume is in the mid-tier range for Splunk deployments. 
              License costs will be calculated based on this daily ingestion rate.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-indigo-700 mb-2">QRadar Impact</h4>
            <p className="text-slate-700">
              For QRadar, the estimated 1,000 EPS will require appropriate Event Processor appliances. 
              This is a moderate EPS rate that can be handled by a mid-sized QRadar deployment.
              License tiers are based on EPS rates rather than volume.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-emerald-700 mb-2">Elastic Stack Impact</h4>
            <p className="text-slate-700">
              For Elastic Stack, 1.2TB/month will require approximately 3.6TB of raw storage (with 3x factor for
              indices, replicas, and overhead). This volume can be managed with a 3-node cluster with proper
              sharding and index lifecycle policies.
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
          <h4 className="text-md font-medium text-amber-800 mb-2">Important Considerations</h4>
          <p className="text-amber-700">
            Log compression rates, retention periods, and search performance requirements will all affect the final
            architecture. The estimates provided are baseline recommendations that should be adjusted based on your
            specific operational needs.
          </p>
        </div>
      </Card>
    </section>
  );
};