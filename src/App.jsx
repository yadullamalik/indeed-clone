import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Popular } from "./components/Popular";
import { SalaryGuide } from "./components/SalaryGuide";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/salaryguide" element={<SalaryGuide />} />
      </Routes>
    </div>
  );
}

export default App;
