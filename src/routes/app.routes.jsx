import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Profile } from "../Pages/Profile";
import { Details } from "../Pages/Details";
import { NewMovie } from "../Pages/New";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/details/:id" element={<Details />}/>
            <Route path="create" element={<NewMovie />} />
        </Routes>
    );
}