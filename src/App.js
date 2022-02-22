import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DiscountProvider } from "./hooks/useDiscount";
import Outlet from "./pages/Outlet";
import Management from "./pages/Management";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <DiscountProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="ofertas" element={<Outlet />} />
            <Route path="administracao" element={<Management />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DiscountProvider>
  );
}

export default App;
