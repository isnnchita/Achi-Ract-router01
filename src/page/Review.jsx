import React from 'react'

function Review() {
  const reviews = [
    {
      name: "คุณแนน",
      text: "ขนมไทยอร่อยมาก สดใหม่ทุกวัน บริการดีมากค่ะ จะกลับมาซื้ออีกแน่นอน",
      img: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "คุณบอย",
      text: "เบเกอรี่หอม นุ่ม ราคาดี ร้านสะอาด บรรยากาศดีมากครับ",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "คุณอ้อม",
      text: "ขนมนำเข้าก็มีให้เลือกเยอะ ถูกใจมากค่ะ สั่งออนไลน์ก็สะดวก",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "คุณบอย",
      text: "เบเกอรี่หอม นุ่ม ราคาดี ร้านสะอาด บรรยากาศดีมากครับ",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "คุณแนน",
      text: "ขนมไทยอร่อยมาก สดใหม่ทุกวัน บริการดีมากค่ะ จะกลับมาซื้ออีกแน่นอน",
      img: "https://randomuser.me/api/portraits/women/65.jpg"
    },
  ]

  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      <h2 style={{ color: '#FFB347', fontWeight: 700, marginBottom: 24 }}>รีวิวจากลูกค้า</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {reviews.map((r, idx) => (
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
            <img src={r.img} alt={r.name} style={{
              width: 70, height: 70, borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFB347'
            }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 18, color: '#4B3F2F', marginBottom: 6 }}>{r.name}</div>
              <div style={{ color: '#7C6A58', fontSize: 16 }}>{r.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Review