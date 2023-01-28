import React from "react";
import { useForm } from "react-hook-form"

export default function ProductForm(){

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Product Name: </label>
                    <input type="text" {...register('name')}/>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="text" {...register('price')}/>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" {...register('description')}/>
                </div>
                <div>
                    <label>Category </label>
                    <select {...register('category')}>
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