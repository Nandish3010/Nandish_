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
    tagline: "Operations intern to business analyst, one decision at a time.",
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
    title: "The CGPA Dilemma",
    objective: "Balance college with real work.",
    situation:
      "College is in full swing. Lectures, exams and attendance all compete for your time, but the work that actually teaches you (real projects, real responsibility) lives outside the syllabus. Chasing a perfect grade would mean saying no to the hands-on work that excites you. Chasing the work could pull your CGPA down.",
    choices: [
      "Go all-in on academics and protect a top CGPA.",
      "Split time pragmatically: pass comfortably, pour the rest into real work.",
      "Drop the real work entirely until after graduation.",
    ],
    actualMove:
      "Nandish chose the real work. He accepted that his final CGPA would land at 7.33 and treated it as a deliberate trade, not an accident.",
    rationale:
      "The bet was simple: skills and shipped work compound faster than a decimal on a transcript. A 7.33 that comes with real projects and real ownership is worth more to the kind of teams he wanted to join than a higher number with nothing behind it. Work over credentials.",
    impact: ["Final CGPA: 7.33", "Prioritised hands-on work", "Built a 'work over credentials' mindset"],
    badge: "Trade-Off Thinker",
  },
  {
    id: "1.2",
    season: 1,
    title: "Meeting the Companies",
    objective: "Turn campus meetings into a real opportunity.",
    situation:
      "Companies are visiting campus and running meetings and internship rounds. Everyone is optimising for the safest, best-known name. You have limited shots and have to decide how to show up, and which outcomes are actually worth chasing.",
    choices: [
      "Apply everywhere and let the numbers decide.",
      "Target places where you can learn fast and own real problems.",
      "Wait for the single 'dream' company and ignore the rest.",
    ],
    actualMove:
      "Nandish went into the company meetings and internship rounds focused on where he could do real work and grow, rather than chasing names for the sake of it.",
    rationale:
      "Early in a career, the best internship is the one that hands you real responsibility. He optimised meetings and conversations around learning velocity and ownership, which is exactly what set up the next level.",
    impact: ["Met companies on campus", "Filtered for learning and ownership", "Set up the internship break"],
    badge: "Signal Over Noise",
  },
  {
    id: "1.3",
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
      "A first break is only worth it if you fully step through the door. Committing to Supertails gave him a real environment to prove the 'work over credentials' bet and opened the entire Season 2 career arc.",
    impact: ["Completed college", "Internship secured at Supertails", "Season 1 complete"],
    badge: "First Break",
  },

  // ---------------- SEASON 2 ----------------
  {
    id: "2.1",
    season: 2,
    title: "Operations Intern to Data Analyst",
    objective: "Earn the move from operations into data.",
    situation:
      "You start at Supertails as an operations intern. The work is hands-on and messy, but you keep noticing that the real leverage sits in the data behind the operations. Staying 'just the ops intern' is comfortable. Pushing toward data means proving you can do work nobody asked you for yet.",
    choices: [
      "Master the operations role and stay in your lane.",
      "Use the ops vantage point to start doing data work and prove the value.",
      "Ask for the data title first, then learn it later.",
    ],
    actualMove:
      "Nandish used his operations seat to move onto the data analyst path at Supertails, letting the quality of the data work make the case for the transition.",
    rationale:
      "Operations gave him ground truth about how the business actually ran. Turning that into analysis made the shift into a data analyst role a natural next step rather than a leap of faith for the team.",
    impact: ["Operations intern to data analyst path", "Earned the move through work", "Found his leverage in data"],
    badge: "Earned The Move",
  },
  {
    id: "2.2",
    season: 2,
    title: "The Break",
    objective: "Step away for personal reasons, then come back stronger.",
    situation:
      "Momentum is building, and then life intervenes. For personal reasons you need to step away for three to four months. The easy narrative says a gap will stall everything. The honest choice is to take the time you actually need.",
    choices: [
      "Push through and ignore the personal situation.",
      "Take the three-to-four month break for personal reasons.",
      "Quit entirely and restart somewhere new later.",
    ],
    actualMove:
      "Nandish took a three-to-four month break for personal reasons, then returned to Supertails and picked the journey back up.",
    rationale:
      "Sustainable careers are not straight lines. Taking the break honestly and returning with intent is what made the business analyst chapter possible, instead of burning out or walking away.",
    impact: ["Three-to-four month break", "Returned to Supertails", "Protected long-term momentum"],
    badge: "The Comeback",
  },
  {
    id: "2.3",
    season: 2,
    title: "Business Analyst Breakthrough",
    objective: "Turn raw data into dashboards, pipelines and RCAs.",
    situation:
      "Back at Supertails and now on the business analyst path, you are handed the messy middle: scattered data, questions without clean answers, and leaders who need to know not just what happened but why. You can report numbers, or you can build the machinery that explains them.",
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
  },
  {
    id: "2.4",
    season: 2,
    title: "Nifty Vendor Portal used by vendors for purchase orders listing and update",
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
  },
  {
    id: "2.5",
    season: 2,
    title: "The Loyalty 'coins' Project",
    objective: "Own the coins loyalty program end to end.",
    situation:
      "Retention matters as much as acquisition. Supertails is launching coins, a loyalty program that gives customers coins based on their transactions on the platform. There are many parts to own. Which one would you pick?",
    choices: [
      "I own the go-to-market",
      "Sizing the impact",
      "Picking the top of formula",
      "Building the algorithm to occur",
      "Finding final leaks after launch",
    ],
    actualMove:
      "Nandish owned all of it: the BRD, testing the product and the go-to-market for coins, the loyalty program that rewards customers with coins based on their transactions.",
    rationale:
      "Loyalty is where data, product and growth meet. Owning every step from sizing to launch to post-launch fixes meant nothing fell between teams.",
    impact: [
      "I own the go-to-market",
      "Sizing the impact",
      "Picking the top of formula",
      "Building the algorithm to occur",
      "Finding final leaks after launch",
    ],
    badge: "Coins Minted",
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
    id: "item-standing-desk",
    name: "Adjustable electric standing desk",
    price: 850,
    category: "Workspace",
    reason: "Switch between sitting and standing through long growth-strategy sessions.",
    image: "https://images.pexels.com/photos/8001034/pexels-photo-8001034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "item-mic",
    name: "A decent mic for speaking out thoughts",
    price: 300,
    category: "Voice",
    reason: "Clean voice capture for speaking out prompts and ideas, the way this app was built.",
    image: "https://images.unsplash.com/photo-1625123628039-6053583b86cc?crop=entropy&cs=srgb&fm=jpg&q=85&w=940",
  },
  {
    id: "item-claude",
    name: "Claude for managing AI agents",
    price: 1100,
    category: "AI",
    reason: "Run and manage the AI agents that power the automations and analytics.",
    image: "https://images.unsplash.com/photo-1792164559462-425260f43099?crop=entropy&cs=srgb&fm=jpg&q=85&w=940",
  },
  {
    id: "item-nap-pillow",
    name: "Power-nap sleeping pillow",
    price: 150,
    category: "Recovery",
    reason: "A quick reset between deep-focus sprints.",
    image: "https://images.unsplash.com/photo-1685122121706-a7d632dec1df?crop=entropy&cs=srgb&fm=jpg&q=85&w=940",
  },
  {
    id: "item-snack-counter",
    name: "Mini snack counter for small snacks",
    price: 400,
    category: "Fuel",
    reason: "Keep the fuel close so the flow never breaks.",
    image: "https://images.unsplash.com/photo-1759772238095-d1ed3f036ad5?crop=entropy&cs=srgb&fm=jpg&q=85&w=940",
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
