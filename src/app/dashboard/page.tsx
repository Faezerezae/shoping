"use client"
import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { IGetProduct } from '../typescript/product'
import axios from 'axios'
import ManageProduct from './components/ManageProduct'
import ProductModal from './components/ProductModal'
import DeleteModal from './components/DeleteModal'

function Dashboard() {
    const [products, setProducts] = useState<IGetProduct[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<IGetProduct | null>(null)
    const [selectedDeleteProduct, setSelectedDeleteProduct] = useState<IGetProduct | null>(null)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8001/products").then(res => setProducts(res.data))
    }, [])

    const handleSaveProduct = async (product: IGetProduct) => {
        if (isEditMode && selectedProduct) {
            // ویرایش محصول
            await axios.put(`http://localhost:8001/products/${selectedProduct.id}`, product)
            setProducts(prev =>
                prev.map(p =>
                    p.id === selectedProduct.id ? { ...product, id: selectedProduct.id } : p
                )
            )
        } else {
            // افزودن محصول جدید
            const newItem = { ...product, id: Math.floor(Math.random() * 1000).toString() }
            await axios.post('http://localhost:8001/products', newItem)
            setProducts(prev => [...prev, newItem])
        }

        // بستن مودال
        setIsModalOpen(false)
        setSelectedProduct(null)
        setIsEditMode(false)
    }

    const handleAddClick = () => {
        setSelectedProduct(null)
        setIsModalOpen(true)
        setIsEditMode(false)
    }

    const handleEditClick = (product: IGetProduct) => {
        setIsModalOpen(true)
        setSelectedProduct(product)
        setIsEditMode(true)
    }

    const handleDeleteClick = (product: IGetProduct) => {
        setSelectedDeleteProduct(product)
        setIsDeleteModalOpen(true)
    }

    const confirmDelete = async () => {
        if (selectedDeleteProduct) {
            await axios.delete(`http://localhost:8001/products/${selectedDeleteProduct.id}`)
            setProducts(prev => prev.filter(p => p.id !== selectedDeleteProduct.id))
            setIsDeleteModalOpen(false)
            setSelectedDeleteProduct(null)
        }
    }

    return (
        <Container>
            <div className="p-4">
                <div className="text-right my-8">
                    <button
                        onClick={handleAddClick}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        افزودن محصول جدید
                    </button>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {products.map((item: IGetProduct) => (
                        <ManageProduct
                            key={item.id}
                            {...item}
                            onEdit={() => handleEditClick(item)}
                            onDelete={() => handleDeleteClick(item)}
                        />
                    ))}
                </div>
            </div>

            <ProductModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false)
                    setSelectedProduct(null) // 🧹 پاک کردن مقدار انتخاب‌شده
                    setIsEditMode(false)
                }}
                onSave={handleSaveProduct}
                initialProduct={selectedProduct || undefined}
                isEdit={isEditMode}
            />
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => {
                    setIsDeleteModalOpen(false)
                    setSelectedDeleteProduct(null) // 🧹 پاک کردن مقدار انتخاب‌شده برای حذف
                }}
                onConfirm={confirmDelete}
                productTitle={selectedDeleteProduct?.title || ""}
            />
        </Container>
    )
}

export default Dashboard
