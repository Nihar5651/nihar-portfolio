import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        background: "#0f172a",
        padding: "20px 10%",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 1000
      }}
    >
      <h2 style={{ color: "#3b82f6" }}>
        Nihar Navadiya
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
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