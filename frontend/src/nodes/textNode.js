import { useState } from 'react';
import BaseNode from './BaseNode';

const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode
      title="Text"
      outputs={[{ id: `${id}-output`, position: 'right' }]}
    >
      <label className="block text-sm">
        Text:
        <input
          type="text"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          className="border rounded w-full px-2 py-1 mt-1 text-sm"
        />
      </label>
    </BaseNode>
  );
};

export default TextNode;
