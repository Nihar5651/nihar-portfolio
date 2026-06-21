import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#3b82f6"
          }}
        >
          Nihar Navadiya
        </h1>

        <h2 style={{ marginTop: "10px" }}>
          B.Tech CSE Student
        </h2>

        <h3 style={{ marginTop: "15px" }}>
          Python Developer | Data Analyst |
          AI Enthusiast
        </h3>

        <p
          style={{
            marginTop: "20px",
            maxWidth: "600px"
          }}
        >
          7th Semester Computer Science student
          at Gyanmanjari Innovative University.
          Passionate about AI, Data Analytics,
          Stock Market Prediction and Software
          Development.
        </p>

       <a
  href="https://www.linkedin.com/in/niharnavdiya"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    textDecoration: "none"
  }}
>
  <button
    style={{
      marginTop: "30px",
      padding: "12px 25px",
      background: "#3b82f6",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px"
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