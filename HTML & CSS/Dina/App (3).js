//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Components } from 'react';
// import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Section1 from './Componants/Section1.js';
import Section2 from './Componants/Section2.js';
import Section3 from './Componants/Section3.js';
import Video from './Componants/Video.js';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Section1/>
      <Section2/>
      <Section3/>
      <Video/>

    </div>
   
  
  )
}

export default App;
