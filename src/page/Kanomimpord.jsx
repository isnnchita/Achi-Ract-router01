import React from 'react'

function Kanomimpord() {
  const items = [
    {
      name: "มาการองฝรั่งเศส",
      desc: "ขนมหวานฝรั่งเศสเนื้อนุ่ม ไส้ครีมหลากรส สีสันสดใส",
      img: "https://images.squarespace-cdn.com/content/v1/54e9c782e4b02db31b4324d9/1560584328789-DMSNC4KSUDHWPFRNZZN2/IMG_2884.jpg?format=2500w"
    },
    {
      name: "พุดดิ้งนมสดญี่ปุ่น",
      desc: "พุดดิ้งเนื้อนุ่ม หอมมัน ราดซอสคาราเมลหวานละมุน",
      img: "https://chillchilljapan.com/wp-content/uploads/2017/04/1901320_729637030404397_87587279_n-1.jpg"
    },
    {
      name: "ทาร์ตไข่ฮ่องกง",
      desc: "ทาร์ตไข่แป้งกรอบ ไส้คัสตาร์ดไข่เนียนนุ่ม",
      img: "https://www.hongkongfanclub.com/wp-content/uploads/2024/10/HashtagB_4-1.jpg"
    },
    {
      name: "ช็อกโกแลตบราวนี่อเมริกัน",
      desc: "บราวนี่เข้มข้นสไตล์อเมริกัน เนื้อหนึบเต็มรสช็อกโกแลต",
      img: "https://image.bangkokbiznews.com/image/kt/media/image/fileupload1/source/159569257399.jpg?1595692573981?x-image-process=style/lg-webp"
    }
  ]

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <h2 style={{ color: '#FFB347', fontWeight: 700, marginBottom: 24 }}>ขนมนำเข้าแนะนำ</h2>
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

export default Kanomimpord