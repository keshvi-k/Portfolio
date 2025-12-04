function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="grid skills-grid">
        <div className="card">
          <h3>Languages</h3>
          <p>Java, Python, JavaScript, TypeScript, SQL, PL/SQL</p>
        </div>
        <div className="card">
          <h3>Backend & APIs</h3>
          <p>Spring Boot, Spring MVC, REST, Microservices, Node.js</p>
        </div>
        <div className="card">
          <h3>Cloud & DevOps</h3>
          <p>AWS (EC2, S3, RDS, Lambda, SQS, SNS), Docker, Kubernetes, Jenkins</p>
        </div>
        <div className="card">
          <h3>Databases & Storage</h3>
          <p>PostgreSQL, MySQL, MongoDB, Oracle, Redis</p>
        </div>
        <div className="card">
          <h3>Monitoring & Observability</h3>
          <p>CloudWatch, Grafana, Prometheus, ELK, Splunk</p>
        </div>
        <div className="card">
          <h3>Testing & Tools</h3>
          <p>JUnit, Mockito, Postman, Git, Maven</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
