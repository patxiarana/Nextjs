import { NextResponse } from "next/server"

export function GET() {


    //Extract Params
    //Query database
    //Comunicate with other services

    return NextResponse.json({
        message:"Obteniendo datos"
    })
}



export function POST() {
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