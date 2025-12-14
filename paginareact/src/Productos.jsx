import electrodomesticos from "./datos/electrodomesticos";

export default function Productos () {
  return (
    <>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {electrodomesticos.map((item) => (
        <div className="col" key={item.id}>
          <div className="card h-100 shadow-sm">
            <img
              src={item.imagen}
              className="card-img-top"
              alt={item.alt}
            />

            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text text-muted">
                {item.descripcion}
              </p>
              <p className="card-text">
                <strong className="text-primary">{item.precio}</strong>
              </p>
              <button className="btn btn-primary w-100">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}


