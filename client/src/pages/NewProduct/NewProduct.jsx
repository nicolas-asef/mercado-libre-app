import React from "react";
import ProductForm from "../../components/ProductForm/ProductForm";
import SelectSele from "../../components/SelectSele/SelectSele";
import style from "./NewProduct.module.css"
import products from "../../assets/Productos.png"
import cars from "../../assets/Vehiculos.png"
import estate from "../../assets/Inmuebles.png"
import services from "../../assets/Servicios.png"

export default function NewProduct(){
    return(
        <div>
            <div className={style.divTop}>
                <p className={style.p}>¡Hola! Antes que nada cuéntanos,</p>
                <p className={style.p}>¿qué vas a publicar?</p>
            </div>
            <div className={style.selectSale}>
                <SelectSele img={products}/>
                <SelectSele img={cars}/>
                <SelectSele img={estate}/>
                <SelectSele img={services}/>
            </div>
            <ProductForm />
        </div>
    )
}