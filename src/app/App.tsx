import "../styles/App.css";
import MainComponent from "./components/layout/main.component";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddPost from "./pages/addPost/addPost.page";
import Home from "./pages/home/home.page";
import EditPost from "./pages/editPost/editPost.page";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/config";

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <Router>
                <Routes>
                    <Route path="/" element={<MainComponent />}>
                        <Route index element={<Home />} />
                        {/* Home por defecto */}
                        <Route path="home" element={<Home />} />
                        <Route path="add_post" element={<AddPost />} />
                        <Route path="edit_post/:id" element={<EditPost />} />
                    </Route>
                </Routes>
            </Router>
        </I18nextProvider>
    );
}

export default App;
