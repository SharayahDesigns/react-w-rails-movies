import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import DataProvider from "./providers/DataProvider";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieForm from "./pages/MovieForm";
import MovieShow from "./pages/MovieShow";


const NotFound = ()=>{
  return <p>path not found</p>
}

ReactDOM.render(
    <BrowserRouter>
  <DataProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/new" element={<MovieForm />} />
          <Route path="/movies/:id" element={<MovieShow />} />
          <Route path="/movies/:id/edit" element={<MovieForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  </DataProvider>
    </BrowserRouter>,
  document.getElementById("root")
);


reportWebVitals();
