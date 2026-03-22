import React from 'react'
import Link from 'next/link'

const productList = () => {
    return (
        <div className='justify-center align-baseline '>
            <center>
                <div className='bg-blue-600 col-span-1'>products : </div>
                <h2><Link href="products/1">product 1</Link></h2>
                <h2><Link href="products/2">product 2</Link></h2>
                <h2><Link href="products/3">product 3</Link></h2>
            </center>
        </div>
    )
}

export default productList
