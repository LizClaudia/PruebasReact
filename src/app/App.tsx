import React from "react";
import "../styles/App.css";
import MainComponent from "./components/layout/main.component";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddPost from "./pages/addPost/addPost.page";
import Home from "./pages/home/home.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />}>
          <Route index element={<Home />} /> {/* Home por defecto */}
          <Route path="home" element={<Home />} />
          <Route path="add_post" element={<AddPost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
