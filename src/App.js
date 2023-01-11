import "./App.css";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test1 from "./components/Test1";
import Details from "./Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchParams />} />
        <Route path="/test" element={<Test1 />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;

// pepper, bird, cocktiel
// doink, cat, mix

// install react-router-dom
// 
