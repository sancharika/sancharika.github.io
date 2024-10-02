"use client";
import Container from "./container";

export default function Navbar() {
  

  return (
    <Container>
      <header id="top">
        <div className="row">
          <nav className="nav bg-black" role="navigation">
            <ul className="nav__items">
              <li className="nav__item">
                <a href="/#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="/#skills" className="nav__link">
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="/#experience" className="nav__link">
                  Experience
                </a>
              </li>
              <li className="nav__item">
                <a href="/#projects" className="nav__link">
                  Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="/#publication" className="nav__link">
                  Publication
                </a>
              </li>
              <li className="nav__item">
                <a href="/blogs" className="nav__link">
                  Blogs
                </a>
              </li>
              <li className="nav__item">
                <a href="/#contact" className="nav__link">
                  Contact
                </a>
              </li>
              {/* <a href="home/home.html">Go to Home</a> */}
            </ul>
          </nav>
        </div>
      </header>
    </Container>
  );
}


