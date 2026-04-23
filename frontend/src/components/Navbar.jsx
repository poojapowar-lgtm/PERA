import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/Navbar.css";
import logo from "../assets/Pera_India_logo.jpg";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRef = useRef();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (menuName) =>
    setDropdownOpen(dropdownOpen === menuName ? null : menuName);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setDropdownOpen(null);
    setMenuOpen(false);
  }, [location]);

  const colleges = [
    { name: "Ajeenkya D. Y. Patil University, Pune", url: "https://adypu.edu.in" },
    { name: "Atharva University, Mumbai", url: "https://atharvauniversity.org/" },
    { name: "D. Y. Patil Agriculture & Technical University, Talsande", url: "https://dypatiluniversitypune.edu.in" },
    { name: "Dr. D. Y. Patil Dnyan Prasad University, Pune", url: "https://www.dpu.edu.in" },
    { name: "D. Y. Patil International University, Pune", url: "https://www.dypiu.ac.in" },
    { name: "D. Y. Patil University, Pune (Ambi)", url: "https://dypatiluniversitypune.edu.in" },
    { name: "DES Pune University, Pune", url: "https://despu.edu.in/" },
    { name: "Dr. P. A. Inamdar University, Pune", url: "https://drpaiu.edu.in/" },
    { name: "FLAME University, Pune", url: "http://www.flame.edu.in" },
    { name: "G. H. Raisoni Inter.Skill Tech University, Pune", url: "https://ghristu.edu.in/" },
    { name: "Indira University, Pune", url: "https://indirauniversity.edu.in/" },
    { name: "JSPM University, Pune", url: "https://jspmuni.ac.in/" },
    { name: "MGM University, Aurangabad", url: "https://www.mgmu.ac.in" },
    { name: "MIT ADT University, Pune", url: "https://mituniversity.ac.in/" },
    { name: "MIT Vishwaprayag University, Solapur", url: "https://mitpune.ac.in/mit-vishwaprayag-university-solapur/" },
    { name: "MIT World Peace University, Pune", url: "https://mitwpu.edu.in/" },
    { name: "NICMAR University, Pune", url: "https://www.nicmar.ac.in" },
    { name: "Pimpri Chinchwad University (PCU), Pune", url: "https://pcet.org.in/pcet-pcu.php" },
    { name: "Ramdeobaba university, Nagpur", url: "https://rbunagpur.in/" },
    { name: "Sandip University, Nashik", url: "https://www.sandipuniversity.edu.in" },
    { name: "Sanjay Ghodawat University, Kolhapur", url: "https://sanjayghodawatuniversity.co.in/" },
    { name: "Sanjivani University, Kopargaon", url: "https://sanjivanicoe.org.in/" },
    { name: "Somaiya Vidyavihar University, Mumbai", url: "https://www.somaiya.edu/en" },
    { name: "Spicer Adventist University, Pune", url: "https://sau.edu.in" },
    { name: "Sri Balaji University, Pune", url: "https://www.sbup.edu.in/" },
    { name: "SVKM NMIMS Global University, Dhule", url: "https://www.nmims.edu" },
    { name: "Symbiosis Skills & Professional University, Pune", url: "https://sspu.ac.in" },
    { name: "Universal AI University, Karjat (Mumbai)", url: "https://www.universalai.in/" },
    { name: "Vijaybhoomi University, Greater Mumbai", url: "https://vijaybhoomi.edu.in" },
    { name: "Vishwakarma University, Pune", url: "https://www.vupune.ac.in" },
  ];


  return (
    <nav className="navbar">
      <div className="navbar-logo">
          <img src={logo} alt="PERA Logo" />
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`} ref={dropdownRef}>
        <li className="nav-item">
          <Link to="/" className="home-link">
            <AiFillHome style={{ marginRight: "6px" }} className="home-icon"/>
          </Link>
        </li>

        <li className="nav-item dropdown">
          <button onClick={() => toggleDropdown("about")}>About PERA ▼</button>
          {dropdownOpen === "about" && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/overview">Overview</Link>
              </li>
              <li>
                <Link to="/president-message">President Message</Link>
              </li>
              <li>
                <Link to="/vice-president-message">Vice President Message</Link>
              </li>
              <li>
                <Link to="/office-bearers">Office Bearers</Link>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item dropdown">
          <button onClick={() => toggleDropdown("academics")}>
            Academics ▼
          </button>
          {dropdownOpen === "academics" && (
            <ul className="dropdown-menu scrollable-menu">
              {colleges.map((college, index) => (
                <li key={index}>
                  <a href={college.url} target="_blank" rel="noreferrer">
                    {college.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className="nav-item dropdown">
          <button onClick={() => toggleDropdown("pera-cet")}>PERA CET ▼</button>
          {dropdownOpen === "pera-cet" && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/why-pera-cet">Why PERA CET</Link>
              </li>
              <li>
                <Link to="/guidelines">PERA CET Guidelines</Link>
              </li>
              <li>
                <Link to="https://forms.easebuzz.in/signup/PERA/PERA/?inst_name=PERA&form_name=PERA&jsonData=1">Online Application Form</Link>
              </li>
              <li>
                <Link to="/schedule">PERA CET 2026 Schedule</Link>
              </li>
              <li>
                <Link to="/result">PERA CET 2026 Result</Link>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item dropdown">
          <button onClick={() => toggleDropdown("awards")}>
            PERA Scholarships/Award ▼
          </button>
          {dropdownOpen === "awards" && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/scholarship-awards-2022">
                  PERA Scholarships & Awards 2022
                </Link>
              </li>
              <li>
                <Link to="/scholarships">PERA Scholarships</Link>
              </li>
              <li>
                <Link to="/teacher-awards">PERA Teacher Awards</Link>
              </li>
              <li>
                <Link to="/researcher-awards">PERA Researcher Awards</Link>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item dropdown">
          <button onClick={() => toggleDropdown("championships")}>
            PERA Championships ▼
          </button>
          {dropdownOpen === "championships" && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/pera-premier-championship">
                  PERA Premier Championship
                </Link>
              </li>
              <li>
                <Link to="/event-schedule">Event Schedule & Coordinators</Link>
              </li>
              <li>
                <Link to="/rules">Rules & Regulations</Link>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
