import React from 'react'

function Product() {
  const products = [
    {
      name: "ข้าวเหนียวมะม่วง",
      desc: "ข้าวเหนียวมูนหวานมัน ทานคู่กับมะม่วงสุกฉ่ำและน้ำกะทิเข้มข้น",
      img: "https://spacebar.th/api/media/file/history_of_mango_sticky_rice_Main_35c54d9c87.jpeg",
      type: "ขนมไทย"
    },
    {
      name: "ทองหยิบ",
      desc: "ขนมไทยโบราณ สีเหลืองทอง รสหวานละมุน ทำจากไข่แดง",
      img: "https://img.wongnai.com/p/1920x0/2022/05/05/0e1ed3a486d14bc8a5cc9317d38a4317.jpg",
      type: "ขนมไทย"
    },
    {
      name: "ครัวซองต์เนยสด",
      desc: "ครัวซองต์อบใหม่ หอมเนยแท้ กรอบนอกนุ่มใน",
      img: "https://s359.kapook.com/pagebuilder/37a6ec5e-712d-462c-9e2d-6b63c39e9777.jpg",
      type: "ขนมอบ"
    },
    {
      name: "บราวนี่ช็อกโกแลต",
      desc: "บราวนี่เนื้อหนึบ เข้มข้นด้วยช็อกโกแลตแท้",
      img: "https://www.pholfoodmafia.com/wp-content/uploads/2017/03/1000DoubleChocolateBrownies.jpg",
      type: "ขนมอบ"
    },
    {
      name: "มาการองฝรั่งเศส",
      desc: "ขนมหวานฝรั่งเศสเนื้อนุ่ม ไส้ครีมหลากรส สีสันสดใส",
      img: "https://images.squarespace-cdn.com/content/v1/54e9c782e4b02db31b4324d9/1560584328789-DMSNC4KSUDHWPFRNZZN2/IMG_2884.jpg?format=2500w",
      type: "ขนมนำเข้า"
    },
    {
      name: "พุดดิ้งนมสดญี่ปุ่น",
      desc: "พุดดิ้งเนื้อนุ่ม หอมมัน ราดซอสคาราเมลหวานละมุน",
      img: "https://chillchilljapan.com/wp-content/uploads/2017/04/1901320_729637030404397_87587279_n-1.jpg",
      type: "ขนมนำเข้า"
    },
    {
      name: "บราวนี่วีแกน",
      desc: "บราวนี่สูตรไม่ใส่ไข่และนมวัว ใช้ช็อกโกแลตแท้และถั่วเพื่อสุขภาพ",
      img: "https://mpics.mgronline.com/pics/Images/564000010241704.JPEG",
      type: "ขนมเพื่อสุขภาพ"
    },
    {
      name: "คุกกี้ข้าวโอ๊ตกล้วยหอม",
      desc: "คุกกี้วีแกนจากข้าวโอ๊ต กล้วยหอม และถั่ว รสชาติหวานธรรมชาติ",
      img: "https://www.pim.in.th/images/all-bakery/banana-oat-cookies/banana-oat-cookies-01.jpg",
      type: "ขนมเพื่อสุขภาพ"
    }
  ]

  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ color: '#FFB347', fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>
        สินค้าขนมทุกชนิด
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'center' }}>
        {products.map((item, idx) => (
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
            <div style={{ color: '#7C6A58', fontSize: 15, marginBottom: 6, textAlign: 'center' }}>{item.desc}</div>
            <div style={{ color: '#FFB347', fontSize: 14 }}>{item.type}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product