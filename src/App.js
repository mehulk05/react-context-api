import './App.css';
import { DbProvider } from './Context/sharedContext';
import { BrowserRouter } from "react-router-dom";
import ComponentWrapper from './Component/ComponentWrapper';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
    
       <Link to="/">Home</Link> <br></br>
       <Link to="/about">Comp 2</Link>
       <DbProvider>
        <ComponentWrapper/>
      </DbProvider>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
