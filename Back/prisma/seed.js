const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { username : 'andy', password, email: 'andy@ggg.mail' },
  { username : 'bobby', password, email: 'bobby@ggg.mail' },
  { username : 'candy', password, email: 'candy@ggg.mail' },
]

const todoData = [
  { title:'Learn HTML', dueDate: new Date(), userId: 1 },
  { title:'Learn CSS', dueDate: new Date(), userId: 1 },
  { title:'Learn JS', dueDate: new Date(), userId: 2 },
  { title:'Learn React', dueDate: new Date(), userId: 3 },

]

const run = async () => {
  await prisma.user.createMany({
    data : userData
  })
  await prisma.todo.createMany({
    data : todoData
  })
}

run()











import React from 'react';
import { Link } from "react-router-dom";

export default function UserHome() {
  return (
    <div className="flex flex-col gap-4">
      <div id="gallery" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.pinimg.com/564x/96/11/8d/96118d3617a767e6e81695cf3688c4ff.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
          </div>
          <div className="duration-700 ease-in-out hidden" data-carousel-item="active">
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
          </div>
          <div className="duration-700 ease-in-out hidden" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
          </div>
          <div className="duration-700 ease-in-out hidden" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
          </div>
          <div className="duration-700 ease-in-out hidden" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
          </div>
        </div>

        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="text-center text-2xl text-blue-500">
  Best selling products 
{/* <svg xmlns="http://www.w3.org/2000/svg" height="14" width="15.75" viewBox="0 0 576 512">
    <path fill="#FFD43B" d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
  </svg> */}
</div>

      <div>
        <form className="flex justify-center">
          <Link to="/new">
            <div className="card w-96 bg-base-100 shadow-xl m-4">
              <figure>
                <img
                  src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Zinc-15mg.jpg?o=O2pqbxqynEMEExqXbpEBNKkoFSgj&V=7N9z&w=800&h=800"
                  alt="Zinc 15mg"
                  style={{ maxWidth: "50%", maxHeight: "100px" }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Chemist Zinc 15mg</h2>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </Link>
          <Link to="/new">
            <div className="card w-96 bg-base-100 shadow-xl m-4">
              <figure>
                <img
                  src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Vitamin-E-400iu.jpg?o=4Tg8m@TRQRC6cyEEJADeZEGYC7Qj&V=WmFt&w=600&h=600"
                  alt="Vitamin-E-400iu"
                  style={{ maxWidth: "50%", maxHeight: "100px" }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Vitamin E 400 iu</h2>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </Link>
          <Link to="/new">
            <div className="card w-96 bg-base-100 shadow-xl m-4">
              <figure>
                <img
                  src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Calcium,-Magnesium-&-Vitamin-D.png?o=SB5CqwMffDWMMd1zM1w9PG@QsRsp&V=NtVZ&w=800&h=800"
                  alt="Magnesium-&-Vitamin-D"
                  style={{ maxWidth: "50%", maxHeight: "100px" }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Bone Health</h2>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </Link>
        </form>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-center text-2xl text-blue-500">Recommended products</div>
        <div>
          <form className="flex justify-center">
            <Link to="/new">
              <div className="card w-96 bg-base-100 shadow-xl m-4">
                <figure>
                  <img
                    src="https://pngimg.com/d/first_aid_kit_PNG42.png"
                    alt="Zinc 15mg"
                    style={{ maxWidth: "50%", maxHeight: "100px" }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">First Aid Kit</h2>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </Link>
            <Link to="/new">
              <div className="card w-96 bg-base-100 shadow-xl m-4">
                <figure>
                  <img
                    src="https://www.health-emporium.co.uk/cdn/shop/products/product-pernaton-mussel-extract-green-lipped-gel-250ml-18197-36722-3691185.jpg?v=1579883321"
                    alt="Vitamin-E-400iu"
                    style={{ maxWidth: "50%", maxHeight: "100px" }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Pernaton Gel</h2>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </Link>
            <Link to="/new">
              <div className="card w-96 bg-base-100 shadow-xl m-4">
                <figure>
                  <img
                    src="https://m.media-amazon.com/images/I/61EQlNu41oL._AC_UF1000,1000_QL80_.jpg"
                    alt="Magnesium-&-Vitamin-D"
                    style={{ maxWidth: "50%", maxHeight: "100px" }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Kool’n Soothe Gel</h2>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}