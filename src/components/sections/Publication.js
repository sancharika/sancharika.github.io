// Publication.jsx
export default function Publication() {
  return (
    <section className="publication" id="publication">
      <div className="row">
        <h2>Publication</h2>
        <div className="pub__card">
          <div className="pub__meta">
            <span className="pub__journal">IJCISIM · Mar 2022</span>
            <span className="pub__badge">Peer Reviewed</span>
          </div>
          <a
            href="https://github.com/sancharika/Hyperspectral-Image-Compression/"
            target="_blank"
            rel="noopener noreferrer"
            className="pub__title"
          >
            Hyperspectral Image Compression and Classification using CNN Bottleneck AutoEncoder
            <span className="project__arrow">↗</span>
          </a>
          <p className="pub__desc">
            Research framework for HSI classification using a CNN bottleneck AutoEncoder with 
            Hyper Spectral Net. Achieved <strong>0.998 accuracy</strong> on classification. 
            Published in <a href="https://www.researchgate.net/publication/372829131" target="_blank" rel="noopener noreferrer" className="pub__link">IJCISIM</a>.
          </p>
          <div className="pub__tags">
            <span className="pub__tag">TensorFlow</span>
            <span className="pub__tag">Autoencoder</span>
            <span className="pub__tag">CNN</span>
            <span className="pub__tag">Hybrid SN</span>
          </div>
        </div>
      </div>
    </section>
  );
}