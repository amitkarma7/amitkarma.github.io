import { Injectable } from '@angular/core';
import { Education, Experience, Profile, Project, SkillGroup } from '../models/portfolio.model';

/**
 * All content below is transcribed directly from Amit Karma's resume.
 * Nothing here is invented — where the resume does not specify a detail
 * (e.g. per-role technologies for some positions), the field is left
 * empty and the relevant component renders a placeholder instead.
 */
@Injectable({ providedIn: 'root' })
export class ResumeDataService {
  readonly profile: Profile = {
    name: 'Amit Karma',
    title: 'Technical Lead & Java Full Stack Developer',
    email: 'amitkarma.dev@gmail.com',
    phone: '+91 9644074974',
    linkedin: 'linkedin.com/in/amitkarma',
    github: 'github.com/amitkarma7',
    intro:
      "I'm a Software Engineer 2 with strong proficiency in Java, Angular, Spring Boot and Microservices, focused on building scalable, enterprise-grade applications.",
    summary:
      'I am an experienced Software Engineer 2 with strong proficiency in Java, Angular, Spring Boot, Microservices. I excel in developing scalable applications using object-oriented principles, and I thrive in Agile environments. With a proven track record in enterprise-level application design and implementation, I focus on delivering secure, efficient solutions that meet compliance and enhance operational performance.',
    photoUrl: 'assets/profile.png',
  };

  readonly skillGroups: SkillGroup[] = [
    { category: 'Languages & Frameworks', skills: ['Java', 'Spring Boot', 'JavaScript', 'Angular 21'] },
    { category: 'Data Stores', skills: ['MySQL', 'MongoDB', 'Oracle DB'] },
    { category: 'DevOps & Tooling', skills: ['Kafka', 'Docker', 'OpenShift', 'Hazelcast', 'Maven', 'Git/GitLab'] },
    { category: 'Core Concepts', skills: ['Data Structures & Algorithms'] },
  ];

  readonly experience: Experience[] = [
    {
      company: 'Perfios Software Solutions',
      role: 'Technical Lead',
      duration: '02/2023 – Present',
      responsibilities: [
        'Led the UBI-DLP project, developed the feature, and managed the team to ensure successful delivery.',
        'Designed, developed, and maintained backend systems for a Loan Origination System (LOS), building scalable RESTful APIs with Spring Boot and microservices architecture.',
        'Optimized database operations across MySQL, Oracle, and MongoDB, reducing query latency by 20% with indexing and Redis caching.',
        'Secured API communications using JWT authentication, PII data masking, and encryption for third-party integrations.',
        'Managed GitLab CI/CD pipelines for automated deployments and deployed applications on OpenShift, achieving 30% faster release cycles with zero-downtime deployments.',
        'Migrated Groovy APIs to Java, enhancing maintainability and performance with OOP principles and design patterns.',
        'Participated in code reviews, resolved UAT issues, and collaborated via GitLab to enhance sprint deliverables.',
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Oracle', 'MongoDB', 'Redis', 'JWT', 'GitLab CI/CD', 'OpenShift', 'Groovy'],
    },
    {
      company: 'Ernst & Young LLP',
      role: 'Software Engineer 2',
      duration: '08/2022 – 02/2023',
      responsibilities: [
        'Expanded integrated systems for Online Report Center, Online Template Management, and NMR, improving data communication across multiple modules.',
        'Delivered a 20% reduction in system integration time and enhanced operational efficiency.',
      ],
      technologies: [],
    },
    {
      company: 'Virtusa Consulting Services Private Limited',
      role: 'Software Engineer',
      duration: '08/2021 – 08/2022',
      responsibilities: [
        'Evolved microservices for the Online Group Billing (OGB) system, reducing billing cycle time by 30% and optimizing operations.',
        'Implemented batch processing for OGB payment jobs, leading to 25% faster payment processing and a 98% reduction in payment errors.',
      ],
      technologies: ['Microservices'],
    },
    {
      company: 'Digital Harbor',
      role: 'Software Engineer',
      duration: '01/2019 – 08/2021',
      responsibilities: [
        'Enhanced microservices for the SET (Social Enterprise Technology) platform (PaaS), improving scalability and reducing time-to-deployment by 35% for new features and services.',
        'Pioneered R&D on innovative ideas like Shape Detection and Web Sockets, improving real-time data processing and increasing customer engagement by 79%.',
      ],
      technologies: ['Microservices', 'WebSockets'],
    },
  ];

  readonly projects: Project[] = [
    {
      name: 'Video KYC – Personal Discussion',
      description:
        'A Banking Video Personal Discussion platform enabling real-time audio/video communication between customers and advisors, with secure session management for scalable interactions.',
      technologies: ['Angular', 'Java', 'WebSocket', 'WebRTC', 'STAN Server'],
      features: [
        'Real-time audio/video communication',
        'Signaling mechanisms for session setup',
        'Secure session management via STAN Server',
        'Scalable customer-advisor interactions',
      ],
    },
    {
      name: 'Dynamic Form Generation Using JSON Logic',
      description:
        'A dynamic form system that renders inputs in real time, validates them, and automates field creation for improved accuracy and efficiency.',
      technologies: ['JSON Logic'],
      features: ['Real-time input rendering', 'Automated input validation', 'Automated field creation'],
    },
    {
      name: 'DMS with PDF Conversion & Rendering',
      description:
        'An optimized Document Management System with office document-to-PDF conversion and smooth in-browser rendering.',
      technologies: ['PDF.js'],
      features: ['Office document-to-PDF conversion', 'Smooth UI rendering with PDF.js'],
    },
  ];

  readonly education: Education[] = [
    {
      institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
      degree: 'Bachelor of Engineering (CSE)',
      duration: '2014 – 2018',
    },
  ];
}
