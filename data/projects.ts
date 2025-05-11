export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  // {
  //   title: 'Driwwwle',
  //   description:
  //     'Discover creative websites and developers. A portal for you to share your projects.',
  //   logo: '/logos/driwwwle.svg',
  //   link: 'https://github.com/',
  //   slug: 'driwwwle',
  // },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio, built with Next.js.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/mohan08sin/Portfolio_vs',
    slug: 'vscode-portfolio',
  },
  {
    title: 'Employee Management',
    description:
      'A full-stack Employee Management System with CRUD operations, built using React, Spring Boot, and MySQL.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/mohan08sin/Employee-Management',
    slug: 'Employee Management',
  },
  // {
  //   title: 'Coolify Deployments',
  //   description:
  //     'VSCode extension to track and deploy your Coolify applications.',
  //   logo: '/logos/coolify.svg',
  //   link: 'https://github.com/',
  //   slug: 'coolify-vscode-extension',
  // },
];
