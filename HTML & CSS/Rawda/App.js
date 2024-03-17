// import logo from './logo.svg';
import './App.css';
import './index.css'
import Container from './component/container';
import Section1 from './component/section1.js';
import Section2 from './component/section2.js';
import Section3 from './component/section3';
function App() {
  return (
    <div className="App">
     <Container/>
        <Section1/>
        <Section2/>
        <Section3/>
    </div>
  );
}

export default App;
