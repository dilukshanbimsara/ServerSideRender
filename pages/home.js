import Link from 'next/link'
import React from 'react'

function HomePage() {
    return(
        <div>
            <h1>Welcome to our e-commerce website!</h1>
            <Link href={"/products"} >View our products</Link>
        </div>
    )
}

export default HomePage