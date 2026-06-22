import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#0f172a",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
      }}
    >
      <h2
        style={{
          color: "#3b82f6",
          fontSize: "24px"
        }}
      >
        Nihar
      </h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          fontSize: "14px"
        }}
      >
        <Link to="about" smooth={true} style={{ cursor: "pointer" }}>
          About
        </Link>

        <Link to="skills" smooth={true} style={{ cursor: "pointer" }}>
          Skills
        </Link>

        <Link to="projects" smooth={true} style={{ cursor: "pointer" }}>
          Projects
        </Link>

        <Link to="contact" smooth={true} style={{ cursor: "pointer" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;