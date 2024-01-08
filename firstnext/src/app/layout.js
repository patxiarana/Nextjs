
import {Roboto} from 'next/font/google'
import "./globals.css"
import NavBar from '@/components/NavBar';
export const metadata = {
  title: "Mi tienda con Nextjs - HomePage",
  description: "esta es la pagina principal de mi tienda",
  keywords : "tienda,online,ecommerce"
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ['italic', 'normal'],
  subsets: ['latin']
}); 

export default function RootLayout({children}) {
  return(
    <html>
      <body className={roboto.className}>
       <NavBar/>
       {children}
      </body>
    </html>
  )
}