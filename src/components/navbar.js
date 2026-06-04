"use client";
import Container from "./container";
import Link from "next/link";

export default function Navbar() {
  

  return (
    <Container>
      <header id="top">
        <div className="row">
          <nav className="nav bg-black" role="navigation">
            <ul className="nav__items">
              <li className="nav__item">
                <Link href="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/about" className="nav__link">
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/skills" className="nav__link">
                  Skills
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/experience" className="nav__link">
                  Experience
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/projects" className="nav__link">
                  Projects
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/publications" className="nav__link">
                  Publication
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/blogs" className="nav__link">
                  Blogs
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/contact" className="nav__link">
                  Contact
                </Link>
              </li>
              {/* <a href="home/home.html">Go to Home</a> */}
            </ul>
          </nav>
        </div>
      </header>
    </Container>
  );
}
