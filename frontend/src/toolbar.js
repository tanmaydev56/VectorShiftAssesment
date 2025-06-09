import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className='p-10'>
      <div className='mt-[20px] flex flex-wrap gap-[10px]'>
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
        <DraggableNode type='slider' label='Slider' />
        <DraggableNode type='toggle' label='Toggle' />
        <DraggableNode type='delay' label='Delay' />
        <DraggableNode type='math' label='Math' />
        <DraggableNode type='apiCall' label='API Call' />
      </div>
    </div>
  );
};