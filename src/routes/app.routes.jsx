import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Profile } from "../Pages/Profile";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Profile />}/>
        </Routes>
    );
}