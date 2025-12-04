function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <p className="hero-tagline">Full Stack Developer</p>
        <h1>
          Hi, I&apos;m <span className="highlight">Keshavi</span>.
        </h1>
        <p className="hero-subtext">
          I build scalable Java & Spring Boot microservices, cloud-native
          applications on AWS, and AI-powered tools for log analysis and
          troubleshooting.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a 

            href="https://drive.google.com/uc?export=download&id=16nZdZd-wjNy7_x6XlBBHy87V70k6MgWx"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-links">
          <a href="https://github.com/keshvi-k" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>•</span>
          <a href="https://www.linkedin.com/in/keshavi-k-627aba216/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

    </section>
  );
}

export default Hero;
