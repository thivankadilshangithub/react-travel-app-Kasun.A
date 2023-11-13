import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Hotels from './pages/Hotels';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/tour" element={<Hotels />} />
      </Routes>
    </Router>
  );
}
