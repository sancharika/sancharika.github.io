// Contact.jsx
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="row">
        <h2>Get in Touch</h2>
        <div className="contact__info">
          <p className="contact__intro">
            Building an AI product and need someone to own the LLM layer?
            Looking for a voice agent, RAG system, or end-to-end AI build?
            <br /><br />
            I work with early-stage startups who move fast. The quickest way to reach me is email.
          </p>
          <a href="mailto:sancharikadebnath@gmail.com" className="btn contact__btn">
            sancharikadebnath@gmail.com
          </a>
          <p className="contact__alt">
            Or find me on{" "}
            <a href="https://www.linkedin.com/in/sancharika-debnath/" target="_blank" rel="noopener noreferrer" className="pub__link">
              LinkedIn
            </a>
            {" "}and{" "}
            <a href="https://github.com/sancharika" target="_blank" rel="noopener noreferrer" className="pub__link">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}