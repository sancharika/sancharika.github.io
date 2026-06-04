export default function Skills() {
  const skills = [
    {
      category: "Core AI & LLM",
      items: [
        { name: "Large Language Models (LLMs)", level: "core", note: "Deployed in production at DRDO and Leapon" },
        { name: "RAG Architectures", level: "core", note: "Shipped multiple production systems" },
        { name: "Generative AI", level: "core", note: "Used daily across all recent roles" },
        { name: "Prompt Engineering", level: "core", note: "Core part of every LLM project" },
        { name: "Fine-Tuning (LoRA / PEFT)", level: "proficient", note: "Applied on HuggingFace models" },
        { name: "Transformer Architecture", level: "proficient", note: "Implemented LLaMA 3 from scratch" },
        { name: "NLP", level: "proficient", note: "Used across multiple projects" },
      ],
    },
    {
      category: "Frameworks & Orchestration",
      items: [
        { name: "LangChain", level: "core", note: "Primary orchestration framework" },
        { name: "Ollama", level: "core", note: "Used for local LLM deployment at DRDO" },
        { name: "HuggingFace Transformers", level: "proficient", note: "Model loading, fine-tuning, inference" },
        { name: "PyTorch", level: "proficient", note: "Built models and architectures from scratch" },
        { name: "TensorFlow", level: "proficient", note: "Used in early CV and research projects" },
        { name: "FastAPI", level: "proficient", note: "Backend for AI product APIs" },
        { name: "Django", level: "proficient", note: "Production backend at Leapon" },
      ],
    },
    {
      category: "Vector & Graph Databases",
      items: [
        { name: "FAISS", level: "core", note: "Used in GenieFile RAG pipeline" },
        { name: "Neo4j", level: "proficient", note: "Deployed Knowledge graph in Giggr and other projects" },
        { name: "MySQL", level: "proficient", note: "Production DB at Leapon" },
        { name: "Pinecone", level: "familiar", note: "Used in LLM QA Chatbot project" },
        { name: "Elasticsearch", level: "familiar", note: "Built 1.3M+ institute API at Giggr" },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        { name: "Google Cloud Platform", level: "core", note: "Migrated full production stack to GCP" },
        { name: "Amazon Web Services", level: "proficient", note: "Used across multiple production systems" },
        { name: "GitHub Actions (CI/CD)", level: "proficient", note: "Used at Leapon and Giggr" },
        { name: "Microsoft Azure", level: "familiar", note: "Used at Maersk for ML pipelines" },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "Python", level: "core", note: "Primary language across all roles" },
        { name: "JavaScript", level: "proficient", note: "Used at Giggr and portfolio" },
        { name: "SQL", level: "proficient", note: "Production queries at Leapon and Maersk" },
        { name: "Java", level: "familiar", note: "Academic and systems work at Maersk" },
        { name: "C++", level: "familiar", note: "Academic background" },
      ],
    },
    {
      category: "ML & Data",
      items: [
        { name: "Pandas / NumPy", level: "core", note: "Used in every data project" },
        { name: "Deep Learning", level: "proficient", note: "CNNs, autoencoders, Siamese nets" },
        { name: "Computer Vision (OpenCV, YOLO)", level: "proficient", note: "87.4% accuracy on YOLO at Giggr" },
        { name: "scikit-learn", level: "proficient", note: "Clustering and ML models at Maersk" },
        { name: "PySpark", level: "familiar", note: "Large-scale data at Maersk" },
        { name: "MLflow", level: "familiar", note: "Experiment tracking" },
      ],
    },
  ];

  const dotColor = {
    core: "#1D9E75",
    proficient: "#378ADD",
    familiar: "#888780",
  };

  const levelLabel = {
    core: "Core",
    proficient: "Proficient",
    familiar: "Familiar",
  };

  return (
    <section className="skills" id="skills">
      <div className="row">
        <h2>Skills</h2>

        {/* Legend */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {["core", "proficient", "familiar"].map((level) => (
            <span
              key={level}
              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "inherit", opacity: 0.7 }}
            >
              <span style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: dotColor[level], flexShrink: 0, display: "inline-block"
              }} />
              {levelLabel[level]}
            </span>
          ))}
        </div>
      </div>

      <div className="skills__content">
        {skills.map((group) => (
          <div className="skillz__category" key={group.category}>
            <div className="skillz__category__label">{group.category}</div>
            <ul className="skillz__category__item" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {group.items.map((item) => (
                <li
                  key={item.name}
                  style={{ display: "flex", alignItems: "center", gap: "8px", position: "relative", marginBottom: "6px" }}
                  className="skill-item"
                >
                  <span style={{
                    width: "7px", height: "7px", borderRadius: "50%",
                    background: dotColor[item.level], flexShrink: 0, display: "inline-block"
                  }} />
                  <span style={{ fontSize: "14px" }}>{item.name}</span>
                  <span className="skill-tooltip">{item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}