import Link from 'next/link'

export default function TiendaLayout({children}) {
    return <>
        <nav>
            <h3>Seccion Tienda</h3>
            <ul>
                <li>
                    <Link href="/tienda/categorias">Categorias</Link>
                </li>
                <li>
                    <Link href="/tienda/categorias/computadoras">Productos</Link>
                </li>
            </ul>
        </nav>

    {children}
    </>;
}