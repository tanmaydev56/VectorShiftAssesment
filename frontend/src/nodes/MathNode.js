import { useState } from 'react';
import BaseNode from './BaseNode';

const MathNode = ({ id }) => {
  const [operation, setOperation] = useState('add');

  return (
    <BaseNode
      title="Math Operation"
      inputs={[
        { id: `${id}-a`, position: 'left', style: { top: '30%' } },
        { id: `${id}-b`, position: 'left', style: { top: '70%' } },
      ]}
      outputs={[{ id: `${id}-result`, position: 'right' }]}
    >
      <div className="group">
        <label className="block text-xs font-medium text-gray-400 mb-1">OPERATION</label>
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all group-hover:border-gray-600"
        >
          <option value="add">A + B</option>
          <option value="subtract">A - B</option>
          <option value="multiply">A × B</option>
          <option value="divide">A ÷ B</option>
        </select>
      </div>
    </BaseNode>
  );
};

export default MathNode;