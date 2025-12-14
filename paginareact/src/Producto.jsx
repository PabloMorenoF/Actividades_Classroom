import Productos from "./Productos"

export default function Producto () {
    return (
        <>
            <section class="container my-5">
                <h2 class="text-center text-primary mb-5">Catálogo de Electrodomésticos</h2>
                <Productos />
            </section>
        </>
    )
}