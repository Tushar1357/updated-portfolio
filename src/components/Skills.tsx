'use client';

import {
  FaAws,
  FaCode,
  FaCube,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVideo
} from 'react-icons/fa';
import {
  SiBootstrap,
  SiChakraui,
  SiCplusplus,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiSocketdotio,
  SiSolidity,
  SiSupabase,
  SiWeb3Dotjs
} from 'react-icons/si';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    skills: [
      { name: "C++", icon: <SiCplusplus />, level: 90 },
      { name: "Python", icon: <FaPython />, level: 88 },
      { name: "JavaScript", icon: <SiJavascript />, level: 92 },
      { name: "Solidity", icon: <SiSolidity />, level: 85 }
    ]
  },
  {
    title: "Web Development",
    icon: <FaReact />,
    skills: [
      { name: "React", icon: <FaReact />, level: 92 },
      { name: "Node.js", icon: <FaNodeJs />, level: 95 },
      { name: "Express.js", icon: <SiExpress />, level: 93 },
      { name: "Bootstrap", icon: <SiBootstrap />, level: 85 },
      { name: "Chakra UI", icon: <SiChakraui />, level: 80 }
    ]
  },
  {
    title: "Blockchain Development",
    icon: <SiSolidity />,
    skills: [
      { name: "Solidity", icon: <SiSolidity />, level: 85 },
      { name: "Web3.js", icon: <SiWeb3Dotjs />, level: 88 },
      { name: "Hardhat", icon: <FaCube />, level: 82 },
      { name: "IPFS", icon: <FaDatabase />, level: 78 }
    ]
  },
  {
    title: "Databases & Cloud Storage",
    icon: <FaDatabase />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 88 },
      { name: "MySQL", icon: <SiMysql />, level: 85 },
      { name: "Supabase", icon: <SiSupabase />, level: 80 },
      { name: "Qdrant", icon: <FaDatabase />, level: 82 }
    ]
  },
  {
    title: "DevOps & Cloud Platforms",
    icon: <FaAws />,
    skills: [
      { name: "Docker", icon: <FaDocker />, level: 87 },
      { name: "AWS", icon: <FaAws />, level: 85 },
      { name: "Linux", icon: <FaLinux />, level: 82 },
      { name: "CI/CD", icon: <FaGitAlt />, level: 80 }
    ]
  },
  {
    title: "Developer Tools & Frameworks",
    icon: <FaGitAlt />,
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "Socket.IO", icon: <SiSocketdotio />, level: 92 },
      { name: "WebRTC", icon: <FaVideo />, level: 85 }
    ]
  },
];

const achievements = [
  {
    title: "200+ LeetCode Problems",
    description: "Showcasing strong problem-solving skills"
  },
  {
    title: "Global Rank 880",
    description: "CodeChef Starters134 among 22,824 participants"
  },
  {
    title: "Vihaan 6.0 Hackathon",
    description: "Participated in DTU's premier hackathon"
  }
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <p className={styles.sectionSubtitle}>Technologies and tools I work with</p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>{category.icon}</div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill, i) => (
                  <div key={i} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillIcon}>{skill.icon}</span>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.achievementsSection}>
          <h3 className={styles.achievementsTitle}>Achievements</h3>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.achievementIcon}>🏆</div>
                <h4 className={styles.achievementTitle}>{achievement.title}</h4>
                <p className={styles.achievementDescription}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
