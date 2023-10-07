import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const Layouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layouts;