import Header from "./header/header.component";
import { Outlet } from "react-router-dom";

function MainComponent() {
    return (
        <div>
            <Header></Header>
            <Outlet />
        </div>
    );
}

export default MainComponent;
