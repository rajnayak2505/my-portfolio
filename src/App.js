import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Hello from './components/Hello';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Hello/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/skills' element={<Skills/>}/>
    </Routes>
    </Router>
  );
}

export default App;
