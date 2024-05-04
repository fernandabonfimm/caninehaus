import {Routes,Route } from "react-router-dom";
// Pages
import Login from "../pages/login/login";


export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} />
        </Routes>
    );
}