import React from "react";
import { BrowserRouter , Routes ,Route} from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Netflix from "./Pages/Netflix";

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/Signup" element={<Signup />}/>
        <Route exact path="/" element={<Netflix />}/>
      </Routes>
    </BrowserRouter>
  );
}