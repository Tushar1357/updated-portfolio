import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.name}>
            Hi, I&apos;m <span className={styles.highlight}>Tushar Tuteja</span>
          </h1>
          <h2 className={styles.title}>Software Engineer</h2>
          <p className={styles.description}>
            Experienced in backend development, AI integrations, and blockchain applications.
            Building scalable APIs, decentralized systems, and real-time platforms.
          </p>
          <div className={styles.buttonGroup}>
            <a href="#contact" className={styles.primaryButton}>
              Get In Touch
            </a>
            <a
              href="/Tushar's_Resume.pdf"
              download
              className={styles.secondaryButton}
            >
              Download Resume
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://github.com/Tushar1357" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/tushar-tuteja" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:contact@tushartuteja.xyz" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://x.com/0xtushartuteja" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.dot} style={{ background: '#ff5f56' }}></span>
              <span className={styles.dot} style={{ background: '#ffbd2e' }}></span>
              <span className={styles.dot} style={{ background: '#27c93f' }}></span>
            </div>
            <pre className={styles.code}>
              <code>{`const developer = {
  name: "Tushar Tuteja",
  role: "Software Engineer",
  skills: [
    "Backend Development",
    "AI Integration",
    "Blockchain",
    "Real-time Systems"
  ],
  code: ["JavaScript", "Python", "Solidity", "C++"],
  challenge: "Building the future"
};`}</code>
            </pre>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
      </div>
    </section>
  );
}
