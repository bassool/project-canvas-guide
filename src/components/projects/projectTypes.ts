
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
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    tags: ["Multimedia Production", "Design Direction", "Creative Strategy", "Project Management"],
    featured: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1508700108023-c5249f4df085?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=800&h=600&fit=crop"
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
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    tags: ["Community Building", "Merchandise Coordination", "Event Planning", "Creative Direction"],
    featured: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop"
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
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["Marketing Consultation", "Visual Asset Production", "Project Management", "Brand Ambassadorship"],
    featured: false,
    galleryImages: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop", 
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
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
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    tags: ["Creative Brand Direction", "Graphic Design", "Experiential Marketing"],
    galleryImages: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
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
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    tags: ["Music Production", "Cross Functional Teamwork", "Project Management"],
    galleryImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop", 
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",  
      "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&h=600&fit=crop"   
    ],
    tools: ["Logic Pro X", "Trello", "Discord", "Github"],
    summary: "Fully produced over 15+ original songs for game soundtrack, aligning audio design with game's visual themes and coordinating team workflows.",
    challenge: "To interpret the game owner's vision and create a compelling original game soundtrack with a remote team that initially lacked a structured cross-functional collaboration approach for audio-visual integration.",
    solution: "Coordinated more cohesive schedule to flesh out founder's vision with all creative teams, leading to and more focused vision that audio team could much more effectively produce music to. Created over 15+ fully original tracks for game using Logic Pro X, meeting weekly with creative teams.",
    audioTracks: [
      { title: "Vista Theme", url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" },
      { title: "Marketplace Theme", url: "https://www.soundjay.com/misc/sounds/bell-ringing-04.mp3" },
      { title: "Dread Theme", url: "https://www.soundjay.com/misc/sounds/bell-ringing-01.mp3" },
      { title: "Dark Barn Theme", url: "https://www.soundjay.com/misc/sounds/bell-ringing-02.mp3" },
      { title: "Chase Theme", url: "https://www.soundjay.com/misc/sounds/bell-ringing-03.mp3" }
    ]
  },
  {
    id: 2,
    title: "Death to Love",
    description: "Fully produced and managed three original punk songs for Co-Op Beat 'em-Up indie game OST in Logic Pro X, interpreting creative vision from game owner and lead; game implementation done in Wwise.",
    category: "freelance",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    tags: ["Music Production", "Cross Functional Teamwork", "Creative Interpretation", "Project Management"],
    galleryImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-4eb9a8efeb07?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
    ],
    tools: ["Logic Pro X", "Trello", "Discord", "Wwise"],
    summary: "Fully produced and managed three original punk songs for Co-Op Beat 'em-Up indie game OST in Logic Pro X, interpreting creative vision from game owner and lead; game implementation done in Wwise.",
    challenge: "To fully produce an original game soundtrack and direct audio implementation with a fully remote team and little to no budget within a short time frame, working only with game owner's minimal creative input and concept art.",
    solution: "Took charge and created a variety of demos to gauge creative team's taste and vision, allowing me to narrow down game owner's sonic goals for project. Then produced three original songs along with stems and one shot stings in a timely manner in Logic Pro X.",
    audioTracks: [
      { title: "Main Menu and Dialogue Theme", url: "https://www.soundjay.com/misc/sounds/bell-ringing-06.mp3" },
      { title: "Battle Theme 1", url: "https://www.soundjay.com/misc/sounds/bell-ringing-07.mp3" },
      { title: "Battle Theme 2", url: "https://www.soundjay.com/misc/sounds/bell-ringing-08.mp3" }
    ]
  }
];
