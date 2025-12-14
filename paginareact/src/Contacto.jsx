export default function Contacto () {
    return (
        <>
            <section class="mt-5">
                <div class="container col-md-8">
                    <div class="card bg-light shadow-lg p-4">
                        <h2 class="text-center mb-4 text-primary">Contáctanos</h2>
                    
                        <form>
                            <div class="mb-3">
                            <label for="correo" class="form-label">Correo electrónico</label>
                            <input type="email" class="form-control" id="correo" placeholder="nombre@ejemplo.com" />
                            </div>

                            <div class="mb-3">
                            <label for="asunto" class="form-label">Asunto</label>
                            <input type="text" class="form-control" id="asunto" placeholder="Ej. Información sobre lavadoras" />
                            </div>

                            <div class="mb-3">
                            <label for="mensaje" class="form-label">Mensaje</label>
                            <textarea class="form-control" id="mensaje" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary w-100 fw-bold mt-3">
                            Enviar Mensaje
                            </button>
                        </form>
                        </div>
                    </div>
                </section>
        </>
    )
}