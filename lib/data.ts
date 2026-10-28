export const PROFILE = {
    name: "Nitin Dave",
    role: "AI Engineer",
    location: "India — Remote / Worldwide",
    email: "hello@nitindave.ai",
    tagline: "I design and ship intelligent systems — from research to production.",
    intro:
        "AI Engineer focused on large language models, retrieval systems, and the infrastructure that turns research into reliable products. I work at the seam where ML theory meets shipping software.",
    socials: [
        { label: "GitHub", href: "https://github.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "X / Twitter", href: "https://x.com" },
        { label: "Read.cv", href: "https://read.cv" },
    ],
};

export const MARQUEE_WORDS = [
    "Large Language Models",
    "Retrieval Augmented Generation",
    "Fine-Tuning",
    "Vector Databases",
    "MLOps",
    "PyTorch",
    "Inference Optimization",
    "Agentic Systems",
    "Evals",
    "Python",
    "Transformers",
];

export const EXPERTISE = [
    {
        n: "01",
        title: "LLM Systems",
        desc: "Designing retrieval pipelines, agentic workflows, and evaluation harnesses for production-grade language model applications.",
        tags: ["LangChain", "LlamaIndex", "OpenAI", "vLLM"],
    },
    {
        n: "02",
        title: "Model Training & Fine-Tuning",
        desc: "Supervised, RLHF, and parameter-efficient fine-tuning to adapt foundation models to specialized domains.",
        tags: ["PyTorch", "Hugging Face", "LoRA", "PEFT"],
    },
    {
        n: "03",
        title: "MLOps & Infrastructure",
        desc: "Pipelines, orchestration, and serving infrastructure that keep models reliable from training to deployment.",
        tags: ["Kubernetes", "Docker", "Airflow", "Ray"],
    },
    {
        n: "04",
        title: "Research & Evals",
        desc: "Translating papers into shipped features, with rigorous evaluation frameworks and principled experimentation.",
        tags: ["Evals", "Statistics", "AB Testing", "Latency"],
    },
];

export const WORK = [
    {
        n: "01",
        title: "Atlas — Enterprise RAG Platform",
        category: "AI Infrastructure",
        year: "2025",
        desc: "A retrieval-augmented assistant handling millions of documents with sub-second latency. Built hybrid search, re-ranking, and a continuous-eval loop that cut hallucinations by 64%.",
        metrics: ["64% fewer hallucinations", "280ms p95 latency", "12k queries/day"],
    },
    {
        n: "02",
        title: "Synapse — Code Intelligence Agent",
        category: "Agentic Systems",
        year: "2024",
        desc: "A multi-agent system that understands, refactors, and documents large codebases. Orchestrates tool-using agents with a shared scratchpad and self-critique loops.",
        metrics: ["38% faster refactors", "Multi-agent orchestration", "Tool-use routing"],
    },
    {
        n: "03",
        title: "Pulse — Demand Forecasting",
        category: "Machine Learning",
        year: "2024",
        desc: "Probabilistic forecasting models for supply chain planning. Combined gradient boosting with hierarchical reconciliation to cut inventory waste.",
        metrics: ["22% less waste", "Hierarchical reconciliation", "90M SKUs"],
    },
];

export const EXPERIENCE = [
    {
        year: "2024 — Now",
        role: "AI Engineer",
        company: "Independent / Contract",
        desc: "Building LLM systems and ML infrastructure for startups. Focused on retrieval, agentic workflows, and inference optimization.",
    },
    {
        year: "2022 — 2024",
        role: "Machine Learning Engineer",
        company: "Tech Studio",
        desc: "Shipped forecasting and NLP systems into production. Owned model lifecycle from experimentation to serving and monitoring.",
    },
    {
        year: "2021 — 2022",
        role: "Deep Learning — DeepLearning.AI",
        company: "Coursework",
        desc: "Completed structured deep learning specializations covering neural networks, sequence models, and building production ML systems.",
    },
];

export const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
];
