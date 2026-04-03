import projectAnalytics from './assets/hero.png';
import projectVision from './assets/IMG_0576-removebg-preview.png';
import projectReact from './assets/react.svg';
import projectVite from './assets/vite.svg';

export const personalDetails = {
  name: "Abdul Kalam",
  role: "AI/ML Engineer",
  tagline: "Building scalable AI solutions and intelligent data pipelines.",
  email: "calamabdul17@gmail.com",
  phone: "+92 310 8367902",
  location: "Islamabad, PIS",
  github: "iamkalam",
  summary: "Computer Science student building data-driven products across ML, analytics, and full-stack apps. I design pipelines, models, and dashboards that turn messy data into clear business decisions, using Python, SQL, and modern web tools."
};

export const education = {
  degree: "Computer Science",
  institution: "National University of Computer and Emerging Sciences (NUCES-FAST)",
  graduation: "05/2027",
  gpa: "3.0"
};

export const skills = [
  { category: "Programming Languages", items: ["Python", "C/C++"] },
  { category: "AI / ML", items: ["scikit-learn", "TensorFlow", "OpenCV", "Deep Learning", "Predictive Analytics"] },
  { category: "Web Development", items: ["React.js", "TypeScript", "Express.js", "HTML", "CSS", "JavaScript", "jQuery"] },
  { category: "Database", items: ["MongoDB", "SQL", "SQLite"] },
  { category: "BI & Analytics", items: ["Tableau"] },
  { category: "Operating Systems & Tools", items: ["Linux (Ubuntu)", "Shell Scripting", "Git", "GitHub", "VS Code", "Postman"] }
];

export const experience = [
  {
    title: "AI/ML & Data Engineering Intern/Engineer",
    company: "TechScape",
    period: "06/2021 – 08/2024",
    responsibilities: [
      "Built and deployed machine learning models for predictive analytics and classification tasks, leveraging Python, scikit-learn, TensorFlow, and OpenCV.",
      "Designed and trained models on real-world datasets, performing data preprocessing, feature engineering, and hyperparameter tuning.",
      "Worked on computer vision tasks such as image recognition and enhancement using deep learning and OpenCV.",
      "Created end-to-end AI pipelines: data collection, cleaning, model training, evaluation, and deployment.",
      "Developed ETL (Extract, Transform, Load) pipelines for ingesting, cleaning, and transforming large-scale structured and unstructured datasets.",
      "Optimized SQL queries and implemented efficient data storage solutions to support AI workflows and reporting."
    ]
  },
  {
    title: "Developer II",
    company: "Graphail islamabad",
    period: "01/2022 – 08/2023",
    responsibilities: [
      "Coded websites using HTML, CSS, JavaScript, and jQuery, including React.js.",
      "Oversaw technical issues and resolved troubleshooting requests.",
      "Engaged with clients to plan and optimize site issues and queries."
    ]
  }
];

export const projects = [
  {
    title: "Data Science Analytics Dashboard",
    tech: "Python, Pandas, SQL, Plotly, Tableau",
    image: projectAnalytics,
    featured: true,
    impact: "Reduced reporting time from hours to minutes with automated refresh.",
    github: "",
    demo: "",
    points: [
      "Built an end-to-end analytics demo with cleaned datasets and KPI modeling.",
      "Designed interactive dashboards with filters, trends, and cohort views.",
      "Automated ETL scripts to refresh data and maintain reporting accuracy."
    ]
  },
  {
    title: "Peer Advice Board",
    tech: "React, TypeScript, Express.js, SQLite",
    image: projectReact,
    impact: "Improved post moderation turnaround by 40% with admin tools.",
    github: "",
    demo: "",
    points: [
      "Built a responsive frontend using React and TypeScript.",
      "Developed RESTful APIs with Express.js and managed data using SQLite.",
      "Enabled anonymous posting and moderation tools for a safe environment."
    ]
  },
  {
    title: "Face Detection Application",
    tech: "Python, OpenCV, PyQT (Upwork Project)",
    image: projectVision,
    impact: "Cut detection latency by 25% with optimized frame processing.",
    github: "",
    demo: "",
    points: [
      "Developed a real-time face detection desktop app using Python, OpenCV, and PyQT.",
      "Implemented Haar cascade and LBPH algorithms for accurate detection and recognition.",
      "Designed a user-friendly GUI with adjustable detection thresholds and logging options.",
      "Optimized detection speed and minimized false positives with efficient search algorithms.",
      "Enabled live webcam/video stream processing with data saving and retrieval features."
    ]
  },
  {
    title: "Battleships Game with AI",
    tech: "Python",
    image: projectVite,
    impact: "Achieved faster AI turns with cached state evaluation.",
    github: "",
    demo: "",
    points: [
      "Developed a Python-based Battleships game featuring both human and AI opponents.",
      "Implemented AI player using Breadth-First Search (BFS) to efficiently explore hit patterns and optimize ship targeting.",
      "Integrated caching techniques to store and reuse computed states, reducing redundant calculations and improving AI response time.",
      "Designed core game mechanics: ship placement, hit/miss detection, turn-based gameplay, and win condition checks.",
      "Applied object-oriented design principles to maintain clean, extensible, and modular codebase."
    ]
  },
  {
    title: "Resume Rocket",
    tech: "React, TypeScript, MongoDB",
    impact: "Streamlined bulk applications with tracked progress and reminders.",
    github: "",
    demo: "",
    points: [
      "Designed and implemented a modern, user-friendly UI in React.",
      "Integrated MongoDB for dynamic storage of job listings and user data.",
      "Built scalable features for bulk job applications and user tracking."
    ]
  },
  {
    title: "Process Migrator",
    tech: "C/C++, Operating Systems",
    impact: "Minimized downtime during process migration with state snapshotting.",
    github: "",
    demo: "",
    points: [
      "Designed and implemented a Process Migrator that transfers a running process from one system to another in a distributed environment.",
      "Achieved seamless migration by saving process state, memory, and execution context, and restoring it on the target system with minimal downtime.",
      "Handled synchronization and consistency issues to ensure correctness and avoid data loss during migration."
    ]
  }
];

export const certificates = [
  { title: "Advance Python Data Camp", date: "June 202X" },
  { title: "Modernizing Data Lakes and Data Warehouses with Google Cloud", date: "Ongoing" },
  { title: "Data Engineering in python and Sql", date: "May 2025" }
];
