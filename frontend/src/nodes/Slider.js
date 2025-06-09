import { useState } from 'react';
import BaseNode from './BaseNode';

const SliderNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value || 50);
  const [min, setMin] = useState(data?.min || 0);
  const [max, setMax] = useState(data?.max || 100);

  return (
    <BaseNode
      title="Slider"
      outputs={[{ id: `${id}-value`, position: 'right' }]}
    >
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">VALUE: {value}</label>
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        <div className="flex space-x-3">
          <div className="group flex-1">
            <label className="block text-xs font-medium text-gray-400 mb-1">MIN</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all group-hover:border-gray-600"
            />
          </div>

          <div className="group flex-1">
            <label className="block text-xs font-medium text-gray-400 mb-1">MAX</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all group-hover:border-gray-600"
            />
          </div>
        </div>
      </div>
    </BaseNode>
  );
};

export default SliderNode;