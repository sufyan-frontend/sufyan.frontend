// Pure data for the SEO Fundamentals guide. No "use client" — safe to import
// from both the server page (for JSON-LD schema) and the client component.

export type Visual =
  | { type: "funnel"; title: string; steps: string[] }
  | { type: "bars"; title: string; bars: [string, number][] }
  | { type: "timeline"; title: string; items: [string, string][] }
  | { type: "flow"; title: string; nodes: [string, string, string][] }
  | { type: "grid4"; title: string; cards: [string, string, string, string][] }
  | {
      type: "compare";
      title: string;
      left: { title: string; items: string[] };
      right: { title: string; items: string[] };
    }
  | { type: "serp"; title: string }
  | { type: "pyramid"; title: string; rows: [string, string, string][] }
  | { type: "checklist"; title: string; items: string[] };

export type Lesson = {
  id: string;
  n: number;
  icon: string;
  tag: string;
  title: string;
  definition: string;
  example: string;
  visual: Visual;
  mistakes: string[];
  best: string[];
  interview: { q: string; a: string }[];
  quiz: { q: string; options: string[]; answer: number; explain: string };
  summary: string;
};

export const LESSONS: Lesson[] = [
  {
    id: "what-is-seo", n: 1, icon: "🔍", tag: "Basics",
    title: "What is SEO?",
    definition: `SEO (Search Engine Optimization) is the practice of improving your website so it appears higher in the <b>free (organic) results</b> of search engines like Google, Bing and others. The goal: when someone searches for something you offer, your page shows up — ideally near the top.`,
    example: `You own a bakery in Lahore. When someone Googles <i>"best chocolate cake in Lahore"</i>, SEO is the work that helps your website appear on page 1 instead of page 5 — without paying for ads.`,
    visual: { type: "funnel", title: "How SEO turns searchers into visitors",
      steps: ["User has a question", "They search on Google", "Google shows results", "Your optimized page ranks high", "User clicks → visits you"] },
    mistakes: [
      "Thinking SEO is a one-time task (it’s ongoing).",
      "Stuffing pages with keywords until they read unnaturally.",
      "Ignoring what the user actually wants to find.",
      "Expecting results overnight — SEO takes weeks to months.",
    ],
    best: [
      "Write for humans first, search engines second.",
      "Focus on genuinely helpful, original content.",
      "Be patient and consistent — SEO compounds over time.",
      "Track progress with tools like Google Search Console.",
    ],
    interview: [
      { q: "In one sentence, what is SEO?", a: "The process of optimizing a website to rank higher in organic (unpaid) search results and attract relevant traffic." },
      { q: "Is SEO free?", a: "You don’t pay per click like ads, but it costs time, content effort, and sometimes tools — so it’s \"free traffic, not free work\"." },
    ],
    quiz: {
      q: "SEO mainly helps you rank in which type of results?",
      options: ["Paid ads", "Organic (free) results", "Social media feeds", "Email inboxes"],
      answer: 1,
      explain: "SEO targets the organic, unpaid section of the search results page.",
    },
    summary: "SEO = optimizing your site to earn higher rankings in free search results, bringing relevant visitors without paying per click.",
  },
  {
    id: "why-seo-matters", n: 2, icon: "📈", tag: "Basics",
    title: "Why SEO Matters",
    definition: `Most online experiences begin with a search. SEO matters because the top organic results capture the <b>vast majority of clicks</b>, the traffic is <b>free and compounding</b>, and visitors arrive with <b>high intent</b> — they’re actively looking for what you offer.`,
    example: `Two coffee shops open the same week. One invests in SEO and ranks for "coffee near me". A year later it gets hundreds of free website visits every day, while the other relies only on paid ads that stop the moment the budget runs out.`,
    visual: { type: "bars", title: "Why businesses invest in SEO",
      bars: [["High-intent traffic", 92], ["Cost-effective (no per-click fee)", 85], ["Builds long-term trust", 78], ["Compounds over time", 88]] },
    mistakes: [
      "Believing social media or ads can fully replace SEO.",
      "Measuring SEO only by rankings, not actual leads/sales.",
      "Giving up after a month because results aren’t instant.",
    ],
    best: [
      "Treat SEO as a long-term business asset, not a quick win.",
      "Combine SEO with great products and user experience.",
      "Measure outcomes (traffic, leads, revenue), not just rank.",
    ],
    interview: [
      { q: "Why do businesses care about organic traffic?", a: "It’s high-intent, sustainable, and doesn’t require paying per click, so the ROI compounds over time." },
      { q: "What happens to ads vs SEO when you stop paying?", a: "Ads stop instantly; SEO rankings persist and continue to bring traffic." },
    ],
    quiz: {
      q: "What is a key advantage of SEO traffic over paid ads?",
      options: ["It is always instant", "It keeps working after you stop paying", "It guarantees #1 rankings", "It needs no content"],
      answer: 1,
      explain: "Unlike ads, SEO traffic continues even when you’re not actively spending.",
    },
    summary: "SEO matters because it delivers high-intent, cost-effective, compounding traffic that keeps working long after the work is done.",
  },
  {
    id: "history-of-seo", n: 3, icon: "📜", tag: "Basics",
    title: "History of SEO",
    definition: `SEO has evolved from simple keyword tricks to a discipline focused on <b>quality and user experience</b>. Early search engines were easy to manipulate; over decades, Google’s algorithm updates pushed the industry toward genuinely helpful content.`,
    example: `In the late 1990s you could rank by repeating a keyword 100 times in hidden white text. Today, that same trick would get your site penalized — Google now rewards expertise, trust, and real value.`,
    visual: { type: "timeline", title: "SEO through the years",
      items: [
        ["1990s", "Search engines appear; keyword stuffing & meta tags rule."],
        ["1998", "Google launches PageRank — links become a ranking signal."],
        ["2011–12", "Panda & Penguin updates punish thin content & spammy links."],
        ["2015", "Mobile-friendliness becomes a ranking factor; RankBrain (AI) arrives."],
        ["2019–21", "BERT & Core Web Vitals — language understanding + UX matter."],
        ["2023+", "AI Overviews, AEO & GEO — optimizing for AI answers begins."],
      ] },
    mistakes: [
      "Using outdated tactics (hidden text, link farms, exact-match spam).",
      "Assuming what worked years ago still works today.",
      "Ignoring algorithm updates and industry changes.",
    ],
    best: [
      "Stay current — follow Google’s official guidance and updates.",
      "Build sustainable, \"white-hat\" strategies that age well.",
      "Focus on principles (helpfulness, trust) over loopholes.",
    ],
    interview: [
      { q: "What did Google’s PageRank introduce?", a: "Using links between pages as votes of authority to rank results." },
      { q: "Why did Panda and Penguin matter?", a: "They penalized low-quality content and manipulative links, shifting SEO toward quality." },
    ],
    quiz: {
      q: "What major idea did Google’s PageRank introduce?",
      options: ["Hidden keyword text", "Links as votes of authority", "Paid placement", "Social media signals"],
      answer: 1,
      explain: "PageRank treated links from other sites as endorsements of a page’s importance.",
    },
    summary: "SEO evolved from keyword tricks to a quality-driven discipline shaped by algorithm updates — and is now extending into AI-driven search.",
  },
  {
    id: "how-search-works", n: 4, icon: "⚙️", tag: "How Search Works",
    title: "How Search Engines Work",
    definition: `Search engines follow three core stages: <b>Crawling</b> (discovering pages), <b>Indexing</b> (storing & understanding them), and <b>Ranking</b> (ordering them for each query). Understanding these stages explains almost everything in SEO.`,
    example: `Think of Google as a giant librarian: it walks the web finding books (crawl), catalogs them on shelves (index), and when you ask a question, hands you the most relevant books first (rank).`,
    visual: { type: "flow", title: "The 3 stages of search",
      nodes: [["🕷️", "Crawl", "Bots discover URLs by following links & sitemaps"],
              ["🗂️", "Index", "Pages are analyzed and stored in a huge database"],
              ["🏆", "Rank", "Best matches are ordered for each search query"]] },
    mistakes: [
      "Blocking important pages from being crawled by accident.",
      "Assuming a crawled page is automatically indexed (it isn’t).",
      "Confusing indexing with ranking — they’re separate steps.",
    ],
    best: [
      "Submit an XML sitemap to help discovery.",
      "Use a clean internal linking structure.",
      "Make sure key pages are crawlable AND indexable.",
    ],
    interview: [
      { q: "Name the 3 stages of how search engines work.", a: "Crawling, Indexing, and Ranking." },
      { q: "Does crawling guarantee indexing?", a: "No — a page can be crawled but still excluded from the index." },
    ],
    quiz: {
      q: "Which is the correct order of search engine stages?",
      options: ["Rank → Crawl → Index", "Crawl → Index → Rank", "Index → Rank → Crawl", "Crawl → Rank → Index"],
      answer: 1,
      explain: "Engines first crawl to find pages, index to store them, then rank them per query.",
    },
    summary: "Search engines crawl to discover pages, index to store and understand them, then rank them for each query.",
  },
  {
    id: "crawling", n: 5, icon: "🕷️", tag: "How Search Works",
    title: "Crawling",
    definition: `Crawling is how search engines <b>discover</b> web pages. Automated bots (called crawlers or spiders, e.g. Googlebot) follow links from page to page and read sitemaps to find new and updated content.`,
    example: `When you add a new blog post and link to it from your homepage, Googlebot follows that link, lands on the post, and discovers it exists — that’s crawling in action.`,
    visual: { type: "flow", title: "How a crawler discovers pages",
      nodes: [["🏠", "Start", "Bot visits a known URL or sitemap"],
              ["🔗", "Follow", "It follows every link it finds"],
              ["📄", "Discover", "New URLs are queued to be crawled too"]] },
    mistakes: [
      "Blocking crawlers in robots.txt by mistake.",
      "Orphan pages with no internal links (bots can’t find them).",
      "Slow servers or errors that stop crawlers mid-way.",
    ],
    best: [
      "Keep an updated XML sitemap and submit it in Search Console.",
      "Link important pages internally so bots can reach them.",
      "Fix broken links and server errors quickly.",
    ],
    interview: [
      { q: "What is a web crawler?", a: "An automated bot that discovers pages by following links and reading sitemaps." },
      { q: "What is an orphan page?", a: "A page with no internal links pointing to it, making it hard for crawlers to find." },
    ],
    quiz: {
      q: "What is the main purpose of crawling?",
      options: ["To rank pages", "To discover pages", "To delete pages", "To translate pages"],
      answer: 1,
      explain: "Crawling is purely about discovering and re-visiting pages on the web.",
    },
    summary: "Crawling is the discovery phase — bots follow links and sitemaps to find your pages, so they must be reachable.",
  },
  {
    id: "indexing", n: 6, icon: "🗂️", tag: "How Search Works",
    title: "Indexing",
    definition: `Indexing is when a search engine <b>analyzes a crawled page and stores it</b> in its massive database (the index). Only indexed pages are eligible to appear in search results.`,
    example: `Imagine a library that not only collects books but writes a detailed catalog card for each — topic, keywords, summary. That catalog is the index; without a card, the book can never be recommended.`,
    visual: { type: "flow", title: "From crawl to index",
      nodes: [["📄", "Analyze", "Engine reads content, images, structure"],
              ["🧠", "Understand", "It figures out topic & relevance"],
              ["🗄️", "Store", "Page is added to the searchable index"]] },
    mistakes: [
      "Using \"noindex\" tags on pages you actually want found.",
      "Thin or duplicate content that engines choose not to index.",
      "Assuming every crawled page gets indexed automatically.",
    ],
    best: [
      "Ensure valuable pages don’t have accidental noindex tags.",
      "Create unique, substantial content worth indexing.",
      "Use canonical tags to manage duplicates properly.",
    ],
    interview: [
      { q: "What is the search index?", a: "A huge database of analyzed pages that are eligible to appear in results." },
      { q: "Why might a crawled page not be indexed?", a: "Thin/duplicate content, noindex tags, or low quality can keep it out." },
    ],
    quiz: {
      q: "A page must be ______ before it can appear in search results.",
      options: ["Paid for", "Indexed", "Shared on social", "Mobile-only"],
      answer: 1,
      explain: "Only indexed pages are eligible to be shown in search results.",
    },
    summary: "Indexing stores and understands a page so it becomes eligible to rank — no index entry, no chance of appearing.",
  },
  {
    id: "ranking", n: 7, icon: "🏆", tag: "How Search Works",
    title: "Ranking",
    definition: `Ranking is how search engines <b>order indexed pages</b> for a given query using hundreds of signals — relevance, content quality, links, user experience, page speed, and more — to show the most helpful results first.`,
    example: `Search "how to tie a tie" and Google instantly sorts millions of pages, putting the clearest, most trusted, easy-to-follow guides at the top. That ordering is ranking.`,
    visual: { type: "bars", title: "Major ranking signal categories",
      bars: [["Relevance to query", 95], ["Content quality & E-E-A-T", 88], ["Backlinks / authority", 82], ["User experience & speed", 76]] },
    mistakes: [
      "Chasing one \"magic\" ranking factor instead of overall quality.",
      "Buying spammy links to fake authority.",
      "Ignoring user experience, which influences rankings.",
    ],
    best: [
      "Match the searcher’s intent precisely.",
      "Earn quality backlinks naturally with great content.",
      "Improve speed, mobile usability, and clarity.",
    ],
    interview: [
      { q: "Name three ranking factors.", a: "Relevance, content quality/E-E-A-T, and backlinks (plus UX, speed, etc.)." },
      { q: "Is there a single most important ranking factor?", a: "No — Google uses hundreds; relevance and quality are foundational." },
    ],
    quiz: {
      q: "Ranking decides...",
      options: ["Which pages exist", "The ORDER of results for a query", "How fast bots crawl", "Your ad budget"],
      answer: 1,
      explain: "Ranking is about ordering indexed pages by relevance and quality for each query.",
    },
    summary: "Ranking orders indexed pages using hundreds of signals to surface the most relevant, trustworthy results first.",
  },
  {
    id: "search-intent", n: 8, icon: "🎯", tag: "Keywords",
    title: "Search Intent",
    definition: `Search intent is the <b>reason behind a search</b> — what the user actually wants. The four main types are <b>Informational</b> (learn), <b>Navigational</b> (find a site), <b>Commercial</b> (research before buying), and <b>Transactional</b> (ready to act/buy).`,
    example: `"How to bake bread" = informational. "Facebook login" = navigational. "Best blenders 2025" = commercial. "Buy Nike Air Max size 9" = transactional. Same topics, very different intent.`,
    visual: { type: "grid4", title: "The 4 types of search intent",
      cards: [
        ["📚", "Informational", "Wants to learn", "\"what is SEO\""],
        ["🧭", "Navigational", "Wants a specific site", "\"YouTube\""],
        ["🛒", "Commercial", "Comparing options", "\"best CRM software\""],
        ["💳", "Transactional", "Ready to buy/act", "\"buy iphone 15\""],
      ] },
    mistakes: [
      "Targeting a keyword but ignoring what the user expects.",
      "Selling hard on an informational query.",
      "Writing a long article when the user wants a quick answer.",
    ],
    best: [
      "Check the current top results to learn the dominant intent.",
      "Match content format to intent (guide, product page, list).",
      "Answer the user’s real question fully and clearly.",
    ],
    interview: [
      { q: "What are the 4 types of search intent?", a: "Informational, Navigational, Commercial, and Transactional." },
      { q: "How do you find a keyword’s intent?", a: "Look at what already ranks on page 1 — it reveals what Google thinks users want." },
    ],
    quiz: {
      q: "Which query shows TRANSACTIONAL intent?",
      options: ["\"what is a VPN\"", "\"best VPN 2025\"", "\"buy NordVPN subscription\"", "\"nordvpn website\""],
      answer: 2,
      explain: "A ready-to-purchase query like \"buy ... subscription\" signals transactional intent.",
    },
    summary: "Search intent is the goal behind a query; matching your content to it (info, nav, commercial, transactional) is essential to ranking.",
  },
  {
    id: "organic-vs-paid", n: 9, icon: "⚖️", tag: "Keywords",
    title: "Organic vs Paid Traffic",
    definition: `<b>Organic traffic</b> comes from unpaid search results earned through SEO. <b>Paid traffic</b> comes from ads (e.g. Google Ads) where you pay per click. Both can work together, but they behave very differently.`,
    example: `Search "running shoes": the top results marked "Sponsored" are paid ads (gone the moment the budget ends). The results below them are organic — earned through SEO and lasting far longer.`,
    visual: { type: "compare", title: "Organic vs Paid at a glance",
      left: { title: "🌱 Organic (SEO)", items: ["Free per click", "Builds over time", "Lasting results", "Slower to start", "High trust"] },
      right: { title: "💰 Paid (Ads)", items: ["Pay per click", "Instant traffic", "Stops when budget ends", "Fast to launch", "Marked \"Sponsored\""] } },
    mistakes: [
      "Thinking ads improve your organic rankings (they don’t directly).",
      "Relying only on ads with no long-term SEO foundation.",
      "Ignoring ads entirely when you need quick traffic.",
    ],
    best: [
      "Use ads for quick wins; SEO for sustainable growth.",
      "Test high-converting keywords with ads, then target them with SEO.",
      "Measure cost-per-acquisition for both channels.",
    ],
    interview: [
      { q: "Do Google Ads improve organic rankings?", a: "No, running ads does not directly boost your organic position." },
      { q: "When would you choose ads over SEO?", a: "When you need immediate traffic or are testing a new offer/keyword quickly." },
    ],
    quiz: {
      q: "What happens to paid traffic when you stop paying?",
      options: ["It keeps coming", "It stops almost immediately", "It becomes organic", "It doubles"],
      answer: 1,
      explain: "Paid traffic ends as soon as the ad budget stops; organic traffic persists.",
    },
    summary: "Organic traffic is earned and lasting; paid traffic is instant but stops when spending ends. The best strategy often uses both.",
  },
  {
    id: "serp", n: 10, icon: "📋", tag: "Keywords",
    title: "SERP (Search Engine Results Page)",
    definition: `The SERP is the <b>page you see after searching</b>. Beyond the classic "10 blue links," modern SERPs include ads, featured snippets, "People Also Ask", local map packs, images, videos, and AI Overviews — each a chance (or challenge) for visibility.`,
    example: `Search "weather in Tokyo" and you may see a weather box at the top, an AI summary, news, and links — all on one SERP. Knowing these features helps you target the right spot.`,
    visual: { type: "serp", title: "Anatomy of a modern SERP" },
    mistakes: [
      "Aiming only for #1 while ignoring snippets & other features.",
      "Forgetting that ads and features push organic results down.",
      "Not optimizing content to win \"People Also Ask\" or snippets.",
    ],
    best: [
      "Structure content to win featured snippets (clear Q&A, lists).",
      "Use schema markup to qualify for rich results.",
      "Aim for multiple SERP features, not just one link.",
    ],
    interview: [
      { q: "What is a featured snippet?", a: "A highlighted answer box at the top of organic results, pulled from a ranking page." },
      { q: "Name some SERP features.", a: "Ads, featured snippets, People Also Ask, local pack, images, videos, AI Overviews." },
    ],
    quiz: {
      q: "A \"featured snippet\" appears...",
      options: ["Only in ads", "As a highlighted answer box at the top of organic results", "In your email", "On social media"],
      answer: 1,
      explain: "Featured snippets are answer boxes shown above normal results, often called \"position zero\".",
    },
    summary: "The SERP is the results page — packed with features beyond blue links. Optimizing for them multiplies your visibility.",
  },
  {
    id: "keywords", n: 11, icon: "🔑", tag: "Keywords",
    title: "Keywords",
    definition: `Keywords are the <b>words and phrases people type into search</b>. <b>Short-tail</b> keywords are broad ("shoes"); <b>long-tail</b> keywords are specific ("comfortable running shoes for flat feet") — usually less competitive and higher converting.`,
    example: `A small store can’t easily rank for "shoes", but it can rank for "vegan leather sneakers for women" — a long-tail keyword with clear intent and less competition.`,
    visual: { type: "pyramid", title: "Short-tail vs long-tail keywords",
      rows: [["Short-tail", "\"shoes\"", "High volume · High competition"],
             ["Mid-tail", "\"running shoes\"", "Medium volume · Medium competition"],
             ["Long-tail", "\"running shoes for flat feet\"", "Lower volume · Easier to rank · Higher intent"]] },
    mistakes: [
      "Chasing only high-volume keywords that are too competitive.",
      "Ignoring search intent behind the keyword.",
      "Keyword stuffing instead of using terms naturally.",
    ],
    best: [
      "Mix achievable long-tail keywords with broader goals.",
      "Group keywords by topic and intent.",
      "Use them naturally in titles, headings, and content.",
    ],
    interview: [
      { q: "What is a long-tail keyword?", a: "A longer, more specific phrase with lower volume but usually less competition and higher intent." },
      { q: "Why target long-tail keywords?", a: "They’re easier to rank for and attract more qualified, ready-to-act visitors." },
    ],
    quiz: {
      q: "Long-tail keywords are generally...",
      options: ["More competitive", "Less specific", "Easier to rank & higher intent", "Only for big brands"],
      answer: 2,
      explain: "Long-tail keywords are specific, less competitive, and tend to convert better.",
    },
    summary: "Keywords are what users search; choosing the right mix (especially long-tail) aligned to intent is the foundation of content SEO.",
  },
  {
    id: "on-page", n: 12, icon: "📝", tag: "SEO Types",
    title: "On-Page SEO Overview",
    definition: `On-page SEO is optimizing <b>elements on your own pages</b>: titles, meta descriptions, headings (H1–H6), URL structure, content quality, internal links, image alt text, and keyword usage — everything you fully control on the page itself.`,
    example: `For a post about "easy banana bread", on-page SEO means a clear title tag, a keyword-rich H1, helpful headings, a readable URL like <i>/easy-banana-bread</i>, alt text on the photos, and links to related recipes.`,
    visual: { type: "checklist", title: "On-page SEO essentials",
      items: ["Title tag with target keyword", "Compelling meta description", "One clear H1 + logical H2/H3s",
              "Clean, readable URL", "High-quality, original content", "Descriptive image alt text", "Helpful internal links"] },
    mistakes: [
      "Duplicate or missing title tags and meta descriptions.",
      "Multiple H1s or messy heading structure.",
      "Stuffing keywords instead of writing naturally.",
    ],
    best: [
      "Put the main keyword in the title, H1, and early content.",
      "Write unique meta descriptions that earn clicks.",
      "Use descriptive headings and short, clear URLs.",
    ],
    interview: [
      { q: "What does on-page SEO cover?", a: "Optimizable elements on the page: titles, meta, headings, content, URLs, internal links, alt text." },
      { q: "Why is the title tag important?", a: "It strongly signals relevance and is the clickable headline in the SERP." },
    ],
    quiz: {
      q: "Which is an ON-PAGE SEO element?",
      options: ["Backlinks from other sites", "Title tag", "Google Business Profile", "Server location"],
      answer: 1,
      explain: "Title tags live on your page and are fully within your control — classic on-page SEO.",
    },
    summary: "On-page SEO optimizes the elements you control on each page — titles, headings, content, URLs, links and images — for relevance and clarity.",
  },
  {
    id: "technical", n: 13, icon: "🛠️", tag: "SEO Types",
    title: "Technical SEO Overview",
    definition: `Technical SEO ensures search engines can <b>crawl, render, and index your site smoothly</b>. It covers site speed, mobile-friendliness, HTTPS security, XML sitemaps, robots.txt, structured data, and clean site architecture.`,
    example: `A beautiful site that loads in 8 seconds on mobile and blocks crawlers in robots.txt will struggle to rank. Technical SEO fixes the "plumbing" so content can actually perform.`,
    visual: { type: "checklist", title: "Technical SEO foundations",
      items: ["Fast loading (Core Web Vitals)", "Mobile-friendly / responsive", "Secure HTTPS", "XML sitemap submitted",
              "Sensible robots.txt", "Structured data (schema)", "No broken links or crawl errors", "Logical site structure"] },
    mistakes: [
      "Slow pages and poor Core Web Vitals.",
      "Accidentally blocking pages in robots.txt or with noindex.",
      "Not being mobile-friendly in a mobile-first world.",
    ],
    best: [
      "Optimize images and code for speed.",
      "Ensure responsive design across devices.",
      "Use HTTPS, a clean sitemap, and valid structured data.",
    ],
    interview: [
      { q: "What is technical SEO?", a: "Optimizing the site’s infrastructure so engines can crawl, render, and index it efficiently." },
      { q: "What are Core Web Vitals?", a: "Google’s metrics for loading (LCP), interactivity (INP), and visual stability (CLS)." },
    ],
    quiz: {
      q: "Which is a TECHNICAL SEO concern?",
      options: ["Writing blog titles", "Page loading speed", "Choosing keywords", "Getting backlinks"],
      answer: 1,
      explain: "Page speed / Core Web Vitals is part of technical SEO — the site’s performance foundation.",
    },
    summary: "Technical SEO keeps your site fast, secure, mobile-friendly and crawlable — the foundation that lets content rank.",
  },
  {
    id: "off-page", n: 14, icon: "🌐", tag: "SEO Types",
    title: "Off-Page SEO Overview",
    definition: `Off-page SEO is everything done <b>outside your website</b> to build authority and trust — mainly <b>backlinks</b> (links from other sites), plus brand mentions, social signals, and reputation. Links act like votes of confidence.`,
    example: `When a respected news site links to your guide, it’s like a popular expert vouching for you. Search engines see that endorsement and trust your page more — boosting its rankings.`,
    visual: { type: "flow", title: "How backlinks build authority",
      nodes: [["🌟", "Great content", "You publish something genuinely useful"],
              ["🔗", "Others link", "Trusted sites reference & link to it"],
              ["📈", "Authority up", "Search engines trust your site more"]] },
    mistakes: [
      "Buying spammy links or using link farms (risky penalties).",
      "Chasing quantity of links over quality.",
      "Ignoring brand building and reputation.",
    ],
    best: [
      "Earn links by creating link-worthy, original content.",
      "Build relationships, guest post, and get cited naturally.",
      "Prioritize a few high-quality links over many weak ones.",
    ],
    interview: [
      { q: "What is a backlink?", a: "A link from another website to yours, acting as a vote of trust/authority." },
      { q: "Are all backlinks good?", a: "No — links from spammy/irrelevant sites can hurt; quality and relevance matter most." },
    ],
    quiz: {
      q: "Off-page SEO is mostly about...",
      options: ["Your title tags", "Backlinks & external reputation", "Page speed", "Your URL structure"],
      answer: 1,
      explain: "Off-page SEO centers on backlinks and signals earned outside your own site.",
    },
    summary: "Off-page SEO builds authority through quality backlinks and reputation earned beyond your site — votes of trust that lift rankings.",
  },
  {
    id: "local", n: 15, icon: "📍", tag: "SEO Types",
    title: "Local SEO Overview",
    definition: `Local SEO helps businesses appear in <b>location-based searches</b> and the Google map pack — for queries like "plumber near me". Key levers: an optimized Google Business Profile, consistent NAP (Name, Address, Phone), reviews, and local citations.`,
    example: `A dentist optimizing their Google Business Profile, gathering 5-star reviews, and keeping their address consistent everywhere will show up in the map pack when locals search "dentist near me".`,
    visual: { type: "checklist", title: "Local SEO essentials",
      items: ["Claim & optimize Google Business Profile", "Consistent NAP everywhere", "Collect & respond to reviews",
              "Local citations & directories", "Local keywords on pages", "LocalBusiness schema", "Embedded map & location pages"] },
    mistakes: [
      "Inconsistent name/address/phone across the web.",
      "Ignoring or never responding to reviews.",
      "An incomplete or unclaimed Google Business Profile.",
    ],
    best: [
      "Fully complete and verify your Google Business Profile.",
      "Keep NAP identical across all listings.",
      "Actively earn reviews and reply to them.",
    ],
    interview: [
      { q: "What is NAP consistency?", a: "Keeping your Name, Address, and Phone number identical across all online listings." },
      { q: "What is the \"map pack\"?", a: "The block of local business results with a map shown for location-based queries." },
    ],
    quiz: {
      q: "What does \"NAP\" stand for in local SEO?",
      options: ["New Ad Placement", "Name, Address, Phone", "Network Access Point", "National Authority Page"],
      answer: 1,
      explain: "NAP = Name, Address, Phone — and keeping it consistent is crucial for local SEO.",
    },
    summary: "Local SEO wins location-based searches via an optimized Google Business Profile, consistent NAP, reviews, and local signals.",
  },
  {
    id: "aeo", n: 16, icon: "💬", tag: "AEO & GEO",
    title: "AEO (Answer Engine Optimization)",
    definition: `AEO is optimizing content to be the <b>direct answer</b> served by answer engines — featured snippets, voice assistants, and "People Also Ask". Instead of just ranking a page, you aim to <b>be the answer</b> read aloud or shown instantly.`,
    example: `Ask a smart speaker "How long to boil an egg?" — it reads ONE concise answer. AEO is the work that makes your content that chosen answer, with a clear, direct response.`,
    visual: { type: "flow", title: "How AEO works",
      nodes: [["❓", "Question", "User asks a direct question"],
              ["🔎", "Engine picks", "It selects one concise, trusted answer"],
              ["📢", "You win", "Your clear answer is featured/spoken"]] },
    mistakes: [
      "Burying the answer deep in long, rambling paragraphs.",
      "Not structuring content as clear questions & answers.",
      "Ignoring concise summaries and structured data.",
    ],
    best: [
      "Answer the question directly in the first 1–2 sentences.",
      "Use clear Q&A headings, lists, and tables.",
      "Add FAQ/structured data so engines can extract answers.",
    ],
    interview: [
      { q: "What is AEO?", a: "Optimizing content to be the direct answer in snippets, voice results, and answer boxes — not just a ranking link." },
      { q: "How is AEO different from classic SEO?", a: "SEO aims to rank a page; AEO aims to be the single concise answer engines surface or speak." },
    ],
    quiz: {
      q: "AEO focuses on...",
      options: ["Buying ads", "Being the direct answer engines show or speak", "Faster servers only", "More backlinks"],
      answer: 1,
      explain: "AEO optimizes content to be selected as the concise answer in snippets and voice results.",
    },
    summary: "AEO optimizes content to become the direct, concise answer engines and assistants surface — aim to be the answer, not just a link.",
  },
  {
    id: "geo", n: 17, icon: "🤖", tag: "AEO & GEO",
    title: "GEO (Generative Engine Optimization)",
    definition: `GEO is optimizing your content so it gets <b>cited and surfaced by AI generative engines</b> — Google AI Overviews, ChatGPT, Perplexity, Gemini and Copilot — which synthesize answers from many sources. The goal: be one of the trusted sources the AI quotes.`,
    example: `Ask Perplexity or ChatGPT "what’s the best way to learn SEO?" and it writes a paragraph citing a few sources. GEO is the work that makes your guide one of those cited, linked sources.`,
    visual: { type: "flow", title: "How GEO works",
      nodes: [["📝", "Publish", "Clear, factual, well-structured content"],
              ["🤖", "AI reads", "Generative engines ingest & understand it"],
              ["🔗", "Get cited", "Your brand is referenced in AI answers"]] },
    mistakes: [
      "Blocking AI crawlers you actually want to reach you.",
      "Vague, opinion-only content with no citable facts.",
      "No clear structure, stats, or sources for AI to quote.",
    ],
    best: [
      "Write factual, well-structured, citable passages.",
      "Add stats, clear definitions, and takeaways AI can lift.",
      "Build brand authority and mentions across the web.",
      "Keep an llms.txt and allow reputable AI crawlers.",
    ],
    interview: [
      { q: "What is GEO?", a: "Generative Engine Optimization — optimizing content to be cited by AI answer engines like AI Overviews, ChatGPT and Perplexity." },
      { q: "How do you optimize for AI engines?", a: "Publish clear, factual, well-structured, authoritative content and build brand mentions so AI trusts and cites you." },
    ],
    quiz: {
      q: "GEO optimizes your content to be...",
      options: ["Hidden from AI", "Cited by AI generative engines", "Only on social media", "Paid placement"],
      answer: 1,
      explain: "GEO aims to get your content cited by AI engines like AI Overviews and ChatGPT.",
    },
    summary: "GEO optimizes content to be cited by AI generative engines — clear, factual, authoritative content earns mentions in AI-written answers.",
  },
];

export const FAQS: { q: string; a: string }[] = [
  { q: "How long does SEO take to show results?",
    a: "For most sites, meaningful movement takes about 3–6 months, and competitive niches can take longer. SEO compounds over time, so early effort keeps paying off." },
  { q: "Do I need to know how to code to do SEO?",
    a: "No. Much of SEO is content, keywords, and strategy. Basic technical understanding helps for technical SEO, but you can start and rank without writing code." },
  { q: "Is SEO better than paid ads?",
    a: "They solve different problems. Ads give instant traffic that stops when you stop paying; SEO builds slower but keeps working for free. Most businesses use both." },
  { q: "What’s the difference between SEO, AEO and GEO?",
    a: "SEO ranks your page in search results, AEO makes your content the direct answer in snippets and voice, and GEO gets your content cited by AI engines like AI Overviews and ChatGPT." },
  { q: "How many keywords should one page target?",
    a: "Focus each page on one primary keyword and a small cluster of closely related terms. Targeting too many unrelated keywords on one page dilutes relevance." },
  { q: "Is this course really free?",
    a: "Yes — all 17 lessons, quizzes, and the completion certificate are completely free. Learn at your own pace, with lifetime access." },
];
