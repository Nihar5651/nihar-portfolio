function Skills() {
  return (
    <section id="skills">
      <h2 style={{ color: "#3b82f6" }}>
        Technical Skills
      </h2>

      <div className="card">
        <p>Python</p>
        <progress value="90" max="100" style={{ width: "100%" }}></progress>

        <br /><br />

        <p>Java</p>
        <progress value="80" max="100" style={{ width: "100%" }}></progress>

        <br /><br />

        <p>JavaScript</p>
        <progress value="75" max="100" style={{ width: "100%" }}></progress>

        <br /><br />

        <p>React JS</p>
        <progress value="70" max="100" style={{ width: "100%" }}></progress>

        <br /><br />

        <p>HTML & CSS</p>
        <progress value="85" max="100" style={{ width: "100%" }}></progress>

        <br /><br />

        <p>Git & GitHub</p>
        <progress value="80" max="100" style={{ width: "100%" }}></progress>
      </div>
    </section>
  );
}

export default Skills;