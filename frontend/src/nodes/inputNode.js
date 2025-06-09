import { useState } from 'react';
import BaseNode from './BaseNode';

const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      title="Input"
      outputs={[{ id: `${id}-value`, position: 'right' }]}
    >
      <div className="space-y-3">
        <div className="group">
          <label className="block text-xs font-medium text-gray-400 mb-1">INPUT NAME</label>
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all group-hover:border-gray-600"
          />
        </div>

        <div className="group">
          <label className="block text-xs font-medium text-gray-400 mb-1">INPUT TYPE</label>
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all group-hover:border-gray-600"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};

export default InputNode;