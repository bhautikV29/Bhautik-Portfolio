/**
 * Portfolio content - extracted and structured from resume.
 * Edit this file to update site content without touching components.
 */

export const personal = {
  name: 'Bhautik Vekariya',
  title: 'Senior Software Engineer',
  tagline: 'Senior Software Engineer & Team Lead — Full Stack (React, Next.js, Node, AWS) · MEAN & MERN · AWS Certified · Passionate about AI.',
  email: 'bhautik.vekariya2903@gmail.com',
  phone: '+91 6353454029',
  location: 'India',
  profileImage: '/Profile-pic.png', // Your photo from public folder
  resumePdfUrl: '/Bhautik-Vekariya-FE-5.pdf', // Resume from public folder
  videoResumeUrl: '', // Optional: YouTube/Vimeo embed URL
  videoResumeFile: 'video-resume.mp4', // MP4 file in public folder (place your video as public/video-resume.mp4)
  social: [
    { name: 'GitHub', url: 'https://github.com/bhautikV29', icon: 'FaGithub' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bhautik-vekariya/', icon: 'FaLinkedinIn' },
  ],
}

export const about = {
  summary: `With over 5+ years of experience as a Senior Software Engineer, I bring strong expertise in analysis, programming, and debugging. I excel in strategic planning, project and code reviews, responsive design, and building scalable technical infrastructures. I have led migration projects including upgrading React from v16 to v18 and migrating applications from React to Next.js.`,
  highlights: [
    'Design, development, testing, and post-release support across React, Next.js, Angular, and Node.js',
    'Mentor junior developers; lead frontend architecture and code reviews; work effectively in teams and independently',
    'Led Bubble migration: React v16 → v18 upgrades and React-to-Next.js migration for production applications',
    'AWS Certified Cloud Practitioner; experience with Lambda, S3, Step Functions, and cloud-native solutions',
  ],
}

export const skills = {
  frontend: [
    'React JS', 'Next.js', 'Redux', 'Redux Toolkit', 'Thunk', 'Saga',
    'Angular', 'NgRx', 'RxJS', 'Angular Signals', 'Vue.js', 'Pinia', 'PrimeVue',
    'TypeScript', 'Tailwind', 'Bootstrap', 'SCSS', 'Material UI', 'Ant Design',
    'Jest', 'React Testing Library', 'Cypress', 'Playwright', 'Svelte', 'jQuery',
  ],
  backend: [
    'Node.js', 'Express.js', 'Nest.js', 'AWS Lambda', 'AWS Step Functions',
    'PostgreSQL', 'MongoDB', 'SQL', 'Microservices', 'OAuth', 'JWT',
    'AWS Cognito', 'Amazon EC2', 'S3', 'SQS', 'SNS', 'API Gateway', 'DynamoDB',
  ],
  tools: [
    'Git', 'GitHub', 'GitLab', 'BitBucket', 'CI/CD', 'Jenkins',
    'Confluence', 'Jira', 'Slack', 'Teams', 'Trello', 'Postman', 'Docker',
  ],
}

export const projects = [
  {
    id: 1,
    title: 'Wiley Author Services',
    client: 'Wiley / HM (Russia)',
    teamSize: 10,
    role: 'Frontend Lead Developer',
    description: 'Platform for Wiley to support authors through the publishing journey: manuscript submissions, editing and proofreading, language support, and promotion of journals and books.',
    tech: ['React.js', 'TypeScript', 'Redux', 'Redux Toolkit', 'MUI', 'React Storybook', 'Jest', 'Node.js', 'Express.js', 'MongoDB', 'AWS Lambda'],
    image: '/Wiley.png',
    liveUrl: 'https://authors.wiley.com/',
    githubUrl: '',
  },
  {
    id: 2,
    title: 'CXone Agent',
    client: 'NICE (USA)',
    teamSize: 10,
    role: 'Full Stack Developer (Frontend-Focused)',
    description: 'NICE inContact CXone — cloud contact center platform for omnichannel communication (voice, email, chat, social) with workforce optimization. Agent-side app for daily task management.',
    tech: ['React.js', 'Angular', 'TypeScript', 'Redux', 'MUI', 'Storybook', 'Jest', 'Node.js', 'Express.js', 'Jenkins', 'AWS SNS', 'AWS SQS'],
    image: '/cxone-agent.png',
    liveUrl: 'https://help.nicecxone.com/content/agent/cxoneagent/cxoneagent.htm',
    githubUrl: '',
  },
  {
    id: 3,
    title: 'Leap – Aditya Birla',
    client: 'Aditya Birla (India)',
    teamSize: 12,
    role: 'Frontend Developer & Frontend Architect',
    description: 'Banking application for HDFC, AXIS, IDFC to streamline policy distribution and payment processing. Users can browse, purchase, and manage policy products without core bank login.',
    tech: ['Next.js', 'TypeScript', 'Redux', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'AWS Lambda', 'AWS Step Functions', 'AWS S3', 'Jenkins', 'Jest'],
    image: '/leap.png',
    liveUrl: 'https://leap.adityabirlasunlifeinsurance.com/#/',
    githubUrl: '',
  },
  {
    id: 4,
    title: 'SLPNAV – Sleep Navigator',
    client: 'USA',
    teamSize: 8,
    role: 'Full Stack Developer (Frontend-Focused)',
    description: 'Health-tech app to monitor and analyze sleep patterns for home and hospital diagnostics. Helps physicians evaluate sleep disorders, track progress, and manage patient profiles.',
    tech: ['React.js', 'TypeScript', 'Redux', 'MUI', 'Node.js', 'Express.js', 'PostgreSQL'],
    image: '/sleep-nav.png',
    liveUrl: 'https://www.fwdhealthcare.com/',
    githubUrl: '',
  },
  {
    id: 5,
    title: 'FLORIZEL powered by Fonemed',
    client: 'Fonemed (Canada)',
    teamSize: 6,
    role: 'Senior Frontend Developer',
    description: 'Web-based Admin Panel for healthcare practitioners: manage patients, track vitals, remote Zoom consultations. Multi-tenant SaaS with patient onboarding, dashboards, BLE devices, alerts.',
    tech: ['Angular', 'React', 'Node.js', 'Nest.js', 'AWS', 'Serverless', 'Lambda', 'DynamoDB', 'Cognito', 'CloudFormation'],
    image: '/fonemed.png',
    liveUrl: 'https://www.fonemed.com/florizel/',
    githubUrl: '',
  },
]

export const experience = [
  {
    id: 1,
    company: 'AjeevanTech',
    role: 'Senior Software Developer/Engineer (Frontend)',
    type: 'Consultancy',
    period: 'Jan 2023 to Present',
    points: [
      'Attend daily scrum meetings, provide updates on JIRA tickets, end-of-day review meetings.',
      'Mentor junior developers on best practices; maintain systems by monitoring and fixing defects.',
    ],
  },
  {
    id: 2,
    company: 'Techymonks Pvt. Ltd',
    role: 'Software Engineer',
    type: 'Product / Services',
    period: 'Jan 2021 to Jan 2023',
    points: [
      'Daily scrum with previous day updates and challenges; work on JIRA tickets with timely manager updates.',
      'Trained and mentored junior developers in programming methodologies and best practices.',
      'Maintaining systems by monitoring and correcting software defects.',
    ],
  },
]

export const education = [
  {
    id: 1,
    institution: 'SVIT Vasad',
    degree: 'Bachelor of Engineering',
    field: 'Information Technology',
    period: '',
    description: '',
  },
]

export const certifications = [
  {
    id: 1,
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: 'Recent',
    url: '/AWS%20Certified%20Cloud%20Practitioner%20certificate.pdf', // Certificate from public folder
  },
]
