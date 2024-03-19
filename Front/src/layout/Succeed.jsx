import React from 'react';
import { Link } from 'react-router-dom';

const Succeed = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-400">
      <div className="max-w-xl w-full border border-gray-300 p-20 rounded-md text-center bg-gray-200 shadow-md">
        <div className="avatar w-32 h-32 mx-auto mb-10 border border-white rounded-full">
          <img src="https://www.prosofterp.com/upload/31/NONBYUOPha.png" alt="Avatar" className="rounded-full" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-10">ได้รับสินค้าแล้ว</h3>
        <p className="text-base text-gray-700 mb-2" style={{ fontSize: "1.2rem" }}>ขอบคุณที่ใช้บริการ!</p>
<p className="text-base text-gray-700 mb-4" style={{ fontSize: "1.2rem" }}>กรุณาตรวจสอบสินค้าที่ได้รับ</p>

        <Link to="/#" className="inline-block bg-green-400 text-white px-8 py-3 rounded bg-green-500">
          กลับสู่หน้าหลัก
        </Link>
      </div>
    </div>
  );
};

export default Succeed;
