import React from 'react';



const Home = () => {
  return (
    <div className="overflow-x-auto">
    <table className="table h-full" style={{ height: "800px" }}>
    
      <thead>
        <tr>

          <th>
          </th>
          <th>ชื่อข้อมูลลูกค้า</th>
          <th>เคยใช้บริการทางร้านกี่ครั้ง</th>
          <th>รู้จักจากช่องทางไหน</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <label>
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/src/assets/nnn.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">นริศรา จันทพรม</div>
              </div>
            </div>
          </td>
          <td>
          เคยใช้บริการ 5 ครั้ง
            <br/>
          </td>
          <td style={{ color: "#1C64F2" }}>เฟซบุ๊ค</td>
          <th>
          <button className="btn btn-ghost btn-xs gray-text">เก็บข้อมูลลูกต้า</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
             
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/src/assets/โดจา.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
              <div className="font-bold">โดจา แคท</div>
              </div>
            </div>
          </td>
          <td>
          เคยใช้บริการ 3 ครั้ง
            <br/>
          </td>
          <td style={{ color: "#008000" }}>ไลน์</td>

          <th>
            <button className="btn btn-ghost btn-xs">เก็บข้อมูลลูกต้า</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/src/assets/เรดี้กาก้า.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">เรดี้กาก้า</div>
              </div>
            </div>
          </td>
          <td>
          เคยใช้บริการ 4 ครั้ง
            <br/>
          </td>
          <td style={{ color: "magenta" }}>อินสตาแกรม</td>

          <th>
            <button className="btn btn-ghost btn-xs">เก็บข้อมูลลูกต้า</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/src/assets/พัชราภา ไชยเชื้อ.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">พัชราภา ไชยเชื้อ</div>
              </div>
            </div>
          </td>
          <td>
          เคยใช้บริการ 2 ครั้ง
            <br/>
          </td>
          <td style={{ color: "magenta" }}>อินสตาแกรม</td>

          <th>
            <button className="btn btn-ghost btn-xs">เก็บข้อมูลลูกต้า</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/src/assets/กัญญ์ณรัณ.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
              <div className="font-bold">กัญญ์ณรัณ วงศ์ขจรไกล</div>
              </div>
            </div>
          </td>
          <td>
          เคยใช้บริการ 1 ครั้ง
            <br/>
          </td>
          <td style={{ color: "red" }}>ติกตอก</td>

          <th>
            <button className="btn btn-ghost btn-xs">เก็บข้อมูลลูกต้า</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/src/assets/วชิรวิชญ์.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
              <div className="font-bold">วชิรวิชญ์ ชีวอารี</div>
              </div>
            </div>
          </td>
          <td>
          เคยใช้บริการ 4 ครั้ง
            <br/>
          </td>
          <td style={{ color: "red" }}>ติกตอก</td>

          <th>
            <button className="btn btn-ghost btn-xs">เก็บข้อมูลลูกต้า</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/src/assets/เคนดัลล์.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
              <div className="font-bold">เคนดัลล์ เจนเนอร์</div>
              </div>
            </div>
          </td>
          <td>
          เคยใช้บริการ 3 ครั้ง
            <br/>
          </td>
          <td style={{ color: "#008000" }}>ไลน์</td>

          <th>
            <button className="btn btn-ghost btn-xs">เก็บข้อมูลลูกต้า</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/src/assets/ไคลี่.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
              <div className="font-bold">ไคลี่ เจนเนอร์</div>
              </div>
            </div>
          </td>
          <td>
          เคยใช้บริการ 5 ครั้ง
            <br/>
          </td>
          <td style={{ color: "magenta" }}>อินสตาแกรม</td>

          <th>
            <button className="btn btn-ghost btn-xs">เก็บข้อมูลลูกต้า</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/src/assets/เดอะ.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
              <div className="font-bold">เดอะ วีกเอนด์</div>
              </div>
            </div>
          </td>
          <td>
          เคยใช้บริการ 1 ครั้ง
            <br/>
          </td>
          <td style={{ color: "red" }}>ติกตอก</td>

          <th>
            <button className="btn btn-ghost btn-xs">เก็บข้อมูลลูกต้า</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/src/assets/ฮันโซฮี.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
              <div className="font-bold">ฮันโซฮี</div>
              </div>
            </div>
          </td>
          <td>
          เคยใช้บริการ 2 ครั้ง
            <br/>
          </td>
          <td style={{ color: "blue" }}>เฟซบุ๊ก</td>

          <th>
            <button className="btn btn-ghost btn-xs">เก็บข้อมูลลูกต้า</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/src/assets/อิงฟ้า.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>

                <div className="font-bold">อิงฟ้า วราหะ</div>
              </div>
            </div>
          </td>
          <td>
          เคยใช้บริการ 3 ครั้ง
            <br/>
          </td>
          <td style={{ color: "#1C64F2" }}>เฟซบุ๊ค</td>

          <th>
            <button className="btn btn-ghost btn-xs">เก็บข้อมูลลูกต้า</button>
            </th>
        </tr>
      </tbody>
      {/* foot */}
      <tfoot>
        <tr>
          <th></th>
         
          <th></th>
        </tr>
      </tfoot>
      
    </table>
  </div>
  );
};

export default Home;
