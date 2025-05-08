import { BiEdit, BiTrash } from 'react-icons/bi'
import React from 'react'
import { IGetProduct } from '@/app/typescript/product'
import { formatPrice } from '@/utils/number'

type Props = IGetProduct & {
    onEdit: () => void
    onDelete: () => void
}

function ManageProduct({ title, price, image, onEdit, onDelete }: Props) {
    return (
        <div className="shadow-md rounded-lg overflow-hidden border border-gray-200 bg-white">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">
                    قیمت: <span className="font-bold">{formatPrice(price)}$</span>
                </p>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onEdit}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full"
                        title="ویرایش"
                    >
                        <BiEdit size={18} />
                    </button>
                    <button
                        onClick={onDelete}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
                        title="حذف"
                    >
                        <BiTrash size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ManageProduct
