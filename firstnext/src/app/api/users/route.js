import { NextResponse } from "next/server"

export function GET() {


    //Extract Params
    //Query database
    //Comunicate with other services
   console.log(process.env.TOKEN)
   console.log(process.env.SECRET_KEY)
    return NextResponse.json({
        message:"Obteniendo datos"
    })
}



export async function POST(request) {
  const {nombre,apellido}= await request.json()
  console.log(nombre,apellido)
 return NextResponse.json({
        message:"Creando Datos"
    })
}
export function PUT() {
    return NextResponse.json({
           message:"Actualizando datos"
       })
   }

   export function DELETE() {
    return NextResponse.json({
           message:"eliminando datos"
       })
   }