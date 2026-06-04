export default function Experience() {
  const jobHistory = [
    {
      company: "Defence Research and Development Organisation (DRDO)",
      link: "https://drdo.gov.in/drdo/",
      date: "January 2025 – August 2025",
      role: "Graduate Apprentice (CSE)",
      description: [
        "<b>Air-Gapped LLM Deployment:</b> Deployed LLaMA and Mistral inference stacks across Linux and Windows in a high-security network with no internet access — enabling 12+ researchers to run AI queries locally.",
        "<b>Research Efficiency:</b> Reduced average query turnaround from ~2 hrs to under 35 min by designing a localized model execution pipeline that eliminated all external dependencies.",
        "<b>Mentorship:</b> Guided and mentored a group of 10 interns through their internship project — overseeing technical direction, troubleshooting blockers, and ensuring delivery within the program timeline.",
        "<b>Automated Tender Generation:</b> Built a Tesseract + EasyOCR extraction pipeline feeding a LangChain/Ollama RAG system that outputs structured LaTeX tender documents from noisy scanned PDFs — eliminating manual drafting for 20–30 documents/week.",
      ],
    },
    {
      company: "Leapon",
      link: "https://leapon.tech/",
      date: "February 2024 – Present",
      role: "Product Developer (concurrent freelance)",
      description: [
        "<b>Voice AI Agent:</b> Built a prompt-orchestrated calling agent using ElevenLabs, enabling 3+ enterprise clients to automate inbound/outbound call flows with configurable tone, persona, and conversation logic.",
        "<b>Cloud Migration:</b> Migrated full production stack from AWS (RDS MySQL + S3) to GCP with under 60 min of downtime — cutting monthly infrastructure costs by 46% ($130 → $70/month).",
        "<b>OCR Automation:</b> Automated business card digitization using Google Vision API, parsing card images into structured vCard and Excel output for a sales team's CRM onboarding process.",
      ],
    },
    {
      company: "Giggr Technologies",
      link: "https://www.giggr.app/",
      date: "June 2023 – February 2024",
      role: "AI/ML Engineer",
      description: [
        "<b>Event AI System:</b> Built a system integrating facial recognition, object detection, and GPS tracking — achieving 87.4% accuracy using OpenCV, YOLO, and DeepFace.",
        "<b>Public API:</b> Delivered an Elasticsearch-powered API covering 1.3M+ Indian education institutes via web scraping and AWS Shell Scripting.",
        "<b>Conversational AI:</b> Built a Dialogflow + GPT chatbot with Firebase integration, growing user engagement from ~800 to ~1,500 sessions/month within the first quarter.",
      ],
    },
    {
      company: "Leapon",
      link: "https://leapon.tech/",
      date: "February 2023 – June 2023",
      role: "Backend Developer",
      description: [
        "<b>Django REST API:</b> Built a customized backend for a platform with 50+ advisors, with unit testing, bug fixing, and CI/CD integration. Stack: Python/Django, SQL, AWS, Git, JIRA.",
      ],
    },
    {
      company: "Maersk Global Service Centres",
      link: "https://www.maersk.com/",
      date: "July 2022 – February 2023",
      role: "Data Science Intern",
      description: [
        "<b>Port Clustering:</b> Clustered global port data using Gaussian Mixture Models for cost estimation — stack: PySpark, Databricks, Microsoft Azure.",
        "<b>Logistics Forecasting:</b> Modeled container turn times and forecasted attachment ratios using XGBoost and Regression, contributing to a 15% increase in freight profit.",
        "<b>Customer Segmentation:</b> Applied K-Means clustering to segment large-scale customer datasets, identifying behavioral patterns to optimize digital acquisition strategies.",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="row">
        <h2>Experience</h2>
        {jobHistory.map((job, index) => (
          <div className="exp__details" key={index}>
            <h6 className="exp__comp">
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="comp__link"
              >
                {job.company}
              </a>
            </h6>
            <h5 className="date">{job.date}</h5>
            <p className="exp__role">
              <b><em>{job.role}</em></b>
            </p>
            <ul className="exp__jd">
              {job.description.map((point, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>
          </div>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="arrow-link"
        >
          View My Resume
        </a>
      </div>
    </section>
  );
}