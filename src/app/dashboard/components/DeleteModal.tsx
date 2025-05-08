import React from 'react'

type DeleteModalProps = {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  productTitle: string
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onConfirm, productTitle }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-bold mb-4">حذف محصول</h2>
        <p className="mb-6 text-gray-700">
          آیا از حذف محصول <span className="font-semibold text-red-600">{productTitle}</span> مطمئن هستید؟
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            انصراف
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
