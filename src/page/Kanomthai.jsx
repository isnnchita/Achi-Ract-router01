import React from 'react'

function Kanomthai() {
  const items = [
    {
      name: "ข้าวเหนียวมะม่วง",
      desc: "ข้าวเหนียวมูนหวานมัน ทานคู่กับมะม่วงสุกฉ่ำและน้ำกะทิเข้มข้น",
      img: "https://spacebar.th/api/media/file/history_of_mango_sticky_rice_Main_35c54d9c87.jpeg"
    },
    {
      name: "ทองหยิบ",
      desc: "ขนมไทยโบราณ สีเหลืองทอง รสหวานละมุน ทำจากไข่แดง",
      img: "https://img.wongnai.com/p/1920x0/2022/05/05/0e1ed3a486d14bc8a5cc9317d38a4317.jpg"
    },
    {
      name: "ลูกชุบ",
      desc: "ขนมถั่วกวนปั้นเป็นรูปผลไม้ สีสันสดใส เคลือบวุ้นบางๆ",
      img: "https://image.makewebeasy.net/makeweb/m_1920x0/o7Z6V0sJw/DefaultData/IMG_7441.jpg?v=202405291424"
    },
    {
      name: "วุ้นกะทิ",
      desc: "วุ้นกะทิหอมมัน เนื้อเด้ง รสชาติหวานละมุน",
      img: "https://bakery-lover.com/wp-content/uploads/2023/01/1.png"
    }
  ]

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <h2 style={{ color: '#FFB347', fontWeight: 700, marginBottom: 24 }}>ขนมไทยแนะนำ</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center' }}>
        {items.map((item, idx) => (
          <div key={idx} style={{
            width: 200,
            background: '#FFF8F2',
            borderRadius: 14,
            boxShadow: '0 2px 12px #FFD6B033',
            padding: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1.5px solid #FFD6B0'
          }}>
            <img src={item.img} alt={item.name} style={{
              width: 120, height: 120, borderRadius: 12, objectFit: 'cover', marginBottom: 12, border: '1.5px solid #FFB347'
            }} />
            <div style={{ fontWeight: 600, fontSize: 18, color: '#4B3F2F', marginBottom: 6 }}>{item.name}</div>
            <div style={{ color: '#7C6A58', fontSize: 15, textAlign: 'center' }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Kanomthai