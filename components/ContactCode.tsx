import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'portfolio',
    href: 'https://portfolio-vsc-nine.vercel.app/',
  },
  {
    social: 'email',
    link: 'mohan08ks@gmail.com',
    href: 'mohan08ks@gmail.com',
  },
  {
    social: 'github',
    link: 'mohan08sin',
    href: 'https://github.com/mohan08sin',
  },
  {
    social: 'linkedin',
    link: 'krishan-mohan-singh',
    href: 'https://www.linkedin.com/in/krishan-mohan-singh',
  },
  {
    social: 'telegram',
    link: 'mohan08sin',
    href: 'https://t.me/mohan08sin',
  },
  {
    social: 'phone',
    link: '7340868589',
    href: 'tel:7340868589',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
