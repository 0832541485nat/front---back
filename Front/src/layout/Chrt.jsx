import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Page.css'; // Make sure to import your stylesheet

const CheckoutPage = () => {
  const [addressData, setAddressData] = useState({
    fullName: '',
    address: '',
    city: '',
    country: '',
    postalCode: ''
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: ''
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value
    });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...addressData, ...paymentData });
    setAddressData({
      fullName: '',
      address: '',
      city: '',
      country: '',
      postalCode: ''
    });
    setPaymentData({
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
      paymentMethod: ''
    });
  };

  return (
    
    <div className="container mx-auto py-8">
      <div className="flex justify-between">
        <div className="w-1/2 mr-4">
        <h3 className="section-title flex justify-center items-center border border-gray-300 p-2 rounded-md bg-green-300" style={{ fontWeight: "bold" }}>ที่อยู่การจัดส่ง</h3>



          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
            <label htmlFor="fullName" className="label with-border text-black">ชื่อผู้ใช้</label>
              <input
              
                type="text"
                id="fullName"
                name="fullName"
                value={addressData.fullName}
                onChange={handleAddressChange}
                className="input with-border"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address" className="label with-border text-black">ที่อยู่</label>
              <input
                type="text"
                id="address"
                name="address"
                value={addressData.address}
                onChange={handleAddressChange}
                className="input with-border"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="form-group w-1/2 mr-2">
                <label htmlFor="city" className="label with-border text-black">เมือง</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={addressData.city}
                  onChange={handleAddressChange}
                  className="input with-border"
                  required
                />
              </div>
              <div className="form-group w-1/2 ml-2">
                <label htmlFor="country" className="label with-border text-black">ประเทศ</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={addressData.country}
                  onChange={handleAddressChange}
                  className="input with-border"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="postalCode" className="label with-border text-black">รหัสไปรษณีย์</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={addressData.postalCode}
                onChange={handleAddressChange}
                className="input with-border"
                required
              />
            </div>
          </form>
        </div>
        <div className="w-1/2">
        <h3 className="section-title flex justify-center items-center border border-gray-300 p-2 rounded-md bg-green-300 text-black" style={{ fontWeight: "bold" }}>
  ข้อมูลการชำระเงิน
</h3>

          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="cardNumber" className="label with-border text-black">หมายเลขบัตรเครดิต</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handlePaymentChange}
                className="input with-border"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardHolder" className="label with-border text-black">ชื่อผู้ถือบัตร</label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                value={paymentData.cardHolder}
                onChange={handlePaymentChange}
                className="input with-border"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate" className="label with-border text-black">วันหมดอายุ</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={paymentData.expiryDate}
                onChange={handlePaymentChange}
                className="input with-border"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv" className="label with-border text-black">CVV</label>
              <input
                id="cvv"
                name="cvv"
                value={paymentData.cvv}
                onChange={handlePaymentChange}
                className="input with-border"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentMethod" className="label with-border text-black">วิธีการชำระเงิน</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={paymentData.paymentMethod}
                onChange={handlePaymentChange}
                className="input with-border"
                required
              >
                <option value="">เลือกวิธีการชำระเงิน</option>
                <option value="creditCard">บัตรเครดิต</option>
                <option value="bankTransfer">โอนเงินผ่านธนาคาร</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-4">
      <Link
  to="/ThankYouPage"
  className="inline-block bg-green-500 text-white px-4 py-2 rounded bg-green-500"
  style={{ fontSize: "20px" }}
>
  สั่งซื้อสินค้า
</Link>

      </div>
    </div>
  );
};

export default CheckoutPage;
