import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import './App.css'; 
import { useTranslation } from "react-i18next";
// import i18n from './utils/i18n';
// import { Suspense } from 'react';

function App() {
  const { t,i18n } = useTranslation();
  const handleChangeLanguage = (lang)=>{i18n.changeLanguage(lang)};
  return (
    <div>
      {t("NAME")}
      <button onClick={()=>{handleChangeLanguage("EN")}}>EN</button>
      </div>,

    <Router>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
