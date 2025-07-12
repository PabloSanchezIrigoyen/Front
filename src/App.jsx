import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

// Componentes del Home
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Companies from './components/Companies/Companies.jsx';
import Residencies from './components/Residencies/Residencies.jsx';
import Value from './components/Value/Value.jsx';
import Contact from './components/Contact/Contact.jsx';
import GetStarted from './components/GetStarted/GetStarted.jsx';
import Footer from './components/Footer/Footer.jsx';

// Otras vistas
import LoginMultiForm from './components/LoginMultiForm/LoginMultiForm.jsx';
import UserProfile from './components/Perfil/UserProfile.jsx';

// Catálogo de cabañas
import CabinCatalog from './components/CabinCatalog/CabinCatalog.jsx';
import CabinDetail from './components/CabinCatalog/CabinDetail.jsx';

// Página de Reservas
import UserReservations from './components/Reservas/UserReservations.jsx';

// Vista principal del Home SIN HEADER
const Home = () => (
  <div className="App">
    <div>
      <div className="white-gradient" />
      {/* Header eliminado de aquí para evitar duplicados */}
      <Hero />
    </div>
    <Companies />
    <Residencies />
    <Value />
    <GetStarted />
    <div id="contacto">
      <Contact />
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Header /> {/* Header único para toda la app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cabanas" element={<CabinCatalog />} />
        <Route path="/cabanas/:id" element={<CabinDetail />} />
        <Route path="/login" element={<LoginMultiForm onLoginSuccess={() => alert('Login exitoso!')} />} />
        <Route path="/perfil" element={<UserProfile />} />
        <Route path="/reservas" element={<UserReservations />} /> {/* Ruta para reservas */}
      </Routes>
    </Router>
  );
}

export default App;
