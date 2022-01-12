import './App.css';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="App">
       <div className="Title">
         <Title/>
       </div>
       <div className="Upload-form">
         <UploadForm/>
       </div>
    </div>
  );
}

export default App;
