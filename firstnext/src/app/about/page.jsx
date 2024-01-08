"use client"

import { useRouter } from "next/navigation"

export default function AboutPage() {

   const router = useRouter();
   return <section>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis consequatur,
         aspernatur veritatis unde culpa velit! Libero quo blanditiis sit aspernatur aliquam? Tempora dolor atque vel placeat beatae.
         Dolor iste corrupti suscipit optio nihil quae eaque, possimus ad minima quibusdam at modi quidem libero quam ullam consectetur hic
         ex dicta rem laborum voluptas maiores totam quia. Labore necessitatibus ex aperiam, libero quasi eligendi porro sit voluptatum consequatur itaque cumque nam neque in ut veniam reprehenderit ad nesciunt dignissimos praesentium explicabo optio est iste dicta iusto. Sapiente excepturi, ex placeat quae optio accusamus blanditiis quisquam at aut architecto consequatur, laudantium quis!
      </p>
    
<button className="bg-sky-400 px-3 py-2 rounded-md" onClick={() => {
//query to te server
router.push('/')
}}>
      click
   </button>

   </section>
}