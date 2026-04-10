import React from 'react'
import Link from 'next/link'
const f1page = () => {
    return (
        <div>
            <>
                <h1>this is f1 page</h1>
                <Link href="/f1/f2" >f2</Link>
            </>
        </div>
    )
}

export default f1page
