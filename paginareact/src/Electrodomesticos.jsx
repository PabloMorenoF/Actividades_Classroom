import productos from "./datos/datosElectro";

export default function Electrodomesticos () {
  return (
    <>
    <section className="container my-5">
      <h2 className="text-center text-primary mb-4">
        Electrodomésticos Más Vendidos
      </h2>

      <div className="row g-4">
        {productos.map((producto) => (
          <div className="col-md-3" key={producto.id}>
            <div className="card h-100 shadow">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.alt}
              />

              <div className="card-body text-center">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.precio}</p>
                <button className="btn btn-primary">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}   