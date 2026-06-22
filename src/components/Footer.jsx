import { FaGithub, FaLinkedin } from "react-icons/fa";
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
        <div style={{ marginTop: "20px" }}>
  <a
    href="https://github.com/Nihar5651"
    target="_blank"
    rel="noreferrer"
    style={{ marginRight: "20px", color: "white" }}
  >
    <FaGithub size={30} />
  </a>

  <a
    href="https://www.linkedin.com/in/niharnavdiya"
    target="_blank"
    rel="noreferrer"
    style={{ color: "white" }}
  >
    <FaLinkedin size={30} />
  </a>
</div>
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