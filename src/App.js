import React, {Component, useState} from "react";
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import News from "./pages/News";
import CommunityForum from "./pages/CommunityForum";
import './App.css';
import Quiz from "./pages/Quiz";



function App() {
  
  return (
    <>
  
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/news" element={<News />} />
        <Route path="/community" element={<CommunityForum />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
