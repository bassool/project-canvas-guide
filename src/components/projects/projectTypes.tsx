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
  audioTracks?: { title: string; url: string }[];
  spotifyEmbed?: string;
}

// Sample project data
export const projects: Project[] = [
  {
    id: 5,
    title: "Zapshot",
    description: "Coordinated social media campaigns and events; created visual assets to support user growth and engagement, and provided consultation marketing and brand ambassadorship program strategy",
    category: "management",
    image: "/lovable-uploads/09dcce3a-805a-4d5e-bd8e-16730a9fc7b8.png",
    tags: ["Marketing Consultation", "Visual Asset Production", "Project Management", "Brand Ambassadorship"],
    featured: true,
    galleryImages: [
      "/lovable-uploads/370631e3-7720-4768-912d-01c4c390495e.png", 
      "/lovable-uploads/4d9114b8-8eb1-4964-898b-17ba3359c010.png",
      "https://images.unsplash.com/photo-1552581234-26160f608093"
    ],
    tools: ["Slack", "Final Cut Pro X", "Adobe Creative Suite", "Logic Pro X", "Discord"],
    impact: "Increased team productivity by 40% while improving work-life balance",
    challenge: "Addressing inefficient workflows that caused burnout and missed deadlines",
    solution: "Implemented agile methodologies with regular retrospectives to continuously improve processes"
  },
  {
    id: 1,
    title: "Depth Perception",
    description: "Directed and produced full album along with and marketing strategy, social media and video direction, and live performance planning and performing",
    category: "creative",
    image: "/lovable-uploads/df767496-ebfe-4362-9734-a35a2525a7b5.png",
    tags: ["Multimedia Production", "Design Direction", "Creative Strategy", "Project Management"],
    featured: true,
    galleryImages: [
      "/lovable-uploads/df767496-ebfe-4362-9734-a35a2525a7b5.png",
      "https://images.unsplash.com/photo-1508700108023-c5249f4df085",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
    ],
    tools: ["Logic Pro X", "Adobe Creative Suite", "Final Cut Pro X", "Social Media Platforms"],
    impact: "Increased artist visibility by 40% and generated 1M+ streams across platforms",
    challenge: "Creating cohesive visual and audio experience with limited resources",
    solution: "Developed integrated marketing strategy that leveraged artist's unique style across all touchpoints",
    spotifyEmbed: "https://open.spotify.com/album/0MUxE0X6wDiVNIrqJcMqKx"
  },
  {
    id: 4,
    title: "Fanhaven",
    description: "Developed brand identity for a startup, producing visual assets and collaborating with founders to align branding with vision.",
    category: "creative",
    image: "/lovable-uploads/c6d6553e-db89-4771-99ba-1a24f9184208.png",
    tags: ["Creative Brand Direction", "Graphic Design", "Experiential Marketing"],
    galleryImages: [
      "/lovable-uploads/c6d6553e-db89-4771-99ba-1a24f9184208.png",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
    ],
    tools: ["Figma", "Notion", "Adobe Photoshop"],
    impact: "Reduced design time by 60% and improved consistency across product suite",
    challenge: "Balancing flexibility for designers with consistency for brand integrity",
    solution: "Created component-based system with clear guidelines and examples of appropriate usage"
  },
  {
    id: 3,
    title: "Waxheart",
    description: "Composed game soundtrack, improved team workflows, and aligned audio design with the game's visual themes.",
    category: "strategy",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Music Production", "Cross Functional Teamwork", "Project Management"],
    featured: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    ],
    tools: ["Logic Pro X", "Trello", "Discord", "Github"],
    impact: "Increased conversion rates by 32% and reduced customer acquisition cost by 24%",
    challenge: "Identifying optimal marketing channels with limited budget",
    solution: "Created data-driven approach to channel selection based on audience research and ROI potential",
    audioTracks: [
      { title: "Main Theme", url: "https://assets.mixkit.co/music/preview/mixkit-games-worldbeat-466.mp3" },
      { title: "Battle Theme", url: "https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3" },
      { title: "Outro Credits", url: "https://assets.mixkit.co/music/preview/mixkit-sleepy-cat-135.mp3" }
    ]
  },
  {
    id: 2,
    title: "Death to Love",
    description: "Fully produced three original punk tracks with direction from Game Lead for Co-Op Beat 'em-Up indie game, with game implementation done in Wwise.",
    category: "management",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Music Production", "Cross Functional Teamwork", "Creative Interpretation", "Project Management"],
    galleryImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1531403009284-4eb9a8efeb07",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ],
    tools: ["Logic Pro X", "Trello", "Discord", "Wwise"],
    impact: "Successfully launched product with 95% on-time delivery of project milestones",
    challenge: "Coordinating cross-functional teams across different time zones",
    solution: "Implemented agile methodology with clear communication protocols and documentation",
    audioTracks: [
      { title: "Track 1: No More Romance", url: "https://assets.mixkit.co/music/preview/mixkit-fast-rock-beat-686.mp3" },
      { title: "Track 2: Heartbreaker", url: "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-685.mp3" },
      { title: "Track 3: Final Goodbye", url: "https://assets.mixkit.co/music/preview/mixkit-hazy-after-hours-132.mp3" }
    ]
  },
  {
    id: 6,
    title: "Sanad Collective",
    description: "Led community-focused initiative providing resources and support for underrepresented artists, facilitating workshops and creating networking opportunities.",
    category: "strategy",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Community Building", "Resource Management", "Event Planning", "Mentorship"],
    galleryImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", 
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    ],
    tools: ["Slack", "Notion", "Asana", "Google Workspace"],
    impact: "Created support network reaching over 500 artists and facilitating 20+ successful collaborations",
    challenge: "Building sustainable infrastructure with limited funding and volunteer resources",
    solution: "Established partnership model with established organizations to share resources and expertise"
  }
];
