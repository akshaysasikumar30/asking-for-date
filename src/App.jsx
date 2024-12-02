import React from "react";
import Question from "./pages/Question";
import Location from "./pages/Location";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Question/>}/>
        <Route path="/location" element = {<Location/>}/>
      </Routes>
    </Router>
  );
};

export default App;
