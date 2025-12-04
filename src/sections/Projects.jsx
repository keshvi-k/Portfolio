function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid projects-grid">
        {/* LogPilot */}
        <article className="card project-card">
          <h3>LogPilot — AI Log Incident Analyzer</h3>
          <p className="tech">
            Tech: Python, Streamlit, Gemini 2.5, NLP, Multi-Agent Architecture
          </p>
          <p>
            AI-powered tool that analyzes raw logs, extracts errors, identifies
            root causes, and suggests quick fixes plus long-term prevention.
          </p>
          <ul className="project-features">
            <li>Multi-agent pipeline for log type detection & RCA</li>
            <li>Severity summary and error segment extraction</li>
            <li>Memory engine to reuse past incident learnings</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/keshvi-k/logpilot" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </article>

        {/* Freelance Marketplace */}
        <article className="card project-card">
          <h3>Freelance Marketplace Platform</h3>
          <p className="tech">
            Tech: Python Flask, AWS (EC2, S3, RDS, SES, VPC, IAM), MySQL, HTML, CSS, Bootstrap
          </p>
          <p>
            Full-stack freelance platform with authentication, project posting,
            proposal workflows, messaging, and AWS-powered storage and email.
          </p>
          <ul className="project-features">
            <li>Role-based auth and secure session handling</li>
            <li>Project posting & proposal management</li>
            <li>File uploads to S3 and email alerts via SES</li>
          </ul>
          <div className="project-links">
            <a href="YOUR_FREELANCE_GITHUB" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </article>

        {/* Midas Core */}
        <article className="card project-card">
          <h3>Midas Core Simulation — Transaction Service</h3>
          <p className="tech">
            Tech: Java, Spring Boot, Kafka, H2, Spring Data JPA, JUnit
          </p>
          <p>
            Event-driven microservice that consumes transaction events from Kafka,
            validates balances, and updates accounts with incentive logic.
          </p>
          <ul className="project-features">
            <li>Kafka-based transaction ingestion</li>
            <li>Balance validation & rule-based incentives</li>
            <li>Integration tests with embedded Kafka</li>
          </ul>
          <div className="project-links">
            <a href="YOUR_MIDAS_GITHUB" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </article>

        {/* Coming soon */}
        <article className="card project-card coming-soon">
          <h3>MediFlow — Healthcare Microservices Platform</h3>
          <p className="tech">
            Tech (Planned): Java, Spring Boot, Spring Cloud, Kafka, PostgreSQL,
            React, Docker, Kubernetes
          </p>
          <p>
            In-progress flagship project: microservices-based healthcare app for
            patient management, appointments, and prescription workflows.
          </p>
          <p className="badge">Coming Soon 🚧</p>
        </article>
      </div>
    </section>
  );
}

export default Projects;
