import { useState } from 'react';
import BaseNode from './BaseNode';

const APICallNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');
  const [method, setMethod] = useState(data?.method || 'GET');

  const methodColors = {
    GET: 'bg-emerald-500/20 text-emerald-400 border-emerald-500',
    POST: 'bg-blue-500/20 text-blue-400 border-blue-500',
    PUT: 'bg-amber-500/20 text-amber-400 border-amber-500',
    DELETE: 'bg-red-500/20 text-red-400 border-red-500',
  };

  return (
    <BaseNode
      title="API Call"
      inputs={[{ id: `${id}-trigger`, position: 'left' }]}
      outputs={[{ id: `${id}-response`, position: 'right' }]}
    >
      <div className="space-y-3">
        <div className="group">
          <label className="block text-xs font-medium text-gray-400 mb-1">ENDPOINT URL</label>
          <div className="relative">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all group-hover:border-gray-600"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">HTTP METHOD</label>
          <div className="grid grid-cols-3 gap-2">
            {['GET', 'POST', 'PUT'].map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`${methodColors[m]} ${method === m ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-blue-400' : ''} border rounded-lg py-1.5 text-xs font-medium transition-all hover:brightness-110`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>
    </BaseNode>
  );
};

export default APICallNode;