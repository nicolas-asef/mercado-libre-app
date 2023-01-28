import React from "react"
import style from "./NavBar.module.css"
import logoMeli from "../../assets/mercado-libre-logo-6.png"
import SearchBar from "../SearchBar/SearchBar"

export default function NavBar(){
    return (
        <div>
            <div className={style.divNav}>
                <div className={style.divTop}>
                    <img src={logoMeli} alt="" />
                    <SearchBar />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}