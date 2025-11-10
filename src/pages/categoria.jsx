import { useParams, Link } from "react-router-dom";
import { productos } from "../data/productos";

function Categoria() {
  const { nombreCategoria } = useParams();
  const filtrados = productos.filter((p) => p.categoria === nombreCategoria);

  return (
    <section>
      <h1>Productos: {nombreCategoria}</h1>
      <div className="grid">
        {filtrados.map((p) => (
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

export default Categoria;
