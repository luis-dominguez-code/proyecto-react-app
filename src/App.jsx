import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Catalogo from "./pages/catalogo";
import Categoria from "./pages/categoria";
import DetalleProducto from "./pages/detalleproducto";

function App() {
  const [cartItems, setCartItems] = useState(0);

  const agregarAlCarrito = () => setCartItems(cartItems + 1);
  const vaciarCarrito = () => setCartItems(0);

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <main className="contenido">
        <Routes>
          {/* Ruta principal */}
          <Route
            path="/"
            element={
              <div>
                <h1>Bienvenidos a Fighter Space</h1>
                <p>Todo lo que necesitas para tu entrenamiento lo encontrarás aquí.</p>
                <button onClick={agregarAlCarrito}>Agregar al carrito</button>
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
              </div>
            }
          />

          {/* Rutas de productos */}
          <Route path="/productos" element={<Catalogo />} />
          <Route path="/categoria/:nombreCategoria" element={<Categoria />} />
          <Route path="/producto/:idProducto" element={<DetalleProducto />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

