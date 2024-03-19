import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TrackingPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleOrderNumberChange = (e) => {
    setOrderNumber(e.target.value);
  };

  const handleTrackOrder = (e) => {
    e.preventDefault();
    // Simulate tracking information (replace this with actual API call)
    const mockTrackingInfo = {
      // status: 'สั่งซื้อสำเร็จ',
      estimatedDelivery: '2024-04-01',
      carrier: 'BoBo Express',
      // trackingNumber: 'ABC123456789'
    };

    setTrackingInfo(mockTrackingInfo);
  };

  return (
    
    <div className="flex flex-col justify-center items-center h-screen bg-dark gray-400">
<img
  src="https://e7.pngegg.com/pngimages/766/400/png-clipart-euclidean-mobile-phone-graphy-illustration-phone-features-gadget-phone-icon.png"
  alt="Avatar"
  className="rounded-full block mx-auto"
  style={{ width: '300px', height: '300px' }}
/>


      <h2 className="text-3xl font-semibold mb-4">ติดตามพัสดุ</h2>
      <p className="text-gray-700 mb-8" style={{ fontSize: "1.2rem" }}>
  กรอกหมายเลขพัสดุของท่านเพื่อติดตามสถานะพัสดุ
</p>

      
      <form onSubmit={handleTrackOrder} className="mb-8">
        <input
          type="text"
          placeholder="หมายเลขการสั่งซื้อ"
          value={orderNumber}
          onChange={handleOrderNumberChange}
          className="border border-gray-300 px-4 py-2 rounded-md mr-2"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md bg-green-500"
        >
          ติดตาม
        </button>
      </form>
      {trackingInfo && (
        <div className="flex justify-center items-center h-full">
          {/* //สีในกรอบ */}
          <div className="border border-gray-300 p-6 rounded-md text-center">
  <h3 className="text-xl font-semibold mb-2">สถานะการขนส่ง {trackingInfo.status}</h3>
  <p className="text-gray-700 mb-2">
    วันที่คาดว่าจะได้รับ {trackingInfo.estimatedDelivery}
  </p>
  <p className="text-gray-700 mb-2">บริษัทขนส่ง {trackingInfo.carrier}</p>
  <div className="flex justify-center">
    <Link to="/succeed" className="bg-green-500 text-white px-4 py-2 rounded-md">
      จัดส่งสำเร็จ
    </Link>
  </div>
</div>

  <ul className="timeline">
  <li>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box">
    สั่งซื้อสินค้าสำเร็จ</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box">
    กำลังเตรียมพัสดุ</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box">พัสดุถึงศูนย์คัดแยกสินค้า</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box">พัสดุถูกส่งมอบให้พนักงานขนส่ง</div>
    <hr className="border-gray-300"/>
    
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box">พัสดุถูกจัดส่งสำเร็จ</div>
  </li>
</ul>
</div>
      )}
    </div>
  );
};

export default TrackingPage;
