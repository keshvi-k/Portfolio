function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2>Contact</h2>
      <p className="contact-text">
        Open to Software Engineer, Full Stack, and Cloud/DevOps roles. Let&apos;s connect!
      </p>
      <div className="contact-details">
        <p>
          Email:{" "}
          <a href="mailto:keshvigk@gmail.com">
            keshvigk@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/keshavi-k-627aba216/"
            target="_blank"
            rel="noreferrer"
          >
            Keshavi K
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/keshvi-k"
            target="_blank"
            rel="noreferrer"
          >
            keshvi-k
          </a>
        </p>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Keshavi Koduri. Built with React.</p>
      </footer>
    </section>
  );
}

export default Contact;
