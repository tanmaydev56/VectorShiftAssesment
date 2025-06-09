import BaseNode from './BaseNode';

const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="Large Language Model"
      inputs={[
        { id: `${id}-system`, position: 'left', style: { top: `${100 / 3}%` } },
        { id: `${id}-prompt`, position: 'left', style: { top: `${200 / 3}%` } },
      ]}
      outputs={[{ id: `${id}-response`, position: 'right' }]}
      nodeClassName="border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-blue-900/20"
      titleClassName="from-purple-500 to-blue-400"
    >
      <div className="text-xs text-gray-400 p-2 bg-gray-800/50 rounded-lg">
        Configure your LLM parameters in the settings panel
      </div>
    </BaseNode>
  );
};

export default LLMNode;