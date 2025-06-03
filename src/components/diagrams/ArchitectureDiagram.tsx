import React from 'react';

interface ArchitectureDiagramProps {
  type: 'splunk' | 'qradar' | 'elastic';
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ type }) => {
  return (
    <div className="w-full bg-white p-4 rounded-lg border border-slate-200">
      {type === 'splunk' && (
        <div className="w-full h-64 flex items-center justify-center">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
              </marker>
            </defs>

            {/* Search Head Cluster */}
            <rect x="100" y="50" width="120" height="60" rx="5" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
            <text x="160" y="85" textAnchor="middle" fill="#1e40af" fontWeight="bold">Search Head</text>
            <text x="160" y="100" textAnchor="middle" fill="#1e40af" fontSize="12">Cluster</text>

            {/* Deployment Server */}
            <rect x="340" y="50" width="120" height="60" rx="5" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
            <text x="400" y="85" textAnchor="middle" fill="#1e40af" fontWeight="bold">Deployment</text>
            <text x="400" y="100" textAnchor="middle" fill="#1e40af" fontSize="12">Server</text>

            {/* Cluster Master */}
            <rect x="580" y="50" width="120" height="60" rx="5" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
            <text x="640" y="85" textAnchor="middle" fill="#1e40af" fontWeight="bold">Cluster</text>
            <text x="640" y="100" textAnchor="middle" fill="#1e40af" fontSize="12">Master</text>

            {/* Indexers */}
            <rect x="100" y="200" width="100" height="60" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="150" y="235" textAnchor="middle" fill="#1e40af" fontWeight="bold">Indexer 1</text>

            <rect x="220" y="200" width="100" height="60" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="270" y="235" textAnchor="middle" fill="#1e40af" fontWeight="bold">Indexer 2</text>

            <rect x="340" y="200" width="100" height="60" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="390" y="235" textAnchor="middle" fill="#1e40af" fontWeight="bold">Indexer 3</text>

            {/* Forwarders */}
            <rect x="100" y="320" width="340" height="40" rx="5" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
            <text x="270" y="345" textAnchor="middle" fill="#1e40af" fontWeight="bold">Universal Forwarders</text>

            {/* Connections */}
            <line x1="160" y1="110" x2="160" y2="200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="400" y1="110" x2="400" y2="200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="640" y1="110" x2="390" y2="200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="270" y1="320" x2="270" y2="260" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

            <line x1="220" y1="80" x2="340" y2="80" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="460" y1="80" x2="580" y2="80" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          </svg>
        </div>
      )}

      {type === 'qradar' && (
        <div className="w-full h-64 flex items-center justify-center">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <defs>
              <marker id="arrow-q" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
              </marker>
            </defs>

            {/* Console HA */}
            <rect x="250" y="50" width="120" height="60" rx="5" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="310" y="75" textAnchor="middle" fill="#4338ca" fontWeight="bold">Console</text>
            <text x="310" y="90" textAnchor="middle" fill="#4338ca" fontSize="12">Primary</text>

            <rect x="430" y="50" width="120" height="60" rx="5" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="490" y="75" textAnchor="middle" fill="#4338ca" fontWeight="bold">Console</text>
            <text x="490" y="90" textAnchor="middle" fill="#4338ca" fontSize="12">Secondary</text>

            <line x1="370" y1="80" x2="430" y2="80" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
            <text x="400" y="65" textAnchor="middle" fill="#4338ca" fontSize="12">HA Pair</text>

            {/* Event Processors */}
            <rect x="150" y="180" width="120" height="60" rx="5" fill="#c7d2fe" stroke="#6366f1" strokeWidth="2" />
            <text x="210" y="210" textAnchor="middle" fill="#4338ca" fontWeight="bold">Event</text>
            <text x="210" y="225" textAnchor="middle" fill="#4338ca" fontSize="12">Processor 1</text>

            <rect x="310" y="180" width="120" height="60" rx="5" fill="#c7d2fe" stroke="#6366f1" strokeWidth="2" />
            <text x="370" y="210" textAnchor="middle" fill="#4338ca" fontWeight="bold">Event</text>
            <text x="370" y="225" textAnchor="middle" fill="#4338ca" fontSize="12">Processor 2</text>

            {/* Data Node */}
            <rect x="530" y="180" width="120" height="60" rx="5" fill="#c7d2fe" stroke="#6366f1" strokeWidth="2" />
            <text x="590" y="210" textAnchor="middle" fill="#4338ca" fontWeight="bold">Data Node</text>
            <text x="590" y="225" textAnchor="middle" fill="#4338ca" fontSize="12">(Storage)</text>

            {/* Flow Collector */}
            <rect x="150" y="300" width="120" height="60" rx="5" fill="#c7d2fe" stroke="#6366f1" strokeWidth="2" />
            <text x="210" y="330" textAnchor="middle" fill="#4338ca" fontWeight="bold">Flow</text>
            <text x="210" y="345" textAnchor="middle" fill="#4338ca" fontSize="12">Collector</text>

            {/* Log Sources */}
            <rect x="310" y="300" width="340" height="60" rx="5" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="480" y="330" textAnchor="middle" fill="#4338ca" fontWeight="bold">Log Sources</text>
            <text x="480" y="345" textAnchor="middle" fill="#4338ca" fontSize="12">(Servers, Network Devices, etc.)</text>

            {/* Connections */}
            <line x1="310" y1="110" x2="210" y2="180" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-q)" />
            <line x1="310" y1="110" x2="370" y2="180" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-q)" />
            <line x1="490" y1="110" x2="590" y2="180" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-q)" />
            
            <line x1="210" y1="240" x2="210" y2="300" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-q)" />
            <line x1="370" y1="240" x2="370" y2="300" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-q)" />

            <line x1="470" y1="330" x2="270" y2="330" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-q)" />
          </svg>
        </div>
      )}

      {type === 'elastic' && (
        <div className="w-full h-64 flex items-center justify-center">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <defs>
              <marker id="arrow-e" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
              </marker>
            </defs>

            {/* Master Nodes */}
            <rect x="100" y="50" width="100" height="60" rx="5" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
            <text x="150" y="75" textAnchor="middle" fill="#065f46" fontWeight="bold">Master</text>
            <text x="150" y="90" textAnchor="middle" fill="#065f46" fontSize="12">Node 1</text>

            <rect x="220" y="50" width="100" height="60" rx="5" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
            <text x="270" y="75" textAnchor="middle" fill="#065f46" fontWeight="bold">Master</text>
            <text x="270" y="90" textAnchor="middle" fill="#065f46" fontSize="12">Node 2</text>

            <rect x="340" y="50" width="100" height="60" rx="5" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
            <text x="390" y="75" textAnchor="middle" fill="#065f46" fontWeight="bold">Master</text>
            <text x="390" y="90" textAnchor="middle" fill="#065f46" fontSize="12">Node 3</text>

            {/* Kibana Nodes */}
            <rect x="500" y="50" width="100" height="60" rx="5" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
            <text x="550" y="75" textAnchor="middle" fill="#065f46" fontWeight="bold">Kibana</text>
            <text x="550" y="90" textAnchor="middle" fill="#065f46" fontSize="12">Node 1</text>

            <rect x="620" y="50" width="100" height="60" rx="5" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
            <text x="670" y="75" textAnchor="middle" fill="#065f46" fontWeight="bold">Kibana</text>
            <text x="670" y="90" textAnchor="middle" fill="#065f46" fontSize="12">Node 2</text>

            {/* Data Nodes */}
            <rect x="100" y="170" width="120" height="60" rx="5" fill="#a7f3d0" stroke="#10b981" strokeWidth="2" />
            <text x="160" y="200" textAnchor="middle" fill="#065f46" fontWeight="bold">Data Node</text>
            <text x="160" y="215" textAnchor="middle" fill="#065f46" fontSize="12">Hot/Warm</text>

            <rect x="240" y="170" width="120" height="60" rx="5" fill="#a7f3d0" stroke="#10b981" strokeWidth="2" />
            <text x="300" y="200" textAnchor="middle" fill="#065f46" fontWeight="bold">Data Node</text>
            <text x="300" y="215" textAnchor="middle" fill="#065f46" fontSize="12">Hot/Warm</text>

            <rect x="380" y="170" width="120" height="60" rx="5" fill="#a7f3d0" stroke="#10b981" strokeWidth="2" />
            <text x="440" y="200" textAnchor="middle" fill="#065f46" fontWeight="bold">Data Node</text>
            <text x="440" y="215" textAnchor="middle" fill="#065f46" fontSize="12">Cold</text>

            {/* Ingest Nodes / Logstash */}
            <rect x="150" y="280" width="140" height="60" rx="5" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
            <text x="220" y="310" textAnchor="middle" fill="#065f46" fontWeight="bold">Logstash</text>
            <text x="220" y="325" textAnchor="middle" fill="#065f46" fontSize="12">or Ingest Nodes</text>

            {/* Beats */}
            <rect x="350" y="280" width="300" height="60" rx="5" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
            <text x="500" y="310" textAnchor="middle" fill="#065f46" fontWeight="bold">Beats</text>
            <text x="500" y="325" textAnchor="middle" fill="#065f46" fontSize="12">(Filebeat, Metricbeat, etc.)</text>

            {/* Load Balancer */}
            <rect x="520" y="170" width="180" height="30" rx="5" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
            <text x="610" y="190" textAnchor="middle" fill="#065f46" fontWeight="bold">Load Balancer</text>

            {/* Connections */}
            <line x1="220" y1="310" x2="160" y2="230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-e)" />
            <line x1="220" y1="310" x2="300" y2="230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-e)" />
            <line x1="220" y1="310" x2="440" y2="230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-e)" />
            
            <line x1="500" y1="280" x2="500" y2="235" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-e)" />
            
            <line x1="610" y1="170" x2="610" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-e)" />
            
            <line x1="200" y1="110" x2="200" y2="170" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-e)" />
            <line x1="270" y1="110" x2="270" y2="170" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-e)" />
            <line x1="340" y1="110" x2="340" y2="170" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-e)" />
          </svg>
        </div>
      )}
    </div>
  );
};