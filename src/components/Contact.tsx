'use client';

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionSubtitle}>Let&apos;s build something amazing together</p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <a href="mailto:contact@tushartuteja.xyz">contact@tushartuteja.xyz</a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <FaXTwitter />
              </div>
              <h3>X (Twitter)</h3>
              <a href="https://x.com/0xtushartuteja" target="_blank" rel="noopener noreferrer">
                @0xtushartuteja
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <FaLinkedin />
              </div>
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/tushar-tuteja" target="_blank" rel="noopener noreferrer">
                /tushar-tuteja
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <FaGithub />
              </div>
              <h3>GitHub</h3>
              <a href="https://github.com/Tushar1357" target="_blank" rel="noopener noreferrer">
                /Tushar1357
              </a>
            </div>
          </div>

          <div className={styles.callToAction}>
            <div className={styles.ctaCard}>
              <h3>Ready to collaborate?</h3>
              <p>
                I&apos;m currently available for freelance work and full-time opportunities.
                Whether you have a project in mind or just want to chat about technology,
                I&apos;d love to hear from you!
              </p>
              <div className={styles.ctaButtons}>
                <a href="mailto:contact@tushartuteja.xyz" className={styles.primaryButton}>
                  Send Email
                </a>
                <a
                  href="/Tushar's_Resume.pdf"
                  download
                  className={styles.secondaryButton}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 Tushar Tuteja.</p>
          <div className={styles.footerLinks}>
            <a href="https://github.com/Tushar1357" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/tushar-tuteja" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
