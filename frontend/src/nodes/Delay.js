import { useState } from 'react';
import BaseNode from './BaseNode';

const DelayNode = ({ id, data }) => {
  const [delaySec, setDelaySec] = useState(data?.delay || 1);

  return (
    <BaseNode
      title="Delay"
      inputs={[{ id: `${id}-trigger`, position: 'left' }]}
      outputs={[{ id: `${id}-output`, position: 'right' }]}
    >
      <div className="group">
        <label className="block text-xs font-medium text-gray-400 mb-1">DELAY SECONDS</label>
        <input
          type="number"
          min="0.1"
          step="0.1"
          value={delaySec}
          onChange={(e) => setDelaySec(e.target.value)}
          className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all group-hover:border-gray-600"
        />
      </div>
    </BaseNode>
  );
};

export default DelayNode;