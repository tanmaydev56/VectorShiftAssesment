import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

 const handleSubmit = async () => {
  try {
    const response = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nodes, edges }),
    });

    const { num_nodes, num_edges, is_dag } = await response.json();
    
    toast.success(
      `Pipeline Analysis:\n\n` +
      `• Nodes: ${num_nodes}\n` +
      `• Edges: ${num_edges}\n`+
      `• Status: ${is_dag ? ' Valid DAG' : ' Not a DAG'}`,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );

  } catch (error) {
    toast.error(`Submission failed:\n${error.message}`, {
      position: "top-center"
    });
  }
};

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px',
      marginTop: '10px'
    }}>
    
       <button
        onClick={handleSubmit}
        className="relative w-[200px] h-[50px] flex items-center justify-center rounded-lg overflow-hidden transition duration-200">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Analyze Pipeline
  </div>
</button>
     
    </div>
  );
};