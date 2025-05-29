// Define project types
export type ProjectCategory = "all" | "freelance" | "personal" | "workExperience";

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
  impact?: string; // Keeping for backward compatibility
  summary?: string; // Field to use moving forward
  challenge?: string;
  solution?: string;
  audioTracks?: { title: string; url: string }[];
  spotifyEmbed?: string;
  youtubeEmbed?: string;
}

// Sample project data
export const projects: Project[] = [
  {
    id: 5,
    title: "Zapshot",
    description: "Coordinated social media campaigns and events; created visual assets to support user growth and engagement, provided marketing consultation and brand ambassadorship program strategy.",
    category: "workExperience",
    image: "/lovable-uploads/09dcce3a-805a-4d5e-bd8e-16730a9fc7b8.png",
    tags: ["Marketing Consultation", "Visual Asset Production", "Project Management", "Brand Ambassadorship"],
    featured: true,
    galleryImages: [
      "/zapshot 1.png", 
      "/zapshot 2.png",
      "/zapshot 3.png",
      "/ZAPSHOT 4.mp4"
    ],
    tools: ["Slack", "Final Cut Pro X", "Adobe Creative Suite", "Logic Pro X", "Discord"],
    summary: "Coordinated social media campaigns and events; created visual assets to support user growth and engagement, provided marketing consultation and brand ambassadorship program strategy.",
    challenge: "Fragmented campaign coordination and brand-user alignment, reduced marketing efficiency, event impact, and target demographic usage on the platform.",
    solution: "Developed revitalized and high-performing Brand Ambassadorship Program accompanied by various visual content, improved campaign ROI through post-event KPI analysis."
  },
  {
    id: 1,
    title: "Depth Perception",
    description: "Directed and produced full album and all visuals, accompanied by digital social media marketing strategy and experiential live event planning and performing.",
    category: "personal",
    image: "/lovable-uploads/df767496-ebfe-4362-9734-a35a2525a7b5.png",
    tags: ["Multimedia Production", "Design Direction", "Creative Strategy", "Project Management"],
    featured: true,
    galleryImages: [
      "/depth 1.png",
      "/depth 2.png",
      "/depth 3.png",
      "/depth 4.mp4",
      "/depth 5.png"
    ],
    tools: ["Logic Pro X", "Adobe Creative Suite", "Final Cut Pro X", "Social Media Platforms"],
    summary: "Produced and directed full album and all visuals, accompanied by digital social media marketing strategy and experiential live event planning and performing.",
    challenge: "To independently produce, manage, and direct a full-scale music project across multiple creative disciplines with a limited budget and resources.",
    solution: "Led art direction and end-to-end production, shot visuals for and orchestrated multiple marketing campaigns, and grew an audience through coordinated digital content and live events.",
    spotifyEmbed: "https://open.spotify.com/album/0MUxE0X6wDiVNIrqJcMqKx",
    youtubeEmbed: "https://www.youtube.com/@bassool3957/videos"
  },
  {
    id: 4,
    title: "Fanhaven",
    description: "Developed visual suite and brand identity for ticketing-based tech StartUp, producing visual assets and collaborating with founders to align visuals with their vision.",
    category: "workExperience",
    image: "/lovable-uploads/138bbbc6-fbd8-4f91-9629-7c41912d0eb1.png",
    tags: ["Creative Brand Direction", "Graphic Design", "Experiential Marketing"],
    galleryImages: [
      "/lovable-uploads/d1a44aec-e320-4fa3-84e1-295a78558466.png",
      "/lovable-uploads/a18e440d-0031-4e69-9534-236c64320357.png",
      "/lovable-uploads/138bbbc6-fbd8-4f91-9629-7c41912d0eb1.png"
    ],
    tools: ["Figma", "Notion", "Adobe Photoshop"],
    challenge: "To create a cohesive branding and visual identity for an early-stage StartUp with a scare budget and resources in time for StartUp showcases.",
    solution: "Created component-based system with clear guidelines and examples of appropriate usage",
    summary: "Developed visual suite and brand identity for ticketing-based tech StartUp, producing visual assets and collaborating with founders to align visuals with their vision."
  },
  {
    id: 3,
    title: "Waxheart",
    description: "Composed game soundtrack, improved team workflows, and aligned audio design with the game's visual themes.",
    category: "freelance",
    image: "/lovable-uploads/3c4c6ca8-6600-4cb7-8c20-dbf785abe7b8.png",
    tags: ["Music Production", "Cross Functional Teamwork", "Project Management"],
    featured: true,
    galleryImages: [
      "/lovable-uploads/143ea6cc-d7c1-41a0-afc4-0061761ee4e4.png",
      "/lovable-uploads/2d3a44f3-711d-4b1a-9530-0ed3ae1de31d.png", 
      "/lovable-uploads/2179b774-fd02-437a-9a15-2c8a63e22638.png",  
      "/lovable-uploads/72f25768-03a2-4fec-8227-0d1b9c3e3e91.png"   
    ],
    tools: ["Logic Pro X", "Trello", "Discord", "Github"],
    summary: "Increased conversion rates by 32% and reduced customer acquisition cost by 24%",
    challenge: "Identifying optimal marketing channels with limited budget",
    solution: "Created data-driven approach to channel selection based on audience research and ROI potential",
    audioTracks: [
      { title: "Vista Theme", url: "/VISTA 5 PORT copy.mp3" },
      { title: "Marketplace Theme", url: "/MARKETPLACE THEME.mp3" },
      { title: "Dread Theme", url: "/VISTA WIP WAXHEART.mp3" },
      { title: "Dark Barn Theme", url: "/WAXHEART BARN_1 copy.mp3" },
      { title: "Chase Theme", url: "/MUS_trashdrumz copy.mp3" }
    ]
  },
  {
    id: 2,
    title: "Death to Love",
    description: "Fully produced three original punk tracks with direction from Game Lead for Co-Op Beat 'em-Up indie game, with game implementation done in Wwise.",
    category: "freelance",
    image: "/lovable-uploads/785f2061-da37-4b1a-9e6f-8d3b04d614d9.png",
    tags: ["Music Production", "Cross Functional Teamwork", "Creative Interpretation", "Project Management"],
    galleryImages: [
      "/lovable-uploads/785f2061-da37-4b1a-9e6f-8d3b04d614d9.png",
      "/lovable-uploads/80a5e455-53c7-40c3-9461-1bcac3d6fa4e.png",
      "/lovable-uploads/ffa1a0e6-6c72-45a9-bcf9-80111fb31e73.png",
      "/lovable-uploads/9b18ae23-bc91-4807-8a33-5ff7771a0c33.png"
    ],
    tools: ["Logic Pro X", "Trello", "Discord", "Wwise"],
    summary: "Successfully launched product with 95% on-time delivery of project milestones",
    challenge: "Coordinating cross-functional teams across different time zones",
    solution: "Implemented agile methodology with clear communication protocols and documentation",
    audioTracks: [
      { title: "Main Menu and Dialogue Theme", url: "/Main Menu and Dialogue Theme .mp3" },
      { title: "Battle Theme 1", url: "/Battle Theme 1.mp3" },
      { title: "Battle Theme 2", url: "/Battle Theme 2.mp3" }
    ]
  },
  {
    id: 6,
    title: "Sanad Collective",
    description: "Led community-focused initiative providing resources and support for underrepresented artists, facilitating workshops and creating networking opportunities.",
    category: "personal",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Community Building", "Resource Management", "Event Planning", "Mentorship"],
    galleryImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", 
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    ],
    tools: ["Slack", "Notion", "Asana", "Google Workspace"],
    summary: "Created support network reaching over 500 artists and facilitating 20+ successful collaborations",
    challenge: "Building sustainable infrastructure with limited funding and volunteer resources",
    solution: "Established partnership model with established organizations to share resources and expertise"
  }
];
