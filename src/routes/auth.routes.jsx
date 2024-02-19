import { Routes, Route } from "react-router-dom";

import { SignUp } from "../Pages/SignUp/index";
import { SignIn } from "../Pages/SignIn/Index";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
        </Routes>
    );
}