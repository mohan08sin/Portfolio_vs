export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
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
  }
];
