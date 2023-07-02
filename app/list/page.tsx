import Link from 'next/link'
import Image from 'next/image'
import styles from './list.module.scss'

export default function List(){
    const products = ['씹간지 상의','씹간지 하의','씹간지 신발']
    const base_img_url='/pd_imgs/';
    console.log(base_img_url)

    return(
        <>
        <div>
            <h2>상품 리스트</h2>
            <ul className={styles.pd_list}>
                {
                products.map((a,i)=>{
                    return(
                        <li key={i} className={styles.pd_li}>
                            <img src={base_img_url+`pd_${i}.jpg`} alt={a}/>
                            {a}
                        </li>
                    )
                })
                }
            </ul>
        </div>
        </>
    )
}