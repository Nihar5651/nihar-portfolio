function Projects() {
  return (
    <section id="projects">
      <h2 style={{ color: "#3b82f6" }}>
        Projects
      </h2>

      <div className="card">
        <h3>AI Device Control System</h3>

        <p>
          Python • Computer Vision • NLP • Speech Recognition
        </p>

        <ul>
          <li>Hand gesture control system.</li>
          <li>Eye tracking functionality.</li>
          <li>Speech command recognition.</li>
          <li>Touchless device control.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Healthcare Facility Locator</h3>

        <p>
          HTML • CSS • JavaScript • Google Maps API
        </p>

        <ul>
          <li>Healthcare search platform.</li>
          <li>Interactive map integration.</li>
          <li>Location-based filtering.</li>
          <li>Responsive web design.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Stock Prediction Software</h3>

        <p>
          Python • AI • Machine Learning • SmartAPI
        </p>

        <ul>
          <li>Live stock data analysis.</li>
          <li>Candle prediction system.</li>
          <li>Real-time dashboard.</li>
          <li>Market trend analysis.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;