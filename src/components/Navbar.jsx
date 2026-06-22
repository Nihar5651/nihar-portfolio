import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#0f172a",
        padding: "20px 7%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        flexWrap: "wrap"
      }}
    >
      <h2 style={{ color: "#3b82f6" }}>
        Nihar
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        <Link to="about" smooth={true}>
          About
        </Link>

        <Link to="skills" smooth={true}>
          Skills
        </Link>

        <Link to="projects" smooth={true}>
          Projects
        </Link>

        <Link to="contact" smooth={true}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;