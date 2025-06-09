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
    id: 1,
    title: "Depth Perception",
    description: "Directed and produced full album and all visuals, accompanied by digital social media marketing strategy and experiential live event planning and performing.",
    category: "personal",
    image: "/lovable-uploads/df767496-ebfe-4362-9734-a35a2525a7b5.png",
    tags: ["Multimedia Production", "Design Direction", "Creative Strategy", "Project Management"],
    featured: true,
    galleryImages: [
      "/lovable-uploads/DEPTH_1.png",
      "/lovable-uploads/d030c244-127d-4fd1-8374-3613dab559c3.png",
      "/lovable-uploads/depth_3.png",
      "/lovable-uploads/depth_4.mp4",
      "/lovable-uploads/depth_5.png"
    ],
    tools: ["Logic Pro X", "Adobe Creative Suite", "Final Cut Pro X", "Social Media Platforms"],
    summary: "Produced and directed full album and all visuals, accompanied by digital social media marketing strategy and experiential live event planning and performing. Generated 3k+ streams and 200+ attendees for final live show on limited budget.",
    challenge: "To independently produce, manage, and direct a full-scale music project across multiple creative disciplines with a limited budget and resources.",
    solution: "Led art direction and end-to-end production, shot visuals for and orchestrated multiple marketing campaigns, and grew an audience through coordinated digital content and live events.",
    spotifyEmbed: "https://open.spotify.com/album/0MUxE0X6wDiVNIrqJcMqKx",
    youtubeEmbed: "https://www.youtube.com/@bassool3957/videos"
  },
  {
    id: 6,
    title: "Sanad Collective",
    description: "Coordinated community-focused initiative with LA based fashion StartUp, designed experiential cultural event setups, managed merchandise, and drove field sales through consistent brand perception and reliable event presence.",
    category: "freelance",
    image: "/lovable-uploads/63f15ab1-ea93-430b-a090-7ab0c7be2071.png",
    tags: ["Community Building", "Merchandise Coordination", "Event Planning", "Creative Direction"],
    featured: true,
    galleryImages: [
      "/lovable-uploads/c4f56dc6-6762-48b2-8779-0455125a5a55.png",
      "/IMG_8987.MP4",
      "/lovable-uploads/a71b2e51-73ee-4780-a896-5e2ca711f0eb.png",
      "/lovable-uploads/0d391479-77e0-4dbe-a7e6-a3c56e375b34.png",
      "/lovable-uploads/b9d0ce3b-183e-4e13-ba30-8d7d3c20673c.png"
    ],
    tools: ["Community Building", "Merchandise Coordination", "Event Planning", "Creative Direction"],
    summary: "Coordinated community-focused initiative with LA based fashion StartUp, designed experiential cultural event setups, managed merchandise, and drove field sales through consistent brand perception and reliable event presence.",
    challenge: "Building sustainable infrastructure with limited funding and volunteer resources",
    solution: "Established partnership model with established organizations to share resources and expertise"
  },
  {
    id: 5,
    title: "Zapshot",
    description: "Coordinated social media campaigns and events; created visual assets to support user growth and engagement, provided marketing consultation and brand ambassadorship program strategy.",
    category: "workExperience",
    image: "/lovable-uploads/09dcce3a-805a-4d5e-bd8e-16730a9fc7b8.png",
    tags: ["Marketing Consultation", "Visual Asset Production", "Project Management", "Brand Ambassadorship"],
    featured: false,
    galleryImages: [
      "/lovable-uploads/zapshot_1.png",
      "/lovable-uploads/zapshot_2.png",
      "/lovable-uploads/zapshot_3.png",
      "/lovable-uploads/ZAPSHOT_4.mp4"
    ],
    tools: ["Slack", "Final Cut Pro X", "Adobe Creative Suite", "Logic Pro X", "Discord"],
    summary: "Coordinated social media campaigns and events; created visual assets to support user growth and engagement, provided marketing consultation and brand ambassadorship program strategy.",
    challenge: "Fragmented campaign coordination and brand-user alignment, reduced marketing efficiency, event impact, and target demographic usage on the platform.",
    solution: "Developed revitalized and high-performing Brand Ambassadorship Program accompanied by various visual content, improved campaign ROI through post-event KPI analysis."
  },
  {
    id: 4,
    title: "Fanhaven",
    description: "Developed visual suite and brand identity for ticketing-based tech StartUp, producing visual assets and collaborating with founders to align visuals with their vision.",
    category: "workExperience",
    image: "/lovable-uploads/138bbbc6-fbd8-4f91-9629-7c41912d0eb1.png",
    tags: ["Creative Brand Direction", "Graphic Design", "Experiential Marketing"],
    galleryImages: [
      "/lovable-uploads/5e4ad684-6e4d-4d6e-a521-98a4c38905a2.png",
      "/lovable-uploads/d1a44aec-e320-4fa3-84e1-295a78558466.png",
      "/lovable-uploads/b9fa0ee3-71c9-46d0-9d6f-4678927075f6.png",
      "/lovable-uploads/a18e440d-0031-4e69-9534-236c64320357.png",
      "/lovable-uploads/138bbbc6-fbd8-4f91-9629-7c41912d0eb1.png"
    ],
    tools: ["Figma", "Notion", "Adobe Photoshop"],
    challenge: "To create a cohesive branding and visual identity for an early-stage StartUp with a scare budget and resources in time for StartUp showcases.",
    solution: "Led the development of a unified temporary brand system—including logo, tangible materials, and digital assets—that effectively communicated the company's identity and increased brand recognition during experiential events.",
    summary: "Developed visual suite and brand identity for ticketing-based tech StartUp, producing visual assets and collaborating with founders to align visuals with their vision."
  },
  {
    id: 3,
    title: "Waxheart",
    description: "Fully produced over 15+ original songs for game soundtrack, aligning audio design with game's visual themes and coordinating team workflows.",
    category: "freelance",
    image: "/lovable-uploads/3c4c6ca8-6600-4cb7-8c20-dbf785abe7b8.png",
    tags: ["Music Production", "Cross Functional Teamwork", "Project Management"],
    galleryImages: [
      "/lovable-uploads/143ea6cc-d7c1-41a0-afc4-0061761ee4e4.png",
      "/lovable-uploads/2d3a44f3-711d-4b1a-9530-0ed3ae1de31d.png", 
      "/lovable-uploads/2179b774-fd02-437a-9a15-2c8a63e22638.png",  
      "/lovable-uploads/72f25768-03a2-4fec-8227-0d1b9c3e3e91.png"   
    ],
    tools: ["Logic Pro X", "Trello", "Discord", "Github"],
    summary: "Fully produced over 15+ original songs for game soundtrack, aligning audio design with game's visual themes and coordinating team workflows.",
    challenge: "To interpret the game owner's vision and create a compelling original game soundtrack with a remote team that initially lacked a structured cross-functional collaboration approach for audio-visual integration.",
    solution: "Coordinated more cohesive schedule to flesh out founder's vision with all creative teams, leading to and more focused vision that audio team could much more effectively produce music to. Created over 15+ fully original tracks for game using Logic Pro X, meeting weekly with creative teams.",
    audioTracks: [
      { title: "Vista Theme", url: "/VISTA 5 PORT copy.mp3" },
      { title: "Marketplace Theme", url: "/MARKETPLACE THEME.mp3" },
      { title: "Dread Theme", url: "/MUS_trashdrumz copy.mp3" },
      { title: "Dark Barn Theme", url: "/WAXHEART BARN_1 copy.mp3" },
      { title: "Chase Theme", url: "/VISTA WIP WAXHEART.mp3" }
    ]
  },
  {
    id: 2,
    title: "Death to Love",
    description: "Fully produced and managed three original punk songs for Co-Op Beat 'em-Up indie game OST in Logic Pro X, interpreting creative vision from game owner and lead; game implementation done in Wwise.",
    category: "freelance",
    image: "/lovable-uploads/785f2061-da37-4b1a-9e6f-8d3b04d614d9.png",
    tags: ["Music Production", "Cross Functional Teamwork", "Creative Interpretation", "Project Management"],
    galleryImages: [
      "/lovable-uploads/80a5e455-53c7-40c3-9461-1bcac3d6fa4e.png",
      "/lovable-uploads/ffa1a0e6-6c72-45a9-bcf9-80111fb31e73.png",
      "/lovable-uploads/9b18ae23-bc91-4807-8a33-5ff7771a0c33.png"
    ],
    tools: ["Logic Pro X", "Trello", "Discord", "Wwise"],
    summary: "Fully produced and managed three original punk songs for Co-Op Beat 'em-Up indie game OST in Logic Pro X, interpreting creative vision from game owner and lead; game implementation done in Wwise.",
    challenge: "To fully produce an original game soundtrack and direct audio implementation with a fully remote team and little to no budget within a short time frame, working only with game owner's minimal creative input and concept art.",
    solution: "Took charge and created a variety of demos to gauge creative team's taste and vision, allowing me to narrow down game owner's sonic goals for project. Then produced three original songs along with stems and one shot stings in a timely manner in Logic Pro X.",
    audioTracks: [
      { title: "Main Menu and Dialogue Theme", url: "/Main Menu and Dialogue Theme .mp3" },
      { title: "Battle Theme 1", url: "/Battle Theme 1.mp3" },
      { title: "Battle Theme 2", url: "/Battle Theme 2.mp3" }
    ]
  }
];
