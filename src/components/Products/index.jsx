import React from 'react'
import { Link } from 'react-router-dom'

export default function Products({handleAddtoCart}) {
  const products = [
    {
      id: 1, productName: "Đồng hồ 1", productImg: "https://picsum.photos/200", price: 3000000 , description: "Đây là một trong những mẫu đồng hồ Chuyên dụng đầu tiên của chúng tôi và đã trở thành nguyên mẫu của đồng hồ công cụ dành riêng cho việc lặn. Khi ra mắt vào năm 1953, Oyster Perpetual Submariner là mẫu đồng hồ đeo tay dành cho thợ lặn đầu tiên có khả năng chống thấm nước lên đến 100 mét (330 feet). Ngày nay, là dòng đồng hồ đi đầu về công nghệ chế tạo đồng hồ, Submariner và Submariner Date được trang bị các tính năng đảm bảo độ tin cậy và uy tín như những thiết bị lặn. Giống như những người mạnh dạn mạo hiểm tiến vào vùng biển sâu bí ẩn, nhiều người đeo đồng hồ Submariner đã chọn khám phá các vùng đất khác nhau. Trên cổ tay họ là chiếc đồng hồ đã vượt qua mục đích ban đầu và trở thành biểu tượng được công nhận toàn cầu."
    },
    {
      id: 2, productName: "Đồng hồ 2", productImg: "https://picsum.photos/200", price: 5000000 , description: "Đây là một trong những mẫu đồng hồ Chuyên dụng đầu tiên của chúng tôi và đã trở thành nguyên mẫu của đồng hồ công cụ dành riêng cho việc lặn. Khi ra mắt vào năm 1953, Oyster Perpetual Submariner là mẫu đồng hồ đeo tay dành cho thợ lặn đầu tiên có khả năng chống thấm nước lên đến 100 mét (330 feet). Ngày nay, là dòng đồng hồ đi đầu về công nghệ chế tạo đồng hồ, Submariner và Submariner Date được trang bị các tính năng đảm bảo độ tin cậy và uy tín như những thiết bị lặn. Giống như những người mạnh dạn mạo hiểm tiến vào vùng biển sâu bí ẩn, nhiều người đeo đồng hồ Submariner đã chọn khám phá các vùng đất khác nhau. Trên cổ tay họ là chiếc đồng hồ đã vượt qua mục đích ban đầu và trở thành biểu tượng được công nhận toàn cầu."
    },
    {
      id: 3, productName: "Đồng hồ 3", productImg: "https://picsum.photos/200", price: 1000000 , description: "Đây là một trong những mẫu đồng hồ Chuyên dụng đầu tiên của chúng tôi và đã trở thành nguyên mẫu của đồng hồ công cụ dành riêng cho việc lặn. Khi ra mắt vào năm 1953, Oyster Perpetual Submariner là mẫu đồng hồ đeo tay dành cho thợ lặn đầu tiên có khả năng chống thấm nước lên đến 100 mét (330 feet). Ngày nay, là dòng đồng hồ đi đầu về công nghệ chế tạo đồng hồ, Submariner và Submariner Date được trang bị các tính năng đảm bảo độ tin cậy và uy tín như những thiết bị lặn. Giống như những người mạnh dạn mạo hiểm tiến vào vùng biển sâu bí ẩn, nhiều người đeo đồng hồ Submariner đã chọn khám phá các vùng đất khác nhau. Trên cổ tay họ là chiếc đồng hồ đã vượt qua mục đích ban đầu và trở thành biểu tượng được công nhận toàn cầu."
    },
    {
      id: 4, productName: "Đồng hồ 4", productImg: "https://picsum.photos/200", price: 2000000 , description: "Đây là một trong những mẫu đồng hồ Chuyên dụng đầu tiên của chúng tôi và đã trở thành nguyên mẫu của đồng hồ công cụ dành riêng cho việc lặn. Khi ra mắt vào năm 1953, Oyster Perpetual Submariner là mẫu đồng hồ đeo tay dành cho thợ lặn đầu tiên có khả năng chống thấm nước lên đến 100 mét (330 feet). Ngày nay, là dòng đồng hồ đi đầu về công nghệ chế tạo đồng hồ, Submariner và Submariner Date được trang bị các tính năng đảm bảo độ tin cậy và uy tín như những thiết bị lặn. Giống như những người mạnh dạn mạo hiểm tiến vào vùng biển sâu bí ẩn, nhiều người đeo đồng hồ Submariner đã chọn khám phá các vùng đất khác nhau. Trên cổ tay họ là chiếc đồng hồ đã vượt qua mục đích ban đầu và trở thành biểu tượng được công nhận toàn cầu."
    },
  ]
  return (
    <section className='container mx-auto p-6'>
      <h2 className='text-2xl font-bold text-center'>Danh sách đồng hồ</h2>
      <div className="grid grid-cols-4">
        {products.map((product) => { 
          return (
            <div className="bg-white shadow-lg p-4 rounded-lg">
              <img src={product.productImg} alt="" className='w-full object-cover rounded-tl-lg'/>
              <p className='text-lg font-semibold mt-5'>{product.productName}</p>
              <p className='font-size-'>Giá: {product.price.toLocaleString()} vnd</p>
              <Link to={`/product-detail/${product.id}`} state={{product}} className='w-full block py-2 bg-green-500 text-white text-center'>Chi tiết sản phẩm</Link>
              <button onClick={() => {handleAddtoCart(product)}} className='w-full block py-2 bg-blue-500 mt-5 text-white text-center'>Thêm sản phẩm</button>
            </div>
          )
         })}
      </div>
    </section>
  )
}

