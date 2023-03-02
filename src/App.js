import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.css';
import { Home } from './views/home';
import { Contact } from './views/contact';
import { About } from './views/about';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
