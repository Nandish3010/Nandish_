// Content authored strictly from the approved concept brief. Proper nouns preserved exactly:
// Supertails, Wispr, coins, Emergent. No facts invented; neutral placeholders where resume specifics would go.

export const SEASONS = [
  {
    id: 1,
    code: "S1",
    name: "College & Foundations",
    tagline: "From lecture halls to the first real break.",
    accent: "#10B981",
  },
  {
    id: 2,
    code: "S2",
    name: "The Supertails Growth Engine",
    tagline: "Operations intern to Manager, Data & AI, one decision at a time.",
    accent: "#8B5CF6",
  },
  {
    id: 3,
    code: "S3",
    name: "The Wispr Level",
    tagline: "Locked until Season 2 is complete.",
    accent: "#F59E0B",
  },
];

export const LEVELS = [
  // ---------------- SEASON 1 ----------------
  {
    id: "1.1",
    season: 1,
    title: "Choosing the Stream",
    objective: "Pick the engineering stream for the next four years.",
    situation:
      "College is about to start and the first big call is the stream. Everyone has an opinion about which branch is 'safe'. You want to pick something that connects to where the world is going.",
    choices: [
      "Computer science engineering",
      "Electrical and electronics engineering",
      "Mechanical engineering",
    ],
    actualMove: "Nandish chose Electrical and electronics engineering.",
    rationale:
      "He believed the future is EV and wanted to contribute towards that global change.",
    impact: ["Electrical and electronics engineering", "Bet on the EV future"],
    badge: "Future Builder",
    match: 1,
  },
  {
    id: "1.2",
    season: 1,
    title: "The Class Rep Call",
    objective: "Take the class representative role, or pass on it.",
    situation:
      "You are offered the chance to be the class representative. It means being the link between students and professors, and handling everyone's concerns on top of your own work.",
    choices: ["Take up the class rep role", "Pass on it and focus on your own work"],
    actualMove: "Nandish took the class representative role.",
    rationale:
      "He believed he was a good leader and could communicate things between students and professors in a good way.",
    impact: ["Became class representative", "Bridged students and professors", "First leadership role"],
    badge: "The Bridge",
    match: 0,
  },
  {
    id: "1.3",
    season: 1,
    title: "The COVID Year",
    objective: "Decide what to do with the time at home.",
    situation:
      "COVID hits and college moves online. Suddenly there is a lot of free time at home and nobody is checking how you spend it.",
    choices: ["Focus on studies", "Network with other students", "Watch anime"],
    actualMove: "Nandish chose anime. And it was a failure.",
    rationale:
      "That failure became the turning point. It made him rethink what he actually wanted and changed his life goal away from electrical engineering.",
    impact: ["Chose anime", "Learned from a failure", "Changed his life goal"],
    badge: "Plot Twist",
    match: 2,
  },
  {
    id: "1.4",
    season: 1,
    title: "The Placement Club",
    objective: "Take the placement club role, or focus on studies.",
    situation:
      "You are offered a role in the placement club. It means meeting many different companies and helping them coordinate all the placement requirements at college. It also means less time for studies.",
    choices: ["Take up the placement club role", "Reject it and focus purely on studies"],
    actualMove:
      "Nandish took up the role and met multiple companies on campus, helping them coordinate placement requirements at his college.",
    rationale:
      "He believed he could make better connections with companies when they are on campus.",
    impact: ["Joined the placement club", "Met companies on campus", "Built real connections"],
    badge: "Connector",
    match: 0,
  },
  {
    id: "1.5",
    season: 1,
    title: "Landing the Supertails Internship",
    objective: "Convert the opportunity into the first break.",
    situation:
      "The conversations pay off and an internship is on the table at Supertails. This is the first real break: the moment college stops being theory and becomes a job with real stakes.",
    choices: [
      "Hold out for something more prestigious.",
      "Take the Supertails internship and go deep.",
      "Take it but keep one foot in other options.",
    ],
    actualMove:
      "Nandish took the internship at Supertails and committed to it fully, closing out Season 1 with college done and a real role secured.",
    rationale:
      "A first break is only worth it if you fully step through the door. Committing to Supertails gave him a real environment to prove himself and opened the entire Season 2 career arc.",
    impact: ["Completed college", "Internship secured at Supertails", "Season 1 complete"],
    badge: "First Break",
    match: 1,
  },

  // ---------------- SEASON 2 ----------------
  {
    id: "2.1",
    season: 2,
    title: "Operations Intern to Data Analyst",
    objective: "Turn a college-mandated internship into a career move.",
    situation:
      "College needs you to complete an internship, so you join Supertails as an operations intern. The team likes how you think and how fast you execute, and sends you into the operations center itself. On the floor, you keep noticing that every problem leaves a trail in the data. Do you stay the fast ops intern, or follow the data?",
    choices: [
      "Stay in ops and become the fastest intern on the floor.",
      "Show your interest in data and ask for a shot at analysis.",
      "Finish the internship hours and move on.",
    ],
    actualMove:
      "Nandish raised his hand for data. Supertails saw the interest and the thinking behind it, and gave him the chance to explore the data analyst role, first as a data analyst intern.",
    rationale:
      "Speed got him noticed in operations; curiosity about the data moved him beyond it. The ops floor taught him how the business really runs, which is exactly what made his analysis useful.",
    impact: ["Sent to the operations center", "Noticed for speed and thinking", "Became a data analyst intern"],
    badge: "Earned The Move",
    match: 1,
  },
  {
    id: "2.2",
    season: 2,
    title: "Business Analyst Breakthrough",
    objective: "Turn raw data into dashboards, pipelines and RCAs.",
    situation:
      "Now a business analyst at Supertails, you are handed the messy middle: scattered data, questions without clean answers, and leaders who need to know not just what happened but why. You can report numbers, or you can build the machinery that explains them.",
    choices: [
      "Pull one-off reports whenever someone asks.",
      "Build dashboards, data pipelines and run proper RCAs.",
      "Outsource the analysis and just present slides.",
    ],
    actualMove:
      "Nandish built dashboards, set up data pipelines, ran RCAs (root cause analyses) and made the target plan: what can be achieved and how to achieve it.",
    rationale:
      "Dashboards answer 'what', pipelines keep the answers fresh, and RCAs answer 'why'. Together they turn a reactive analyst into someone the business relies on to make decisions.",
    impact: ["Built dashboards", "Set up data pipelines", "Ran RCAs on key problems", "Owned target planning"],
    badge: "Root Cause",
    match: 1,
  },
  {
    id: "2.3",
    season: 2,
    title: "Nifty Vendor Portal",
    objective: "Give vendors one place for their POs, listings and numbers.",
    situation:
      "AI is changing how fast things can be built. Vendors need to check their purchase orders, update listings and see how they are doing on the platform, but today that lives in spreadsheets and back-and-forth messages.",
    choices: [
      "Keep handling vendor requests manually.",
      "Build a vendor portal where vendors can self-serve.",
      "Wait for someone else to own this.",
    ],
    actualMove:
      "Nandish built his first app: a vendor portal where vendors can see their analytics, check the POs they were given, edit their listings and track their revenue on the platform.",
    rationale:
      "Giving vendors self-serve access removed daily back-and-forth and let them act on their own numbers, turning a manual process into a product.",
    impact: ["Built his first app", "POs, listings and revenue in one place", "Gave vendors self-serve visibility"],
    badge: "Portal Live",
    match: 1,
  },
  {
    id: "2.4",
    season: 2,
    title: "The Loyalty 'coins' Project",
    objective: "Own the coins loyalty program end to end.",
    situation:
      "Retention matters as much as acquisition. Supertails is launching coins, a loyalty program that gives customers coins based on their transactions on the platform. There are many parts to own. Which one would you pick?",
    choices: [
      "Owning the go-to-market",
      "Sizing the impact",
      "Picking the top-up formula",
      "Building the hourly redemption tracker",
      "Finding funnel leaks after launch",
    ],
    actualMove:
      "Nandish owned all of it: the BRD, testing the product and the go-to-market for coins, the loyalty program that rewards customers with coins based on their transactions.",
    rationale:
      "Loyalty is where data, product and growth meet. Owning every step from sizing to launch to post-launch fixes meant nothing fell between teams.",
    impact: [
      "Owning the go-to-market",
      "Sizing the impact",
      "Picking the top-up formula",
      "Building the hourly redemption tracker",
      "Finding funnel leaks after launch",
    ],
    badge: "Coins Minted",
    match: "all",
  },
  {
    id: "2.5",
    season: 2,
    title: "From 10 Steps to 3",
    objective: "Cut the build process down to what actually matters.",
    situation:
      "Getting anything built takes 10 steps. Requests bounce between teams, wait in queues and get checked again and again. Every new tool or fix moves slowly because of the process, not the work.",
    choices: [
      "Keep the 10-step process. It is how things are done.",
      "Cut it down to 2 or 3 steps: one approval and verification.",
      "Add more review steps to be extra safe.",
    ],
    actualMove:
      "Nandish optimized the process so what previously took 10 steps now takes just 2 or 3. One is an approval step, and the other two are just verification steps most of the time.",
    rationale:
      "Most steps were not adding value, they were adding waiting. Keeping one approval and quick verification kept the control while removing the drag.",
    impact: ["10 steps down to 2 or 3", "One approval step", "Faster builds for everyone"],
    badge: "Step Cutter",
    match: 1,
  },
  {
    id: "2.6",
    season: 2,
    title: "One App, One BRD",
    objective: "Consolidate workflows and master the BRD process.",
    situation:
      "The work now spans dashboards, pipelines, vendor analytics and the coins program, all in separate places. The team is losing time switching between tools. You can keep stitching things together, or consolidate everything into a single app, which means learning to write a proper BRD and run the process end to end.",
    choices: [
      "Keep the workflows separate and document them.",
      "Consolidate the workflows into a single app and own the BRD creation process.",
      "Ask engineering to figure out the requirements themselves.",
    ],
    actualMove:
      "Nandish consolidated the scattered workflows into a single app and owned the BRD (Business Requirements Document) creation process to get it built. Today, he is Manager, Data & AI at Supertails.",
    rationale:
      "Consolidation removes friction for everyone, and the BRD is how an analyst turns a vision into something engineering can actually build. Owning that process is what separates someone who reports on work from someone who ships it.",
    impact: ["Consolidated workflows into one app", "Owned the BRD creation process", "Now Manager, Data & AI at Supertails"],
    badge: "Ship It",
    match: 1,
  },
];

// Season 3 is a single locked, non-playable finale in Phase 1.
export const SEASON3 = {
  season: 3,
  title: "The Wispr Level",
  lockedBlurb: "Complete Season 2 to unlock a preview of the final level.",
  previewTitle: "Preview: Building this very portfolio",
  previewBody:
    "The trailer rolls. Instead of writing code the usual way, Nandish is speaking out prompts, building this entire game and portfolio with Emergent and his voice. The Wispr hiring challenge becomes the level itself: the obstacle is the challenge, and the move is to build his way through it.",
  gateTitle: "One final action to unlock the full season",
  gateBody: "To unlock the full season, Wispr needs to hire Nandish.",
  gateCta: "Hire Nandish to unlock",
};

export const WISHLIST_ITEMS = [
  {
    id: "item-ergonomic-chair",
    name: "Ergonomic gaming chair with footrest",
    price: 500,
    category: "Comfort",
    reason: "Head and lumbar pillows plus a pull-out footrest, so long deep-work and voice-prompting sessions stay comfortable.",
    image: "/wishlist/chair.jpg",
  },
  {
    id: "item-standing-desk",
    name: "Adjustable electric standing desk",
    price: 850,
    category: "Workspace",
    reason: "Switch between sitting and standing through long growth-strategy sessions.",
    image: "/wishlist/standing-desk.jpg",
  },
  {
    id: "item-mic",
    name: "A decent mic for speaking out thoughts",
    price: 250,
    category: "Voice",
    reason: "Clean voice capture for speaking out prompts and ideas, the way this app was built.",
    image: "/wishlist/mic.jpg",
  },
  {
    id: "item-claude",
    name: "Claude for managing AI agents",
    price: 800,
    category: "AI",
    reason: "Run and manage the AI agents that power the automations and analytics.",
    image: "/wishlist/claude.jpg",
  },
  {
    id: "item-skydive",
    name: "A skydive, one per major launch",
    price: 600,
    category: "Adventure",
    reason: "My best ideas come from adventures. I built this portfolio on vacation, just talking to Wispr Flow, and jumped out of a plane on the same trip. Every big launch gets celebrated with a new jump somewhere new. That's me, mid-jump.",
    image: "/wishlist/skydive.jpg",
    imagePosition: "center 65%",
  },
];

export const CHARACTER = {
  hero: "https://static.prod-images.emergentagent.com/jobs/43b85d9b-55ab-4247-b88f-93276a6d53c8/images/2566cd7ed031ac28a89a631b41986b04b7b303f1de63f6bf3ce837cc57cc1c3f.jpeg",
  avatar: "https://static.prod-images.emergentagent.com/jobs/43b85d9b-55ab-4247-b88f-93276a6d53c8/images/cd803239899c19febcc44fadf259e4465eff6a3db2a6a02eb6c8040ebbc9acef.jpeg",
};

export const INTERESTS = [
  "Problem solving or problem identification",
  "AI",
  "Watching anime",
  "Doing adventure activities",
];

export const WISHLIST_GOAL = 3000;

export const PITCH = {
  title: "Why hire Nandish for Wispr",
  intro:
    "This game is the pitch. Every level is a real decision, and the pattern across all of them is the same: creativity, extreme ownership, and work over credentials.",
  skills: [
    "Growth analytics and dashboards",
    "Data pipelines and RCAs",
    "Target planning and vendor analytics",
    "Loyalty program GTM (the coins program)",
    "Workflow consolidation into a single app",
    "BRD creation and end-to-end delivery",
  ],
  projects: [
    "Dashboards, pipelines and RCAs at Supertails",
    "Target planning and the Nifty Vendor Portal",
    "The coins loyalty program, from BRD to go-to-market",
    "Consolidating workflows into a single app via the BRD process",
    "This interactive life-journey game, built with Emergent and voice",
  ],
  closing:
    "Season 3 stays locked on purpose. To unlock the full season, hire Nandish for the Wispr growth and influencer partnerships team.",
  deliverables: [{ label: "$3,000 grant note", value: "See the Work Setup Wishlist" }],
  contacts: [
    { label: "LinkedIn", value: "nandish-s-2291541a4", href: "https://www.linkedin.com/in/nandish-s-2291541a4" },
    { label: "GitHub", value: "nandish3010", href: "https://github.com/nandish3010" },
    { label: "Email", value: "nandish.s0110@gmail.com", href: "mailto:nandish.s0110@gmail.com" },
  ],
};
