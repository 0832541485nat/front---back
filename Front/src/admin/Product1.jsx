import React from 'react';

const Product1 = () => {
  return (
    <div className="overflow-x-auto">
    <table className="table h-full" style={{ height: "700px" }}>
      {/* head */}
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>ชื่อที่อยู่ลูกค้า</th>
          <th>เมืองที่อาศัยอยู่</th>
          <th>อีเมลลูกค้าที่ใช้บริการ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/src/assets/ttt.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">นริศรา จันทพรม</div>
                {/* <div className="text-sm opacity-50">ประเทศไทย</div> */}
              </div>
            </div>
          </td>
          <td>
          ประเทศไทย
            <br/>
            {/* <span className="badge badge-ghost badge-sm">นักศึกษา</span> */}
          </td>
          <td>narisara112271@gmail.com</td>
          <th>
            <button className="btn btn-ghost btn-xs">รายระเอียดเพิ่มเติม</button>
          </th>
        </tr>
        {/* row 2 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
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
                {/* <div className="text-sm opacity-50">ไอซ์แลนด์</div> */}
              </div>
            </div>
          </td>
          <td>
          	
          ไอซ์แลนด์
            <br/>
            {/* <span className="badge badge-ghost badge-sm">	นักร้อง</span> */}
          </td>
          <td>643170010301@gmail.com</td>
          <th>
            <button className="btn btn-ghost btn-xs">รายระเอียดเพิ่มเติม</button>
          </th>
        </tr>
        {/* row 2 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
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
                {/* <div className="text-sm opacity-50">ประเทศไทย</div> */}
              </div>
            </div>
          </td>
          <td>
          ประเทศไทย
            <br/>
            {/* <span className="badge badge-ghost badge-sm">	นักแสดง</span> */}
          </td>
          <td>narisara333333@gmail.com</td>
          <th>
            <button className="btn btn-ghost btn-xs">รายระเอียดเพิ่มเติม</button>
          </th>
        </tr>
        {/* row 3 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
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
                {/* <div className="text-sm opacity-50">ประเทศไทย</div> */}
              </div>
            </div>
          </td>
          <td>
          ประเทศไทย
            <br/>
            {/* <span className="badge badge-ghost badge-sm">	นักแสดง</span> */}
          </td>
          <td>123456@gmail.com</td>
          <th>
            <button className="btn btn-ghost btn-xs">รายระเอียดเพิ่มเติม</button>
          </th>
        </tr>
        {/* row 4 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
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
                {/* <div className="text-sm opacity-50">ประเทศไทย</div> */}
              </div>
            </div>
          </td>
          <td>
          ประเทศไทย
            <br/>
            {/* <span className="badge badge-ghost badge-sm">	นักแสดง</span> */}
          </td>
          <td>pikun9999@gmail.com</td>
          <th>
            <button className="btn btn-ghost btn-xs">รายระเอียดเพิ่มเติม</button>
          </th>
        </tr>
        {/* row 4 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
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
                {/* <div className="text-sm opacity-50">ประเทศสหรัฐอเมริกา</div> */}
              </div>
            </div>
          </td>
          <td>
          ประเทศสหรัฐอเมริกา
            <br/>
            {/* <span className="badge badge-ghost badge-sm">อาชีพนักเดินแบบ</span> */}
          </td>
          <td>ssss4561@gmail.com</td>
          <th>
            <button className="btn btn-ghost btn-xs">รายระเอียดเพิ่มเติม</button>
          </th>
        </tr>
        {/* row 4 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
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
                {/* <div className="text-sm opacity-50">ประเทศสหรัฐอเมริกา</div> */}
              </div>
            </div>
          </td>
          <td>
          	
          ประเทศสหรัฐอเมริกา
            <br/>
            {/* <span className="badge badge-ghost badge-sm">เจ้าของกิจการ</span> */}
          </td>
          <td>pppp4444@gmail.com</td>
          <th>
            <button className="btn btn-ghost btn-xs">รายระเอียดเพิ่มเติม</button>
          </th>
        </tr>
        {/* row 4 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
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
                {/* <div className="text-sm opacity-50">ประเทศสหรัฐอเมริกา</div> */}
              </div>
            </div>
          </td>
          <td>
          ประเทศสหรัฐอเมริกา
            <br/>
            {/* <span className="badge badge-ghost badge-sm">นักร้อง</span> */}
          </td>
          <td>sdcvn98889@gmail.com</td>
          <th>
            <button className="btn btn-ghost btn-xs">รายระเอียดเพิ่มเติม</button>
          </th>
        </tr>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
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
                {/* <div className="text-sm opacity-50">ประเทศแคนาดา</div> */}
              </div>
            </div>
          </td>
          <td>
          ประเทศแคนาดา
            <br/>
            {/* <span className="badge badge-ghost badge-sm">	นักร้อง</span> */}
          </td>
          <td>pikun9999@gmail.com</td>
          <th>
            <button className="btn btn-ghost btn-xs">รายระเอียดเพิ่มเติม</button>
          </th>
        </tr>
        {/* row 4 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
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
                {/* <div className="text-sm opacity-50">เกาหลีใต้</div> */}
              </div>
            </div>
          </td>
          <td>
          เกาหลีใต้
            <br/>
            {/* <span className="badge badge-ghost badge-sm">นักแสดง</span> */}
          </td>
          <td>santi112271@gmail.com</td>
          <th>
            <button className="btn btn-ghost btn-xs">รายระเอียดเพิ่มเติม</button>
            
            
          </th>
        </tr>
      </tbody>
      {/* foot */}
      
        <tr>
          <th></th>
          <th>จัดเก็บข้อมูล</th>
          <th>จัดเก็บข้อมูล</th>
          <th>จัดเก็บข้อมูล</th>
          <th></th>
        </tr>
    
      
    </table>
  </div>
  );
};

export default Product1;
