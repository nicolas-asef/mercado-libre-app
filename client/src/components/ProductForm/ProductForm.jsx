import React from "react";
import { useForm } from "react-hook-form"

export default function ProductForm(){

    const { register, formState: {errors},handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Product Name: </label>
                    <input type="text" {...register('name', {
                        required: true
                    })}/>
                    {errors.name?.type === 'required' && <p>El campo nombre es requerido</p>}
                </div>
                <div>
                    <label>Price: </label>
                    <input type="text" {...register('price',{
                        required: true
                    })}/>
                    {errors.price?.type === 'required' && <p>El campo price es requerido</p>}
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" {...register('description',{
                        required: true
                    })}/>
                    {errors.description?.type === 'required' && <p>El campo description es requerido</p>}
                </div>
                <div>
                    <label>Category </label>
                    <select {...register('category', {
                        required: true
                    })}>
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