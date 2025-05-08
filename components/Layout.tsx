// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// import Titlebar from '@/components/Titlebar';
// import Sidebar from '@/components/Sidebar';
// import Explorer from '@/components/Explorer';
// import Bottombar from '@/components/Bottombar';
// import Tabsbar from '@/components/Tabsbar';

// import styles from '@/styles/Layout.module.css';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout = ({ children }: LayoutProps) => {
//   // set scroll to top of main content on url pathname change
//   const router = useRouter();
//   useEffect(() => {
//     const main = document.getElementById('main-editor');
//     if (main) {
//       main.scrollTop = 0;
//     }
//   }, [router.pathname]);

//   return (
//     <>
//       <Titlebar />
//       <div className={styles.main}>
//         <Sidebar />
//         <Explorer />
//         <div style={{ width: '100%' }}>
//           <Tabsbar />
//           <main id="main-editor" className={styles.content}>
//             {children}
//           </main>
//         </div>
//       </div>
//       <Bottombar />
//     </>
//   );
// };

// export default Layout;

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Titlebar from '@/components/Titlebar';
import Sidebar from '@/components/Sidebar';
import Explorer from '@/components/Explorer';
import Bottombar from '@/components/Bottombar';
import Tabsbar from '@/components/Tabsbar';

import styles from '@/styles/Layout.module.css';

const allTabs = [
  { name: 'home.tsx', path: '/', icon: '/logos/react_icon.svg' },
  { name: 'about.html', path: '/about', icon: '/logos/html_icon.svg' },
  { name: 'contact.css', path: '/contact', icon: '/logos/css_icon.svg' },
  { name: 'projects.js', path: '/projects', icon: '/logos/js_icon.svg' },
  { name: 'github.md', path: '/github', icon: '/logos/markdown_icon.svg' },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [openTabs, setOpenTabs] = useState([allTabs[0]]); // Default to home

  const router = useRouter();

  const handleOpenTab = (tab: typeof allTabs[0]) => {
    setOpenTabs((prev) => {
      const isAlreadyOpen = prev.some((t) => t.path === tab.path);
      if (!isAlreadyOpen) return [...prev, tab];
      return prev;
    });
    router.push(tab.path); // navigate to the tab
  };

  const handleCloseTab = (tabPath: string) => {
    setOpenTabs((prev) => prev.filter((t) => t.path !== tabPath));
  };

  useEffect(() => {
    const main = document.getElementById('main-editor');
    if (main) main.scrollTop = 0;
  }, [router.pathname]);

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer onOpenTab={handleOpenTab} />
        <div style={{ width: '100%' }}>
          <Tabsbar openTabs={openTabs} onCloseTab={handleCloseTab} />
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;

