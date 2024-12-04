//importando o BrowserRouter (sempre)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './assets/Components/Header'
import Home from './assets/Components/Home'
import Footer from './assets/Components/Footer'
import Escocia from './assets/Components/Escocia'
import MuralhaChina from './assets/Components/MuralhaChina'
import Aruba from './assets/Components/Aruba'
import GrandCanyon from './assets/Components/GrandCanyon'
import './App.css'


function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='Escocia' element={<Escocia />} />
          <Route path='GrandCanyon' element={<GrandCanyon />} />
          <Route path='MuralhaChina' element={<MuralhaChina />} />
          <Route path='Aruba' element={<Aruba />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
