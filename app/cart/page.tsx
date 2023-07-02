'use client'

import Link from 'next/link'

export default function Cart(){
    return(
        <>
        <div>
        <h2>장바구니</h2>
        <ul>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </ul>
        </div>
        </>
    )
}

const CartItem=()=>{
    return(
        <li>
            상품
        </li>
    )
}