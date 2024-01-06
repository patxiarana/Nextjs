import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Mi tienda con Nextjs - HomePage",
  description: "esta es la pagina principal de mi tienda",
  keywords : "tienda,online,ecommerce"
}

export default function RootLayout({children}) {
  return(
    <html>
      <body>
       <NavBar/>
       {children}
      </body>
    </html>
  )
}