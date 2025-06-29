import React, { useState, useRef } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router'
import Home from './page/Home.jsx'
import About from './page/About.jsx'
import Notfound from './page/Notfound.jsx'
import Product from './page/Product.jsx'
import Promotion from './page/Promotion.jsx'
import Review from './page/Review.jsx'
import Kanomthai from './page/Kanomthai.jsx'
import KanomVgan from './page/KanomVgan.jsx'
import Kanomimpord from './page/Kanomimpord.jsx'
import Kanomob from './page/Kanomob.jsx'

// ปรับธีมให้ดูมินิมอลและเข้ากับร้านขนม
const themes = {
  light: {
    background: '#FFF7F0',
    navBg: '#FFF3E6',
    navBorder: '#FFD6B0',
    text: '#4B3F2F',
    accent: '#FFB347',
    cardBg: '#FFFFFF',
    shadow: '0 4px 24px rgba(255,179,71,0.07)'
  },
  dark: {
    background: '#2C2320',
    navBg: '#3B2B26',
    navBorder: '#6B4F3A',
    text: '#FFEEDD',
    accent: '#FFB347',
    cardBg: '#3B2B26',
    shadow: '0 4px 24px rgba(255,179,71,0.10)'
  }
}

function App() {
  const [theme, setTheme] = useState('light')
  const [search, setSearch] = useState('')
  const [showProductMenu, setShowProductMenu] = useState(false)
  const [showHomeMenu, setShowHomeMenu] = useState(false)
  const [showAboutMenu, setShowAboutMenu] = useState(false)
  const t = themes[theme]
  const navigate = useNavigate()

  // Delay refs for submenu
  const homeTimeout = useRef()
  const productTimeout = useRef()

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim().toLowerCase() === 'about') {
      navigate('/about')
    } else if (search.trim().toLowerCase() === 'product') {
      navigate('/product')
    } else if (search.trim().toLowerCase() === 'home' || search.trim() === '') {
      navigate('/')
    } else {
      navigate('/notfound')
    }
    setSearch('')
  }

  // เมนูย่อย
  const productSubMenu = [
    { name: 'ขนมไทย', path: '/kanomthai' },
    { name: 'ขนมอบ', path: '/kanomob' },
    { name: 'ขนมนำเข้า', path: '/kanomimpord' },
    { name: 'ขนมเพื่อสุขภาพ', path: '/kanomVgan' }
  ]
  const homeSubMenu = [
    { name: 'โปรโมชั่น', path: '/promotion' },
    { name: 'รีวิวลูกค้า', path: '/review' }
  ]

  // Delay submenu show/hide
  const handleMenuEnter = (setShow, timeoutRef) => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setShow(true), 150)
  }
  const handleMenuLeave = (setShow, timeoutRef) => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setShow(false), 250)
  }

  return (
    <div
      style={{
        fontFamily: 'Prompt, Arial, sans-serif',
        background: t.background,
        minHeight: '100vh',
        transition: 'background 0.5s',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 40px',
          background: t.navBg,
          borderBottom: `1.5px solid ${t.navBorder}`,
          marginBottom: '32px',
          transition: 'background 0.3s, border 0.3s',
          position: 'relative',
          zIndex: 10,
          boxShadow: t.shadow
        }}
      >
        <div style={{
          fontWeight: 700,
          fontSize: '1.7rem',
          color: t.accent,
          letterSpacing: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }}>
          <span style={{
            fontSize: '2.1rem',
            filter: theme === 'dark' ? 'drop-shadow(0 2px 8px #FFB34744)' : 'none'
          }}>🍩</span>
          Suger & Flour
        </div>
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative', gap: 4 }}>
          {/* Home with submenu */}
          <div
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => handleMenuEnter(setShowHomeMenu, homeTimeout)}
            onMouseLeave={() => handleMenuLeave(setShowHomeMenu, homeTimeout)}
          >
            <Link
              to="/"
              style={{
                color: t.text,
                textDecoration: 'none',
                margin: '0 8px',
                fontWeight: 500,
                fontSize: '17px',
                padding: '7px 16px',
                borderRadius: '8px',
                transition: 'background 0.2s, color 0.2s',
                position: 'relative',
                background: showHomeMenu ? t.accent + '22' : 'none'
              }}
            >
              home ▾
            </Link>
            {showHomeMenu && (
              <div
                style={{
                  position: 'absolute',
                  top: '44px',
                  left: 0,
                  background: t.cardBg,
                  border: `1.5px solid ${t.navBorder}`,
                  borderRadius: '12px',
                  boxShadow: t.shadow,
                  minWidth: 170,
                  zIndex: 100,
                  padding: '10px 0'
                }}
              >
                {homeSubMenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    style={{
                      display: 'block',
                      color: t.text,
                      textDecoration: 'none',
                      padding: '12px 28px',
                      fontWeight: 500,
                      fontSize: '16px',
                      borderRadius: '8px',
                      transition: 'background 0.2s, color 0.2s',
                      background: 'none'
                    }}
                    onClick={() => setShowHomeMenu(false)}
                    onMouseEnter={e => e.target.style.background = t.accent + '22'}
                    onMouseLeave={e => e.target.style.background = 'none'}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* About with submenu */}
          <div
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => handleMenuEnter(setShowAboutMenu, aboutTimeout)}
            onMouseLeave={() => handleMenuLeave(setShowAboutMenu, aboutTimeout)}
          >
            <Link
              to="/about"
              style={{
                color: t.text,
                textDecoration: 'none',
                margin: '0 8px',
                fontWeight: 500,
                fontSize: '17px',
                padding: '7px 16px',
                borderRadius: '8px',
                transition: 'background 0.2s, color 0.2s',
                position: 'relative',
                background: showAboutMenu ? t.accent + '22' : 'none'
              }}
            >
              about 
            </Link>
            {showAboutMenu && (
              <div
                style={{
                  position: 'absolute',
                  top: '44px',
                  left: 0,
                  background: t.cardBg,
                  border: `1.5px solid ${t.navBorder}`,
                  borderRadius: '12px',
                  boxShadow: t.shadow,
                  minWidth: 170,
                  zIndex: 100,
                  padding: '10px 0'
                }}
              >
                {aboutSubMenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    style={{
                      display: 'block',
                      color: t.text,
                      textDecoration: 'none',
                      padding: '12px 28px',
                      fontWeight: 500,
                      fontSize: '16px',
                      borderRadius: '8px',
                      transition: 'background 0.2s, color 0.2s',
                      background: 'none'
                    }}
                    onClick={() => setShowAboutMenu(false)}
                    onMouseEnter={e => e.target.style.background = t.accent + '22'}
                    onMouseLeave={e => e.target.style.background = 'none'}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Product with submenu */}
          <div
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => handleMenuEnter(setShowProductMenu, productTimeout)}
            onMouseLeave={() => handleMenuLeave(setShowProductMenu, productTimeout)}
          >
            <Link
              to="/product"
              style={{
                color: t.text,
                textDecoration: 'none',
                margin: '0 8px',
                fontWeight: 500,
                fontSize: '17px',
                padding: '7px 16px',
                borderRadius: '8px',
                transition: 'background 0.2s, color 0.2s',
                position: 'relative',
                background: showProductMenu ? t.accent + '22' : 'none'
              }}
            >
              product ▾
            </Link>
            {showProductMenu && (
              <div
                style={{
                  position: 'absolute',
                  top: '44px',
                  left: 0,
                  background: t.cardBg,
                  border: `1.5px solid ${t.navBorder}`,
                  borderRadius: '12px',
                  boxShadow: t.shadow,
                  minWidth: 170,
                  zIndex: 100,
                  padding: '10px 0'
                }}
              >
                {productSubMenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    style={{
                      display: 'block',
                      color: t.text,
                      textDecoration: 'none',
                      padding: '12px 28px',
                      fontWeight: 500,
                      fontSize: '16px',
                      borderRadius: '8px',
                      transition: 'background 0.2s, color 0.2s',
                      background: 'none'
                    }}
                    onClick={() => setShowProductMenu(false)}
                    onMouseEnter={e => e.target.style.background = t.accent + '22'}
                    onMouseLeave={e => e.target.style.background = 'none'}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Search and theme button */}
          <form onSubmit={handleSearch} style={{ display: 'inline-flex', marginLeft: 24 }}>
            <input
              type="text"
              placeholder="ค้นหา เช่น about, product"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                padding: '7px 14px',
                borderRadius: '8px 0 0 8px',
                border: `1.5px solid ${t.navBorder}`,
                outline: 'none',
                fontSize: '15px',
                color: t.text,
                background: t.cardBg,
                transition: 'background 0.2s, color 0.2s',
                width: 150,
                boxShadow: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '7px 18px',
                borderRadius: '0 8px 8px 0',
                border: 'none',
                background: t.accent,
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '15px',
                transition: 'background 0.2s',
                letterSpacing: 1
              }}
            >
              ค้นหา
            </button>
          </form>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            style={{
              marginLeft: 18,
              padding: '7px 18px',
              borderRadius: '8px',
              border: 'none',
              background: t.accent,
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '15px',
              transition: 'background 0.2s',
              letterSpacing: 1,
              boxShadow: theme === 'dark' ? '0 2px 8px #FFB34744' : 'none'
            }}
          >
            {theme === 'light' ? 'โหมดกลางคืน' : 'โหมดสว่าง'}
          </button>
        </div>
      </nav>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: t.cardBg,
        borderRadius: '18px',
        boxShadow: t.shadow,
        padding: '36px 24px',
        color: t.text,
        transition: 'background 0.3s, color 0.3s'
      }}>
        <Routes>
          <Route path="/" element={
            <Home
              theme={theme}
              images={[
                "https://food.mthai.com/app/uploads/2014/10/20140312102300346.jpg",
                "https://img.wongnai.com/p/1920x0/2019/06/13/7e7e8e2e2b2c4e7e8e2e2b2c4e7e8e2e.jpg",
                "https://www.matichonacademy.com/wp-content/uploads/2022/01/DSC_0030.jpg",
                "https://www.bkkmenu.com/files/2022/07/kanomthai-1.jpg",
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              ]}
              info={{
                title: "Suger & Flour ร้านขนมหวานและเบเกอรี่",
                description: "Suger & Flour คือร้านขนมหวานและเบเกอรี่ที่เน้นความสดใหม่และคุณภาพดี มีขนมให้เลือกหลากหลายทั้งขนมไทย ขนมอบ ขนมนำเข้า และขนมเพื่อสุขภาพ พร้อมบรรยากาศร้านที่อบอุ่น สะอาด และทันสมัย",
                highlights: [
                  "วัตถุดิบคุณภาพดี สดใหม่ทุกวัน",
                  "มีเมนูขนมมากกว่า 100 รายการ",
                  "บริการสั่งซื้อออนไลน์และจัดส่งถึงบ้าน",
                  "โปรโมชั่นและส่วนลดพิเศษทุกเดือน",
                  "ทีมงานใส่ใจบริการและให้คำแนะนำลูกค้า"
                ],
                open: "เปิดบริการทุกวัน 9:00 - 20:00 น.",
                contact: "โทร. 02-123-4567 | Line: @sugerflour"
              }}
            />
          } />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/review" element={<Review />} />
          <Route path="/kanomthai" element={<Kanomthai />} />
          <Route path="/kanomvgan" element={<KanomVgan />} />
          <Route path="/kanomimpord" element={<Kanomimpord />} />
          <Route path="/kanomob" element={<Kanomob />} />
        </Routes>
        {/* แสดงรูปภาพเพิ่มเติมด้านล่าง */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          marginTop: 40,
          flexWrap: 'wrap'
        }}>
      </div>
      <div style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        background: t.accent,
        color: '#fff',
        padding: '10px 16px',
        borderRadius: '50%',
        boxShadow: t.shadow,
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'transform 0.2s',
      }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>
          ↑
        </span>
    </div>
    </div>
     <footer style={{
        textAlign: 'center',
        padding: '24px 0',
        color: t.text,
        fontSize: '14px',
        marginTop: '40px',
        borderTop: `1px solid ${t.navBorder}`,
        background: t.navBg
      }}>
        © 2025 By. bunyarat Jessadachaisri
      </footer>
    </div>
  )
}

export default App