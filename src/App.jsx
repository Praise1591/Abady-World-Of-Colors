import { useState } from 'react'
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Further from './components/Further';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App(){
  return(
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Contacts />
      <Further />
    </div>
  );
}


export default App
