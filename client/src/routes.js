import Home from "./pages/Home";
import CreateQuote from "./pages/CreateQuote";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import OtherUserProfile from "./pages/OtherUserProfile";

export const routes = [
    {path:"/", element:<Home/>},
    {path:"/create", element:<CreateQuote/>},
    {path:"/login", element:<Login/>},
    {path:"/signup", element:<SignUp/>},
    {path:"/profile", element:<Profile/>},
    {path:"/profile/:userid", element:<OtherUserProfile/>},
]