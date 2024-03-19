import axios from 'axios';
import { useState } from 'react';

export default function RegisterForm() {
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    otheruserdetails: '',

  });

  const handleChange = (e) => {
    setInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post('http://localhost:8000/auth/register', input);
      console.log(response);
      if (response.status === 200) {
        alert('Register Successful');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl mb-4 text-center text-green-600 font-semibold">ลงทะเบียน</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">ชื่อผู้ใช้</label>
            <input
              type="text"
              id="username"
              name="username"
              value={input.username}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="ชื่อผู้ใช้"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">อีเมล</label>
            <input
              type="email"
              id="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="อีเมล"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="อย่างน้อย 8 ตัวอักษร"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">ยืนยันรหัสผ่าน</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="อย่างน้อย 8 ตัวอักษร"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">รายละเอียดผู้ใช้</label>
            <input
              type="text"
              id="otheruserdetails"
              name="otheruserdetails"
              value={input.otheruserdetails}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="อย่างน้อย 8 ตัวอักษร"
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300"
            >
              ลงทะเบียน
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
