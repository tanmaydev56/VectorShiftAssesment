import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app-container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="pipeline-toolbar">
        <PipelineToolbar />
      </div>
      <div className="flex-1 overflow-hidden">
        <PipelineUI />
      </div>
      <div className="submit-button-container">
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;