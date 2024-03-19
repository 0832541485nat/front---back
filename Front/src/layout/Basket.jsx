import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Basket = () => {
  const initialCart = [
    {
      id: 1,
      name: 'รองเท้าบูทสีดำ size 38',
      price: '$250',
      imageSrc: '/src/assets/bb.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      quantity: 1,
      checked: false
    },
    {
        id: 2,
        name: 'รองเท้าส้นสูง $500    size 40  ',
        href: '#',
        price: '$ 500',
        imageSrc: '/src/assets/cc.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 3,
        name: 'รองเท้าบูทสีเงิน $300    size 39',
        href: '#',
        price: '$ 300',
        imageSrc: '/src/assets/dd.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      }, 
      {
        id: 4,
        name: 'รองเท้าไนกี้ $400    size 38',
        href: '#',
        price: '$ 400',
        imageSrc: '/src/assets/ee.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    // เพิ่มสินค้าเพิ่มเติมตามต้องการ
  ];

  const [cart, setCart] = useState(initialCart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      if (item.checked) {
        total += parseInt(item.price.replace('$', '').replace(',', '')) * item.quantity;
      }
    });
    setTotalPrice(total);
  }, [cart]);

  const handleToggleCheckbox = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">ตะกร้าสินค้า</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex flex-col sm:flex-row bg-base-200 shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="checkbox"
            id={`checkbox_${item.id}`}
            checked={item.checked}
            onChange={() => handleToggleCheckbox(item.id)}
            className="mt-4 mr-4 sm:mt-0 h-6 w-6"
          />
          <img src={item.imageSrc} alt={item.imageAlt} className="w-32 h-32 sm:w-48 sm:h-auto object-cover" />
          <div className="flex flex-col justify-between p-4 w-full">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500">ราคา: {item.price}</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <label htmlFor={`quantity_${item.id}`}>จำนวน:</label>
                <input
                  type="number"
                  id={`quantity_${item.id}`}
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="ml-2 px-2 py-1 border border-gray-300 rounded-md w-16"
                />
              </div>
              <div>
                <button onClick={() => handleRemoveItem(item.id)} className="text-orange-600 font-semibold py-1 px-4 rounded-lg border border-red-500 hover:bg-red-500 hover:text-white transition duration-300">ลบสินค้า</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <p className="text-lg font-bold">ราคารวม: ${totalPrice.toLocaleString()}</p>
        <Link to="/Chrt" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-success transition duration-300 ml-4">ชำระเงิน</Link>
      </div>
    </div>
  );
};

export default Basket;
