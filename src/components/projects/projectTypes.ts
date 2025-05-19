
// Define project types
export type ProjectCategory = "all" | "creative" | "management" | "strategy";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "all">;
  image: string;
  tags: string[];
  featured?: boolean;
  galleryImages?: string[];
  tools?: string[];
  impact?: string;
  challenge?: string;
  solution?: string;
}

// Sample project data
export const projects: Project[] = [
  {
    id: 1,
    title: "Depth Perception",
    description: "Directed and produced full album along with and marketing strategy, social media and video direction, and live performance planning and performing",
    category: "creative",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Multimedia Production", "Design Direction", "Creative Strategy"],
    featured: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1508700108023-c5249f4df085",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
    ],
    tools: ["Ableton Live", "Adobe Premiere", "Figma", "Social Media Platforms"],
    impact: "Increased artist visibility by 40% and generated 1M+ streams across platforms",
    challenge: "Creating cohesive visual and audio experience with limited resources",
    solution: "Developed integrated marketing strategy that leveraged artist's unique style across all touchpoints"
  }, {
    id: 2,
    title: "Death to Love",
    description: "Fully produced three original punk tracks with direction from Game Lead for Co-Op Beat 'em-Up indie game, with game implementation done in Wwise.",
    category: "management",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Music Production", "Cross Functional Teamwork", "Creative Interpretation"],
    galleryImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1531403009284-4eb9a8efeb07",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ],
    tools: ["Asana", "Slack", "HubSpot", "Google Analytics"],
    impact: "Successfully launched product with 95% on-time delivery of project milestones",
    challenge: "Coordinating cross-functional teams across different time zones",
    solution: "Implemented agile methodology with clear communication protocols and documentation"
  }, {
    id: 3,
    title: "Marketing Strategy Development",
    description: "Comprehensive marketing strategy with focus on digital channels and measurable KPIs.",
    category: "strategy",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Strategy", "Analytics", "Market Research"],
    featured: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    ],
    tools: ["Google Analytics", "SEMrush", "Tableau", "Mailchimp"],
    impact: "Increased conversion rates by 32% and reduced customer acquisition cost by 24%",
    challenge: "Identifying optimal marketing channels with limited budget",
    solution: "Created data-driven approach to channel selection based on audience research and ROI potential"
  }, {
    id: 4,
    title: "Design System Creation",
    description: "Unified design language to ensure consistency across all digital and print touchpoints.",
    category: "creative",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Design Systems", "UI/UX", "Documentation"],
    galleryImages: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
    ],
    tools: ["Figma", "Storybook", "Zeplin", "InVision"],
    impact: "Reduced design time by 60% and improved consistency across product suite",
    challenge: "Balancing flexibility for designers with consistency for brand integrity",
    solution: "Created component-based system with clear guidelines and examples of appropriate usage"
  }, {
    id: 5,
    title: "Team Leadership & Workflow Optimization",
    description: "Restructured creative team processes to increase productivity by 40%.",
    category: "management",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tags: ["Team Leadership", "Process Optimization", "Agile"],
    featured: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      "https://images.unsplash.com/photo-1552581234-26160f608093"
    ],
    tools: ["Trello", "Notion", "Slack", "Monday.com"],
    impact: "Increased team productivity by 40% while improving work-life balance",
    challenge: "Addressing inefficient workflows that caused burnout and missed deadlines",
    solution: "Implemented agile methodologies with regular retrospectives to continuously improve processes"
  }
];
