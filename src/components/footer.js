// Footer.jsx — only the content changes, structure stays yours
"use client";
import Container from "./container";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <footer role="contentinfo" className="footer">
        <Backlink />
        <div className="row">
          <ul className="footer__social-links">
            <li className="footer__social-link-item">
              <a href="https://twitter.com/_Sancharika/" title="Twitter" target="_blank" rel="noopener noreferrer">
                <Image src="/images/twitter.svg" width={50} height={50} className="footer__social-image" alt="Twitter Profile" />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a href="https://github.com/sancharika/" title="GitHub" target="_blank" rel="noopener noreferrer">
                <Image src="/images/github.svg" width={50} height={50} className="footer__social-image" alt="GitHub Profile" />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a href="https://huggingface.co/sancharikadebnath/" title="HuggingFace" target="_blank" rel="noopener noreferrer">
                <Image src="/images/hf.svg" width={50} height={50} className="footer__social-image" alt="HuggingFace Profile" />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a href="https://www.linkedin.com/in/sancharika-debnath/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Image src="/images/linkedin.svg" width={50} height={50} className="footer__social-image" alt="LinkedIn Profile" />
              </a>
            </li>
          </ul>
          <p className="footer__copy">
            © 2026{" "}
            <a href="https://sancharika.github.io/" target="_blank" rel="noopener noreferrer" className="link">
              Sancharika Debnath
            </a>
            {" "}· Built with Next.js
          </p>
        </div>
      </footer>
    </Container>
  );
}

const Backlink = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a href="#top" className={`back-to-top ${isVisible ? "visible" : ""}`} title="Back to Top">
      <Image src="/images/arrow-up.svg" alt="Back to Top" className="back-to-top__image" width={50} height={50} />
    </a>
  );
};