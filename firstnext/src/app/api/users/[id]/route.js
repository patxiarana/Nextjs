import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    console.log(request)
 const res =  await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
const data =  await res.json()
   return  NextResponse.json(data)
}