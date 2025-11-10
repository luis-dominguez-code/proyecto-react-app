import { useParams } from "react-router-dom";
import { productos } from "../data/productos";

function DetalleProducto() {
  const { idProducto } = useParams();
  const producto = productos.find((p) => p.id === parseInt(idProducto));

  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h1>{producto.nombre}</h1>
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: ${producto.precio}</p>
      <button>Agregar al carrito</button>
    </section>
  );
}

export default DetalleProducto;
