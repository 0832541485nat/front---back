import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    console.log('Clicked Add to Cart');
    // เพิ่มลงในตะกร้า
    console.log(`เพิ่ม ${selectedProduct.name} ลงในตะกร้า`);
  };

  const handleBuyNew = () => {
    // ซื้อสินค้าใหม่
    console.log(`ซื้อสินค้าใหม่: ${selectedProduct.name}`);
  };

  const products = [
    {
      id: 1,
      name: 'รองเท้าบูทสีดำ $250    size 38',
      href: '#',
      price: '$ 250',
      imageSrc: '/src/assets/77.jpg',
      // imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    
    },
    {
      id: 2,
      name: 'รองเท้าส้นสูง $500    size 40  ',
      href: '#',
      price: '$ 500',
      imageSrc: '/src/assets/111.jpg',
      // imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'รองเท้าบูทสีเงิน $300    size 39',
      href: '#',
      price: '$ 300',
      imageSrc: '/src/assets/99.jpg',
      // imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    }, 
    {
      id: 4,
      name: 'รองเท้าไนกี้ $400    size 38',
      href: '#',
      price: '$ 400',
      imageSrc: '/src/assets/555.jpg',
      // imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'รองเท้าบูทสีเงิน $350    size 39',
      href: '#',
      price: '$ 350',
      imageSrc: '/src/assets/666.jpg',
      // imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'รองเท้าแตะ $100    size 37',
      href: '#',
      price: '$ 100',
      imageSrc: '/src/assets/775.jpg',
      // imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">สินค้า</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 cursor-pointer"
                  onClick={() => showModal(product)}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <div className="card-actions">
                <p className="mt-1 flex lg:flex-1 text-lg font-medium text-orange-400">{product.price}</p>
                <button className="btn" onClick={() => showModal(product)}><FaShoppingCart /></button>
                {selectedProduct && (
                  <dialog open className="modal">
                    <div className="modal-box max-w-3xl">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                      </form>
                      <h3 className="pb-4 font-bold text-lg"> </h3>
                      <div className="flex">
                        <img
                          src={selectedProduct.imageSrc}
                          alt={selectedProduct.imageAlt}
                          //ปรับขนาดรูป//
                          style={{ maxHeight: '40vh', width: 'auto', display: 'block', margin: '0 auto' }}
                          
                          onClick={closeModal}
                        />
                        <div className="ml-4 flex-1 flex-col">
                          <p>{selectedProduct.name}</p>
                          <p className="mt-1 flex lg:flex-1 text-lg font-medium text-orange-400">{selectedProduct.price}</p>
                          <div className="flex gap-5 mt-36">
                            <Link to="/Basket">
                              <button
                                type="submit"
                                className="w-72 text-sm bg-stone-700 text-white py-2 px-4 hover:bg-stone-500 transition duration-300"
                                onClick={handleAddToCart}
                              >
                                 <span style={{ fontSize: '1.25rem' }}>เพิ่มลงในตะกร้า</span>
                              </button>
                            </Link>
                            <button
                              type="button"
                              // className="w-12 text-sm bg-stone-700 text-white py-2 px-4 rounded-[15px] hover:bg-stone-500 transition duration-300"
                            >
                              {/* <FaHeart /> */}
                              {/* หัวใจ */}
                            </button>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </dialog>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;