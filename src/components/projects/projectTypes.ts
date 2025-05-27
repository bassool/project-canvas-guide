
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
    description: "Coordinated social media campaigns and events; created visual assets to support user growth and engagement, and provided consultation marketing and brand ambassadorship program strategy",
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
    summary: "Increased team productivity by 40% while improving work-life balance",
    challenge: "Addressing inefficient workflows that caused burnout and missed deadlines",
    solution: "Implemented agile methodologies with regular retrospectives to continuously improve processes"
  },
  {
    id: 1,
    title: "Depth Perception",
    description: "Directed and produced full album along with and marketing strategy, social media and video direction, and live performance planning and performing",
    category: "personal",
    image: "/lovable-uploads/df767496-ebfe-4362-9734-a35a2525a7b5.png",
    tags: ["Multimedia Production", "Design Direction", "Creative Strategy", "Project Management"],
    featured: true,
    galleryImages: [
      "/lovable-uploads/df767496-ebfe-4362-9734-a35a2525a7b5.png",
      "https://images.unsplash.com/photo-1508700108023-c5249f4df085",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
    ],
    tools: ["Logic Pro X", "Adobe Creative Suite", "Final Cut Pro X", "Social Media Platforms"],
    summary: "Increased artist visibility by 40% and generated 1M+ streams across platforms",
    challenge: "Creating cohesive visual and audio experience with limited resources",
    solution: "Developed integrated marketing strategy that leveraged artist's unique style across all touchpoints",
    spotifyEmbed: "https://open.spotify.com/album/0MUxE0X6wDiVNIrqJcMqKx",
    youtubeEmbed: "https://www.youtube.com/@bassool3957/videos"
  },
  {
    id: 4,
    title: "Fanhaven",
    description: "Developed brand identity for a startup, producing visual assets and collaborating with founders to align branding with vision.",
    category: "workExperience",
    image: "/lovable-uploads/138bbbc6-fbd8-4f91-9629-7c41912d0eb1.png",
    tags: ["Creative Brand Direction", "Graphic Design", "Experiential Marketing"],
    galleryImages: [
      "/lovable-uploads/138bbbc6-fbd8-4f91-9629-7c41912d0eb1.png",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
    ],
    tools: ["Figma", "Notion", "Adobe Photoshop"],
    challenge: "To create compelling visual branding and marketing applicable to websites and promotional material such as business cards in preparation for a StartUp Competition",
    solution: "Created component-based system with clear guidelines and examples of appropriate usage",
    summary: "• Increased brand awareness and consistency by designing a full branding suite (logo, business cards, event materials) using Adobe Creative Suite and Figma, resulting in a strong visual presence at a major startup event.\n• Translated founders' vision into compelling brand visuals by collaborating in Notion, enhancing alignment across marketing efforts."
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
      "/lovable-uploads/4910dfba-681d-4ff3-94af-397750b7eab3.png", 
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
      "/lovable-uploads/80a5e455-53c7-40c3-9461-1bcac3d6fa4e.png",  // Added Logic Pro screenshot
      "/lovable-uploads/ffa1a0e6-6c72-45a9-bcf9-80111fb31e73.png",  // Added game screenshot
      "https://images.unsplash.com/photo-1531403009284-4eb9a8efeb07",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
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
