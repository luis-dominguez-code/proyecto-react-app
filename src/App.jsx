import './App.css'
import { useState } from 'react'
import Navbar from "./Navbar";

function App() {
  const [cartItems, setCartItems] = useState(0);

  const agregarAlCarrito = () => setCartItems(cartItems + 1);
  const vaciarCarrito = () => setCartItems(0);

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <main className="contenido">
        <h1>Bienvenidos a Fighter Space</h1>
        <p>Todo lo que necesitas para tu entrenamiento lo encontraras aqui.</p>
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
      </main>
    </div>
  );
}

export default App
