import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Box,
  CircleArrowUp,
  Feather,
  Layers3,
  Mail,
  Menu,
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
      "High-energy social media campaigns, carousel post sequences, promotional banners, and reel covers designed to stop the scroll and drive active engagement.",
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
];

const portfolioCapabilities = [
  {
    icon: Share2,
    number: "01",
    label: "Social Media Post",
    highlight: "Engaging Feed & Ad Visuals",
    detail:
      "Custom carousel layouts, feed posts, story sequences, reel thumbnails, and promotional ad creatives built for maximum visual retention.",
    deliverables: ["Instagram Carousels & Posts", "Story & Reel Cover Graphics", "Ad Campaign Banners", "Content Templates"],
  },
  {
    icon: Feather,
    number: "02",
    label: "Logo Design",
    highlight: "Distinctive Brand Marks",
    detail:
      "Memorable logos, custom wordmarks, monograms, and iconic emblems crafted with precision geometry for lasting brand recognition.",
    deliverables: ["Primary & Secondary Logos", "Monogram & Submarks", "Vector Master Files (SVG/EPS)", "Logo Usage Rules"],
  },
  {
    icon: Layers3,
    number: "03",
    label: "Branding Design",
    highlight: "Cohesive Visual Systems",
    detail:
      "End-to-end brand identity architecture including typography hierarchy, color theory, brand style guides, and collateral design.",
    deliverables: ["Visual Identity Systems", "Color Palettes & Typography", "Brand Guidelines Book", "Marketing Collateral"],
  },
  {
    icon: Box,
    number: "04",
    label: "Packaging Design",
    highlight: "Shelf-Ready Physical Goods",
    detail:
      "Custom product packaging, box structural dielines, bottle/can labels, retail pouches, and unboxing collateral ready for manufacturing.",
    deliverables: ["Custom Box & Carton Dielines", "Bottle, Can & Jar Labels", "Pouch & Bag Packaging", "Print-Ready Dieline Files"],
  },
  {
    icon: Printer,
    number: "05",
    label: "Printing Design",
    highlight: "Tactile Print Collateral",
    detail:
      "High-precision CMYK and Pantone print layouts: brochures, business cards, flyers, banners, posters, menus, and editorial booklets.",
    deliverables: ["Flyers & Tri-Fold Brochures", "Premium Business Cards", "Large-Format Posters & Banners", "Editorial & Catalogs"],
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

  const filteredProjects =
    filter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-signal selection:text-foreground">
      {/* Top Header */}
      <header className="sticky top-0 z-50 h-16 border-b border-border bg-background/90 backdrop-blur sm:h-18">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-12">
          <a href="#top" className="display-type flex items-center gap-2.5 text-sm font-bold tracking-wider">
            <span className="grid size-7 place-items-center bg-foreground text-xs text-background font-mono">S</span>
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
                <p className="display-type vertical-label text-[11px] uppercase tracking-wider text-muted-foreground">
                  Graphic • Brand • Print • Packaging
                </p>
              </div>

              {/* Main Text Content */}
              <div className="lg:col-span-6 xl:col-span-6">
                <div className="display-type inline-flex items-center gap-2.5 bg-foreground px-3 py-1.5 text-[11px] uppercase text-background sm:px-3.5">
                  <span className="size-2 animate-pulse bg-signal" />
                  Available for new projects & briefs
                </div>

                <h1 className="display-type mt-4 text-5xl font-bold uppercase leading-[0.88] tracking-tight sm:mt-5 sm:text-7xl lg:text-[5.8rem] xl:text-[6.8rem]">
                  Sanjeev
                </h1>

                <div className="mt-4 max-w-[540px] border-l-3 border-signal pl-3.5 sm:mt-5 sm:border-l-4 sm:pl-5">
                  <p className="text-base font-semibold leading-snug sm:text-xl lg:text-[1.35rem]">
                    Creative graphic designer shaping distinct visual identities, packaging, social content, and print that make brands stand out.
                  </p>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm lg:text-[0.92rem]">
                    Specializing in <span className="font-semibold text-foreground">Social Media Posts</span>, <span className="font-semibold text-foreground">Logo Design</span>, <span className="font-semibold text-foreground">Branding</span>, <span className="font-semibold text-foreground">Packaging</span>, and <span className="font-semibold text-foreground">Printing Design</span>.
                  </p>
                </div>

                {/* Service Quick Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5 display-type text-[10px] uppercase sm:mt-5 sm:gap-2 sm:text-[11px]">
                  {["Social Media", "Logo Design", "Branding", "Packaging", "Printing"].map((item) => (
                    <span
                      key={item}
                      className="border border-border bg-studio-soft/60 px-2.5 py-1 text-foreground transition-colors hover:border-signal hover:bg-signal/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:items-center sm:gap-3.5">
                  <Button
                    asChild
                    className="h-10 rounded-none bg-foreground px-5 display-type text-xs uppercase text-background hover:bg-signal hover:text-foreground sm:h-11"
                  >
                    <a href="#work">
                      View Selected Work <ArrowDownRight className="ml-1.5 size-4" />
                    </a>
                  </Button>
                  <a
                    href="mailto:hello@sanjeev.studio"
                    className="display-type inline-flex h-10 items-center justify-center gap-2 border border-foreground bg-background/80 px-4 text-xs uppercase transition-colors hover:border-signal hover:bg-signal sm:h-11 sm:px-5"
                  >
                    <Mail className="size-4" />
                    hello@sanjeev.studio
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
                <div className="absolute right-0 top-0 z-20 w-36 border border-foreground bg-background p-2.5 shadow-sm sm:w-44 sm:p-3">
                  <p className="display-type text-[10px] uppercase text-muted-foreground">Expertise</p>
                  <p className="mt-1 text-xs font-bold leading-tight uppercase sm:text-sm">
                    Print & Digital Visuals
                  </p>
                </div>

                {/* Bottom Floating Stamp */}
                <div className="absolute bottom-2 left-2 z-20 hidden border border-foreground bg-background px-3 py-1.5 display-type text-[10px] uppercase sm:block">
                  <span className="text-signal font-bold">●</span> High-Impact Design
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Capabilities Ticker Bar */}
          <div className="border-t border-border bg-foreground text-background">
            <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2.5 display-type text-[11px] uppercase tracking-wider sm:px-8 sm:py-3 lg:px-12">
              <span className="flex items-center gap-1.5 text-signal font-semibold">
                <Sparkles className="size-3.5" /> Core Services:
              </span>
              <span className="transition-colors hover:text-signal">Social Media Post</span>
              <span className="text-signal/60">•</span>
              <span className="transition-colors hover:text-signal">Logo Design</span>
              <span className="text-signal/60">•</span>
              <span className="transition-colors hover:text-signal">Branding Design</span>
              <span className="text-signal/60">•</span>
              <span className="transition-colors hover:text-signal">Packaging Design</span>
              <span className="text-signal/60">•</span>
              <span className="transition-colors hover:text-signal">Printing Design</span>
            </div>
          </div>
        </section>

        {/* SERVICES / WHAT I DO SECTION */}
        <section id="services" className="scroll-mt-20 border-b border-border bg-studio-soft/30">
          <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">01 / Capabilities & Services</p>
                <h2 className="display-type mt-4 text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-6xl">
                  What I Design & Deliver.
                </h2>
              </div>
              <p className="max-w-[38ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
                A specialized creative service suite tailored for brands, creators, products, and businesses that need striking visual identity and production-ready artwork.
              </p>
            </div>

            {/* 5 Core Services Grid */}
            <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {portfolioCapabilities.map(({ icon: Icon, number, label, highlight, detail, deliverables }) => (
                <div
                  key={label}
                  className="group flex flex-col justify-between bg-background p-6 transition-colors hover:bg-studio-soft/50 sm:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="display-type text-xs font-bold text-signal">{number}</span>
                      <Icon className="size-6 text-foreground transition-transform group-hover:scale-110 group-hover:text-signal" />
                    </div>

                    <h3 className="display-type mt-8 text-xl font-bold uppercase leading-tight">
                      {label}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-signal display-type uppercase">
                      {highlight}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {detail}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="display-type text-[10px] uppercase text-muted-foreground">Deliverables:</p>
                    <ul className="mt-2 space-y-1 text-xs text-foreground/85">
                      {deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="size-1 bg-signal" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK / SELECTED PROJECTS SECTION */}
        <section id="work" className="scroll-mt-20 border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">02 / Selected Portfolio</p>
                <h2 className="display-type mt-4 text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-6xl">
                  Featured Work.
                </h2>
              </div>
              
              {/* Category Filter Chips */}
              <div className="flex flex-wrap gap-2 display-type text-xs uppercase">
                {[
                  { key: "all", label: "All Work" },
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
                    className={`border px-3 py-1.5 transition-colors ${
                      filter === tab.key
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Main Featured Project Display */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 border border-foreground md:grid-cols-2">
                  {/* Visual Preview */}
                  <div
                    className={`relative min-h-[380px] overflow-hidden p-6 sm:min-h-[440px] ${
                      activeProject.accent === "yellow"
                        ? "bg-signal"
                        : activeProject.accent === "ink"
                          ? "bg-foreground text-background"
                          : "bg-studio-soft text-foreground"
                    }`}
                  >
                    <div className="absolute left-6 top-6 display-type text-xs uppercase opacity-75 font-semibold">
                      Featured / {activeProject.year}
                    </div>
                    <ProjectVisual visual={activeProject.visual} />
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col justify-between bg-background p-6 sm:p-8">
                    <div>
                      <p className="display-type text-xs font-bold uppercase text-signal">
                        {activeProject.id} • {activeProject.service}
                      </p>
                      <h3 className="display-type mt-4 text-3xl font-bold uppercase leading-tight sm:text-4xl">
                        {activeProject.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {activeProject.summary}
                      </p>

                      <div className="mt-6 border-t border-border pt-4">
                        <p className="display-type text-[11px] uppercase text-muted-foreground">Scope & Assets:</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {activeProject.deliverables.map((del) => (
                            <span
                              key={del}
                              className="border border-border bg-studio-soft/50 px-2.5 py-1 text-[11px] display-type uppercase text-foreground"
                            >
                              {del}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-border pt-5">
                      <Button
                        asChild
                        className="w-full rounded-none bg-foreground px-5 display-type text-xs uppercase text-background hover:bg-signal hover:text-foreground sm:w-auto"
                      >
                        <a href="#contact">
                          Inquire about this service <ArrowUpRight className="ml-1.5 size-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Navigation List */}
              <div className="lg:col-span-4">
                <p className="display-type text-xs uppercase text-muted-foreground pb-2">Select Project to View</p>
                <div className="border-t border-foreground">
                  {filteredProjects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setActiveProject(project)}
                      className={`group grid w-full grid-cols-[2.5rem_1fr_auto] items-start gap-3 border-b border-border p-4 text-left transition-colors hover:bg-studio-soft/70 ${
                        activeProject.id === project.id ? "bg-studio-soft border-l-4 border-l-signal" : ""
                      }`}
                    >
                      <span className="display-type text-xs font-bold text-signal pt-0.5">{project.id}</span>
                      <span className="min-w-0">
                        <span className="display-type block text-base font-bold uppercase truncate">
                          {project.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {project.service}
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-20 border-b border-border">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
            
            {/* Visual Image / Graphics */}
            <div className="relative min-h-[460px] lg:col-span-5">
              <div className="absolute inset-x-6 bottom-0 top-10 bg-foreground" />
              <div className="absolute left-0 top-0 h-20 w-36 bg-signal" />
              <img
                src="/img2.png"
                alt="Black and white portrait of Sanjeev in sunglasses"
                className="absolute bottom-0 left-1/2 h-[440px] w-auto max-w-none -translate-x-1/2 object-contain sm:h-[500px]"
              />
              <div className="absolute bottom-4 right-2 border border-background bg-background px-3 py-2 display-type text-xs uppercase text-foreground">
                Sanjeev / Creative Designer
              </div>
            </div>

            {/* About Text */}
            <div className="lg:col-span-7 lg:pl-6">
              <p className="eyebrow">03 / About Sanjeev</p>
              <h2 className="display-type mt-4 text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
                Turning concepts into clean, memorable, and print-ready reality.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Hello! I am <span className="font-semibold text-foreground">Sanjeev</span>, a dedicated creative graphic designer. My core passion lies in crafting high-converting social media creatives, iconic logos, complete brand identities, eye-catching product packaging, and meticulous print-ready files.
              </p>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Whether you need a fresh visual system from scratch, an engaging Instagram carousel campaign, custom box dielines for retail manufacturing, or luxury printed marketing collateral, I combine design precision with strategic thinking to make your brand shine.
              </p>

              {/* 3 Core Workflow Pillars */}
              <div className="mt-8 grid grid-cols-1 border-t border-border sm:grid-cols-3">
                {[
                  { title: "Digital First", sub: "Social posts, RGB visuals & high-res vector logos." },
                  { title: "Print Master", sub: "CMYK, Pantone, bleed accuracy & dieline expertise." },
                  { title: "Brand Cohesion", sub: "Harmonious color palettes & typography systems." },
                ].map((item) => (
                  <div key={item.title} className="border-b border-border py-5 sm:border-b-0 sm:border-r sm:pr-4 sm:last:border-r-0">
                    <span className="display-type block text-lg font-bold uppercase">{item.title}</span>
                    <span className="mt-1.5 block text-xs leading-relaxed text-muted-foreground">{item.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-20 bg-foreground text-background">
          <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
            <p className="display-type text-xs uppercase text-background/60">04 / Collaborate & Hire</p>
            
            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h2 className="display-type text-4xl font-bold uppercase leading-none sm:text-6xl lg:text-7xl">
                  Let’s bring your next project to life.
                </h2>
                <div className="mt-6 flex flex-wrap gap-2 display-type text-xs uppercase text-background/80">
                  <span className="border border-background/20 px-3 py-1 bg-background/5">Social Media Posts</span>
                  <span className="border border-background/20 px-3 py-1 bg-background/5">Logo Design</span>
                  <span className="border border-background/20 px-3 py-1 bg-background/5">Branding Design</span>
                  <span className="border border-background/20 px-3 py-1 bg-background/5">Packaging Design</span>
                  <span className="border border-background/20 px-3 py-1 bg-background/5">Printing Design</span>
                </div>
              </div>

              <div className="lg:col-span-4">
                <p className="text-sm leading-relaxed text-background/70 sm:text-base">
                  Have an upcoming campaign, a product needing packaging, a new business needing a logo, or print collateral to produce? Let's discuss your brief.
                </p>
                <Button
                  asChild
                  className="mt-6 h-12 w-full rounded-none bg-signal px-6 display-type text-xs uppercase text-foreground hover:bg-background sm:w-auto"
                >
                  <a href="mailto:hello@sanjeev.studio">
                    Send Project Brief <ArrowUpRight className="ml-1.5 size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-foreground text-background">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 border-t border-background/15 px-4 py-8 display-type text-xs uppercase text-background/60 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>© 2026 Sanjeev / Graphic, Brand, Packaging & Print Designer</span>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-background">
              Back to top <CircleArrowUp className="ml-1 inline size-3.5" />
            </a>
            <a href="mailto:hello@sanjeev.studio" className="transition-colors hover:text-background">
              hello@sanjeev.studio
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
            <span className="display-type text-xl font-bold uppercase leading-none">PEAK MOTION</span>
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
