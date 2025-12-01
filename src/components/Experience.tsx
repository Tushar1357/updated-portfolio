import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Experience.module.css';

const experiences = [
  {
    company: "Some1 AI",
    role: "Backend Developer",
    location: "United Kingdom (Remote)",
    period: "Aug. 2025 – Oct. 2025",
    highlights: [
      "Developed and maintained FastAPI-based RESTful APIs for Anthropic Computer Use, an AI-driven system enabling large language models to interact with computers programmatically",
      "Implemented a modified hybrid search (keyword + semantic) on a 2.3 million-item dataset, optimizing RAG performance and reducing search time by 60%",
      "Built automated scripts for data parsing, creating embeddings, and uploading to a vector database, streamlining large-scale data ingestion",
      "Optimized backend APIs for Some1.ai's platform, improving response times by 40% through query optimization and caching"
    ]
  },
  {
    company: "BilvaLeaf Private Limited",
    role: "Backend Developer Intern",
    location: "Remote",
    period: "Feb. 2025 – July 2025",
    projects: [
      {
        name: "Little Steps",
        points: [
          "Deployed 5+ smart contracts (booking, escrow, Chainlink) on Polygon, reducing manual effort by 80%",
          "Integrated IPFS and uPort/ENS for decentralized storage of health and learning records"
        ]
      },
      {
        name: "Template Firm",
        points: [
          "Developed 8+ secure REST APIs for user and category management",
          "Integrated backend with dynamic React admin panel with modals, validation, and alerts"
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <p className={styles.sectionSubtitle}>Professional journey and contributions</p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
                  <div className={styles.badge}>
                    <FaBriefcase />
                  </div>
                </div>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <FaCalendar /> {exp.period}
                  </span>
                  <span className={styles.metaItem}>
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>

                {exp.highlights && (
                  <ul className={styles.highlights}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}

                {exp.projects && (
                  <div className={styles.projects}>
                    {exp.projects.map((project, i) => (
                      <div key={i} className={styles.project}>
                        <h5 className={styles.projectName}>Project: {project.name}</h5>
                        <ul className={styles.highlights}>
                          {project.points.map((point, j) => (
                            <li key={j}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
