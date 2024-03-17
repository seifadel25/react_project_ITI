import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Contact from './Components/Contact.js';
import SignUp from './Components/Signup.js';
import News from './Components/News.js'
import Home from './Components/Home.js'
import Port from './Components/Port.js'
import Main from './Components/Main.js';
import Header from './Components/Omar/Header.js'

class App extends Component{
  render(){
    return(
          <BrowserRouter>
                <div className="App">
                  <Navbar/>
                <Routes>
                {/* <Route path='/Main' element={<Main/>}/> */}
                <Route exact  path="/" element={<Home/>}/>
                <Route path='/Port' element={<Port/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path='/News' element={<News/>}/>
                <Route path="/Signup" element={<SignUp/>}/>
                </Routes>
                </div>
          </BrowserRouter>
    )
  }
}

export default App;
