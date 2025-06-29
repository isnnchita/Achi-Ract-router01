import React from 'react'

function KanomVgan() {
  const items = [
    {
      name: "บราวนี่วีแกน",
      desc: "บราวนี่สูตรไม่ใส่ไข่และนมวัว ใช้ช็อกโกแลตแท้และถั่วเพื่อสุขภาพ",
      img: "https://mpics.mgronline.com/pics/Images/564000010241704.JPEG"
    },
    {
      name: "คุกกี้ข้าวโอ๊ตกล้วยหอม",
      desc: "คุกกี้วีแกนจากข้าวโอ๊ต กล้วยหอม และถั่ว รสชาติหวานธรรมชาติ",
      img: "https://www.pim.in.th/images/all-bakery/banana-oat-cookies/banana-oat-cookies-01.jpg"
    },
    {
      name: "พุดดิ้งเมล็ดเจีย",
      desc: "พุดดิ้งจากเมล็ดเจียและนมอัลมอนด์ ราดซอสผลไม้สด",
      img: "https://www.gourmetandcuisine.com/Images/editor_upload/_editor20171003021101_original.jpg"
    },
    {
      name: "เค้กแครอทวีแกน",
      desc: "เค้กแครอทเนื้อนุ่ม ไม่ใส่ไข่และนมวัว รสชาติกลมกล่อม",
      img: "https://f.ptcdn.info/036/038/000/nyw1a4ojkDuYTelpki7-o.jpg"
    }
  ]

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <h2 style={{ color: '#FFB347', fontWeight: 700, marginBottom: 24 }}>ขนมเพื่อสุขภาพ (Vegan)</h2>
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

export default KanomVgan