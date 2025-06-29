import React from 'react'
import { Link } from 'react-router'

function Home({ theme = 'light' }) {
  // กำหนดสี font ตามธีม
  const isDark = theme === 'dark'
  const mainColor = isDark ? '#ffb347' : '#ffb347'
  const textColor = isDark ? '#f5f5f5' : '#333'
  const subTextColor = isDark ? '#cccccc' : '#555'
  const linkColor = isDark ? '#ffb347' : '#ffb347'
  const cardBg = isDark ? '#292929' : '#fff'

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        padding: '32px 0',
        color: textColor,
        background: 'transparent'
      }}
    >
      <div style={{ flex: 1, textAlign: 'left', maxWidth: 500, paddingLeft: 40 }}>
        <h2 style={{ color: mainColor, fontSize: '2.2rem', marginBottom: '12px' }}>
          ยินดีต้อนรับสู่ร้าน  Suger & Flour 🍩
        </h2>
        <p style={{ fontSize: '1.15rem', color: subTextColor, marginBottom: 18 }}>
          ร้านขายขนมสไตล์มินิมอล ที่คัดสรรขนมอร่อยๆ หลากหลายชนิด ทั้งขนมไทย ขนมอบ ขนมนำเข้า และขนมเพื่อสุขภาพ
          ในบรรยากาศอบอุ่น สะอาด และทันสมัย
        </p>
        <p style={{ fontSize: '1.05rem', color: isDark ? '#bbb' : '#777' }}>
          เปิดบริการทุกวัน 9:00 - 20:00 น.<br />
          สั่งซื้อออนไลน์หรือแวะมาที่หน้าร้านได้เลย!
        </p>
        <div style={{ marginTop: 28 }}>
          <Link
            to="/product"
            style={{
              background: mainColor,
              color: '#fff',
              padding: '10px 28px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.08rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              transition: 'background 0.2s'
            }}
          >
            ดูสินค้า
          </Link>
          <Link
            to="/about"
            style={{
              marginLeft: 18,
              color: linkColor,
              textDecoration: 'underline',
              fontWeight: 500,
              fontSize: '1.08rem'
            }}
          >
            เกี่ยวกับร้าน
          </Link>
        </div>
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <img
          src="https://food.mthai.com/app/uploads/2014/10/20140312102300346.jpg"
          alt="ขนม"
          style={{ width: '500px', marginBottom: '24px', marginLeft: '30px', borderRadius: '8px', background: cardBg }}
        />
      </div>
    </div>
  )
}

export default Home