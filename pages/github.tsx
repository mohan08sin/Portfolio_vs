// import Image from 'next/image';
// import GitHubCalendar from 'react-github-calendar';
// import { VscRepo, VscPerson } from 'react-icons/vsc';

// import RepoCard from '@/components/RepoCard';
// import { Repo, User } from '@/types';

// import styles from '@/styles/GithubPage.module.css';

// interface GithubPageProps {
//   repos: Repo[];
//   user: User;
// }

// const GithubPage = ({ repos, user }: GithubPageProps) => {
//   return (
//     <div className={styles.layout}>
//       <div className={styles.pageHeading}>
//         <h1 className={styles.pageTitle}>GitHub</h1>
//         <p className={styles.pageSubtitle}>
//           Browse through my GitHub repositories and see what I&apos;ve been
//           working on. These are some of my public repositories showcasing
//           various projects and skills.
//         </p>
//       </div>

//       <div className={styles.githubPage}>
//         <div className={styles.profileSection}>
//           <div className={styles.profileInfo}>
//             <Image
//               src={user.avatar_url}
//               className={styles.avatar}
//               alt={user.login}
//               width={100}
//               height={100}
//               priority
//             />
//             <div className={styles.userInfo}>
//               <h2 className={styles.username}>{user.login}</h2>
//               <div className={styles.stats}>
//                 <div className={styles.statItem}>
//                   <VscRepo className={styles.statIcon} />
//                   <span>{user.public_repos} repositories</span>
//                 </div>
//                 <div className={styles.statItem}>
//                   <VscPerson className={styles.statIcon} />
//                   <span>{user.followers} followers</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={styles.sectionHeader}>
//           <h3 className={styles.sectionTitle}>Popular Repositories</h3>
//         </div>
//         <div className={styles.reposContainer}>
//           {repos.map((repo) => (
//             <RepoCard key={repo.id} repo={repo} />
//           ))}
//         </div>
//         <div className={styles.contributions}>
//           <GitHubCalendar
//             username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!}
//             hideColorLegend
//             hideMonthLabels
//             colorScheme="dark"
//             theme={{
//               dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
//               light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
//             }}
//             style={{
//               width: '100%',
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const userRes = await fetch(
//     `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
//   );
//   const user = await userRes.json();

//   const repoRes = await fetch(
//     `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?sort=pushed&per_page=6`
//   );
//   const repos = await repoRes.json();

//   return {
//     props: { title: 'GitHub', repos, user },
//     revalidate: 600,
//   };
// }

// export default GithubPage;


// pages/github.tsx
// import Image from 'next/image';
// import GitHubCalendar from 'react-github-calendar';
// import { VscRepo, VscPerson } from 'react-icons/vsc';

// import RepoCard from '@/components/RepoCard';
// import styles from '@/styles/GithubPage.module.css';
// import { Repo, User } from '@/types';

// interface GithubPageProps {
//   user: User;
//   repos: Repo[];
// }

// const GithubPage = ({ user, repos }: GithubPageProps) => {
//   if (!user || !repos) {
//     return <p>Unable to load GitHub data. Please try again later.</p>;
//   }

//   return (
//     <div className={styles.layout}>
//       <div className={styles.pageHeading}>
//         <h1 className={styles.pageTitle}>GitHub</h1>
//         <p className={styles.pageSubtitle}>
//           Browse through my GitHub repositories and see what I&apos;ve been working on.
//         </p>
//       </div>

//       <div className={styles.githubPage}>
//         <div className={styles.profileSection}>
//           <div className={styles.profileInfo}>
//             <Image
//               src={user.avatar_url}
//               className={styles.avatar}
//               alt={user.login}
//               width={100}
//               height={100}
//               priority
//             />
//             <div className={styles.userInfo}>
//               <h2 className={styles.username}>{user.login}</h2>
//               <div className={styles.stats}>
//                 <div className={styles.statItem}>
//                   <VscRepo className={styles.statIcon} />
//                   <span>{user.public_repos} repositories</span>
//                 </div>
//                 <div className={styles.statItem}>
//                   <VscPerson className={styles.statIcon} />
//                   <span>{user.followers} followers</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={styles.sectionHeader}>
//           <h3 className={styles.sectionTitle}>Popular Repositories</h3>
//         </div>
//         <div className={styles.reposContainer}>
//           {repos.map((repo) => (
//             <RepoCard key={repo.id} repo={repo} />
//           ))}
//         </div>

//         <div className={styles.contributions}>
//           <GitHubCalendar
//             username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!}
//             hideColorLegend
//             hideMonthLabels
//             colorScheme="dark"
//             theme={{
//               dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
//               light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
//             }}
//             style={{ width: '100%' }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/github`);
//   const { user, repos } = await res.json();

//   return {
//     props: { user, repos },
//     revalidate: 600,
//   };
// }

// export default GithubPage;


// new code 
// pages/github.tsx

// import styles from '@/styles/GithubPage.module.css';
// import { Repo, User } from '@/types';

// interface GithubPageProps {
//   repos: Repo[];
//   user: User;
// }

// export async function getStaticProps() {
//   const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
//   const token = process.env.GITHUB_TOKEN;

//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };

//   try {
//     const [userRes, repoRes] = await Promise.all([
//       fetch(`https://api.github.com/users/${username}`, { headers }),
//       fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`, { headers }),
//     ]);

//     if (!userRes.ok || !repoRes.ok) {
//       throw new Error('GitHub API error');
//     }

//     const user = await userRes.json();
//     const repos = await repoRes.json();

//     return {
//       props: {
//         user,
//         repos,
//         title: 'GitHub',
//       },
//       revalidate: 600, // Rebuild every 10 minutes
//     };
//   } catch (error) {
//     console.error('GitHub fetch failed:', error);
//     return {
//       notFound: true,
//     };
//   }
// }

// const GithubPage = ({ repos, user }: GithubPageProps) => {
//   return (
//     <div className={styles.layout}>
//       <div className={styles.pageHeading}>
//         <h1 className={styles.pageTitle}>GitHub</h1>
//         <p className={styles.pageSubtitle}>
//           Browse through my GitHub repositories and see what I’ve been working on.
//         </p>
//       </div>

//       <div style={{ textAlign: 'center' }}>
//         <img src={user.avatar_url} alt="Avatar" width={100} style={{ borderRadius: '50%' }} />
//         <h2>{user.login}</h2>
//         <p>👥 {user.followers} followers</p>
//         <p>📦 {user.public_repos} repositories</p>
//       </div>

//       <h3>Popular Repositories</h3>
//       <ul>
//         {repos.map((repo) => (
//           <li key={repo.id}>
//             <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
//               {repo.name}
//             </a>: {repo.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GithubPage;

//  new code 1
// pages/github.tsx
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { VscRepo, VscPerson } from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';
import styles from '@/styles/GithubPage.module.css';
import { Repo, User } from '@/types';

interface GithubPageProps {
  user: User;
  repos: Repo[];
}

const GithubPage = ({ user, repos }: GithubPageProps) => {
  if (!user || !repos) {
    return <p>Unable to load GitHub data. Please try again later.</p>;
  }

  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>GitHub</h1>
        <p className={styles.pageSubtitle}>
          Browse through my GitHub repositories and see what I&apos;ve been working on.
        </p>
      </div>

      <div className={styles.githubPage}>
        <div className={styles.profileSection}>
          <div className={styles.profileInfo}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={100}
              height={100}
              priority
            />
            <div className={styles.userInfo}>
              <h2 className={styles.username}>{user.login}</h2>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <VscRepo className={styles.statIcon} />
                  <span>{user.public_repos} repositories</span>
                </div>
                <div className={styles.statItem}>
                  <VscPerson className={styles.statIcon} />
                  <span>{user.followers} followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Popular Repositories</h3>
        </div>
        <div className={styles.reposContainer}>
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>

        <div className={styles.contributions}>
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!}
            hideColorLegend
            hideMonthLabels
            colorScheme="dark"
            theme={{
              dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const [userRes, repoRes] = await Promise.all([
      fetch(`https://api.github.com/users/mohan08sin`, { headers }),
      fetch(`https://api.github.com/users/mohan08sin/repos?sort=pushed&per_page=6`, { headers }),
    ]);

    if (!userRes.ok || !repoRes.ok) {
      throw new Error('GitHub API error');
    }

    const user = await userRes.json();
    const repos = await repoRes.json();

    return {
      props: {
        user,
        repos,
      },
      revalidate: 600, // 10 mins
    };
  } catch (error) {
    console.error('GitHub fetch failed:', error);
    return {
      notFound: true,
    };
  }
}

export default GithubPage;



