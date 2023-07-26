import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/homepage";
import Service from "./page/service";
import Blog from "./page/blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<HomePage />} />
        <Route path="/Portofolio" element={<HomePage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Services" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
