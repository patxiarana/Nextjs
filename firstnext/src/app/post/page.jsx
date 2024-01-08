import React from 'react'
import PostCard from '@/components/PostCard'
import './Post.css'

async function loadPost() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    //new Promise((resolve) => setTimeout(resolve,5000))

    return data
}

//Renderiza el componente
export default async function PostPages() {

    const posts = await loadPost()
 
    return (
        <div className='grid'>
            {
                posts.map(post => (
                    (
                    <PostCard post ={post} key={post.id}/>
                    )
                ))
            }
        </div>
    )
}
