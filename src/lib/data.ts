export const resumeData = {
    personal: {
        name: 'Rohith Gangu',
        tagline: 'I build things for the web.',
        introduction:
            "I'm a Full Stack Developer specializing in <span class='highlight'>Java</span> and <span class='highlight'>Angular</span>. I create exceptional digital experiences with a focus on performance and design.",
        bio: [
            "Hello! My name is Rohith and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is fun!",
            "Fast-forward to today, and I've had the privilege of building software for various clients. My main focus these days is building accessible, inclusive products and digital experiences.",
            "I specialize in building full-stack applications using <strong>Java</strong> (Spring Boot) for the backend and <strong>Angular</strong> for the frontend. I also love exploring modern frameworks like Svelte."
        ],
        email: 'rohithreddy.gangu@gmail.com',
        links: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            resume: '/Resume.pdf'
        }
    },
    skills: {
        frontend: ['Angular', 'Svelte / SvelteKit', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS'],
        backend: ['Java', 'Spring Boot', 'Hibernate / JPA', 'Node.js', 'REST APIs'],
        tools: ['Git / GitHub', 'Docker', 'AWS', 'SQL (PostgreSQL/MySQL)', 'MongoDB']
    },
    projects: [
        {
            title: 'E-Commerce Platform',
            description:
                'A full-featured online store built with microservices architecture. Features include product catalog, shopping cart, user authentication, and payment gateway integration.',
            tech: ['Java', 'Spring Boot', 'Angular', 'Docker', 'MySQL'],
            links: { github: 'https://github.com', external: 'https://example.com' }
        },
        {
            title: 'Task Management System',
            description:
                'A collaborative project management tool allowing teams to organize tasks, track progress, and communicate in real-time.',
            tech: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
            links: { github: 'https://github.com', external: 'https://example.com' }
        },
        {
            title: 'Portfolio Website',
            description:
                'A modern, responsive portfolio website built to showcase my skills and projects. Features a dark theme and smooth animations.',
            tech: ['SvelteKit', 'CSS3', 'Vite'],
            links: { github: 'https://github.com', external: '#' }
        }
    ]
};
