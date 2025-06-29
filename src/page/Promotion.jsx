import React from 'react'

function Promotion() {
  const promos = [
    {
      title: "ซื้อ 2 แถม 1 ครัวซองต์เนยสด",
      detail: "เมื่อซื้อครัวซองต์เนยสด 2 ชิ้น รับฟรีอีก 1 ชิ้นทันที!",
      img: "https://s359.kapook.com/pagebuilder/37a6ec5e-712d-462c-9e2d-6b63c39e9777.jpg"
    },
    {
      title: "ลด 15% ขนมไทยทุกเมนู",
      detail: "เฉพาะวันศุกร์-อาทิตย์ ขนมไทยลดราคาทุกเมนู 15%",
      img: "https://bakery-lover.com/wp-content/uploads/2023/01/1.png"
    },
    {
      title: "ซื้อ 1 แถม 1 ขนมนำเข้า",
      detail: "เมื่อซื้อขนมนำเข้าชนิดใดก็ได้ 1 ชิ้น รับฟรีอีก 1 ชิ้นทันที!",
      img: "https://images.squarespace-cdn.com/content/v1/54e9c782e4b02db31b4324d9/1560584328789-DMSNC4KSUDHWPFRNZZN2/IMG_2884.jpg?format=2500w"
    },
    {
      title: "ลด 15% ขนมอบทุกเมนู",
      detail: "เฉพาะวันศุกร์-อาทิตย์ ขนมอบลดราคาทุกเมนู 15%",
      img: "https://www.pholfoodmafia.com/wp-content/uploads/2017/03/1000DoubleChocolateBrownies.jpg"
    },
  ]

  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      <h2 style={{ color: '#FFB347', fontWeight: 700, marginBottom: 24 }}>โปรโมชั่นพิเศษ</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {promos.map((promo, idx) => (
          <div key={idx} style={{
            display: 'flex',
            alignItems: 'center',
            background: '#FFF8F2',
            borderRadius: 14,
            boxShadow: '0 2px 12px #FFD6B033',
            padding: 18,
            gap: 18,
            border: '1.5px solid #FFD6B0'
          }}>
            <img src={promo.img} alt={promo.title} style={{
              width: 90, height: 90, borderRadius: 12, objectFit: 'cover', border: '1px solid #FFD6B0'
            }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 20, color: '#4B3F2F', marginBottom: 6 }}>{promo.title}</div>
              <div style={{ color: '#7C6A58', fontSize: 16 }}>{promo.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Promotion