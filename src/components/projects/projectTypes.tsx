
// Define project types
export type ProjectCategory = "all" | "workExperience" | "freelance" | "personal";

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
  summary?: string;
  audioTracks?: { title: string; url: string }[];
  spotifyEmbed?: string;
  youtubeEmbed?: string;
}

// Sample project data with working URLs
export const projects: Project[] = [
  {
    id: 5,
    title: "Zapshot",
    description: "Coordinated social media campaigns and events; created visual assets to support user growth and engagement, and provided consultation marketing and brand ambassadorship program strategy",
    category: "workExperience",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["Marketing Consultation", "Visual Asset Production", "Project Management", "Brand Ambassadorship"],
    featured: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop", 
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop"
    ],
    tools: ["Slack", "Final Cut Pro X", "Adobe Creative Suite", "Logic Pro X", "Discord"],
    impact: "Increased team productivity by 40% while improving work-life balance",
    challenge: "Addressing inefficient workflows that caused burnout and missed deadlines",
    solution: "Implemented agile methodologies with regular retrospectives to continuously improve processes",
    summary: "Led comprehensive marketing and brand strategy initiatives that significantly improved user engagement and growth metrics."
  },
  {
    id: 1,
    title: "Depth Perception",
    description: "Directed and produced full album along with and marketing strategy, social media and video direction, and live performance planning and performing",
    category: "personal",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    tags: ["Multimedia Production", "Design Direction", "Creative Strategy", "Project Management"],
    featured: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1508700108023-c5249f4df085?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop"
    ],
    tools: ["Logic Pro X", "Adobe Creative Suite", "Final Cut Pro X", "Social Media Platforms"],
    impact: "Increased artist visibility by 40% and generated 1M+ streams across platforms",
    challenge: "Creating cohesive visual and audio experience with limited resources",
    solution: "Developed integrated marketing strategy that leveraged artist's unique style across all touchpoints",
    summary: "Comprehensive music production and marketing project that achieved significant streaming success.",
    spotifyEmbed: "https://open.spotify.com/embed/album/0MUxE0X6wDiVNIrqJcMqKx",
    audioTracks: [
      { title: "Main Theme", url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" },
      { title: "Ambient Track", url: "https://www.soundjay.com/misc/sounds/bell-ringing-04.mp3" }
    ]
  },
  {
    id: 4,
    title: "Fanhaven",
    description: "Developed brand identity for a startup, producing visual assets and collaborating with founders to align branding with vision.",
    category: "freelance",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    tags: ["Creative Brand Direction", "Graphic Design", "Experiential Marketing"],
    galleryImages: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop"
    ],
    tools: ["Figma", "Notion", "Adobe Photoshop"],
    impact: "Reduced design time by 60% and improved consistency across product suite",
    challenge: "Balancing flexibility for designers with consistency for brand integrity",
    solution: "Created component-based system with clear guidelines and examples of appropriate usage",
    summary: "Brand identity development that established strong visual foundation for startup growth."
  },
  {
    id: 3,
    title: "Waxheart",
    description: "Composed game soundtrack, improved team workflows, and aligned audio design with the game's visual themes.",
    category: "personal",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    tags: ["Music Production", "Cross Functional Teamwork", "Project Management"],
    featured: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    ],
    tools: ["Logic Pro X", "Trello", "Discord", "Github"],
    impact: "Increased conversion rates by 32% and reduced customer acquisition cost by 24%",
    challenge: "Identifying optimal marketing channels with limited budget",
    solution: "Created data-driven approach to channel selection based on audience research and ROI potential",
    summary: "Game soundtrack composition project with strategic team workflow improvements.",
    audioTracks: [
      { title: "Main Theme", url: "https://www.soundjay.com/misc/sounds/bell-ringing-01.mp3" },
      { title: "Battle Theme", url: "https://www.soundjay.com/misc/sounds/bell-ringing-02.mp3" },
      { title: "Outro Credits", url: "https://www.soundjay.com/misc/sounds/bell-ringing-03.mp3" }
    ]
  },
  {
    id: 2,
    title: "Death to Love",
    description: "Fully produced three original punk tracks with direction from Game Lead for Co-Op Beat 'em-Up indie game, with game implementation done in Wwise.",
    category: "freelance",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    tags: ["Music Production", "Cross Functional Teamwork", "Creative Interpretation", "Project Management"],
    galleryImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-4eb9a8efeb07?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ],
    tools: ["Logic Pro X", "Trello", "Discord", "Wwise"],
    impact: "Successfully launched product with 95% on-time delivery of project milestones",
    challenge: "Coordinating cross-functional teams across different time zones",
    solution: "Implemented agile methodology with clear communication protocols and documentation",
    summary: "Punk music production for indie game with cross-functional team coordination.",
    audioTracks: [
      { title: "Track 1: No More Romance", url: "https://www.soundjay.com/misc/sounds/bell-ringing-06.mp3" },
      { title: "Track 2: Heartbreaker", url: "https://www.soundjay.com/misc/sounds/bell-ringing-07.mp3" },
      { title: "Track 3: Final Goodbye", url: "https://www.soundjay.com/misc/sounds/bell-ringing-08.mp3" }
    ]
  },
  {
    id: 6,
    title: "Sanad Collective",
    description: "Led community-focused initiative providing resources and support for underrepresented artists, facilitating workshops and creating networking opportunities.",
    category: "workExperience",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    tags: ["Community Building", "Resource Management", "Event Planning", "Mentorship"],
    galleryImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop", 
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
    ],
    tools: ["Slack", "Notion", "Asana", "Google Workspace"],
    impact: "Created support network reaching over 500 artists and facilitating 20+ successful collaborations",
    challenge: "Building sustainable infrastructure with limited funding and volunteer resources",
    solution: "Established partnership model with established organizations to share resources and expertise",
    summary: "Community building initiative that significantly expanded artist support networks."
  }
];
