
export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
     <div className="relative inline-flex h-[50px] w-[100px] overflow-hidden rounded-full p-[1px]">
  
  <span
    className="pointer-events-none absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
  />
  

  <div
    type={type}
    className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-gray-800 text-sm font-medium text-white cursor-grab select-none backdrop-blur-3xl"
    onDragStart={(event) => onDragStart(event, type)}
    onDragEnd={(event) => (event.target.style.cursor = 'grab')}
    draggable
  >
    {label}
  </div>
</div>

    );
  };
  