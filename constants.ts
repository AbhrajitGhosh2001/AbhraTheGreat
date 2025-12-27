
// FIX: Added React import to use React.createElement and avoid JSX in a .ts file.
import React from 'react';
import type { ReactNode } from 'react';
import { 
    AwsIcon, DataIcon, FullStackIcon, GrowthIcon, 
    PioneerIcon, StrategicIcon, AbstractIcon, BuilderIcon,
    EmailIcon, InstagramIcon, YouTubeIcon, XIcon, LinkedInIcon,
    AiIcon, AutomationIcon
} from './components/icons';

export interface ExpertiseItem {
    title: string;
    points: string[];
    icon: ReactNode;
}

export const expertiseData: ExpertiseItem[] = [
    {
        title: "AWS & Cloud Architecture",
        points: [
            "Scalable AWS system design",
            "Cost optimization and security",
            "Serverless & event-driven architectures",
            "Data pipelines and platform design"
        ],
        // FIX: Replaced JSX with React.createElement to prevent parsing errors in a .ts file.
        icon: React.createElement(AwsIcon),
    },
    {
        title: "Data Analytics & Engineering",
        points: [
            "SQL, Python, Pandas",
            "Financial and risk analysis",
            "Visualization and dashboards",
            "Predictive modeling & experimentation"
        ],
        // FIX: Replaced JSX with React.createElement to prevent parsing errors in a .ts file.
        icon: React.createElement(DataIcon),
    },
    {
        title: "Full-Stack Computer Science",
        points: [
            "Frontend: React, modern UI/UX",
            "Backend: APIs, databases, system design",
            "End-to-end product engineering",
            "Clean, maintainable, extensible architecture"
        ],
        // FIX: Replaced JSX with React.createElement to prevent parsing errors in a .ts file.
        icon: React.createElement(FullStackIcon),
    },
    {
        title: "Digital Marketing & Growth",
        points: [
            "Analytics-driven strategy",
            "Automation-first growth pipelines",
            "Funnel design and optimization",
            "Signal-over-noise content strategy"
        ],
        // FIX: Replaced JSX with React.createElement to prevent parsing errors in a .ts file.
        icon: React.createElement(GrowthIcon),
    },
    {
        title: "AI Systems",
        points: [
            "Safety & Governance",
            "Cost-Aware Intelligence",
            "Structured Reasoning (MCP-Based)",
            "Production-Grade Behavior"
        ],
        icon: React.createElement(AiIcon),
    },
    {
        title: "Automation & Operations",
        points: [
            "Workflow Orchestration",
            "Scheduled Execution",
            "Event & API-Driven Pipelines",
            "Scalable, Maintainable Ops, logging"
        ],
        icon: React.createElement(AutomationIcon),
    },
];

export interface PhilosophyItem {
    title: string;
    description: string;
    icon: ReactNode;
}

export const philosophyData: PhilosophyItem[] = [
    {
        title: "Pioneer, Leader, Initiator",
        description: "An independent thinker who explains complex ideas clearly, structurally, and without jargon unless necessary.",
        // FIX: Replaced JSX with React.createElement to prevent parsing errors in a .ts file.
        icon: React.createElement(PioneerIcon),
    },
    {
        title: "Vision to Infrastructure",
        description: "Turns vision into infrastructure, thinking in platforms and systems designed for large-scale impact.",
        // FIX: Replaced JSX with React.createElement to prevent parsing errors in a .ts file.
        icon: React.createElement(StrategicIcon),
    },
    {
        title: "Analytical & Abstract Thinker",
        description: "Strategic, precise, disciplined, and highly analytical with deep systems awareness, intuition, and philosophical depth.",
        // FIX: Replaced JSX with React.createElement to prevent parsing errors in a .ts file.
        icon: React.createElement(AbstractIcon),
    },
    {
        title: "Builder with Decisive Action",
        description: "Combines a builder mindset of stability and patience with decisive action for material execution.",
        // FIX: Replaced JSX with React.createElement to prevent parsing errors in a .ts file.
        icon: React.createElement(BuilderIcon),
    }
];

export const roleData: string[] = [
    "Answer questions",
    "Explain systems",
    "Advise on architecture, data, software, and growth",
    "Engage intelligently with founders, engineers, and serious builders"
];

export interface SocialLink {
    name: string;
    url: string;
    icon: ReactNode;
}

export const socialLinks: SocialLink[] = [
    { name: 'Email', url: 'mailto:Abhrajit_Ghosh1@proton.me', icon: React.createElement(EmailIcon) },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhrajit-ghosh-4b21611a0/', icon: React.createElement(LinkedInIcon) },
    { name: 'X (Twitter)', url: 'https://x.com/abhrajit_ghosh', icon: React.createElement(XIcon) },
    { name: 'YouTube', url: 'https://www.youtube.com/@abhrathegreat', icon: React.createElement(YouTubeIcon) },
    { name: 'Instagram', url: 'https://www.instagram.com/abhrajit_ghosh/', icon: React.createElement(InstagramIcon) },
];
