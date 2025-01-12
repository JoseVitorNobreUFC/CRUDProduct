import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListProducts from "./pages/ListProducts";
import AddProduct from "./pages/AddProducts";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListProducts />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
