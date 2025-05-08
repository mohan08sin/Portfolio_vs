// // import Tab from '@/components/Tab';

// // import styles from '@/styles/Tabsbar.module.css';

// // const Tabsbar = () => {
// //   return (
// //     <div className={styles.tabs}>
// //       <Tab icon="/logos/react_icon.svg" filename="home.tsx" path="/" />
// //       <Tab icon="/logos/html_icon.svg" filename="about.html" path="/about" />
// //       <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
// //       <Tab icon="/logos/js_icon.svg" filename="projects.js" path="/projects" />
// //       {/* <Tab
// //         icon="/logos/json_icon.svg"
// //         filename="articles.json"
// //         path="/articles"
// //       /> */}
// //       <Tab
// //         icon="/logos/markdown_icon.svg"
// //         filename="github.md"
// //         path="/github"
// //       />
// //     </div>
// //   );
// // };

// // export default Tabsbar;

// import { useState } from 'react';
// import Tab from '@/components/Tab';
// import styles from '@/styles/Tabsbar.module.css';

// const tabList = [
//   { icon: '/logos/react_icon.svg', filename: 'home.tsx', path: '/' },
//   { icon: '/logos/html_icon.svg', filename: 'about.html', path: '/about' },
//   { icon: '/logos/css_icon.svg', filename: 'contact.css', path: '/contact' },
//   { icon: '/logos/js_icon.svg', filename: 'projects.js', path: '/projects' },
//   { icon: '/logos/markdown_icon.svg', filename: 'github.md', path: '/github' }
// ];

// const Tabsbar = () => {
//   const [openTabs, setOpenTabs] = useState(tabList);

//   const closeTab = (filename: string) => {
//     setOpenTabs((prev) => prev.filter(tab => tab.filename !== filename));
//   };

//   return (
//     <div className={styles.tabs}>
//       {openTabs.map((tab) => (
//         <div key={tab.filename} className={styles.tabWithClose}>
//           <Tab icon={tab.icon} filename={tab.filename} path={tab.path} />
//           <button onClick={() => closeTab(tab.filename)} className={styles.closeBtn}>×</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Tabsbar;


import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '@/styles/Tabsbar.module.css';

interface TabItem {
  name: string;
  path: string;
  icon: string;
}

interface TabsbarProps {
  openTabs: TabItem[];
  onCloseTab: (path: string) => void;
}

const Tabsbar = ({ openTabs, onCloseTab }: TabsbarProps) => {
  const router = useRouter();

  const handleTabClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.tabs}>
      {openTabs.map((tab) => (
        <div
          key={tab.path}
          className={`${styles.tab} ${router.pathname === tab.path ? styles.active : ''}`}
        >
          <div onClick={() => handleTabClick(tab.path)} className={styles.tabContent}>
            <Image src={tab.icon} alt={tab.name} height={16} width={16} />
            <span>{tab.name}</span>
          </div>
          <span
            className={styles.close}
            onClick={() => onCloseTab(tab.path)}
          >
            ✕
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tabsbar;

