import Link from "next/link"

export const metadata = {
    title:"Tienda Oficial"
}

export default function TiendaLayout({ children }) {
    return <>
        <h3>Seccion Tienda</h3>

        <ul>
            <li>
                <Link href='/tienda/categorias'>Categorias</Link>
            </li>
            <li>
                <Link href='/tienda/categorias/computadoras'>Computadoras</Link>
            </li>
        </ul>
        {children}

    </>
}