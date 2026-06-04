import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="row">
        <h2 className="about__heading">About Me</h2>
        <div className="about__photo-container">
          <Image 
            className="about__photo" 
            src={"/images/sancharika.png"} 
            alt="Sancharika Debnath - Applied AI Engineer Portfolio" 
            height={400}
            width={400} 
          />
        </div>
        <div className="about__content">
          <div className="about__text">
            <div className="about__column">
              <p>
                I&#39;m an Applied AI Engineer based in India, focused on
                building LLM systems that work in production — not just
                in notebooks.
                <br /><br />
                I&#39;ve deployed offline GenAI inside DRDO&#39;s air-gapped
                defense network, built voice AI agents for enterprise clients,
                and implemented LLaMA&nbsp;3 from scratch to understand
                transformers at the architecture level.
                <br /><br />
                I care about the gap between research and deployment —
                and closing it.
              </p>
            </div>
            <div className="about__content__points">
  <h3>What I can build for you</h3>
  <ul>
    <li>
      <strong>RAG & document intelligence systems</strong> — I build
      pipelines that let your product answer questions over your own
      data. PDFs, DOCX, databases — ingested, embedded, and queryable.
      Shipped for production, not just demos.
    </li>
    <li>
      <strong>Voice AI agents</strong> — end-to-end conversational
      agents for inbound and outbound calls, with configurable tone,
      persona, and call flow logic. Already deployed for 3+ enterprise
      clients via ElevenLabs + custom orchestration.
    </li>
    <li>
      <strong>LLM integration & automation</strong> — connect LLMs to
      your existing workflows. Prompt engineering, structured output,
      tool use, evaluation frameworks. I&#39;ve done this in air-gapped
      defense environments — your stack is easier.
    </li>
    <li>
      <strong>Full AI product builds</strong> — if you have an idea and
      need someone to own the AI layer end-to-end: architecture,
      backend, and deployment. I work best with early-stage startups
      who move fast.
    </li>
    <li>
      <strong>Proven, not theoretical</strong> — every service above
      has a shipped project behind it. DRDO, Leapon, Giggr. 
    </li>
  </ul>
  <p>I don&#39;t pitch technology I haven&#39;t deployed.</p>
</div>
            <div className="about__column flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto w-fit mt-8">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
                My Resume
              </a>
              <a href="/contact" rel="noopener noreferrer" className="btn">
                Let&#39;s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}