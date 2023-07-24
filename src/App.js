import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
