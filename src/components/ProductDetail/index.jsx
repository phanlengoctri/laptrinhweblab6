import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function ProductDetail({handleAddtoCart}) {
  const location = useLocation()
  const { product } = location.state || {}
  return (
    <section className='max-w-3xl border border-gray-200 rounded-lg shadow-lg mx-auto p-6 bg-white'>
      <h2 className='text-3xl font-bold text-gray-800'>{product.productName}</h2>
      <div className="flex gap-10 mt-5">
            <div className="bg-white rounded-lg">
              <img src={product.productImg} alt={product.productName} className='w-80 h-80 object-cover py-5 shadow-lg'/>
              <div className=''>
                <p className='text-xl font-black mt-5'>Giá: {product.price.toLocaleString()}VNĐ</p>
                <p className='text-lg text-gray-600 mt-2 font-medium'>Mô tả: {product.description}</p>
              </div>
              <div className='text-end'></div>
              <button onClick={() => {handleAddtoCart(product)}} className='w-full py-1 px-3 block text-center bg-blue-500 mt-8 text-white font-bold hover:bg-blue-900 translate-all duration-300'>Thêm sản phẩm</button>
            </div>
      </div>
    </section>
  )
}
