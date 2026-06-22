import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      style={{
        paddingTop: "120px",
        paddingBottom: "40px"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
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

        <h2>
          B.Tech CSE Student
        </h2>

        <TypeAnimation
          sequence={[
            "Python Developer",
            2000,
            "Data Analyst",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          wrapper="h3"
          speed={50}
          repeat={Infinity}
          style={{
            color: "#94a3b8",
            marginBottom: "20px"
          }}
        />

        <p>
          7th Semester Computer Science student at
          Gyanmanjari Innovative University.
          Passionate about Artificial Intelligence,
          Data Analytics, Stock Market Prediction
          and Software Development.
        </p>

        <div style={{ marginTop: "30px" }}>
          <a
            href="https://www.linkedin.com/in/niharnavdiya"
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                padding: "14px 25px",
                background: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer"
              }}
            >
              LinkedIn
            </button>
          </a>

          <a
            href="https://github.com/Nihar5651"
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                marginLeft: "15px",
                padding: "14px 25px",
                background: "#1e293b",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer"
              }}
            >
              GitHub
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;