import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Samples from './pages/Samples';
import Edgy from './themes/Edgy';
import Professional from './themes/Professional';
import Minimal from './themes/Minimal';
import ColorPop from './themes/ColorPop';
import Aero from './themes/Aero';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/samples" element={<Samples />} />
        <Route path="/samples/edgy" element={<Edgy />} />
        <Route path="/samples/pro" element={<Professional />} />
        <Route path="/samples/minimal" element={<Minimal />} />
        <Route path="/samples/colorpop" element={<ColorPop />} />
        <Route path="/samples/aero" element={<Aero />} />
      </Routes>
    </BrowserRouter>
  );
}
