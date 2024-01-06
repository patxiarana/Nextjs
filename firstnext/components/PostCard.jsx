"use client"

export default function PostCard({post}) {
    return (
        <div key={post.id}>
            <h3>{post.id} . {post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => { alert('click funcionando...') }}>
                click
            </button>
        </div>
    )
}
