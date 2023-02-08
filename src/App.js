import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Step from './components/Step';
import BottomLead from './components/BottomLead';
import Footer from './components/Footer';

import logo from "./assets/logo-D/red logo.svg";
import Rectangle_3 from './assets/Rectangle_3.png';
import Rectangle_4 from './assets/Rectangle_4.png';
import Rectangle_5 from './assets/Rectangle_5.png';
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import Faq from './pages/Faq';
import Partner from './pages/Partner';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  const data = {
    hero: {
      appType: 'Food app',
      tagLine: 'Why stay hungry when you can order from Bella Onojie',
      description: 'Download the bella onoje’s food app now on',
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
    },
    step1: {
      title: 'Create an account',
      heading: 'Create/login to an existing account to get started',
      description: 'An account is created with your email and a desired password',
      img: Rectangle_3,
      alternate: false,
    },
    step2: {
      title: 'Explore while shopping',
      heading: 'Shop for your favorites meal as e dey hot.',
      description: 'Shop for your favorite meals or drinks and enjoy while doing it.',
      img: Rectangle_4,
      alternate: true,
    },
    step3: {
      title: 'Checkout',
      heading: "When you're done, check out and get it delivered.",
      description: "When you're done, check out and get it  delivered with ease.",
      img: Rectangle_5,
      alternate: false,
    },
    bottomLead: {
      actionText: 'Download the app now.',
      description: 'Available on your favourite store. Start your premium experience now.',
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
    },
  }
  return (
    // __________________________TODO: ____________________
    // Add Montserrat font to everything (body)

    <div className="box-border">
      <div className="flex flex-col">
        <BrowserRouter>
          <Navbar logo={logo} />
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/faq" element={<Faq data={data} />} />
            <Route path="/partner" element={<Partner />} />

          </Routes>

        </BrowserRouter>

        <Footer logo={logo} />
      </div>
    </div>
  );
}

export default App;
