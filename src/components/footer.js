import Container from "./container";
import Image from "next/image";

export default function Footer() {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      {/* ***** Footer ***** */}
      <footer role="contentinfo" className="footer">
        <div className="row">
          <ul className="footer__social-links">
            <li className="footer__social-link-item">
              <a
                href="https://twitter.com/_Sancharika"
                title="Link to Twitter Profile"
              >
                <img
                  src="/images/twitter.svg"
                  className="footer__social-image"
                  alt="Twitter"
                />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a
                href="https://github.com/sancharika/"
                title="Link to Github Profile"
              >
                <img
                  src="/images/github.svg"
                  className="footer__social-image"
                  alt="Github"
                />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a
                href="https://huggingface.co/sancharikadebnath"
                title="Link to HuggingFace Profile"
              >
                <img
                  src="/images/hf.svg"
                  className="footer__social-image"
                  alt="HuggingFace"
                />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=sancharika-debnath">
                <img
                  src="/images/linkedin.svg"
                  title="Link to Linkedin Profile"
                  className="footer__social-image"
                  alt="Linkedin"
                />
              </a>
            </li>
          </ul>
          <p>
            © 2024{" "}
            <a
              href="https://github.com/sancharika/"
              target="_blank"
              className="link"
            >
              Sancharika Debnath
            </a>
            .
          </p>
          {/* <div class="footer__github-buttons">
  <iframe
    src="https://ghbtns.com/github-btn.html?user=sancharika&repo=sancharika.github.io&type=watch&count=true"
    frameborder="0" scrolling="0" width="170" height="20" title="Watch Portfolio Template on GitHub">
  </iframe>
</div> */}
        </div>
      </footer>
      <Backlink />
    </Container>
  );
}

const Backlink = () => {
  return (
    <a href="#top" className="back-to-top" title="Back to Top">
        <Image
          src="/images/arrow-up.svg"
          alt="Back to Top"
          className="back-to-top__image"
          width={500}
          height={500}
        />
      </a>
  );
};
