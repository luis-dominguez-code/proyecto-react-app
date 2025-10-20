function Navbar({ cartItems }) {
  return (
    <nav className="navbar">
      <div className="logo">Fighter Space</div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <div className="carrito">
        🛒
        {cartItems > 0 && <span className="badge">{cartItems}</span>}
      </div>
    </nav>
  );
}

export default Navbar;
