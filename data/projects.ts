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
  },
  {
    title: 'Event Management',
    description:
      'A Spring Boot-based Event Management Application allowing CRUD operations for events, attendees, organizers, venues, and registrations. Supports pagination, sorting, advanced queries, and standardized API responses. Built with PostgreSQL, JPA/Hibernate, and ready for REST API integration.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/mohan08sin/Event-Management',
    slug: 'Event Management',
  }
];
