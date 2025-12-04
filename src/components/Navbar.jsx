import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="logo">Keshavi.dev</span>
      </div>
      <nav className="navbar-right">
        <a href="#hero">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
