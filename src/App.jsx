import React, {useEffect} from 'react';
import Portfolio from './pages/Portfolio'
import Layout from './layout/Layout'
import { Routes, Route } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails'
// Animation Package
import Aos from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });

  },[])


  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <Portfolio /> } />
        <Route path='/projectdetail' element={ <ProjectDetails /> } />
      </Routes>
    </Layout>
  )
}

export default App
