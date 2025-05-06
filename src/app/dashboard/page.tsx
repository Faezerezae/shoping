"use client"
import React, { ChangeEvent, useState } from 'react'
import Container from '../components/Container'
import axios from 'axios'

function Dashboard() {
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: 0,
        image: "",
        description: ""
    })

    const handleChangeProduct = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        })

    }

    const handleCreateProduct = async () => {
        await axios.post("http://localhost:8001/products",
            { id: Math.floor(Math.random() * 1000).toString(), title: newProduct.title, description: newProduct.description, price: newProduct.price, image: newProduct.image })
        setNewProduct({
            title: "",
            description: "",
            price: 0,
            image: ""
        });
    }
    return (
        <Container>
            <div className="mt-10 sm:mt-4 mx-auto">
                <div className="md:grid md:grid-cols-3 md:gap-6">

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                                عنوان:
                                            </label>
                                            <input
                                                onChange={handleChangeProduct}
                                                value={newProduct.title}
                                                type="text"
                                                name="title"
                                                id="title"
                                                autoComplete="given-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                                قیمت:
                                            </label>
                                            <input
                                                onChange={handleChangeProduct}
                                                value={newProduct.price}
                                                type="text"
                                                name="price"
                                                id="price"
                                                autoComplete="given-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-12 sm:col-span-12">
                                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                                عکس:
                                            </label>
                                            <input
                                                onChange={handleChangeProduct}
                                                value={newProduct.image}
                                                type="text"
                                                name="image"
                                                id="image"
                                                autoComplete="given-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-12 sm:col-span-12">
                                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                                توضیحات:
                                            </label>
                                            <textarea
                                                onChange={handleChangeProduct}
                                                value={newProduct.description}
                                                name="description"
                                                id="description"
                                                autoComplete="description"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                </div>


                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        onClick={handleCreateProduct}
                                        type="button"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        ساخت محصول جدید
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Dashboard