import React from 'react';

function Notfound() {
  return (
    <div style={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#ff6f61",
      fontFamily: "'Prompt', 'Segoe UI', Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
      <h2 style={{ marginBottom: "1rem" }}>ไม่พบหน้าที่คุณร้องขอ</h2>
      <p style={{ color: "#888", marginBottom: "2rem" }}>
        ขอโทษค่ะ! ไม่พบหน้าที่คุณต้องการ กรุณาตรวจสอบ URL อีกครั้ง
      </p>
      <a
        href="/"
        style={{
          padding: "0.6rem 1.5rem",
          background: "#ffb347",
          color: "#fff",
          borderRadius: "20px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.1rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
        }}
      >
        กลับหน้าหลัก
      </a>
    </div>
  );
}

export default Notfound;