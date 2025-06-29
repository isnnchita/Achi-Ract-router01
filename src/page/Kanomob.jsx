import React from 'react'

function Kanomob() {
  const items = [
    {
      name: "ครัวซองต์เนยสด",
      desc: "ครัวซองต์อบใหม่ หอมเนยแท้ กรอบนอกนุ่มใน",
      img: "https://s359.kapook.com/pagebuilder/37a6ec5e-712d-462c-9e2d-6b63c39e9777.jpg"
    },
    {
      name: "บราวนี่ช็อกโกแลต",
      desc: "บราวนี่เนื้อหนึบ เข้มข้นด้วยช็อกโกแลตแท้",
      img: "https://www.pholfoodmafia.com/wp-content/uploads/2017/03/1000DoubleChocolateBrownies.jpg"
    },
    {
      name: "ชีสเค้กญี่ปุ่น",
      desc: "ชีสเค้กเนื้อนุ่มละมุน หอมชีสเบาๆ สไตล์ญี่ปุ่น",
      img: "https://img.kapook.com/u/2017/surauch/cooking/g7_11.jpg"
    },
    {
      name: "คุกกี้เนยสด",
      desc: "คุกกี้กรอบ หอมเนยสดแท้ รสชาติกลมกล่อม",
      img: "https://lh3.googleusercontent.com/proxy/H9XcA07XmAouYLPt8k4AYeYec4wmZr1QUroPABTQYLnHH07cM6EWFyViu1ZMwO87ecYFFpdqj-EYC1BmvoMJTYueJAEo6ck9qQYZr_P1r3xJmDRzgneiwl78"
    }
  ]

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <h2 style={{ color: '#FFB347', fontWeight: 700, marginBottom: 24 }}>ขนมอบแนะนำ</h2>
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

export default Kanomob