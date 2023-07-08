'use client'
import {age,name} from './data.js'
import Hello from './../list/hello'

import Link from 'next/link'

export default function Cart(){
    let data = '이것은 데이터';
    return(
        <>
        <div>
        <button type="button" onClick={(e)=>{
            const el = e.target;
            el.classList.toggle('on')
            el.classList.contains('on') ? el.style.color = "red" : el.style.color = "blue"; 
        }}>버튼</button>
        <Hello></Hello>
        <h2>장바구니</h2>
            <ul>
                <CartItem item={data}/>
                <CartItem item={data}/>
                <CartItem item={data}/>
            </ul>
        </div>
        </>
    )
}

const CartItem=(props)=>{
    return(
        <li>
            상품
            {age}
            {name}
            {props.item}
        </li>
    )
}