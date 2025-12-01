'use client';

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

const projects = [
  {
    title: "MeetNow",
    description: "A real-time video conferencing app with dynamic per-user audio/video track production, supporting 100+ users per meeting.",
    tech: ["MediaSoup", "WebRTC", "Node.js", "React", "MySQL", "Socket.IO"],
    github: "https://github.com/Tushar1357/WebRTC-Streaming-Platform-Backend",
    highlights: [
      "Integrated a custom SFU using mediasoup, supporting 100+ users per meeting",
      "Achieved 200ms average join latency using a custom Socket.IO signaling system",
      "Enabled individual producer-consumer mapping and permission-based media flow, reducing latency and prompts by 40%"
    ]
  },
  {
    title: "CodeSphere - Cloud IDE",
    description: "A web-based IDE supporting Python, Ruby, Node.js with Monaco Editor for smart editing and Docker for isolated environments.",
    tech: ["Docker", "Node.js", "Socket.IO", "React", "Monaco Editor"],
    github: "https://github.com/Tushar1357/CodeSphere-Cloud-IDE",
    highlights: [
      "Created secure and scalable containerized environments with Docker",
      "Improved startup speed by 20%",
      "Enabled real-time file saving with Socket.IO, minimizing workflow disruptions"
    ]
  },
  {
    title: "Blockchain Telegram Subscription Bot",
    description: "Automated USDT/USDC subscription payments on Binance Smart Chain and Base network with Telegram integration.",
    tech: ["Docker", "Node.js", "Web3.js", "AWS", "Smart Contracts"],
    liveLink: "https://t.me/mrspaymentbot",
    highlights: [
      "Successfully handled $6,000+ in transactions with 500+ registered users",
      "Implemented per-user wallet generation, block confirmations",
      "Auto-access to private Telegram groups upon successful payment"
    ]
  }
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>Building innovative solutions with modern technologies</p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <div className={styles.iconGroup}>
                    <div className={styles.folderIcon}>📁</div>
                    <div className={styles.links}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>

                  <ul className={styles.highlights}>
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardBottom}>
                  <div className={styles.techStack}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
