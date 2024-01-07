"use client"
import Link from "next/link"
export default function PostCard({post}) {
    return (
        <div key={post.id}>
            <Link href={`/post/${post.id}`}><h3>{post.id} . {post.title}</h3></Link>
            <p>{post.body}</p>
            <button onClick={() => { alert('click funcionando...') }}>
                click
            </button>
        </div>
    )
}
