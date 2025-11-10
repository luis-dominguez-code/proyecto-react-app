
import { Link } from "react-router-dom";

function Navbar({ cartItems }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">Fighter Space</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>

        {}
        <li className="dropdown">
          <span>Productos</span>
          <ul className="dropdown-menu">
            <li><Link to="/productos">Catálogo</Link></li>
            <li><Link to="/productos/categoria/boxeo">Boxeo</Link></li>
            <li><Link to="/productos/categoria/grappling">Grappling</Link></li>
            <li><Link to="/productos/categoria/jiu jitsu">Jiu-jitsu</Link></li>
          </ul>
        </li>

        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      <div className="carrito">
        🛒
        {cartItems > 0 && <span className="badge">{cartItems}</span>}
      </div>
    </nav>
  );
}

export default Navbar;
