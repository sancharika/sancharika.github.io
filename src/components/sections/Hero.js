import Link from "next/link";

export default function Hero() {
  return (
    <header className="header" role="banner" id="top">
      <div className="header__text-box row">
        <div className="header__text">
          <h1 className="heading-primary">
            <span>Sancharika Debnath</span>
          </h1>
          <h2 className="no-after">Applied AI Engineer</h2>
          <h3 className="no-after">
            I build AI systems that work in the real world —
  <br />
  from offline LLM deployments in air-gapped defense networks
  <br />
  to production RAG pipelines, voice agents, and transformer internals from scratch.
</h3>
          <br />
          <Link href="/contact" className="btn btn--pink">
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}