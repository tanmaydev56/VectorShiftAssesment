import { useState } from 'react';
import BaseNode from './BaseNode';

const ToggleNode = ({ id, data }) => {
  const [isOn, setIsOn] = useState(data?.value || false);

  return (
    <BaseNode
      title="Toggle"
      outputs={[
        { id: `${id}-value`, position: 'right' },
        { id: `${id}-on`, position: 'right', style: { top: '70%' } },
        { id: `${id}-off`, position: 'right', style: { top: '30%' } },
      ]}
    >
      <div className="flex justify-center py-2">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isOn}
            onChange={() => setIsOn(!isOn)}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-400 peer-focus:ring-2 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
          <span className="ml-2 text-sm">{isOn ? 'ON' : 'OFF'}</span>
        </label>
      </div>
    </BaseNode>
  );
};

export default ToggleNode;