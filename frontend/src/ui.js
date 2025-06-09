import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import InputNode from './nodes/inputNode';
import LLMNode from './nodes/llmNode';
import OutputNode from './nodes/outputNode';
import TextNode from './nodes/textNode';
import SliderNode from './nodes/Slider';
import ToggleNode from './nodes/Toogle';
import DelayNode from './nodes/Delay';
import MathNode from './nodes/MathNode';
import APICallNode from './nodes/ApiCallNode';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  slider: SliderNode,       
  toggle: ToggleNode,
  delay: DelayNode,
  math: MathNode,
  apiCall: APICallNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  }

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData('application/reactflow')) {
        const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
        const type = appData?.nodeType;
  
       
        if (typeof type === 'undefined' || !type) {
          return;
        }
  
        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };
  
        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div className="h-full w-full  bg-gray-900  overflow-hidden">
      <div 
        ref={reactFlowWrapper} 
        className="w-full h-full"
        style={{ height: '70vh' }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
          connectionLineStyle={{ stroke: '#3b82f6', strokeWidth: 2 }}
          defaultEdgeOptions={{
            style: { stroke: '#4b5563', strokeWidth: 2 },
            animated: true,
            type: 'smoothstep',
          }}
          fitView
        >
          <Background 
             
            gap={gridSize} 
            className="opacity-100"
            variant="dots"
          />
        <Controls
className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 transition-all p-1"
  position="top-right"

/>
          <MiniMap 
            className="bg-gray-800/80 border border-gray-700 rounded-lg shadow-lg"
            nodeColor={(node) => {
              if (node.type === 'llm') return '#8b5cf6';
              if (node.type === 'customInput') return '#10b981';
              if (node.type === 'customOutput') return '#ef4444';
              return '#3b82f6';
            }}
            nodeStrokeWidth={3}
            maskColor="#1f2937"
            style={{ width: 150, height: 100 }}
          />
        </ReactFlow>
      </div>
    </div>
  )
}