export interface ContactInfo {
  location: string;
  email: string;
  personalEmail: string;
  linkedin: string;
  github: string;
  googleScholar: string;
  researchGate: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
  courses?: string[];
  cgpa: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  machineLearning: string[];
  dataScience: string[];
  other: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  videoUrl?: string;
  videoExternalUrl?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url: string;
}

export interface ResearchInterest {
  title: string;
  description: string;
}

export interface ResumeData {
  name: string;
  role: string;
  contact: ContactInfo;
  summary: string;
  education: Education[];
  skills: Skills;
  skillsDescription: string;
  experience: Experience[];
  researchInterests: ResearchInterest[];
  projects: Project[];
  publications: Publication[];
  underReview: Publication;
  resumeUrl: string;
  profileImage: string;
}

export const resumeData: ResumeData = {
  name: "MD SAJJAD HOSSAIN",
  role: "I develop reliable AI and NLP methods for high-stakes systems.",
  profileImage: "/images/profile.jpg",
  resumeUrl: "/resume.pdf",
  contact: {
    location: "Houston, Texas, USA",
    email: "mhossain2@pvamu.edu",
    personalEmail: "sajjadhossain.aust@gmail.com",
    linkedin: "https://www.linkedin.com/in/sajjad-hossain1/",
    github: "https://github.com/sajjhossain",
    googleScholar: "https://scholar.google.com/citations?hl=en&user=1LjuQSQAAAAJ",
    researchGate: "https://www.researchgate.net/profile/Md-Hossain-866",
  },
  summary:
    "I am an M.S. student in Computer Science at Prairie View A&M University. My research focuses on reliable and domain-adapted NLP for high-stakes applications, including transportation safety and healthcare. My work includes crash-narrative classification, annotation quality, privacy-conscious language models, and the development of a system for generating clinical SOAP notes. I am interested in building reliable AI systems that support safer and better-informed decision-making in complex real-world environments.",
  skillsDescription:
    "The languages, frameworks, methods, and tools I use for applied AI research and deployable machine-learning systems.",
  education: [
    {
      degree: "M.S. in Computer Science",
      institution: "Prairie View A&M University",
      period: "Expected December 2026",
      details:
        "All coursework completed; thesis in progress. Working thesis: Design and Deployment of Reliable Domain-Adapted NLP for Crash Narrative Analysis: Multi-Label Classification, Annotation Auditing, and Analyst Decision Support.",
      cgpa: "4.00 / 4.00",
    },
    {
      degree: "B.Sc. in Industrial & Production Engineering",
      institution: "Ahsanullah University of Science & Technology",
      period: "2022",
      details:
        "ECE evaluated. Relevant foundation in statistics, numerical analysis, operations research, and supply chain management.",
      cgpa: "3.31 / 4.00",
    },
  ],
  skills: {
    languages: ["Python", "SQL", "JavaScript", "HTML", "MATLAB"],
    frameworks: ["PyTorch", "TensorFlow / Keras", "Scikit-learn", "Hugging Face Transformers"],
    machineLearning: [
      "Multi-label Text Classification",
      "Small Language Models (SML)",
      "TextCNN",
      "FastText",
      "Human-in-the-Loop Pipelines",
      "QLoRA",
      "Supervised Fine-Tuning (SFT)",
    ],
    dataScience: ["Pandas", "NumPy", "Power BI", "Matplotlib", "Seaborn", "Minitab"],
    other: ["Postman", "Figma", "Git / GitHub", "LaTeX"],
  },
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "Prairie View A&M University",
      period: "Aug. 2024 - Present",
      points: [
        "Analyzed and audited 10,000 police crash narratives, consolidating 72 original contributing-factor codes into an 8-class taxonomy and supporting a three-layer human-in-the-loop framework using the custom LACE tool.",
        "Developed NLP pipelines using FastText embeddings and a TextCNN model, achieving approximately 72% accuracy and showing that direct multi-label classification outperformed hierarchical architectures on this dataset.",
        "Performed annotation-quality analysis that achieved near-perfect post-adjudication agreement (Cohen's kappa = 0.990) and identified uncertainty as a signal for targeted expert review.",
        "Engineered and deployed a prototype crash-analysis system integrating small language models, Figma, and Postman, demonstrating full-pipeline execution from data processing to deployment.",
      ],
    },
    {
      role: "Product Management Executive",
      company: "Barikoi Technologies Limited",
      period: "Mar. 2024 - Jun. 2024",
      points: [
        "Collaborated with product and technical teams to translate product needs and feedback into improvement priorities, supporting iterative refinement of technology products.",
        "Worked across business and engineering stakeholders, strengthening requirements communication, issue tracking, and product-focused problem solving.",
      ],
    },
    {
      role: "Research Assistant",
      company: "Ahsanullah University of Science & Technology",
      period: "Dec. 2021 - Feb. 2022",
      points: [
        "Supported experimental research, data analysis, laboratory operations, and student mentoring for predictive modeling and engineering optimization work.",
        "Applied response surface methodology, artificial neural networks, genetic algorithms, and particle swarm optimization to manufacturing-process prediction and optimization research.",
      ],
    },
  ],
  researchInterests: [
    { title: "Reliable and Trustworthy AI", description: "Auditable, human-centered AI for consequential decisions." },
    { title: "Natural Language Processing", description: "Domain adaptation, multi-label learning, and efficient fine-tuning." },
    { title: "Transportation Safety Analytics", description: "Turning crash narratives into actionable safety evidence." },
    { title: "Healthcare AI", description: "Interpretable vision and structured clinical documentation support." },
  ],
  projects: [
    {
      title: "Crash Narrative Analysis and Analyst Review",
      subtitle: "Transportation NLP · Human-in-the-Loop · Deployment",
      description:
        "An end-to-end research program for classifying contributing factors in police crash narratives, auditing annotation quality, and delivering calibrated model suggestions through an analyst-facing review workflow.",
      tags: ["Domain-adapted NLP", "Multi-label Classification", "FastText", "TextCNN", "Small Language Models"],
      videoUrl: "https://drive.google.com/file/d/1gTtmvJE8exkrUC4wo8LNqSLNB2Nc1VmQ/preview",
      videoExternalUrl: "https://drive.google.com/file/d/1gTtmvJE8exkrUC4wo8LNqSLNB2Nc1VmQ/view",
    },
    {
      title: "Automated Clinical SOAP Note Generation System",
      subtitle: "Healthcare NLP · Small Language Models · QLoRA · SFT",
      description:
        "Developing a healthcare NLP system that uses small language models to generate structured clinical SOAP notes. Applying QLoRA and supervised fine-tuning to adapt the model efficiently for domain-specific medical documentation.",
      tags: ["Healthcare NLP", "QLoRA", "Supervised Fine-Tuning", "Small Language Models"],
    },
    {
      title: "Skin Lesion Classification with Concept Bottleneck Models",
      subtitle: "Computer Vision · Interpretable Medical AI",
      description:
        "Developed a dermoscopic image-classification pipeline using EfficientNet-B4 and Concept Bottleneck Models, demonstrating experience in computer vision, transfer learning, model interpretability, and medical-image analysis.",
      tags: ["Computer Vision", "EfficientNet-B4", "Concept Bottleneck Models", "Transfer Learning"],
    },
  ],
  publications: [
    {
      title: "Domain Adapted NLP for Multi-Label Crash Narrative Classification under Extreme Class Imbalance",
      authors: "Md Sajjad Hossain et al.",
      venue: "The International FLAIRS Conference Proceedings",
      year: "2026",
      url: "https://doi.org/10.32473/flairs.39.1.141831",
    },
    {
      title: "When Ground Truth Disagrees: A Human-in-the-Loop Audit of Annotation Errors in High-Stakes Crash Narratives",
      authors: "Md Sajjad Hossain et al.",
      venue: "The 20th Linguistic Annotation Workshop (LAW XX), ACL",
      year: "2026",
      url: "https://doi.org/10.18653/v1/2026.law-main.18",
    },
    {
      title: "Predictive Modeling and Optimization of Surface Roughness and Cutting Zone Temperature in Turning of Hardened Steel Using RSM, ANN, Genetic Algorithm, and Particle Swarm Optimization",
      authors: "Md Sajjad Hossain et al.",
      venue: "Research and Applications of Thermal Engineering",
      year: "2023",
      url: "https://www.researchgate.net/publication/376166558_Predictive_Modeling_and_Optimization_of_Surface_Roughness_and_Cutting_Zone_Temperature_in_Turning_of_Hardened_Steel_Using_RSM_ANN_Genetic_Algorithm_and_Particle_Swarm_Optimization",
    },
  ],
  underReview: {
    title: "From Crash Narratives to Analyst Review: Identifying Additional Contributing Factors Under Precision and Workload Constraints",
    authors: "Md Sajjad Hossain et al.",
    venue: "Submitted to the Transportation Research Board (TRB) 2027 Annual Meeting - Under Review",
    year: "2027",
    url: "#publications",
  },
};
