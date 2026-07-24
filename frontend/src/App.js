import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import InventoryPage from "./pages/InventoryPage";
import SupplierPage from "./pages/SupplierPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/inventory" element={<InventoryPage />} />

	<Route path="/suppliers" element={<SupplierPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;