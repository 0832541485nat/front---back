import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="container mx-auto py-8 text-center">
        <div className="flex justify-center items-center mb-8">
          <img src="https://i.pinimg.com/originals/db/d2/c5/dbd2c5d95ac628d6bde412c015b27bdc.jpg" alt="Avatar" className="rounded-full" style={{ width: '250px', height: '250px' }} />
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">การสั่งซื้อสำเร็จ</h2>
        <p className="text-lg text-gray-700 mb-8">
  ขอบคุณที่ทำการสั่งซื้อสินค้าจากทางร้าน ทางร้านขอขอบคุณ ครับ/ค่ะ
</p>

<p className="text-gray-700 mb-8" style={{ fontSize: '18px' }}>
  โปรดคัดลอกหมายเลขพัสดุของท่าน : <span className="font-semibold">TH123456789</span>
</p>

<Link to="/Order" className="inline-block bg-green-500 text-white px-4 py-2 rounded bg-green-500" style={{ fontSize: '18px' }}>
  ติดตามพัสดุ
</Link>

      </div>
    </div>
  );
};

export default ThankYouPage;
