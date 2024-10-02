"use client";
import Container from "./container";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      {/* ***** Footer ***** */}
      <footer role="contentinfo" className="footer">
        {/* Back to Top Button */}
        <Backlink />

        <div className="row">
          <ul className="footer__social-links">
            <li className="footer__social-link-item">
              <a
                href="https://twitter.com/_Sancharika"
                title="Link to Twitter Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/twitter.svg"
                  width={50}  // Adjust the width/height based on your design
                  height={50}
                  className="footer__social-image"
                  alt="Link to Twitter Profile"
                />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a
                href="https://github.com/sancharika/"
                title="Link to Github Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/github.svg"
                  width={50}
                  height={50}
                  className="footer__social-image"
                  alt="Link to Github Profile"
                />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a
                href="https://huggingface.co/sancharikadebnath"
                title="Link to HuggingFace Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/hf.svg"
                  width={50}
                  height={50}
                  className="footer__social-image"
                  alt="Link to HuggingFace Profile"
                />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a 
                href="https://www.linkedin.com/in/sancharika-debnath/"
                title="Link to Linkedin Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/linkedin.svg"
                  width={50}
                  height={50}
                  className="footer__social-image"
                  alt="Link to LinkedIn Profile"
                />
              </a>
            </li>
          </ul>

          <p>
            © 2024{" "}
            <a
              href="https://github.com/sancharika/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Sancharika Debnath
            </a>
          </p>
        </div>
      </footer>
    </Container>
  );
}

// Backlink Component (Back to Top)
const Backlink = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when the scroll position is greater than the height of the viewport
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a href="#top" className={`back-to-top ${isVisible ? 'visible' : ''}`} title="Back to Top">
      <Image
        src="/images/arrow-up.svg"
        alt="Back to Top"
        className="back-to-top__image"
        width={50}   // Adjust size accordingly
        height={50}
      />
    </a>
  );
};
