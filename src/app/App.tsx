import React from 'react';
import '../styles/App.css';
import MainComponent from './components/layout/main.component';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddPost from './pages/addPost/addPost.page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainComponent/>}/>
        <Route path='/addpost' element={<AddPost/>}/>
      </Routes>
    </Router>
   
  );
}


export default App;
