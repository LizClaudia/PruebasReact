import "../styles/App.css";
import MainComponent from "./components/layout/main.component";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddPost from "./pages/addPost/addPost.page";
import Home from "./pages/home/home.page";
import EditPost from "./pages/editPost/editPost.page";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainComponent />}>
                    <Route index element={<Home />} /> {/* Home por defecto */}
                    <Route path="home" element={<Home />} />
                    <Route path="add_post" element={<AddPost />} />
                    <Route path="edit_post/:id" element={<EditPost />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
