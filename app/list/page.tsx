'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './list.module.scss'
import { useState } from 'react'

export default function List(){
    let [products,setProducts] = useState(
        [
            {
                name :'씹간지 상의',
                imagesSrc : '/pd_imgs/',
                value : 0,
            },
            {
                name :'씹간지 하의',
                imagesSrc : '/pd_imgs/',
                value : 3,
            },
            {
                name :'씹간지 팬티',
                imagesSrc : '/pd_imgs/',
                value : 4,
            },
        ]
    )

    return(
        <>
        <div>
            <h2>상품 리스트</h2>
            <ul className={styles.pd_list}>
                {
                    products.map((a,i)=>{
                        return(
                            <li key={i} className={styles.pd_li}>
                                <img src={a.imagesSrc+`pd_${i}.jpg`} alt={a.name}/>
                                {a.name}
                                <p>{a.value}</p>
                                <button type="button" onClick={()=>{
                                    let copy = [...products]
                                    copy[i].value++
                                    setProducts(copy)
                                }}>+</button>
                                <button type="button" onClick={()=>{
                                    let copy = [...products]
                                    if(copy[i].value > 0){
                                        copy[i].value--
                                        setProducts(copy)
                                    }
                                }}>-</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}