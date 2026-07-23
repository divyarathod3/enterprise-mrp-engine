import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import InventoryPage from "./pages/InventoryPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/inventory" element={<InventoryPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;