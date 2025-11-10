import { Link } from "react-router-dom";
import { productos } from "../data/productos";

function Catalogo() {
  return (
    <section>
      <h1>Catálogo de productos</h1>
      <div className="grid">
        {productos.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.nombre}</h3>
            <p>${p.precio}</p>
            <Link to={`/producto/${p.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;
