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
        style={{
          padding: '12px 24px',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '600',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          transition: 'all 0.2s',
          ':hover': {
            background: '#2563eb',
            transform: 'translateY(-1px)'
          }
        }}
      >
        Analyze Pipeline
      </button>
    </div>
  );
};