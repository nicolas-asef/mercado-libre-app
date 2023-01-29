import React from "react"
import style from "./SelectSele.module.css"

export default function SelectSele({img}){
    return (
        <div className={style.divImg}>
            <img src={img} alt="product" />
        </div>
    )
}