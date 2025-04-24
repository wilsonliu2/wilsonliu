import React from 'react';
import {
    DiReact,
    DiMongodb,
    DiGit,
} from "react-icons/di";
import {
    SiExpress,
    SiSupabase,
    SiTypescript,
    SiTailwindcss,
} from "react-icons/si";

export interface ExperienceItem {
    title: string;
    company: string;
    duration: string;
    description: string;
}

export interface ActivityItem {
    title: string;
    organization: string;
    duration: string;
    description: string;
}

export interface ProjectItem {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    award?: string;
}

export interface SkillItem {
    name: string;
    icon: React.ElementType;
}

export const skillsData: SkillItem[] = [
    { name: "React.js", icon: DiReact },
    { name: "React Native", icon: DiReact },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: DiMongodb },
    { name: "Supabase", icon: SiSupabase },
    { name: "Git", icon: DiGit },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "TypeScript", icon: SiTypescript },
];

export const experiences: ExperienceItem[] = [
    {
        title: "Software Engineer Intern",
        company: "TipTop Technologies",
        duration: "Aug 2024 - Dec 2024",
        description: "Built frontend features & backend APIs.",
    },
    {
        title: "Data Science Research Assistant",
        company: "The TOW Foundation",
        duration: "Jun 2024 - Aug 2024",
        description: "Developed interactive NYC health map.",
    },
    {
        title: "Computer Science Tutor",
        company: "Brooklyn College",
        duration: "Oct 2022 - Present",
        description: "Tutored Java, OOP, and data structures.",
    },
];

export const activities: ActivityItem[] = [
    {
        title: "Software Engineering Mentee",
        organization: "Google x BASTA",
        duration: "Feb 2025 - Present",
        description: "10-week technical mentorship with a Google SWE.",
    },
    {
        title: "Software Engineer Fellow",
        organization: "CUNY Tech Prep",
        duration: "Jul 2024 - Present",
        description: "Year-long full-stack development bootcamp.",
    },
    {
        title: "Full Stack Developer",
        organization: "Brooklyn College Computer Science Club",
        duration: "Oct 2024 - Dec 2024",
        description: "Built and maintained club website.",
    },
    {
        title: "Hackathon Participant",
        organization: "Various Hackathons",
        duration: "",
        description: "Competed in 5 hackathons, winning 3 awards.",
    },
];

export const projects: ProjectItem[] = [
    {
        name: "DietFirst",
        description: "Personalized diet recommendations and health tracking.",
        technologies: [
            "MongoDB",
            "Node.js",
            "Express.js",
            "React.js",
            "Tailwind CSS",
            "Edamam API",
        ],
        link: "https://dietfirst-frontend.vercel.app",
    },
    {
        name: "Signlingo",
        description:
            "Learn ASL with real-time gesture recognition and gamification.",
        technologies: [
            "Cloudflare",
            "Flask",
            "Next.js",
            "Python",
            "Supabase",
            "Tailwind CSS",
            "WebSockets",
        ],
        award:
            "Awarded Best AI Application Built with Cloudflare at HackRU.",
        link: "https://devpost.com/software/signlino",
    },
     {
        name: "BINyc",
        description: "Real-time trash hotspot reporting map for NYC.",
        technologies: [
            "MongoDB",
            "ExpressJS",
            "ReactJS",
            "NodeJS",
            "LeafletJS",
            "Tailwind CSS",
        ],
        link: "https://devpost.com/software/binyc",
    },
    {
        name: "EcoIsland",
        description:
            "Container tracking system for Governors Island sustainability.",
        technologies: ["Next.js", "Supabase", "ShadcnUI", "TypeScript"],
        link: "https://ecoisland.vercel.app",
    },
    {
        name: "Wander",
        description: "Decentralized travel platform with personalized maps.",
        technologies: [
            "React.js",
            "MongoDB",
            "Node.js",
            "Express.js",
            "Tailwind CSS",
            "Pinata Cloud",
            "Google Maps API",
        ],
        award: "Awarded Best Use of MongoDB Atlas at BigRed//Hacks.",
        link: "https://devpost.com/software/wander-rs9m76",
    },
    {
        name: "LA'CUNY Compass",
        description: "AI-powered resource finder for CUNY students.",
        technologies: [
            "React.js",
            "OpenAI API",
            "Flask",
            "Leaflet.js",
            "Tailwind CSS",
        ],
        award: "Awarded Best Use of Data Science at CTP Hacks.",
        link: "https://ctp-hack.vercel.app",
    },
    {
        name: "NYC Health Map",
        description: "Interactive map visualizing NYC health data trends.",
        technologies: ["JavaScript", "D3", "Leaflet", "HTML", "CSS", "Python"],
        link: "https://wilsonliu2.github.io/nyc-health-map",
    },
    {
        name: "Task Manager",
        description: "React & Spring Boot to-do list application.",
        technologies: ["React", "Tailwind CSS", "Spring Boot", "MySQL"],
        link: "https://github.com/wilsonliu2/fullstack-todo",
    },
];