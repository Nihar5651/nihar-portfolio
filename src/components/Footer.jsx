function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        padding: "20px 15px",
        textAlign: "center",
        marginTop: "30px",
        borderTop: "1px solid #1e293b"
      }}
    >
      <h3
        style={{
          color: "#3b82f6",
          marginBottom: "10px"
        }}
      >
        Nihar Navadiya
      </h3>

      <p
        style={{
          lineHeight: "1.6",
          marginBottom: "10px"
        }}
      >
        B.Tech CSE Student <br />
        Python Developer <br />
        AI Enthusiast
      </p>

      <p
        style={{
          fontSize: "14px",
          color: "#94a3b8"
        }}
      >
        © 2026 Nihar Navadiya. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;