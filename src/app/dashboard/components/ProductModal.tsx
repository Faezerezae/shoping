import React, { ChangeEvent, useEffect, useState } from "react"
import { IGetProduct } from "@/app/typescript/product"

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (product: IGetProduct) => void
  initialProduct?: IGetProduct
  isEdit?: boolean
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialProduct,
  isEdit = false
}) => {
  const [product, setProduct] = useState<IGetProduct>({
    id: "",
    title: "",
    price: 0,
    image: "",
    description: ""
  })

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct)
    }
  }, [initialProduct])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value
    }))
  }

  const handleSave = () => {
    const finalProduct = isEdit ? product : { ...product, id: Math.floor(Math.random() * 1000).toString() }
    onSave(finalProduct)
    setProduct({ id: "", title: "", price: 0, image: "", description: "" })
    onClose()
  }
  const handleCancle = () => {
    setProduct({ id: "", title: "", price: 0, image: "", description: "" })
    onClose()
  }


  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">{isEdit ? "ویرایش محصول" : "افزودن محصول"}</h2>

        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-gray-700">عنوان:</label>
            <input
              onChange={handleChange}
              value={product.title}
              type="text"
              name="title"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-gray-700">قیمت:</label>
            <input
              onChange={handleChange}
              value={product.price}
              type="number"
              name="price"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="col-span-12">
            <label className="block text-sm font-medium text-gray-700">عکس:</label>
            <input
              onChange={handleChange}
              value={product.image}
              type="text"
              name="image"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="col-span-12">
            <label className="block text-sm font-medium text-gray-700">توضیحات:</label>
            <textarea
              onChange={handleChange}
              value={product.description}
              name="description"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={handleCancle}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            انصراف
          </button>
          <button
            onClick={handleSave}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            ذخیره
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
