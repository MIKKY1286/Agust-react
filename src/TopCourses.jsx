import styles from './TopCourses.module.css';

import softwareImg from './assets/software_engineer.jpg';
import dataImg from './assets/data_science.jpg';
import genAiImg from './assets/generative_ai.jpg';
import itImg from './assets/it_fundamentals.jpg';

export const TopCourses = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        
        {/* Left Column */}
        <div className={styles.column}>
          <div className={styles.headerSection}>
            <h2 className={styles.title}>Our Top Courses</h2>
            <p className={styles.subtitle}>Take a look at some of our popular courses</p>
            <a href="#" className={styles.headerLink}>
              View all Courses <span className={styles.chevron}>&gt;</span>
            </a>
          </div>

          <div className={`${styles.card} ${styles.cardBlue}`}>
            <div className={styles.cardImageWrapper}>
              <img src={softwareImg} alt="Software Engineering" />
            </div>
            <h3 className={styles.cardTitle}>
              Software Engineering <span className={styles.aiText}>+ AI</span>
            </h3>
            <p>
              Software Engineering is one of the most in-demand jobs across the globe today.
            </p>
            <p>
              Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your ....
            </p>
            <a href="#" className={styles.cardLink}>
              Learn More <span className={styles.chevron}>&gt;</span>
            </a>
          </div>

          <div className={`${styles.card} ${styles.cardBeige}`}>
            <div className={styles.cardImageWrapper}>
              <img src={genAiImg} alt="Generative AI" />
            </div>
            <h3 className={styles.cardTitle}>
              Generative <span className={styles.aiText}>AI</span>
            </h3>
            <p>
              Harness the power of <strong>Artificial Intelligence</strong> to create, innovate, and work smarter. Learn how to boost productivity, build applications with <strong>Vibe Coding</strong>, design stunning visuals and user interfaces, analyze data, and detect cyber threats using today's leading AI tools.
            </p>
            <p>
              Gain practical, job-ready skills that prepare you for careers in technology, business, design, marketing, and beyond empowering you to thrive in the AI-driven future.
            </p>
            <a href="#" className={styles.cardLink}>
              Learn More <span className={styles.chevron}>&gt;</span>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.column}>
          <div className={`${styles.card} ${styles.cardYellow}`}>
            <div className={styles.cardImageWrapper}>
              <img src={dataImg} alt="Data Science & Analysis" />
            </div>
            <h3 className={styles.cardTitle}>
              Data Science & Analysis <span className={styles.aiText}>+ AI</span>
            </h3>
            <p>
              The eruption of data is transforming individuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.
            </p>
            <p>
              Data specialists have a tremendous impact on...
            </p>
            <a href="#" className={styles.cardLink}>
              Learn More <span className={styles.chevron}>&gt;</span>
            </a>
          </div>

          <div className={`${styles.card} ${styles.cardPurple}`}>
            <div className={styles.cardImageWrapper}>
              <img src={itImg} alt="Digital Workplace Proficiency" />
            </div>
            <h3 className={styles.cardTitle}>
              Digital Workplace Proficiency <span className={styles.aiText}>+ AI</span>
            </h3>
            <p>
              This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank's ATM or your employer's computerized cash register.
            </p>
            <p>
              In this course, you will learn about the technologies that drive our computerized society...
            </p>
            <a href="#" className={styles.cardLink}>
              Learn More <span className={styles.chevron}>&gt;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
