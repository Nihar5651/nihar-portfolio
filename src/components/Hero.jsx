import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      style={{
        paddingTop: "60px",
paddingBottom: "20px",
    display: "flex",
    alignItems: "center"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          maxWidth: "700px"
        }}
      >
        <h1
          style={{
            color: "#3b82f6",
            marginBottom: "10px"
          }}
        >
          Nihar Navadiya
        </h1>

        <h2 style={{ marginBottom: "15px" }}>
          B.Tech CSE Student
        </h2>

        <h3
          style={{
            color: "#94a3b8",
            marginBottom: "20px"
          }}
        >
          Python Developer | Data Analyst | AI Enthusiast
        </h3>

        <p>
          7th Semester Computer Science student at
          Gyanmanjari Innovative University.
          Passionate about AI, Data Analytics,
          Stock Market Prediction and Software Development.
        </p>

        <a
          href="https://www.linkedin.com/in/niharnavdiya"
          target="_blank"
          rel="noreferrer"
        >
          <button
            style={{
              marginTop: "30px",
              padding: "14px 30px",
              background: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            View LinkedIn Profile
          </button>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;