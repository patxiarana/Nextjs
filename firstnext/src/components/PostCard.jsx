"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
export default function PostCard({post}) {
  const  params = useParams()
    console.log({params})
    return (
        <div  className="bg-gray-950 p10" key={post.id}>
            <Link href={`/post/${post.id}`}><h3 className="text-xl font-bold mb-4">{post.id} . {post.title}</h3></Link>
            <p className="text-slate-300">{post.body}</p>
            <button onClick={() => { alert('click funcionando...') }}>
                click
            </button>
        </div>
    )
}
