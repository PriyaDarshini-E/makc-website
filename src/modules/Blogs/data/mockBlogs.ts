export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string; // ISO date for schema
  displayDate: string; // Pretty date for UI
  category: string;
  imageUrl: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  content: BlogSection[];
}

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string };

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const mockBlogs: BlogPost[] = [
  {
    id: "1",
    slug: slugify("The Future of Smart Lighting: Beyond Just Bulbs"),
    title: "The Future of Smart Lighting: Beyond Just Bulbs",
    excerpt:
      "Discover how intelligent lighting systems are evolving to enhance mood, improve sleep cycles, and drastically reduce energy consumption in modern homes.",
    author: "Elena Rodriguez",
    authorRole: "Lighting Design Lead",
    date: "2026-06-12",
    displayDate: "Jun 12, 2026",
    category: "Lighting",
    imageUrl:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
    readTime: "5 min read",
    tags: ["Smart Lighting", "Circadian", "Energy Saving", "Wellness"],
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Five years ago, a 'smart light' meant a Wi-Fi bulb you could turn off with your phone. The category has matured considerably since. Today's intelligent lighting systems are quietly becoming the most impactful wellness technology in the modern home — touching mood, sleep, focus and energy bills without a single app tap.",
      },
      {
        type: "heading",
        text: "From on/off to scenes",
      },
      {
        type: "paragraph",
        text: "The single biggest shift is the move away from individual control toward scene-based living. A 'Good Morning' scene gradually warms the bedroom to 3000K, raises blinds and brings the kitchen to task-lighting brightness — all triggered by a single bedside button or a 6:30am schedule. The user no longer chooses a colour temperature or a brightness; the room simply feels right.",
      },
      {
        type: "heading",
        text: "Circadian tuning: light as a health signal",
      },
      {
        type: "paragraph",
        text: "Tunable-white fixtures can shift colour temperature across the day to mimic natural daylight cycles. Cooler, blue-leaning light in the morning suppresses melatonin and sharpens focus; warmer amber tones in the evening cue the body for sleep. For Indian homes where natural light is abundant, circadian tuning is most valuable in windowless rooms — home offices, media rooms, internal corridors — where the body loses its daylight cues entirely.",
      },
      {
        type: "heading",
        text: "The energy story is no longer the headline",
      },
      {
        type: "paragraph",
        text: "LED efficiency has hit a wall. The next 30% of energy savings will come from occupancy awareness, daylight harvesting and behavioural change — not from slightly more efficient diodes. A well-tuned system can quietly dim a hallway to 10% when no one is there, and bump it to 80% the moment a footstep is detected.",
      },
      {
        type: "list",
        items: [
          "Dimmable fixtures across every circuit — not just the 'feature' rooms",
          "Scene buttons at every entry, never more than 3 steps away",
          "Occupancy + daylight sensors in hallways, bathrooms and external zones",
          "Tunable-white in primary living spaces and bedrooms",
          "A single app for adjustments, but rarely needed in daily use",
        ],
      },
      {
        type: "quote",
        text: "The best smart lighting is the lighting you never have to think about. It just feels right, every time you walk in.",
        author: "Elena Rodriguez",
      },
      {
        type: "paragraph",
        text: "If you're planning a new build or a major renovation, the conversation to have with your integrator is not 'which bulbs?' — it's 'which scenes, in which rooms, triggered by which moments?' Get that right, and the rest is implementation.",
      },
    ],
  },
  {
    id: "2",
    slug: slugify("Securing Your Connected Home: A Comprehensive Guide"),
    title: "Securing Your Connected Home: A Comprehensive Guide",
    excerpt:
      "With the rise of IoT devices, securing your home network is more critical than ever. Learn the top strategies to keep your smart home safe from cyber threats.",
    author: "David Chen",
    authorRole: "Security Systems Engineer",
    date: "2026-05-28",
    displayDate: "May 28, 2026",
    category: "Security",
    imageUrl:
      "https://images.unsplash.com/photo-1558002038-bf1dfeb33965?q=80&w=2070&auto=format&fit=crop",
    readTime: "8 min read",
    tags: ["Cybersecurity", "CCTV", "Biometric Locks", "Network Security"],
    content: [
      {
        type: "paragraph",
        text: "Every camera, door lock and smart bulb you bring into your home is, technically, a tiny computer connected to your network. Most homeowners secure their Wi-Fi router with a strong password and call it a day. That's the equivalent of installing a fortress door on a tent. The threat surface of a modern smart home is far larger than people realise — and the consequences of a breach are no longer just 'someone sees my camera'.",
      },
      {
        type: "heading",
        text: "Three layers, not one",
      },
      {
        type: "paragraph",
        text: "Effective home security in 2026 stacks three independent layers: physical (locks, sensors, barriers), network (segmentation, firewalls, monitoring) and behavioural (who has access, how credentials are managed). If any single layer fails, the others should still hold.",
      },
      {
        type: "heading",
        text: "1. Network segmentation is non-negotiable",
      },
      {
        type: "paragraph",
        text: "Your smart devices should never share a network with your laptop, phone or work computer. A managed switch with VLANs — or a router that supports guest/IoT segmentation — isolates the smart-home side so a compromised bulb cannot pivot to your laptop's files. This is the single highest-impact change most homes can make, and it takes an afternoon.",
      },
      {
        type: "heading",
        text: "2. Treat credentials like a professional",
      },
      {
        type: "list",
        items: [
          "Unique password per device — use a password manager, never reuse",
          "Enable two-factor authentication on every cloud account that supports it",
          "Disable remote access to cameras unless you specifically need it",
          "Patch firmware quarterly — set calendar reminders if your devices don't auto-update",
          "Replace default usernames ('admin', 'root') on every device",
        ],
      },
      {
        type: "heading",
        text: "3. Physical security still matters most",
      },
      {
        type: "paragraph",
        text: "No firewall in the world will help if someone kicks in the back door. A serious smart-home security deployment combines: AI-capable CCTV with on-device analytics (so footage stays on-site), biometric or PIN door locks with mechanical fallback, motion sensors at every ground-floor entry, and panic buttons in the master bedroom and kitchen.",
      },
      {
        type: "quote",
        text: "Security isn't a product you buy. It's a posture you maintain — physical, digital and procedural, all three.",
        author: "David Chen",
      },
      {
        type: "paragraph",
        text: "The good news: you don't need to be a security professional to live in a secure smart home. You need a few clear decisions, a competent installer and the discipline to keep firmware current. Start with the network, then layer up.",
      },
    ],
  },
  {
    id: "3",
    slug: slugify("Automating Your Morning Routine: Wake Up to Perfection"),
    title: "Automating Your Morning Routine: Wake Up to Perfection",
    excerpt:
      "Imagine your house waking up with you. From automated blinds to the perfect brew of coffee waiting for you, see how automation can transform your mornings.",
    author: "Sarah Jenkins",
    authorRole: "Automation Specialist",
    date: "2026-05-15",
    displayDate: "May 15, 2026",
    category: "Automation",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    readTime: "4 min read",
    tags: ["Routines", "Blinds", "Climate", "Coffee"],
    content: [
      {
        type: "paragraph",
        text: "The most underrated benefit of home automation isn't the cool factor — it's the mornings. A well-tuned morning routine removes 10 to 15 small decisions from your day before you've even had coffee, and those decisions are the most expensive ones (in cognitive load terms).",
      },
      {
        type: "heading",
        text: "The anatomy of a great morning scene",
      },
      {
        type: "paragraph",
        text: "A truly good morning routine isn't a single trigger; it's a cascade that starts gently and ramps. Bedside lamps begin warming 20 minutes before the alarm. The AC adjusts from sleep to comfort mode 15 minutes before wake. Blinds in the bedroom open to 30% — enough to start the body's cortisol response without the harsh full-sun wake. The bathroom geyser switches on 10 minutes before your scheduled shower. And by the time you're dressed, the kitchen is at task-lighting brightness and the coffee is ready.",
      },
      {
        type: "heading",
        text: "Why the cascade matters",
      },
      {
        type: "paragraph",
        text: "A single 'all on at 6:30am' trigger feels jarring. The human body doesn't snap to attention; it ramps. Your home's lighting, climate and audio should follow the same curve. Done well, the wake-up is so subtle that on weekends, when the routine doesn't run, the house feels strangely quiet.",
      },
      {
        type: "heading",
        text: "What to automate first",
      },
      {
        type: "list",
        items: [
          "Bedroom blinds (motorised, scheduled by sunrise — not a fixed time)",
          "Bathroom geyser (scheduled for 10 minutes before your shower)",
          "Coffee machine (smart plug on a 6:25am trigger)",
          "Air conditioning (sleep → comfort mode 15 minutes before wake)",
          "Hallway and kitchen lights (10% at first, full at 'leaving bedroom')",
          "Audio (a specific morning playlist, low volume, no jarring news)",
        ],
      },
      {
        type: "quote",
        text: "The point of a smart morning isn't to wake you up faster — it's to remove the dozen tiny decisions that drain you before the day has even started.",
        author: "Sarah Jenkins",
      },
      {
        type: "paragraph",
        text: "If you only automate one part of your home, automate this. The compound effect on your day is larger than any other single change.",
      },
    ],
  },
  {
    id: "4",
    slug: slugify("Building a Robust Home Network for Seamless Streaming"),
    title: "Building a Robust Home Network for Seamless Streaming",
    excerpt:
      "Tired of buffering? Learn how to set up a commercial-grade home Wi-Fi network that handles 4K streaming, gaming, and smart devices without breaking a sweat.",
    author: "Michael Chang",
    authorRole: "Network Infrastructure Lead",
    date: "2026-04-02",
    displayDate: "Apr 02, 2026",
    category: "Networking",
    imageUrl:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    readTime: "6 min read",
    tags: ["Mesh Wi-Fi", "Cabling", "Gaming", "Streaming"],
    content: [
      {
        type: "paragraph",
        text: "Ask any integrator what gets blamed for smart-home problems and the answer is almost always the network. Slow cameras, laggy voice control, dropped music streams, ghost-disconnected sensors — 80% of the time, the device is fine, the network is the problem. Building a robust home network is the unglamorous foundation that makes everything else work.",
      },
      {
        type: "heading",
        text: "Wire first, Wi-Fi second",
      },
      {
        type: "paragraph",
        text: "The single most impactful thing you can do for a large home is run Cat6A cable to every room during construction or renovation. Even in the age of mesh Wi-Fi, a wired backhaul outperforms wireless by an order of magnitude in throughput, latency and reliability. Every TV, every desktop, every access point should be on a cable. Wi-Fi is for phones, tablets and the occasional laptop — not for the infrastructure of the house.",
      },
      {
        type: "heading",
        text: "What 'enterprise-grade' actually means at home",
      },
      {
        type: "list",
        items: [
          "A managed switch (48-port, layer 2/3) in a central rack",
          "Multiple Wi-Fi 6E / Wi-Fi 7 access points, ceiling-mounted, one per floor / 1500 sqft",
          "VLAN separation: home, IoT, guest, work",
          "A real firewall (pfSense, OPNsense or a UniFi gateway)",
          "UPS backup for the core network gear — at least 30 minutes of runtime",
          "Network monitoring with alerts when a device goes offline",
        ],
      },
      {
        type: "heading",
        text: "The streaming test",
      },
      {
        type: "paragraph",
        text: "A robust home network should comfortably support 8+ simultaneous 4K HDR streams, two online gaming sessions, a work-from-home video call, and 40+ IoT devices — all without anyone noticing. If your current network can't do that, the issue is almost always either (a) the access point placement, (b) the backhaul, or (c) the internet connection. In that order.",
      },
      {
        type: "quote",
        text: "A smart home is only as reliable as the network underneath it. Everything you see — the lights, the locks, the speakers — is just a polite guest on someone else's infrastructure.",
        author: "Michael Chang",
      },
      {
        type: "paragraph",
        text: "If you're building a new home or doing major renovations, invest in the network before you invest in the smart-home features. It's the part nobody sees, and the part that makes everything else feel magical.",
      },
    ],
  },
  {
    id: "5",
    slug: slugify("Voice Control vs. App Control: Finding Your Perfect Balance"),
    title: "Voice Control vs. App Control: Finding Your Perfect Balance",
    excerpt:
      "While voice assistants are convenient, dedicated apps offer granular control. We explore the pros and cons of both and how to integrate them effectively.",
    author: "Elena Rodriguez",
    authorRole: "Lighting Design Lead",
    date: "2026-03-18",
    displayDate: "Mar 18, 2026",
    category: "Automation",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    readTime: "7 min read",
    tags: ["Voice Assistants", "UX", "App Control", "Routines"],
    content: [
      {
        type: "paragraph",
        text: "Walk into any smart-home showroom and you'll find a religious war being fought: voice vs. app. The truth, as usual, is that both sides are partially right and partially wrong. The best smart homes use both — and crucially, neither for everything.",
      },
      {
        type: "heading",
        text: "Where voice genuinely wins",
      },
      {
        type: "list",
        items: [
          "Hands-busy moments: cooking, carrying groceries, holding a child",
          "One-shot actions: 'dim the living room to 40%', 'close the bedroom blinds'",
          "Quick scene triggers: 'movie mode', 'goodnight'",
          "Accessibility: voice is a lifeline for many users with mobility constraints",
        ],
      },
      {
        type: "paragraph",
        text: "For these moments, voice is genuinely better than any app. The latency is lower (no unlock, no tap, no scroll) and the cognitive load is near zero. The whole point of a smart home is to remove friction — voice removes more friction than anything else, for the right actions.",
      },
      {
        type: "heading",
        text: "Where voice falls down",
      },
      {
        type: "paragraph",
        text: "Voice is terrible for anything nuanced. 'Set the kitchen pendants to 30% warm white, with the island pendants at 60% neutral and the under-cabinet at 80%' is something you might do once during setup, never again. Voice is also bad for the 3am 'is that light actually off?' check — whispering in the dark rarely works reliably. And for guests, voice can be a barrier rather than a help.",
      },
      {
        type: "heading",
        text: "Where apps genuinely win",
      },
      {
        type: "list",
        items: [
          "Configuration and one-time setup",
          "Granular control (per-fixture, per-circuit, per-scene-parameter)",
          "Visual feedback (camera feeds, energy dashboards, status pages)",
          "Sharing access with family members",
          "Reviewing history and logs",
        ],
      },
      {
        type: "heading",
        text: "The right balance",
      },
      {
        type: "paragraph",
        text: "A well-designed smart home uses voice for actions and apps for configuration. Touch panels and physical buttons handle the middle ground — the 20 or so daily actions that aren't worth a voice command but are worth a tap. Apps live in the background for setup, troubleshooting and the rare adjustment.",
      },
      {
        type: "quote",
        text: "Voice is the remote control of the smart home — best for moments, not for managing your life. Don't try to make it do everything.",
        author: "Elena Rodriguez",
      },
      {
        type: "paragraph",
        text: "If your smart home feels like a chore to use, the issue is almost never the technology. It's that you've tried to force one interface to do a job it wasn't built for. The homes that feel magical use the right tool for each moment.",
      },
    ],
  },
  {
    id: "6",
    slug: slugify("Aesthetics Meets Technology: Invisible Speakers and Hidden Tech"),
    title: "Aesthetics Meets Technology: Invisible Speakers and Hidden Tech",
    excerpt:
      "You don't have to sacrifice interior design for high tech. Explore the world of invisible architectural speakers and hidden smart home displays.",
    author: "James Wilson",
    authorRole: "Interior Technology Specialist",
    date: "2026-02-24",
    displayDate: "Feb 24, 2026",
    category: "Design",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    readTime: "5 min read",
    tags: ["Invisible Speakers", "Interior Design", "Home Theater", "Discreet Tech"],
    content: [
      {
        type: "paragraph",
        text: "There's a long-running myth in the smart-home world: that more technology means more visible technology. The opposite is now true. The best 2026 installations look like a beautifully designed home — because all the gear is in the walls, the ceilings and the rack room, completely out of sight.",
      },
      {
        type: "heading",
        text: "Invisible architectural audio",
      },
      {
        type: "paragraph",
        text: "In-wall and in-ceiling speakers have existed for two decades, but the latest generation is genuinely invisible. The drivers mount inside the wall, the surface is finished with plaster or paint, and the speaker grille is replaced with a micro-perforated membrane that disappears under any paint or wallpaper. The result: a room with full-range, room-filling audio, and zero visible technology. The same is now true for subwoofers — they're vibration-cancelled and fit inside a standard stud cavity.",
      },
      {
        type: "heading",
        text: "Hidden displays and controls",
      },
      {
        type: "list",
        items: [
          "Retractable kitchen TVs that rise from inside the cabinetry",
          "Mirror displays that look like normal mirrors until activated",
          "Touch panels that recess into the wall when not in use",
          "Projectors with motorized lenses that drop from ceiling coffers",
          "Concealed cable management with brush grommets and floor pockets",
        ],
      },
      {
        type: "paragraph",
        text: "The point isn't to hide the technology for the sake of it. It's to let the architecture and the interior design lead. A 16-speaker Dolby Atmos home theater with a 130-inch motorized screen should still feel like a living room, not a cinema.",
      },
      {
        type: "heading",
        text: "When visible is the right answer",
      },
      {
        type: "paragraph",
        text: "There are moments when visible technology is the correct choice: a sculptural pendant light is meant to be seen, a vintage radio reimagined as a smart speaker is part of the room's character, a touch panel on the kitchen island is faster than any voice command. The best designers don't hide everything — they curate what stays visible and what disappears.",
      },
      {
        type: "quote",
        text: "The smartest home is the one where the technology is felt, not seen. The design leads, the tech follows — never the other way around.",
        author: "James Wilson",
      },
      {
        type: "paragraph",
        text: "If you're working with an architect or interior designer, bring your AV integrator into the conversation at the design stage — not after the false ceiling is closed. Most invisible-tech solutions need to be planned for at the same time as the electrical and HVAC layouts. Get that right, and your home will look better than ever, and quietly do far more than any visitor will ever realise.",
      },
    ],
  },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined =>
  mockBlogs.find((p) => p.slug === slug);

export const getRelatedPosts = (
  current: BlogPost,
  limit = 3,
): BlogPost[] => {
  const others = mockBlogs.filter((p) => p.id !== current.id);
  // Prefer same category, then fill with others
  const sameCat = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCat, ...rest].slice(0, limit);
};

export const getAllCategories = (): string[] => {
  const set = new Set(mockBlogs.map((p) => p.category));
  return ["All", ...Array.from(set)];
};
