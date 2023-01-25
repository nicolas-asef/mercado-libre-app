import React from "react";
import { useForm } from "react-hook-form"

export default function ProductForm(){

    const { register, handleSubmit } = useForm()

    return(
        <div>
            <h2>Add Product</h2>
            <form>
                <div>
                    <label>Product Name: </label>
                    <input type="text" name=""/>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="text" name=""/>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name=""/>
                </div>
                <div>
                    <label>Category </label>
                    <select>
                        <option value='select'>Category</option>
                        <option value='electro'>Electro</option>
                        <option value='home'>Home</option>
                    </select>
                </div>
                <input type="submit" value='Send'/>
            </form>
        </div>
    )
}