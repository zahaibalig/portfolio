import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-detail" element={<ProjectDetail/>} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
