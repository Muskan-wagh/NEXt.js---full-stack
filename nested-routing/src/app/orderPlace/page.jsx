"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const orderp = () => {
    const router = useRouter();
    const handleOrder = () => {
        console.log("order is placed")
        router.push("/")
    }
    return (
        <div>
            <h1>order place </h1>
            <button onClick={handleOrder}>place order</button>
        </div>
    )
}


export default orderp
