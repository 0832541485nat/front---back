import axios from "axios";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation
      const rs = await axios.post("http://localhost:8000/auth/login", input);
      console.log(rs.data.token);
      localStorage.setItem("token", rs.data.token);
      const rs1 = await axios.get("http://localhost:8000/auth/me", {
        headers: { Authorization: `Bearer ${rs.data.token}` },
      });
      console.log(rs1.data);
      setUser(rs1.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-8 bg-white rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl mb-4 text-center text-green-600 font-semibold">เข้าสู่ระบบ</h2>
        <form onSubmit={hdlSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-800 mb-1">ชื่อผู้ใช้</label>
            <input
              type="text"
              id="username"
              name="username"
              value={input.username}
              onChange={hdlChange}
              className="w-full px-3 py-2 text-gray-800 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="กรอกชื่อผู้ใช้"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800 mb-1">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              name="password"
              value={input.password}
              onChange={hdlChange}
              className="w-full px-3 py-2 text-gray-800 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="กรอกรหัสผ่าน"
            />
          </div>
          <div className="mb-4 flex items-center justify-center"> {/* แก้ไขตรงนี้ */}
            <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300">เข้าสู่ระบบ</button>
          </div>
        </form>
      </div>
    </div>
  );
  
}
