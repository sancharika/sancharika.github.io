export default function Projects() {
  const featuredProjects = [
    {
      name: "GenieFile",
      link: "https://github.com/sancharika/geniefile/",
      description: "RAG document assistant combining FAISS vector search with a Neo4j Knowledge Graph for cross-document entity reasoning. Includes a custom eval framework tracking hallucination rate and retrieval precision.",
      tags: ["LangChain", "FAISS", "Neo4j", "Ollama"],
    },
    {
      name: "LLaMA 3 from Scratch",
      link: "https://github.com/sancharika/Llama3_scratch",
      description: "Full LLaMA 3 architecture built in PyTorch from scratch — tokenization, RoPE, RMSNorm, multi-head attention, feedforward layers — verified against Meta's official weights. No HuggingFace abstractions.",
      tags: ["PyTorch", "Transformers", "Meta weights", "LLM"],
    },
    {
      name: "Signature Verification System",
      link: "https://github.com/sancharika/Handwritten-Signature-Verification/",
      description: "Siamese Neural Network with ResNet backbone and spatial attention to distinguish genuine vs. forged signatures. End-to-end pipeline with contrastive loss training — built for fraud detection and identity verification.",
      tags: ["Siamese Net", "ResNet", "Spatial Attention", "PyTorch"],
    },
  ];

  const otherProjects = [
    {
      name: "Fine-Tuning LLMs",
      link: "https://github.com/sancharika/Fine-Tuning-LLM/",
      description: "LoRA + PEFT fine-tuning on HuggingFace models for optimized text generation.",
      tags: ["LoRA", "PEFT", "HuggingFace", "Quantization"],
    },
    {
      name: "LLM QA ChatBot",
      link: "https://github.com/sancharika/LLM-QA-ChatBot/",
      description: "Streamlit RAG chatbot for real-time IPO financial analysis using Pinecone vector DB.",
      tags: ["RAG", "Pinecone", "LangChain"],
    },
    {
      name: "Career Enchanter",
      link: "https://github.com/sancharika/CareerEnchanter/",
      description: "BERT + Gemini-Pro pipeline for ATS compatibility scoring and resume recommendations.",
      tags: ["BERT", "Gemini-Pro", "LangChain"],
    },
    {
      name: "GI Disease Detection",
      link: "https://github.com/sancharika/Gastrointestinal-Disease-Detection/",
      description: "Multi-model CV system for gastrointestinal disease detection using Detectron2 and MaskRCNN.",
      tags: ["Detectron2", "MaskRCNN", "ResNet50"],
    },
    {
      name: "VisionaryNet",
      link: "https://github.com/sancharika/Object_identifier/",
      description: "Django + ResNet50 web app for real-time object identification from uploaded images.",
      tags: ["ResNet50", "Django", "TensorFlow"],
    },
    {
      name: "AI Blogger",
      link: "https://github.com/sancharika/AI-Blogger/",
      description: "Blog content generator via speech recognition and Google GenAI with tone customization.",
      tags: ["GenAI", "Speech Recognition"],
    },
    {
      name: "IntelliSummarize",
      link: "https://github.com/sancharika/IntelliSummarize/",
      description: "AI-driven document summarization tool for bloggers built with Gemini and Streamlit.",
      tags: ["Gemini", "Streamlit", "LangChain"],
    },
    {
      name: "Deep Learning Models",
      link: "https://github.com/sancharika/Deep-Learning-Models/",
      description: "CNN, ANN, RBF architectures implemented from scratch to understand mathematical intuition.",
      tags: ["PyTorch", "NumPy", "scikit-learn"],
    },
    {
      name: "Breed Classifier",
      link: "https://github.com/sancharika/Deep-Learning-Topics-with-Computer-Vision-NLP-Project/",
      description: "ResNet18 fine-tuned on AWS SageMaker to classify 133 dog breeds with hyperparameter profiling.",
      tags: ["SageMaker", "ResNet", "AWS"],
    },
    {
      name: "Furniture Classifier",
      link: "https://github.com/sancharika/Capstone-Project/",
      description: "Transfer learning model deployed on SageMaker achieving 83.16% furniture classification accuracy.",
      tags: ["SageMaker", "Deep Learning", "S3"],
    },
    {
      name: "PawPrint Classifier",
      link: "https://github.com/sancharika/Dog-Cat-Classification/",
      description: "CNN classifier for cats vs dogs using Keras Sequential API achieving 98.7% accuracy.",
      tags: ["Keras", "CNN", "Tkinter"],
    },
    {
      name: "Voice Assistant",
      link: "https://github.com/sancharika/SpeakBot/",
      description: "Speech recognition assistant for music playback, Wikipedia lookups, and system tasks.",
      tags: ["Speech Recognition", "TTS", "Google Speech"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="row">
        <h2>Projects</h2>

        <div className="projects__section">
          <p className="projects__section-label">Featured Projects</p>
          <div className="projects__featured-grid">
            {featuredProjects.map((project, index) => (
              <div className="project__feat-card" key={index}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__feat-name"
                >
                  {project.name} <span className="project__arrow">↗</span>
                </a>
                <p className="project__feat-desc">{project.description}</p>
                <div className="project__tags">
                  {project.tags.map((tag, i) => (
                    <span className="project__tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects__section">
          <p className="projects__section-label">Other Projects</p>
          <div className="projects__other-grid">
            {otherProjects.map((project, index) => (
              <div className="project__other-card" key={index}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__other-name"
                >
                  {project.name} <span className="project__arrow">↗</span>
                </a>
                <p className="project__other-desc">{project.description}</p>
                <div className="project__other-tags">
                  {project.tags.map((tag, i) => (
                    <span className="project__other-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}