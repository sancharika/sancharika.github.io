import Image from "next/image";
// import {sancharika_about} from "/images/sancharika.png"


export default function Home() {
  return (
    <>
      {/* eslint-disable-next-line react/no-unescaped-entities */}

      <header className="header" role="banner" id="top">

        <div className="header__text-box row">
          <div className="header__text">
            <h1 className="heading-primary">
              <span>Sancharika Debnath</span>
            </h1>
            <h2 className="no-after">Data Scientist</h2>
            <h3 className="no-after">
              A dynamic Data Scientist with a passion for leveraging cutting-edge
              <br />
              technology to craft innovative solutions and drive meaningful change
              <br />
              through data-driven insights.
            </h3>
            <br />
            <a href="#contact" className="btn btn--pink">
              Get in touch
            </a>
          </div>
        </div>
      </header>
      <main role="main">
        {/* ***** About ***** */}
        <section className="about" id="about">
          <div className="row">
            <h2 className="about__heading">About Me</h2>
            <div className="about__photo-container">
              <Image className="about__photo" src={"/images/sancharika.png"} alt="" height={400}
                width={400} />
            </div>
            <div className="about__content">
              <div className="about__text">
                <div className="about__column">
                  <p>
                    Welcome to my professional journey! I&#39;m Sancharika Debnath, a
                    dynamic Data Scientist with a fervent enthusiasm for leveraging
                    cutting-edge technology to craft innovative solutions. With a solid 
                    foundation in data science and backend development, I am currently 
                    co-building <i>Leapon</i>, a groundbreaking product aimed at transforming 
                    professional relationship management.<br/>
                    Recently graduating from Kalinga Institute of Industrial
                    Technology University with a Bachelor&#39;s Of Technology in
                    Information Technology has equipped me with a strong academic
                    background to complement my practical skills. I&#39;m eager to
                    connect with professionals and organizations committed to
                    driving meaningful change.
                  </p>
                </div>
                <div className="about__content__points">
                  <h3>Bringing value that resonates: WHY I stand out!!</h3>
                  <ul>
                    <li>
                      Dynamic Data Scientist with a passion for leveraging
                      cutting-edge technology to craft innovative solutions.
                    </li>
                    <li>
                      Skilled in translating complex data into actionable insights
                      and robust systems.
                    </li>
                    <li>
                      Led the development of transformative event systems and custom
                      APIs, achieving an impressive accuracy rate of 87.4%.
                    </li>
                    <li>
                      Experienced in backend development using Python, Django, and
                      AWS to optimize website performance and enhance user
                      experiences.
                    </li>
                    <li>
                      Pioneered a regression invoice prediction system and conducted
                      groundbreaking research on Hyperspectral Image Compression and
                      Classification, achieving a remarkable accuracy of 99.8%.
                    </li>
                  </ul>
                </div>
                <div className="about__column">
                  <a
                    href="https://shorturl.at/puER9"
                    target="_blank"
                    className="btn"
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ******* Skills ***** */}
        <section className="skills" id="skills">
          <div className="row">
            <h2>Skills</h2>
          </div>
          <div className="skills__content">
            <div className="skillz__category">
              <div className="skillz__category__label">Programming Languages</div>
              <ul className="skillz__category__item">
                <li>Python</li>
                <li>R</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>HTML</li>
                <li>C++</li>
                <li> SQL / query languages</li>
              </ul>
            </div>
            <div className="skillz__category">
              <div className="skillz__category__label">Technical Skills</div>
              <ul className="skillz__category__item">
                <li>Machine Learning</li>
                <li>Natural Language Peocessing (NLP)</li>
                <li>Deep Learning</li>
                <li>Computer Vision</li>
                <li>Generative AI</li>
                <li>Data Analysis</li>
                <li>Autoencoder</li>
              </ul>
            </div>
            <div className="skillz__category">
              <div className="skillz__category__label">Tools</div>
              <ul className="skillz__category__item">
                <li>Google Cloud Platform</li>
                <li>Amazon Web Services</li>
                <li>Microsoft Azure</li>
                <li>Neo4j Graph Database</li>
                <li>Tableau</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div className="skillz__category">
              <div className="skillz__category__label">Framework</div>
              <ul className="skillz__category__item">
                <li>Keras</li>
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>LangChain</li>
                <li>Llama</li>
                <li>Django</li>
                <li>PySpark</li>
                <li>Azure ML</li>
                <li>MLFlow</li>
                <li>Databrick</li>
              </ul>
            </div>
            <div className="skillz__category">
              <div className="skillz__category__label">Libraries</div>
              <ul className="skillz__category__item">
                <li>Pandas</li>
                <li>NumPy</li>
                <li>Scikit-Learn</li>
                <li>OpenCV</li>
                <li>spaCy</li>
                <li>Transformers</li>
                <li>Hugging Face</li>
                <li>Transfer Learning</li>
                <li>Pinecone</li>
                <li>Cassandra</li>
              </ul>
            </div>
          </div>
        </section>
        {/* ***** Experience ***** */}
        <section className="experience" id="experience">
          <div className="row">
            <h2>Experience</h2>
            <div className="exp__content">
              <div className="exp__details">
                <h6 className="exp__comp">
                  <a
                    href="https://leapon.tech/"
                    target="_blank"
                    className="comp__link"
                  >
                    Leapon
                  </a>
                  <br />
                </h6>
                <h5 className="date">February 2024 - Present</h5>
                <p className="exp__role">
                  <b>
                    <em>CTO</em>
                  </b>
                </p>
                <ul className="exp__jd">
                  <li>
                    <b>Product:</b> We started with the idea of enhancing 
                    the end customer experience in the service industry. Through our insights, we 
                    realized that enabling professionals is key to making this possible. Today, 
                    we have built a productivity tool for professionals that helps them build 
                    strong business relationships.
                  </li>
                  <li>
                    <b>Vision-Driven Product Development:</b> Initiated with the vision of 
                    revolutionizing the service industry by enhancing the end-customer experience. 
                    Realized that empowering professionals is the cornerstone of this mission, 
                    leading to the creation of a productivity tool designed to help them build and 
                    nurture strong business relationships.
                  </li>
                  <li>
                    <b>System Architecture & Optimization:</b>{" "}
                    Designed and implemented a robust, modular system architecture that can scale 
                    effortlessly with growing user demand. Utilized advanced caching techniques and database 
                    optimization to enhance application performance and reduce latency.
                  </li>
                  <li>
                    <b>User-Centric Development:</b> Continuously gathered feedback through user testing and 
                    implemented iterative improvements to enhance usability. Prioritized our user&#39;s experience 
                    by integrating intuitive design principles into the platform&#39;s functionality.
                  </li>
                </ul>
              </div>
              <div className="exp__details">
                <h5 className="exp__comp">
                  <a
                    href="https://www.giggr.app/"
                    target="_blank"
                    className="comp__link"
                  >
                    Giggr Technologies
                  </a>
                  <br />
                </h5>
                <h5 className="date">June 2023 – February 2024</h5>
                <p className="exp__role">
                  <b>
                    <em>AI ML Engineer</em>
                  </b>
                </p>
                <ul className="exp__jd">
                  <li>
                    <b> Event System:</b> Orchestrated the development of a dynamic
                    event management system incorporating cutting-edge technologies
                    like facial recognition for attendance tracking, real-time
                    object identification via camera data, and GPS integration.
                    Achieved an impressive 87.4% accuracy leveraging OpenCV, YOLO,
                    Deep-Face, Geo location API, and JavaScript.
                  </li>
                  <li>
                    <b>Neo4j Architecture Development:</b> Collaborated with a
                    cross-functional team to architect and implement a robust Neo4j
                    database structure, facilitating efficient data mining
                    operations. Leveraged Neo4j&#39;s graph database capabilities
                    alongside REST API integration and GitHub Actions for
                    streamlined collaboration and deployment.
                  </li>
                  <li>
                    <b>Custom Public API Development:</b> Spearheaded the creation
                    of a bespoke public API leveraging Elasticsearch to aggregate
                    data for over 1.3 million Indian educational institutions
                    through web scraping techniques. Leveraged Amazon Web Services
                    (AWS), Elastic-Search, and Shell Scripting to ensure scalability
                    and performance.
                  </li>
                  <li>
                    <b>Generative AI Stack Bot Design:</b> Conceptualized and
                    designed a sophisticated Generative AI stack Bot tailored to
                    specific business requirements, significantly enhancing user
                    engagement by 90%. Leveraged Dialogflow, Firebase, and Open AI
                    alongside NLP and GPT for advanced conversational capabilities
                    and Text-to-Speech integration.
                  </li>
                  <li>
                    <b>Technological Expertise:</b> Demonstrated proficiency across
                    a diverse range of technologies including Amazon Web Services,
                    Elastic-Search, Shell Scripting, Dialogflow, Firebase, Open AI,
                    and NLP, showcasing adaptability and versatility in tackling
                    complex project requirements.
                  </li>
                </ul>
              </div>
              <div className="exp__details">
                <h6 className="exp__comp">
                  <a
                    href="https://leapon.tech/"
                    target="_blank"
                    className="comp__link"
                  >
                    Leapon
                  </a>
                  <br />
                </h6>
                <h5 className="date">February 2023 - June 2023</h5>
                <p className="exp__role">
                  <b>
                    <em>Back-end Developer</em>
                  </b>
                </p>
                <ul className="exp__jd">
                  <li>
                    <b>Customized Back-end Development:</b> Led the development of a
                    tailored back-end solution using Python - Django framework,
                    ensuring seamless functionality and performance for a website
                    housing over 50 advisors.
                  </li>
                  <li>
                    <b>Django REST API Integration:</b> Implemented a comprehensive
                    RESTful API using Django, enabling efficient communication
                    between the website&#39;s front-end and back-end systems. Leveraged
                    industry-standard practices for API design to ensure
                    interoperability, scalability, and security.
                  </li>
                  <li>
                    <b>Continuous Integration and Continuous Deployment (CI/CD):</b>{" "}
                    Implemented automated testing and deployment pipelines utilizing
                    CI/CD tools to streamline the development process. Conducted
                    unit testing and bug fixing to optimize features, ensuring the
                    highest level of reliability and stability throughout the
                    development lifecycle.
                  </li>
                  <li>
                    <b>Agile Scrum Methodology:</b> Embraced Agile Scrum practices,
                    including sprint planning, daily stand-ups, and iterative
                    development cycles, to foster collaboration and adaptability
                    within the development team. Leveraged tools like GIT for
                    version control and JIRA for project management to facilitate
                    efficient tracking and prioritization of tasks.
                  </li>
                  <li>
                    <b>Feature-rich Functionality:</b> Developed various features to
                    enhance user experience and functionality, including:
                    <ul className="nested">
                      <li>
                        Creation of digital cards for advisors, providing a
                        personalized and professional touch to their profiles.
                      </li>
                      <li>
                        Implementation of appointment scheduling functionality
                        similar to Google Calendar, enabling seamless booking and
                        management of appointments.
                      </li>
                      <li>
                        Integration of mass communication/marketing email sending
                        features, facilitating targeted outreach and engagement with
                        clients.
                      </li>
                      <li>
                        Utilization of data analytics capabilities using Google
                        Cloud Platform (GCP) for insightful business intelligence
                        and decision-making.
                      </li>
                      <li>
                        Hosting the back-end infrastructure on Heroku, ensuring
                        scalability, reliability, and security of the system.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="exp__details">
                <h6 className="exp__comp">
                  <a
                    href="https://www.maersk.com/"
                    target="_blank"
                    className="comp__link"
                  >
                    Maersk Global Service Centres India Pvt. Ltd.
                  </a>
                  <br />
                </h6>
                <h5 className="date">July 2022 - February 2023</h5>
                <p className="exp__role">
                  <b>
                    <em>Data Science Intern</em>
                  </b>
                </p>
                <ul className="exp__jd">
                  <li>
                    <b>Agile Office Seat Pre-booking Web App:</b> Spearheaded the
                    development of an agile web application for office seat
                    pre-booking, leveraging Spring Boot and Next.js technologies.
                    This innovative solution led to an impressive 80% boost in user
                    booking efficiency, enhancing workplace productivity and
                    organization. Technologies utilized include Spring-Boot for
                    backend development, GitHub Actions for continuous integration
                    and deployment, GitHub for version control, Anchor UI for
                    frontend design, and PostgreSQL for database management.
                  </li>
                  <li>
                    <b>Clustering and Estimation Models for Ports:</b> Implemented
                    advanced models to cluster ports using clustering and estimation
                    methods within the realm of Big Data analytics. Employed
                    techniques such as Gaussian Mixture for cost estimation,
                    enhancing analytical capabilities for port management and
                    optimization. Leveraged Pyspark and Databricks for large-scale
                    data processing, alongside Microsoft Azure for cloud
                    infrastructure and deployment.
                  </li>
                  <li>
                    <b>Predictive Analytics for Distribution Logistics:</b>{" "}
                    Developed a solution approach to predict container turn time and
                    forecast attachment ratio in distribution logistics scenarios.
                    Leveraged quantitative metrics and machine learning techniques,
                    with FLAML (Fast, Lightweight AutoML) identified as the optimal
                    AutoML tool for the task. Utilized ETL (Extract, Transform,
                    Load) processes for data preprocessing, Databricks for scalable
                    data processing, and Azure ML for machine learning model
                    development and deployment.
                  </li>
                  <li>
                    <b>Technological Expertise:</b> Demonstrated proficiency across
                    a wide array of technologies including Spring Boot, Next.js,
                    GitHub Actions, GitHub, Anchor UI, PostgreSQL, Pyspark,
                    Databricks, Microsoft Azure, and FLAML. This comprehensive skill
                    set enabled the successful implementation of complex solutions
                    spanning web development, big data analytics, and machine
                    learning.
                  </li>
                </ul>
              </div>
              <div className="exp__details">
                <h6 className="exp__comp">
                  <a
                    href="https://www.highradius.com/"
                    target="_blank"
                    className="comp__link"
                  >
                    HighRadius Corporation
                  </a>
                  <br />
                </h6>
                <h5 className="date">January 2022 - April 2022</h5>
                <p className="exp__role">
                  <b>
                    <em>Data Science Winter Intern</em>
                  </b>
                </p>
                <ul className="exp__jd">
                  <li>
                    <b>Regression Invoice Prediction System:</b> Developed a robust
                    regression-based invoice prediction system employing machine
                    learning models and statistical concepts to streamline financial
                    operations. Leveraging advanced techniques, the system
                    accurately forecasts invoice amounts, aiding in budget planning
                    and resource allocation.
                  </li>
                  <li>
                    <b>Model Utilization and Accuracy:</b> Implemented XGBoost, a
                    powerful gradient boosting algorithm, to train the predictive
                    model achieving an impressive accuracy of 76.15%. Additionally,
                    utilized frameworks such as Keras to enhance the system&#39;s
                    capabilities, ensuring accurate predictions and optimization of
                    financial processes.
                  </li>
                </ul>
              </div>
              <a
                href="https://sancharika.github.io/resume.pdf"
                target="_blank"
                className="arrow-link"
              >
                View My Resume
              </a>
            </div>
          </div>
        </section>
        {/* ***** Projects ***** */}
        <section className="projects" id="projects">
          <div className="row">
            <h2>Projects</h2>
            <div className="other-projects">
              <div className="section__title">
                <h3>Featured Projects</h3>
              </div>
              <div className="section__content">
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/geniefile"
                      target="_blank"
                      className="arrow-link"
                    >
                      Genie File
                    </a>{" "}
                  </div>
                  <p>
                    A revolutionary ai-powered document assistant, a &#34;magic lamp&#34; for unlocking the secrets within your files.
                    &#34;Genie File&#34; is an AI-powered document assistant designed to seamlessly extract and analyze information from
                    diverse file formats, enabling intuitive question answering and knowledge discovery. By integrating advanced
                    retrieval-augmented generation techniques with vector databases and customizable knowledge graphs, it
                    transforms raw data into actionable insights.
                  </p>
                  <div className="project__used">
                    <span className="project__used__item">Generative AI</span>
                    <span className="project__used__item">RAG</span>
                    <span className="project__used__item">FAISS</span>
                    <span className="project__used__item">Neo4j</span>
                    <span className="project__used__item">LangChain</span>

                  </div>
                </div>

                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/CareerEnchanter"
                      target="_blank"
                      className="arrow-link"
                    >
                      Career Enchanter
                    </a>{" "}
                  </div>
                  <p>
                    An AI-powered job hunting companion revolutionizing career
                    advancement through resume optimization, cover letter
                    generation, interview preparation, and personalized job
                    recommendations.
                  </p>
                  <div className="project__used">
                    <span className="project__used__item">Prompting</span>
                    <span className="project__used__item">Hugging Face</span>
                    <span className="project__used__item">LangChain </span>
                    <span className="project__used__item">LLM</span>
                    <span className="project__used__item">Generative AI</span>
                  </div>
                </div>
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/LLM-QA-ChatBot"
                      target="_blank"
                      className="arrow-link"
                    >
                      LLM QA ChatBot
                    </a>{" "}
                  </div>
                  <p>
                    Streamlit-based conversational RAG Q&amp;A chatbot
                    providing real-time financial analysis of IPOs for startup
                    companies using Vector Database.
                  </p>
                  <div className="project__used">
                    <span className="project__used__item">RAG</span>
                    <span className="project__used__item">Langchain</span>
                    <span className="project__used__item">Vector Database</span>
                    <span className="project__used__item">Pineone</span>
                    <span className="project__used__item">LLM</span>
                  </div>
                </div>
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/Gastrointestinal-Disease-Detection"
                      target="_blank"
                      className="arrow-link"
                    >
                      Gastrointestinal Disease Detection
                    </a>{" "}
                  </div>
                  <p>
                    A robust computer-aided detection system for gastrointestinal (GI) diseases utilizing a multi-model approach.
                    Leveraging the Kvasir dataset, the system employs deep learning models for accurate detection.
                    Additionally, the RGB images are converted to HSV and YUV color spaces to enhance performance.
                  </p>
                  <div className="project__used">
                    <span className="project__used__item">Augmentation</span>
                    <span className="project__used__item">Detectron2</span>
                    <span className="project__used__item">MaskrCNN</span>
                    <span className="project__used__item">VGG19</span>
                    <span className="project__used__item">ResNet50</span>
                  </div>
                </div>
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/Capstone-Project"
                      target="_blank"
                      className="arrow-link"
                    >
                      Furniture classifier
                    </a>{" "}
                  </div>
                  <p>
                    Furniture classifier leveraging deep learning and transfer
                    learning models, deployed on AWS SageMaker, achieving
                    83.16% accuracy in image classification.
                  </p>
                  <div className="project__used">
                    {" "}
                    <span className="project__used__item">
                      Amazon SageMaker
                    </span>{" "}
                    <span className="project__used__item">S3</span>{" "}
                    <span className="project__used__item">EC2 Instances</span>{" "}
                    <span className="project__used__item">Deep Learning</span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="other-projects">
              <div className="section__title">
                <h3>Other Projects</h3>
              </div>
              <div className="section__content">
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/AI-Blogger"
                      target="_blank"
                      className="arrow-link"
                    >
                      AI Blogger
                    </a>{" "}
                  </div>
                  <p>
                    A tool for generating blog content through speech recognition or
                    text input, employing Google&#39;s generative AI models and
                    customizable parameters for tone, style, and language.
                  </p>
                  <div className="project__used">
                    <span className="project__used__item">Generative AI</span>
                    <span className="project__used__item">Speech Recognition</span>
                    <span className="project__used__item">Text Extraction</span>
                  </div>
                </div>
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/IntelliSummarize"
                      target="_blank"
                      className="arrow-link"
                    >
                      IntelliSummarize
                    </a>{" "}
                  </div>
                  <p>
                    An advanced AI-driven summarization tool tailored for bloggers,
                    offering effortless extraction and concise summarization of
                    diverse document formats into engaging blog content.
                  </p>
                  <div className="project__used">
                    <span className="project__used__item">Python</span>
                    <span className="project__used__item">Streamlit</span>
                    <span className="project__used__item">Gemini</span>
                    <span className="project__used__item">LLM</span>
                    <span className="project__used__item">Prompting</span>
                    <span className="project__used__item">Langchain</span>
                  </div>
                </div>
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/Fine-Tuning-LLM"
                      target="_blank"
                      className="arrow-link"
                    >
                      Fine-Tuning AI Models for Text Generation
                    </a>{" "}
                  </div>
                  <p>
                    Fine-Tuning large language models using state-of-the-art
                    techniques like LoRA for text generation tasks, enabling the
                    models to produce coherent and contextually relevant text
                    responses based on given prompts or instructions.
                  </p>
                  <div className="project__used">
                    <span className="project__used__item">Quantization</span>
                    <span className="project__used__item">Hugging Face</span>
                    <span className="project__used__item">PEFT </span>
                    <span className="project__used__item">LoRA</span>
                    <span className="project__used__item">SFT Trainer</span>
                  </div>
                </div>
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/Udacity-AI-Project"
                      target="_blank"
                      className="arrow-link"
                    >
                      Image Classifier Command Line Application
                    </a>{" "}
                  </div>
                  <p>
                    This project, part of Udacity&#39;s AI Programming with Python
                    Nanodegree program, involves developing an image classifier
                    using PyTorch and converting it into a command-line application,
                    and users can then use the application to predict the class of
                    an input image along with the probability.
                  </p>
                  <div className="project__used">
                    <span className="project__used__item">PyTorch</span>
                    <span className="project__used__item">ArgParse</span>
                    <span className="project__used__item">Shell Scripting</span>
                    <span className="project__used__item">VGG19</span>
                    <span className="project__used__item">GPU</span>
                  </div>
                </div>
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/Operationalizing-Machine-Learning-on-SageMaker-Project"
                      target="_blank"
                      className="arrow-link"
                    >
                      Operationalizing Machine Learning
                    </a>{" "}
                  </div>
                  <p>
                    Operationalizing machine learning models on Amazon SageMaker,
                    including setting up the initial environment, configuring S3
                    buckets, utilizing different SageMaker instance types for
                    tuning, training, and hosting, employing EC2 instances for
                    training, implementing Lambda functions for testing trained
                    endpoints, managing permissions and IAM roles, and configuring
                    concurrency and auto-scaling.
                  </p>
                  <div className="project__used">
                    {" "}
                    <span className="project__used__item">
                      Amazon SageMaker
                    </span>{" "}
                    <span className="project__used__item">S3</span>{" "}
                    <span className="project__used__item">EC2 Instances</span>{" "}
                    <span className="project__used__item">Lambda Functions</span>{" "}
                  </div>
                </div>
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/Deep-Learning-Topics-with-Computer-Vision-NLP-Project"
                      target="_blank"
                      className="arrow-link"
                    >
                      Breed Classifier
                    </a>{" "}
                  </div>
                  <p>
                    Image classification using AWS SageMaker, where a pretrained CNN
                    model (ResNet18) is fine-tuned to classify dog breeds into 133
                    categories based on a Dog Breeds dataset.{" "}
                  </p>
                  <div className="project__used">
                    {" "}
                    <span className="project__used__item">AWS</span>{" "}
                    <span className="project__used__item">CNNs</span>{" "}
                    <span className="project__used__item">ResNet</span>{" "}
                    <span className="project__used__item">Deployment</span>{" "}
                    <span className="project__used__item">Profiling</span>{" "}
                    <span className="project__used__item">Hyperparameter</span>{" "}
                  </div>
                </div>
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/SpeakBot/"
                      target="_blank"
                      className="arrow-link"
                    >
                      Voice Assistant
                    </a>{" "}
                  </div>
                  <p>
                    A basic voice assistant using speech recognition, text-to-speech
                    conversion, and various functionalities like playing songs on
                    YouTube, opening applications, fetching current time, and
                    providing information about a person from Wikipedia.
                  </p>
                  <div className="project__used">
                    {" "}
                    <span className="project__used__item">Text-to-Speech</span>{" "}
                    <span className="project__used__item">Wikipedia API</span>{" "}
                    <span className="project__used__item">Pywhatkit</span>
                    <span className="project__used__item">Google Speech</span>
                  </div>
                </div>
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/Deep-Learning-Models"
                      target="_blank"
                      className="arrow-link"
                    >
                      Deep Learning Models
                    </a>{" "}
                  </div>
                  <p>
                    This Python project involves the implementation of various
                    neural network models, including CNN, ANN, RBF, and few more
                    from scratch to understand the underlying intuition behind each
                    neural network architecture.
                  </p>
                  <div className="project__used">
                    {" "}
                    <span className="project__used__item">Python</span>{" "}
                    <span className="project__used__item">Activaion Functions</span>
                    <span className="project__used__item">NumPy</span>
                    <span className="project__used__item">Scikit-Learn</span>
                  </div>
                </div>
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/Object_identifier"
                      target="_blank"
                      className="arrow-link"
                    >
                      VisionaryNet
                    </a>{" "}
                  </div>
                  <p>
                    VisionaryNet is a web application powered by ResNet50, allowing
                    users to upload images and receive real-time identification of
                    objects present in the image. Leveraging Keras and Django, this
                    application harnesses the ImageNet classification of predefined
                    models to provide accurate object recognition.
                  </p>
                  <div className="project__used">
                    {" "}
                    <span className="project__used__item">ResNet50</span>{" "}
                    <span className="project__used__item">Django</span>{" "}
                    <span className="project__used__item">TensorFlow</span>{" "}
                    <span className="project__used__item">Keras</span>{" "}
                    <span className="project__used__item">ResNet 50</span>
                  </div>
                </div>
                <div className="project">
                  <div className="project__name">
                    {" "}
                    <a
                      href="https://github.com/sancharika/Dog-Cat-Classification"
                      target="_blank"
                      className="arrow-link"
                    >
                      PawPrint Classifier: Feline &amp; Canine Edition
                    </a>{" "}
                  </div>
                  <p>
                    a machine learning project focused on classifying images of cats
                    and dogs using Convolutional Neural Networks (CNN) implemented
                    with the Keras Sequential API with an impressive accuracy of
                    98.7%
                  </p>
                  <div className="project__used">
                    {" "}
                    <span className="project__used__item">
                      Keras Sequential API
                    </span>{" "}
                    <span className="project__used__item">Tkinter</span>{" "}
                    <span className="project__used__item">CNN</span>{" "}
                    <span className="project__used__item">Asirra Dataset</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Publication ***** */}
        <section className="publication" id="publication">
          <div className="row">
            <h2>Publication</h2>
            <div className="project">
              <div className="project__name">
                {" "}
                <a
                  href="https://github.com/sancharika/Hyperspectral-Image-Compression"
                  target="_blank"
                  className="arrow-link"
                >
                  Hyperspectral Image Compression using Modified Convolutional
                  Autoencoder
                </a>{" "}
              </div>
              <p>
                The Research paper published in{" "}
                <a
                  className="underline-link"
                  href="https://www.researchgate.net/publication/372829131_Hyperspectral_Image_Compression_using_Modified_Convolutional_Autoencoder"
                >
                  IJCISIM
                </a>
                , proposes a novel lossy compression technique for hyperspectral
                images using deep convolutional networks and autoencoders, achieving
                superior results in compression ratio and Peak Signal-to-Noise Ratio
                (PSNR) compared to existing methods.
              </p>
              <div className="project__used">
                <span className="project__used__item">Hyperspectral imaging</span>
                <span className="project__used__item">
                  Convolutional Autoencoder
                </span>
                <span className="project__used__item">HybridSN</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* ***** Contact ***** */}
      <section className="contact" id="contact">
        <div className="row">
          <h2>Get in Touch</h2>
          <div className="contact__info">
            <p>
              Are you seeking expert guidance or consultation on machine learning
              projects? Need assistance in developing high-performance algorithms or
              data-driven solutions? Or perhaps you have questions about
              implementing cutting-edge techniques in your data science projects?
              Whether you&#39;re looking for fast-performing models, user-friendly
              interfaces, or simply want to say &#34;Hi 👋,&#34; feel free to reach out. I&#39;m
              here to help! 😊 The quickest way to reach out to me is via an email.
            </p>
            <a href="mailto:sancharikadebnath@gmail.com" className="btn">
              sancharikadebnath@gmail.com
            </a>
          </div>
        </div>
      </section>

    </>

  );
}
