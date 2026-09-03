import { useState, useEffect } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Box,
  CircleArrowUp,
  Eye,
  Feather,
  Layers3,
  Mail,
  Menu,
  Phone,
  Printer,
  Share2,
  Sparkles,
  X,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

type PortfolioProject = {
  id: string;
  title: string;
  service: string;
  category: "social" | "logo" | "branding" | "packaging" | "print";
  year: string;
  summary: string;
  deliverables: string[];
  visual: "social" | "logo" | "branding" | "packaging" | "print";
  accent: "yellow" | "ink" | "gray";
};

const portfolioProjects: PortfolioProject[] = [
  {
    id: "01",
    title: "Aura Motion & Fitness",
    service: "Social Media Post Design",
    category: "social",
    year: "2026",
    summary:
      "High-energy social media campaigns, carousel sequences, promotional banners, and reel covers designed to stop the scroll and drive active engagement.",
    deliverables: ["Instagram Carousels", "Ad Creatives", "Reel Covers", "Story Templates"],
    visual: "social",
    accent: "yellow",
  },
  {
    id: "02",
    title: "Kanso Architectural Studio",
    service: "Logo Design",
    category: "logo",
    year: "2026",
    summary:
      "A timeless geometric monogram and minimalist typographic mark built with mathematical balance, adaptable across digital screens and physical signage.",
    deliverables: ["Primary Logotype", "Secondary Monogram", "Icon Suite", "Vector Guidelines"],
    visual: "logo",
    accent: "ink",
  },
  {
    id: "03",
    title: "Verve Organic Botanicals",
    service: "Branding Design",
    category: "branding",
    year: "2025",
    summary:
      "A comprehensive visual identity system featuring curated earthy color palettes, bespoke typography pairings, brand assets, and complete brand guidelines.",
    deliverables: ["Brand Identity System", "Color & Type Rules", "Brand Guidelines", "Stationery Kit"],
    visual: "branding",
    accent: "gray",
  },
  {
    id: "04",
    title: "Nectar Cold Brew Roasters",
    service: "Packaging Design",
    category: "packaging",
    year: "2025",
    summary:
      "Striking retail packaging with tactile bottle labels, custom structural box dielines, pouch graphics, and an unboxing experience that stands out on retail shelves.",
    deliverables: ["Product Box Dielines", "Bottle & Can Labels", "Coffee Pouch Graphics", "3D Mockups"],
    visual: "packaging",
    accent: "yellow",
  },
  {
    id: "05",
    title: "Monolith Annual Design Expo",
    service: "Printing Design",
    category: "print",
    year: "2025",
    summary:
      "Tactile print collateral including large-format metallic posters, tri-fold brochures, foil-stamped invitations, and editorial exhibition catalog layouts.",
    deliverables: ["Exhibition Posters", "Tri-Fold Brochures", "Foil VIP Passes", "Editorial Catalogs"],
    visual: "print",
    accent: "ink",
  },
  {
    id: "06",
    title: "Solstice Summer Apparel",
    service: "Social Media Post Design",
    category: "social",
    year: "2026",
    summary:
      "Seasonal fashion feed rollout featuring multi-slide aesthetic product lookbooks, sale countdown stories, and high-conversion retargeting ad graphics.",
    deliverables: ["Lookbook Carousels", "Sale Launch Stories", "Paid Ad Banners", "Highlight Icons"],
    visual: "social",
    accent: "yellow",
  },
  {
    id: "07",
    title: "Vanguard Fintech Labs",
    service: "Logo Design",
    category: "logo",
    year: "2026",
    summary:
      "A progressive, sharp visual symbol and custom wordmark conveying security, speed, and algorithmic intelligence across fintech web & mobile apps.",
    deliverables: ["App Icon Vector", "Responsive Logo Marks", "Monochrome Variants", "Favicon Kit"],
    visual: "logo",
    accent: "ink",
  },
  {
    id: "08",
    title: "Apex Venture Capital",
    service: "Branding Design",
    category: "branding",
    year: "2025",
    summary:
      "High-end corporate identity for a Silicon Valley venture firm, featuring editorial pitch deck systems, executive business cards, and letterheads.",
    deliverables: ["Pitch Deck Design", "Corporate Guidelines", "Letterhead & Cards", "Email Signature"],
    visual: "branding",
    accent: "gray",
  },
  {
    id: "09",
    title: "Lumière Botanical Candles",
    service: "Packaging Design",
    category: "packaging",
    year: "2025",
    summary:
      "Luxury fragrance packaging with gold-foil embossed rigid boxes, tactile matte glass jar labels, safety inserts, and tamper-evident seal stickers.",
    deliverables: ["Rigid Gift Box", "Foil Jar Labels", "Unboxing Insert", "Barcode Placement"],
    visual: "packaging",
    accent: "yellow",
  },
  {
    id: "10",
    title: "Haven Architecture Lookbook",
    service: "Printing Design",
    category: "print",
    year: "2025",
    summary:
      "Hardcover monograph and print lookbook showcasing architectural residences, featuring Swiss grid layouts, spot UV covers, and heavyweight art paper specs.",
    deliverables: ["Hardcover Monograph", "Spot UV Cover", "Print Dielines", "Paper Stock Curation"],
    visual: "print",
    accent: "ink",
  },
];

const portfolioCapabilities = [
  {
    icon: Share2,
    number: "01",
    tag: "Digital & Feed",
    category: "social" as const,
    label: "Social Media Post",
    highlight: "High-Converting Feed & Ads",
    detail:
      "Strategic carousel layouts, multi-slide graphics, promotional announcements, and ad creatives designed to drive clicks and stop the scroll.",
    deliverables: ["Instagram Carousel Posts", "Promo Ad Creatives", "Story Graphic Sets", "Content Layout Systems"],
  },
  {
    icon: Feather,
    number: "02",
    tag: "Identity Core",
    category: "logo" as const,
    label: "Logo Design",
    highlight: "Distinctive & Timeless Marks",
    detail:
      "Memorable brand marks, typographic logotypes, monograms, and iconic emblems crafted with mathematical vector balance.",
    deliverables: ["Primary & Sub-Logos", "Monograms & Icons", "100% Vector EPS/SVG", "Brand Usage Specs"],
  },
  {
    icon: Layers3,
    number: "03",
    tag: "Visual Systems",
    category: "branding" as const,
    label: "Branding Design",
    highlight: "Cohesive Brand Worlds",
    detail:
      "End-to-end visual identity architecture: typography pairing rules, color theory palettes, brand guides, and collateral.",
    deliverables: ["Brand Identity Systems", "Color & Type Rules", "Brand Guidelines Book", "Stationery Collateral"],
  },
  {
    icon: Box,
    number: "04",
    tag: "Product & Shelf",
    category: "packaging" as const,
    label: "Packaging Design",
    highlight: "Shelf-Ready Physical Goods",
    detail:
      "Custom box dielines, bottle/can/jar labels, retail pouches, and unboxing aesthetics prepared for industrial manufacturing.",
    deliverables: ["Custom Box Dielines", "Bottle & Jar Labels", "Retail Pouch Design", "Production Dieline Files"],
  },
  {
    icon: Printer,
    number: "05",
    tag: "CMYK & Editorial",
    category: "print" as const,
    label: "Printing Design",
    highlight: "Tactile Print Production",
    detail:
      "High-precision print layouts: tri-fold brochures, luxury business cards, large-format event posters, flyers, and catalogs.",
    deliverables: ["Brochures & Flyers", "Premium Business Cards", "Large-Format Posters", "Editorial Catalogs"],
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanjeev - Graphic Designer | Social Media, Logo, Branding, Packaging & Print" },
      {
        name: "description",
        content:
          "Sanjeev is a creative graphic designer specializing in Social Media Post Design, Logo Design, Branding Systems, Packaging Design, and Print Collateral.",
      },
      { property: "og:title", content: "Sanjeev - Creative Graphic Designer" },
      {
        property: "og:description",
        content:
          "High-impact graphic design by Sanjeev: Social Media Posts, Logo Design, Branding Systems, Packaging Dielines, and Print Collateral.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SanjeevPortfolio,
});

function SanjeevPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<PortfolioProject>(portfolioProjects[0]);
  const [filter, setFilter] = useState<string>("all");
  const [archiveModalOpen, setArchiveModalOpen] = useState(false);
  const [modalFilter, setModalFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  const modalFilteredProjects =
    modalFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === modalFilter);

  // Lock body scroll when archive modal is open and handle Escape key
  useEffect(() => {
    if (archiveModalOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setArchiveModalOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [archiveModalOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-signal selection:text-foreground">
      {/* Top Header */}
      <header className="sticky top-0 z-50 h-16 border-b border-border bg-background/90 backdrop-blur sm:h-18">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-12">
          <a href="#top" className="display-type flex items-center gap-2.5 text-sm font-bold tracking-wider">
            <img
              src="/android-chrome-512x512.png"
              alt="Sanjeev Logo"
              className="size-7 object-contain rounded-sm"
            />
            <span className="uppercase">SANJEEV<span className="text-signal">.</span></span>
          </a>

          <nav className="hidden items-center gap-7 display-type text-xs uppercase md:flex">
            <a className="link-line" href="#services">Services</a>
            <a className="link-line" href="#work">Work</a>
            <a className="link-line" href="#about">About</a>
            <a className="link-line" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden h-10 rounded-none bg-foreground px-4 display-type text-xs uppercase text-background hover:bg-signal hover:text-foreground sm:h-11 sm:px-5 md:inline-flex"
            >
              <a href="#contact">
                Start a project <ArrowUpRight className="ml-1.5 size-4" />
              </a>
            </Button>

            <Button
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              variant="ghost"
              size="icon"
              className="rounded-none md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {menuOpen && (
          <nav className="border-t border-border bg-background/98 px-5 py-5 display-type text-sm uppercase md:hidden shadow-lg">
            <div className="flex flex-col gap-4">
              <a className="py-1 text-foreground hover:text-signal" href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a className="py-1 text-foreground hover:text-signal" href="#work" onClick={() => setMenuOpen(false)}>Work</a>
              <a className="py-1 text-foreground hover:text-signal" href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a className="py-1 text-foreground hover:text-signal" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        {/* HERO SECTION - Sized to fit the desktop viewport gracefully */}
        <section className="hero-grid flex flex-col justify-between border-b border-border lg:h-[calc(100svh-4.5rem)] lg:min-h-[620px] lg:max-h-[calc(100svh-4.5rem)]">
          <div className="mx-auto flex w-full max-w-[1440px] flex-1 items-center px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-6">
            <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-12">
              
              {/* Vertical Side Tag on Desktop */}
              <div className="hidden lg:col-span-1 lg:flex lg:flex-col lg:items-start lg:justify-center">
                <p className="display-type vertical-label text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Design • Direction • 2026
                </p>
              </div>

              {/* Main Text Content */}
              <div className="lg:col-span-6 xl:col-span-6">
                <div className="display-type inline-flex items-center gap-2.5 bg-foreground px-3.5 py-1.5 text-[11px] uppercase tracking-wider text-background">
                  <span className="size-2 animate-pulse bg-signal" />
                  Open For Select Design Briefs
                </div>

                <h1 className="display-type mt-4 text-5xl font-bold uppercase leading-[0.88] tracking-tight sm:mt-5 sm:text-7xl lg:text-[5.8rem] xl:text-[6.8rem]">
                  Sanjeev
                </h1>

                <div className="mt-5 max-w-[540px] border-l-3 border-signal pl-4 sm:mt-6 sm:border-l-4 sm:pl-6">
                  <p className="text-lg font-medium leading-snug sm:text-2xl lg:text-[1.4rem]">
                    Creative graphic designer crafting captivating visual identities, physical packaging, and high-impact design that make ideas shine.
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:mt-4 sm:text-sm lg:text-base">
                    Focused on clean concept execution, strong typographic rhythm, and production-ready artwork built for real-world impact.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:items-center sm:gap-3.5">
                  <Button
                    asChild
                    className="h-10 rounded-none bg-foreground px-5 display-type text-xs uppercase text-background hover:bg-signal hover:text-foreground sm:h-11"
                  >
                    <a href="#work">
                      View Selected Work <ArrowDownRight className="ml-1.5 size-4" />
                    </a>
                  </Button>
                  <a
                    href="mailto:sanjeevsanju281@gmail.com"
                    className="display-type inline-flex h-10 items-center justify-center gap-2 border border-foreground bg-background/80 px-4 text-xs uppercase transition-colors hover:border-signal hover:bg-signal sm:h-11 sm:px-5"
                  >
                    <Mail className="size-4" />
                    sanjeevsanju281@gmail.com
                  </a>
                </div>
              </div>

              {/* Visual Frame Container - Height strictly controlled */}
              <div className="relative flex h-[320px] w-full items-center justify-center sm:h-[400px] lg:col-span-5 lg:h-[440px] xl:h-[480px]">
                {/* Graphic Backdrops */}
                <div className="absolute inset-x-4 bottom-0 top-8 bg-signal sm:top-10" />
                <div className="absolute -left-2 top-2 h-16 w-16 border border-foreground bg-background sm:h-24 sm:w-24" />
                <div className="absolute bottom-6 -right-2 h-12 w-28 bg-foreground sm:bottom-8 sm:h-16 sm:w-36" />
                
                {/* Designer Portrait Image */}
                <img
                  src="/img1.png"
                  alt="Black and white portrait of Sanjeev"
                  className="relative z-10 h-full max-h-[320px] w-auto object-contain drop-shadow-md sm:max-h-[400px] lg:max-h-[440px] xl:max-h-[480px]"
                />

                {/* Floating Detail Badge */}
                <div className="absolute right-0 top-0 z-20 w-44 border border-foreground bg-background p-3 shadow-md sm:w-52 sm:p-3.5">
                  <p className="display-type text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Creative Ethos</p>
                  <p className="mt-1 text-xs font-bold leading-tight uppercase sm:text-sm text-foreground">
                    Where Good Ideas Take Shape
                  </p>
                </div>

                {/* Bottom Floating Stamp */}
                <div className="absolute bottom-2 left-2 z-20 hidden border border-foreground bg-background px-3 py-1.5 display-type text-[10px] uppercase sm:block shadow-sm">
                  <span className="text-signal font-bold">●</span> Precision • Character • Impact
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* SERVICES / WHAT I DO SECTION - Compact & Sleek */}
        <section id="services" className="scroll-mt-20 border-b border-border bg-studio-soft/20">
          <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
            {/* Compact Header */}
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">01 / Services</p>
                <h2 className="display-type mt-2 text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
                  What I Design & Deliver
                </h2>
              </div>
              <p className="max-w-[42ch] text-xs leading-relaxed text-muted-foreground sm:text-sm">
                5 specialized disciplines tailored for brands, products, and campaigns across digital screens and physical production.
              </p>
            </div>

            {/* Compact 5 Services Grid */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {portfolioCapabilities.map(({ icon: Icon, number, tag, category, label, detail }) => (
                <button
                  key={label}
                  onClick={() => {
                    setFilter(category);
                    const matched = portfolioProjects.find((p) => p.category === category);
                    if (matched) setActiveProject(matched);
                    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group relative flex flex-col justify-between border border-border bg-background p-4 text-left transition-all hover:border-foreground hover:bg-studio-soft/40 sm:p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="display-type text-[11px] font-bold uppercase tracking-wider text-signal">{number}</span>
                    <Icon className="size-4 text-foreground/80 transition-transform group-hover:scale-110 group-hover:text-signal" />
                  </div>

                  <div className="mt-4">
                    <h3 className="display-type text-base font-bold uppercase leading-tight group-hover:text-foreground">
                      {label}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {detail}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border/80 pt-2.5 display-type text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-foreground">
                    <span className="font-semibold">{tag}</span>
                    <ArrowDownRight className="size-3 text-signal transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* WORK / SELECTED PROJECTS SECTION - Screen-Fit Proportions */}
        <section id="work" className="scroll-mt-20 border-b border-border lg:min-h-[calc(100svh-4.5rem)] lg:flex lg:flex-col lg:justify-center">
          <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-8">
            {/* Header with Title & Category Filters + View All Modal Trigger */}
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">02 / Selected Portfolio</p>
                <h2 className="display-type mt-2 text-3xl font-bold uppercase leading-none sm:text-4xl lg:text-5xl">
                  Featured Work
                </h2>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                {/* Category Filter Chips */}
                <div className="flex flex-wrap gap-1.5 display-type text-[11px] uppercase sm:gap-2">
                  {[
                    { key: "all", label: "All" },
                    { key: "social", label: "Social Media" },
                    { key: "logo", label: "Logo Design" },
                    { key: "branding", label: "Branding" },
                    { key: "packaging", label: "Packaging" },
                    { key: "print", label: "Printing" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => {
                        setFilter(tab.key);
                        const matched = tab.key === "all" ? portfolioProjects[0] : portfolioProjects.find(p => p.category === tab.key);
                        if (matched) setActiveProject(matched);
                      }}
                      className={`border px-3 py-1 transition-colors ${
                        filter === tab.key
                          ? "border-foreground bg-foreground text-background font-bold"
                          : "border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* VIEW MORE / POPUP TRIGGER BUTTON */}
                <button
                  onClick={() => {
                    setModalFilter(filter);
                    setArchiveModalOpen(true);
                  }}
                  className="border border-foreground bg-signal px-3.5 py-1 display-type text-[11px] font-bold uppercase tracking-wider text-foreground shadow-2xs transition-all hover:bg-foreground hover:text-background flex items-center gap-1.5"
                >
                  <Eye className="size-3.5" />
                  <span>View More ({portfolioProjects.length})</span>
                </button>
              </div>
            </div>

            {/* Showcase Grid Container */}
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10">
              {/* Main Featured Project Display */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 border border-foreground md:grid-cols-2 shadow-sm">
                  {/* Visual Preview Frame */}
                  <div
                    className={`relative flex h-[280px] sm:h-[340px] lg:h-[360px] xl:h-[390px] overflow-hidden p-5 sm:p-6 ${
                      activeProject.accent === "yellow"
                        ? "bg-signal"
                        : activeProject.accent === "ink"
                          ? "bg-foreground text-background"
                          : "bg-studio-soft text-foreground"
                    }`}
                  >
                    <div className="absolute left-5 top-5 z-20 display-type text-[11px] uppercase opacity-80 font-bold">
                      Case {activeProject.id} / {activeProject.year}
                    </div>
                    <ProjectVisual visual={activeProject.visual} />
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col justify-between bg-background p-5 sm:p-6 lg:p-7">
                    <div>
                      <p className="display-type text-[11px] font-bold uppercase tracking-wider text-signal">
                        {activeProject.id} • {activeProject.service}
                      </p>
                      <h3 className="display-type mt-2.5 text-2xl font-bold uppercase leading-tight sm:text-3xl lg:text-[1.85rem]">
                        {activeProject.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {activeProject.summary}
                      </p>

                      <div className="mt-4 border-t border-border pt-3">
                        <p className="display-type text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Deliverables:</p>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {activeProject.deliverables.map((del) => (
                            <span
                              key={del}
                              className="border border-border bg-studio-soft/60 px-2 py-0.5 text-[10px] display-type uppercase font-semibold text-foreground"
                            >
                              {del}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-border pt-4 flex flex-wrap items-center gap-2.5">
                      <Button
                        asChild
                        className="h-10 rounded-none bg-foreground px-4 display-type text-xs uppercase text-background hover:bg-signal hover:text-foreground"
                      >
                        <a href="#contact">
                          Inquire about this service <ArrowUpRight className="ml-1.5 size-3.5" />
                        </a>
                      </Button>
                      <button
                        onClick={() => {
                          setModalFilter(activeProject.category);
                          setArchiveModalOpen(true);
                        }}
                        className="h-10 border border-border bg-studio-soft/40 px-3 display-type text-[11px] uppercase font-bold text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                      >
                        All {activeProject.service} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Navigation List */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <p className="display-type text-[11px] uppercase font-bold tracking-wider text-muted-foreground pb-2">
                    Select Project
                  </p>
                  <div className="border-t border-foreground">
                    {filteredProjects.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => setActiveProject(project)}
                        className={`group grid w-full grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-border px-3 py-3 text-left transition-colors hover:bg-studio-soft/80 ${
                          activeProject.id === project.id ? "bg-studio-soft border-l-4 border-l-signal" : ""
                        }`}
                      >
                        <span className="display-type text-xs font-bold text-signal">{project.id}</span>
                        <span className="min-w-0">
                          <span className="display-type block text-sm font-bold uppercase truncate group-hover:text-foreground">
                            {project.title}
                          </span>
                          <span className="block text-[11px] text-muted-foreground truncate">
                            {project.service}
                          </span>
                        </span>
                        <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Link into Complete Archive */}
                <button
                  onClick={() => {
                    setModalFilter("all");
                    setArchiveModalOpen(true);
                  }}
                  className="mt-4 flex w-full items-center justify-between border border-dashed border-foreground/40 bg-studio-soft/50 p-3 display-type text-[11px] font-bold uppercase tracking-wider text-foreground transition-colors hover:border-foreground hover:bg-signal"
                >
                  <span>Open Full Archive ({portfolioProjects.length} Works)</span>
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLETE DESIGN ARCHIVE POPUP MODAL */}
        {archiveModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-3 sm:p-6 lg:p-8 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setArchiveModalOpen(false)}
          >
            <div
              className="relative flex max-h-[92vh] w-full max-w-6xl flex-col border-2 border-foreground bg-background shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex flex-col gap-3 border-b border-border bg-studio-soft/40 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="size-2 bg-signal" />
                    <p className="eyebrow !m-0">Archive • {portfolioProjects.length} Works</p>
                  </div>
                  <h3 className="display-type mt-1 text-2xl font-bold uppercase leading-none sm:text-3xl">
                    All Works & Deliverables
                  </h3>
                </div>

                {/* Close Button */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="hidden sm:inline-block display-type text-[10px] uppercase text-muted-foreground border border-border px-2 py-1">
                    ESC to close
                  </span>
                  <button
                    onClick={() => setArchiveModalOpen(false)}
                    className="grid size-9 place-items-center border border-foreground bg-foreground text-background transition-colors hover:bg-signal hover:text-foreground"
                    aria-label="Close archive dialog"
                  >
                    <X className="size-5" />
                  </button>
                </div>
              </div>

              {/* Modal Filter Tabs */}
              <div className="border-b border-border bg-background px-4 py-3 sm:px-6">
                <div className="flex flex-wrap gap-1.5 display-type text-[11px] uppercase">
                  {[
                    { key: "all", label: `All (${portfolioProjects.length})` },
                    { key: "social", label: `Social Media (${portfolioProjects.filter(p => p.category === "social").length})` },
                    { key: "logo", label: `Logo Design (${portfolioProjects.filter(p => p.category === "logo").length})` },
                    { key: "branding", label: `Branding (${portfolioProjects.filter(p => p.category === "branding").length})` },
                    { key: "packaging", label: `Packaging (${portfolioProjects.filter(p => p.category === "packaging").length})` },
                    { key: "print", label: `Printing (${portfolioProjects.filter(p => p.category === "print").length})` },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setModalFilter(tab.key)}
                      className={`border px-3 py-1 transition-colors ${
                        modalFilter === tab.key
                          ? "border-foreground bg-foreground text-background font-bold"
                          : "border-border bg-studio-soft/30 text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal Scrollable Projects Grid */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {modalFilteredProjects.map((project) => (
                    <div
                      key={project.id}
                      className="group flex flex-col justify-between border border-border bg-background transition-all hover:border-foreground hover:shadow-lg"
                    >
                      {/* Mini Visual Stage Header */}
                      <div
                        className={`relative h-44 overflow-hidden p-4 ${
                          project.accent === "yellow"
                            ? "bg-signal"
                            : project.accent === "ink"
                              ? "bg-foreground text-background"
                              : "bg-studio-soft text-foreground"
                        }`}
                      >
                        <div className="absolute left-3 top-3 z-10 display-type text-[10px] uppercase font-bold opacity-85">
                          {project.id} • {project.year}
                        </div>
                        <div className="scale-75 origin-center">
                          <ProjectVisual visual={project.visual} />
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                        <div>
                          <span className="display-type text-[10px] font-bold uppercase text-signal">
                            {project.service}
                          </span>
                          <h4 className="display-type mt-1 text-lg font-bold uppercase leading-tight">
                            {project.title}
                          </h4>
                          <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                            {project.summary}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-1">
                            {project.deliverables.map((del) => (
                              <span
                                key={del}
                                className="border border-border bg-studio-soft/40 px-1.5 py-0.5 text-[9px] display-type uppercase text-foreground/80"
                              >
                                {del}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Modal Card Footer Actions */}
                        <div className="mt-5 flex items-center justify-between border-t border-border pt-3">
                          <button
                            onClick={() => {
                              setActiveProject(project);
                              setFilter(project.category);
                              setArchiveModalOpen(false);
                              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="display-type text-[10px] font-bold uppercase text-foreground hover:text-signal transition-colors flex items-center gap-1"
                          >
                            <span>Inspect on Stage</span>
                            <ArrowUpRight className="size-3" />
                          </button>

                          <a
                            href="#contact"
                            onClick={() => setArchiveModalOpen(false)}
                            className="display-type text-[10px] font-bold uppercase text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Inquire →
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer Summary */}
              <div className="flex flex-col gap-2 border-t border-border bg-studio-soft/40 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <span className="display-type text-[11px] uppercase text-muted-foreground">
                  Showing <span className="font-bold text-foreground">{modalFilteredProjects.length}</span> of {portfolioProjects.length} Works
                </span>
                <a
                  href="#contact"
                  onClick={() => setArchiveModalOpen(false)}
                  className="display-type text-[11px] font-bold uppercase text-foreground hover:text-signal transition-colors"
                >
                  Need a custom commission? Start a conversation →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT SECTION - Screen-Fit Proportions */}
        <section id="about" className="scroll-mt-20 border-b border-border lg:min-h-[calc(100svh-4.5rem)] lg:flex lg:items-center">
          <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
              
              {/* Visual Image / Graphics Frame */}
              <div className="relative flex h-[340px] items-center justify-center sm:h-[400px] lg:col-span-5 lg:h-[440px] xl:h-[480px]">
                <div className="absolute inset-x-4 bottom-0 top-8 bg-foreground" />
                <div className="absolute left-0 top-0 h-16 w-32 bg-signal sm:h-20 sm:w-36" />
                <img
                  src="/img2.png"
                  alt="Black and white portrait of Sanjeev in sunglasses"
                  className="relative z-10 h-full max-h-[340px] w-auto object-contain drop-shadow-md sm:max-h-[400px] lg:max-h-[440px] xl:max-h-[480px]"
                />
                <div className="absolute bottom-3 right-2 z-20 border border-background bg-background px-3 py-1.5 display-type text-[10px] uppercase font-bold text-foreground shadow-sm">
                  Sanjeev / Creative Designer
                </div>
              </div>

              {/* About Text Content */}
              <div className="lg:col-span-7">
                <p className="eyebrow">03 / About Sanjeev</p>
                <h2 className="display-type mt-3 text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-[2.6rem] xl:text-[3rem]">
                  Turning concepts into clean, memorable, and print-ready reality.
                </h2>

                <div className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-[0.95rem]">
                  <p>
                    Hello! I am <span className="font-semibold text-foreground">Sanjeev</span>, a dedicated creative graphic designer. My core passion lies in crafting high-converting social media creatives, iconic logos, complete brand identities, eye-catching product packaging, and meticulous print-ready files.
                  </p>
                  <p>
                    Whether you need a fresh visual system from scratch, an engaging Instagram carousel campaign, custom box dielines for retail manufacturing, or luxury printed marketing collateral, I combine design precision with strategic thinking to make your brand shine.
                  </p>
                </div>

                {/* 3 Core Workflow Pillars */}
                <div className="mt-6 grid grid-cols-1 border-t border-border sm:grid-cols-3 sm:divide-x sm:divide-border">
                  {[
                    { title: "Digital First", sub: "Social posts, RGB visuals & high-res vector logos." },
                    { title: "Print Master", sub: "CMYK, Pantone, bleed accuracy & dielines." },
                    { title: "Brand Cohesion", sub: "Harmonious palettes & typography systems." },
                  ].map((item) => (
                    <div key={item.title} className="border-b border-border py-3 sm:border-b-0 sm:px-4 sm:first:pl-0 sm:last:pr-0">
                      <span className="display-type block text-base font-bold uppercase text-foreground">{item.title}</span>
                      <span className="mt-1 block text-xs leading-normal text-muted-foreground">{item.sub}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION - Compact & Sleek */}
        <section id="contact" className="scroll-mt-20 bg-foreground text-background">
          <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <p className="display-type text-[11px] uppercase tracking-wider text-background/60">04 / Collaborate & Hire</p>
            
            <div className="mt-4 grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <h2 className="display-type text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
                  Let’s bring your next project to life.
                </h2>
                <p className="mt-3 max-w-[48ch] text-xs leading-relaxed text-background/70 sm:text-sm">
                  Available for select collaborations, commercial design projects, and high-impact visual commissions. Send over your goals and timeline.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="border border-background/20 bg-background/5 p-4 sm:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1 display-type text-xs text-background">
                      <a
                        href="mailto:sanjeevsanju281@gmail.com"
                        className="flex items-center gap-2 text-background/85 hover:text-signal transition-colors"
                      >
                        <Mail className="size-3.5 shrink-0" />
                        <span className="truncate">sanjeevsanju281@gmail.com</span>
                      </a>
                      <a
                        href="tel:+919514644375"
                        className="flex items-center gap-2 text-background/85 hover:text-signal transition-colors"
                      >
                        <Phone className="size-3.5 shrink-0" />
                        <span>+919514644375</span>
                      </a>
                    </div>

                    <Button
                      asChild
                      className="h-10 shrink-0 rounded-none bg-signal px-5 display-type text-xs uppercase text-foreground hover:bg-background"
                    >
                      <a href="mailto:sanjeevsanju281@gmail.com">
                        Send Brief <ArrowUpRight className="ml-1 size-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-foreground text-background">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 border-t border-background/15 px-4 py-5 display-type text-[11px] uppercase tracking-wider text-background/60 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>© 2026 Sanjeev / Graphic Designer</span>
          <div className="flex flex-wrap gap-5">
            <a href="#top" className="transition-colors hover:text-background">
              Back to top <CircleArrowUp className="ml-1 inline size-3.5" />
            </a>
            <a href="mailto:sanjeevsanju281@gmail.com" className="transition-colors hover:text-background">
              sanjeevsanju281@gmail.com
            </a>
            <a href="tel:+919514644375" className="transition-colors hover:text-background">
              +919514644375
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

{/* Dynamic Visual Mockup Representation for Each Discipline */}
function ProjectVisual({ visual }: { visual: PortfolioProject["visual"] }) {
  if (visual === "social") {
    return (
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Social media carousel & feed preview cards */}
        <div className="relative h-64 w-52 rotate-[-5deg] border-2 border-foreground bg-background p-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <div className="size-3 rounded-full bg-signal" />
            <span className="display-type text-[9px] uppercase font-bold">@aura_fitness</span>
            <span className="text-[9px]">•••</span>
          </div>
          <div className="mt-3 aspect-square bg-foreground text-background p-3 flex flex-col justify-between">
            <span className="display-type text-xl font-bold uppercase leading-none">AURA STUDIO</span>
            <div className="flex justify-between items-end">
              <span className="display-type text-[8px] bg-signal text-foreground px-1 py-0.5 uppercase">Swipe 1/5 →</span>
              <span className="size-4 bg-signal rounded-full" />
            </div>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5 display-type text-[9px] uppercase font-semibold">
            <span>❤️ 1.4K</span>
            <span>💬 280</span>
          </div>
        </div>

        <div className="absolute right-6 bottom-8 h-48 w-40 rotate-[8deg] border-2 border-foreground bg-signal p-3 shadow-lg">
          <div className="display-type text-xs font-bold uppercase text-foreground">STORY AD</div>
          <div className="mt-4 border border-foreground/30 bg-background/80 p-2 display-type text-[10px] uppercase font-bold">
            NEW DROP 2026
          </div>
          <div className="mt-8 text-center bg-foreground text-background py-1.5 display-type text-[9px] uppercase font-bold">
            Shop Now ↑
          </div>
        </div>
      </div>
    );
  }

  if (visual === "logo") {
    return (
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Geometric logo construction diagram */}
        <div className="relative size-60 border border-background/40 flex items-center justify-center">
          <div className="absolute size-44 rounded-full border border-background/30" />
          <div className="absolute size-32 rotate-45 border border-signal" />
          <div className="relative z-10 flex flex-col items-center">
            <span className="display-type text-7xl font-bold leading-none tracking-tighter text-background">
              K<span className="text-signal">.</span>
            </span>
            <span className="display-type mt-2 text-[10px] uppercase tracking-[0.25em] text-background/80">
              KANSO STUDIO
            </span>
          </div>
          <div className="absolute -bottom-3 -right-3 bg-signal px-2 py-1 display-type text-[8px] uppercase font-bold text-foreground">
            Vector Grid 1:1.618
          </div>
        </div>
      </div>
    );
  }

  if (visual === "branding") {
    return (
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Branding identity spread & color swatches */}
        <div className="relative h-64 w-52 rotate-[-4deg] border border-foreground bg-background p-4 shadow-lg">
          <div className="display-type text-xs font-bold uppercase">VERVE</div>
          <div className="mt-1 display-type text-[9px] uppercase text-muted-foreground">Brand Identity Guide</div>
          
          <div className="mt-4 grid grid-cols-3 gap-1.5">
            <div className="h-10 bg-foreground" />
            <div className="h-10 bg-signal" />
            <div className="h-10 bg-studio-soft" />
          </div>

          <div className="mt-4 border-t border-border pt-2">
            <span className="display-type text-[10px] font-bold block">Aa Bb Cc 123</span>
            <span className="text-[8px] text-muted-foreground block mt-1">Typography & Visual System</span>
          </div>
        </div>

        <div className="absolute right-4 top-10 h-36 w-44 rotate-[6deg] border border-foreground bg-foreground p-3 text-background shadow-md">
          <span className="display-type text-xs font-bold uppercase text-signal">STATIONERY</span>
          <div className="mt-3 border border-background/30 p-2 display-type text-[9px]">
            Business Card Mockup
          </div>
        </div>
      </div>
    );
  }

  if (visual === "packaging") {
    return (
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Product Box & Packaging Label Dieline Mockup */}
        <div className="relative h-64 w-44 border-2 border-foreground bg-background p-3 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-foreground pb-1.5">
              <span className="display-type text-[9px] font-bold uppercase">NECTAR</span>
              <span className="display-type text-[8px] bg-foreground text-background px-1">COLD BREW</span>
            </div>
            <div className="mt-4 border border-border bg-studio-soft/60 p-2 text-center">
              <span className="display-type text-2xl font-bold block">12 FL OZ</span>
              <span className="display-type text-[8px] uppercase text-muted-foreground">Organic Arabica</span>
            </div>
          </div>
          <div className="border-t-2 border-foreground pt-2">
            <span className="display-type text-[8px] uppercase font-bold block">Dieline Spec: Box-04</span>
            <div className="mt-1 h-3 bg-signal w-full" />
          </div>
        </div>

        <div className="absolute -right-4 bottom-10 h-40 w-32 rotate-[12deg] border-2 border-foreground bg-foreground p-3 text-background">
          <span className="display-type text-[9px] uppercase font-bold text-signal">RETAIL POUCH</span>
          <div className="mt-6 border border-background/30 p-1.5 text-center display-type text-[8px]">
            Shelf Appeal
          </div>
        </div>
      </div>
    );
  }

  // Printing Design Visual Spread
  return (
    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Editorial brochure & metallic print layout */}
      <div className="relative h-64 w-56 rotate-[-3deg] border-2 border-background/80 bg-foreground text-background p-4 shadow-xl">
        <div className="flex justify-between items-center">
          <span className="display-type text-[10px] font-bold text-signal uppercase">EXPO 2026</span>
          <span className="display-type text-[8px] border border-background/40 px-1">CMYK + FOIL</span>
        </div>
        
        <div className="mt-6 display-type text-3xl font-bold uppercase leading-tight">
          MONO<br />LITH
        </div>

        <div className="mt-6 border-t border-background/30 pt-2 flex justify-between display-type text-[8px] uppercase text-background/70">
          <span>Tri-Fold Brochure</span>
          <span>300 DPI</span>
        </div>
      </div>

      <div className="absolute right-4 top-8 h-40 w-32 rotate-[10deg] border border-background bg-signal p-3 text-foreground shadow-md">
        <span className="display-type text-[9px] font-bold uppercase">VIP PASS</span>
        <div className="mt-4 border border-foreground p-1 text-center display-type text-[9px] font-bold">
          ACCESS ALL
        </div>
      </div>
    </div>
  );
}
