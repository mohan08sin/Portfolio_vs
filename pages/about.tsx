import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Mohan</h1>
        <div className={styles.subtitle}>Java Full Stack Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a full stack developer from Bangalore, India. I primarily
              work with Java, JavaScript and the React ecosystem.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with React, but
              you&apos;ll also find me working with Java, MySql and Spring Boot
              while building the backend for my personal projects.
            </p>
          </section>

          {/* <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Tessact</span> as
              Software Engineer 2, working with a lean team of 4 frontend
              engineers to build a next-gen video creation suite for the people
              of video.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve been leading the development efforts for bringing
              collaborative video reviewing and editing to the platform. I also
              maintain our in-house component library, icon library and website.
            </p>
          </section> */}

          

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I like to read a good
              dystopian novel, listen to  music or just laze around.
            </p>
          </section>
          <br />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <p className={styles.paragraph}>
              I have expertise in a variety of technologies that enable me to{' '}
              <span className={styles.highlight}>build fast</span>,{' '}
              <span className={styles.highlight}>responsive</span>,{' '}and{' '}
              <span className={styles.highlight}>scalable</span>{' '}
              web applications.
            </p>
            <br />
            <br />
            <h3 className={styles.sectionSubtitle}>
              Frontend 
            </h3>
            <br />
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}><span className={styles.highlight}>Languages:</span> HTML5 , CSS3, JavaScript</li>
              <li className={styles.skillItem}><span className={styles.highlight}>Frameworks & Libraries:</span> React.js, Tailwind CSS, Bootstrap</li>
              <li className={styles.skillItem}><span className={styles.highlight}>Tools: </span>VS Code</li>
            </ul>
            <br/>
            <br />
            <h3 className={styles.sectionSubtitle}>
              Backend
            </h3>
            <br />
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}><span className={styles.highlight}>Languages:</span> Java, Python</li>
              <li className={styles.skillItem}><span className={styles.highlight}>Frameworks & Libraries:</span> Spring Boot</li>
              <li className={styles.skillItem}><span className={styles.highlight}>Tools: </span>Eclipse, IntelliJ, Postman, Git, Docker</li>
              <li className={styles.skillItem}><span className={styles.highlight}>Databases:</span> MySQL</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
