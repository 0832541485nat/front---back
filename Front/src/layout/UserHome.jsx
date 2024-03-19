import React from 'react';
import { Link } from "react-router-dom";

export default function UserHome() {
  return (
    <div className="flex flex-col gap-4">


      <div>
        <form className="flex justify-center">
          
            <div className="card w-96 bg-base-100 shadow-xl m-4">
              <figure>
                <img
                  src="https://i.pinimg.com/564x/35/d5/d2/35d5d2447bf38f60f83d2a3f7246d3ef.jpg"

                  style={{ maxWidth: "50%", maxHeight: "100px" }}
                />
              </figure>
              <div className="card-body">
              </div>
            </div>
        
            <div className="card w-96 bg-base-100 shadow-xl m-4">
              <figure>
                <img
                  src="https://i.pinimg.com/564x/86/f3/b7/86f3b77351193e32affc2297dfb6da7a.jpg"
                  style={{ maxWidth: "50%", maxHeight: "100px" }}
                />
              </figure>
              <div className="card-body">
              </div>
            </div>
          
         
            <div className="card w-96 bg-base-100 shadow-xl m-4">
              <figure>
                <img
                  src="https://i.pinimg.com/564x/7d/33/cd/7d33cdc6e2fd29eea6ed124e7c37ce9e.jpg"
                  style={{ maxWidth: "50%", maxHeight: "100px" }}
                />
              </figure>
              <div className="card-body">
              </div>
            </div>
         
        </form>
      </div>

      <div className="flex flex-col gap-4">
      
        <div className="text-center text-2xl text-black">หน้าสินค้าแนะนำ</div>
       
        <div>
          <form className="flex justify-center">
           
              <div className="card w-96 bg-base-100 shadow-xl m-4">
                <figure>
                  <img
                    src="https://i.pinimg.com/564x/16/01/bb/1601bb5f8b9639653ad746b5374bb0a3.jpg"
                    style={{ maxWidth: "50%", maxHeight: "100px" }}
                  />
                </figure>
                <div className="card-body">
                </div>
              </div>
            
            
              <div className="card w-96 bg-base-100 shadow-xl m-4">
                <figure>
                  <img
                    src="https://i.pinimg.com/564x/e0/a4/52/e0a452a5c5ad6084ad556a48ae47f6a1.jpg"
                    style={{ maxWidth: "100%", maxHeight: "100px" }}
                  />
                </figure>
                <div className="card-body">
                </div> 
              </div>
            
          </form>
        </div >
        <div className='flex justify-between'>
        <Link to="/Basket"style={{ backgroundColor: '#f0f0f0', padding: '2px', borderRadius: '8px' }}>
        <div className="text-center text-2xl m-3 text-black" >สินค้าในตะกร้า</div>
        </Link>
        
        <Link to="/product" style={{ backgroundColor: '#f0f0f0', padding: '2px', borderRadius: '8px' }}>
          <div className="text-center text-2xl m-3 text-black cursor-pointer">เลือกซื้อสินค้า</div>
        </Link>
        </div>
      </div>
    </div>
  );
}