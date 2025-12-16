import { useState } from "react";

export default function TablaMultiplicar() {

  const [numero, setNumero] = useState("");
  const [limite, setLimite] = useState("");
  const [tabla, setTabla] = useState([]);

  const generarTabla = (evento) => {
    evento.preventDefault();

    const numeroUsuario = parseInt(numero);
    const limiteUsuario = parseInt(limite);

    if (
      isNaN(numeroUsuario) ||
      isNaN(limiteUsuario) ||
      numeroUsuario <= 0 ||
      limiteUsuario <= 0
    ) {
      alert("Por favor ingrese números positivos");
      return;
    }

    const resultado = [];

    for (let i = 1; i <= limiteUsuario; i++) {
      resultado.push({
        numero: numeroUsuario,
        multiplicador: i,
        resultado: numeroUsuario * i
      });
    }

    setTabla(resultado);
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-4">
          Generador de Tablas de Multiplicar
        </h3>

        <form onSubmit={generarTabla}>
          <div className="mb-3">
            <label className="form-label">Número base</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ej: 5"
              value={numero}
              onChange={(evento) => setNumero(evento.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Límite</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ej: 10"
              value={limite}
              onChange={(evento) => setLimite(evento.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Generar tabla
            </button>
          </div>
        </form>

        {tabla.length > 0 && (
          <table className="table table-bordered table-striped text-center mt-4">
            <thead className="table-dark">
              <tr>
                <th>Número</th>
                <th>x</th>
                <th>Multiplicador</th>
                <th>=</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              {tabla.map((fila, index) => (
                <tr key={index}>
                  <td>{fila.numero}</td>
                  <td>x</td>
                  <td>{fila.multiplicador}</td>
                  <td>=</td>
                  <td>{fila.resultado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>
    </div>
  );
}


