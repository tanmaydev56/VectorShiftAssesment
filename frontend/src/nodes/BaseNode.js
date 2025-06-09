import { Handle, Position } from 'reactflow';

const positionMap = {
  left: Position.Left,
  right: Position.Right,
  top: Position.Top,
  bottom: Position.Bottom,
};

const BaseNode = ({ title, inputs = [], outputs = [], children, titleClassName = "", nodeClassName = "" }) => {
  return (
    <div className={`w-64 rounded-xl p-3 backdrop-blur-sm bg-gray-900/80 border border-gray-700 shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 transition-all ${nodeClassName}`}>
      <div className={`text-sm font-medium mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent ${titleClassName}`}>
        {title}
      </div>

      {inputs.map((handle, idx) => (
        <Handle
          key={`input-${handle.id}-${idx}`}
          type="target"
          position={positionMap[handle.position || 'left']}
          id={handle.id}
          style={{ backgroundColor: '#3b82f6', width: 10, height: 10, ...handle.style }}
        />
      ))}

      <div className="space-y-3">
        {children}
      </div>

      {outputs.map((handle, idx) => (
        <Handle
          key={`output-${handle.id}-${idx}`}
          type="source"
          position={positionMap[handle.position || 'right']}
          id={handle.id}
          style={{ backgroundColor: '#10b981', width: 10, height: 10, ...handle.style }}
        />
      ))}
    </div>
  );
};

export default BaseNode;