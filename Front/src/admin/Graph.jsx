import React from 'react';

const Graph = () => {
  return (
    <div className="stats shadow" style={{ fontSize: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-12 h-12 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </div>
        <div className="stat-title">ยอดการขายเดือนมกราคม</div>
        <div className="stat-value text-primary">2.6 M</div>
        <div className="stat-desc">เพิ่มขึ้นจากเดือนที่แล้ว 16 %</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-12 h-12 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <div className="stat-title">ยอดการขายเดือนกุมภาพันธ์</div>
        <div className="stat-value text-secondary">4.5M</div>
        <div className="stat-desc">เพิ่มขึ้นจากเดือนที่แล้ว 30 %</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-35 rounded-full"> {/* ปรับขนาด avatar เป็น 24 */}
             
              <img src="/src/assets/7777.png" />
            </div>
          </div>
          
        </div>
        <div className="stat-title">ยอดการขายเดือนมีนาคม</div>
        <div className="stat-value text-secondary">5.9M</div>
        <div className="stat-desc">เพิ่มขึ้นจากเดือนที่แล้ว 15 %</div>
      </div>
      
    </div>
  );
};

export default Graph;
