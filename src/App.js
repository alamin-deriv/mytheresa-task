import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages";
import Movie from "./pages/movieDetails";


const App = () =>{
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
        </Route>
      </Routes>
    );
}


export default App;