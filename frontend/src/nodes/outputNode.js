import { useState } from 'react';
import BaseNode from './BaseNode';

const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      title="Output"
      inputs={[{ id: `${id}-value`, position: 'left' }]}
    >
      <div className="space-y-3">
        <div className="group">
          <label className="block text-xs font-medium text-gray-400 mb-1">OUTPUT NAME</label>
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all group-hover:border-gray-600"
          />
        </div>

        <div className="group">
          <label className="block text-xs font-medium text-gray-400 mb-1">OUTPUT TYPE</label>
          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all group-hover:border-gray-600"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};

export default OutputNode;