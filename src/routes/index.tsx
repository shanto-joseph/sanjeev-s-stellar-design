import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, CircleArrowUp, Menu, X } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import profileAsset from "@/assets/sanjeev-profile.png.asset.json";
import sunglassesAsset from "@/assets/sanjeev-sunglasses.png.asset.json";

type Work = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  palette: string;
  visual: "sun" | "orbit" | "paper" | "type";
};

const works: Work[] = [
  {
    number: "01",
    title: "After Hours",
    category: "Brand identity",
    year: "2025",
    description: "A night-time culture platform with a flexible identity built for posters, playlists and places.",
    palette: "dark",
    visual: "sun",
  },
  {
    number: "02",
    title: "Common Ground",
    category: "Editorial system",
    year: "2024",
    description: "A printed conversation about shared spaces, told through modular type and collected voices.",
    palette: "yellow",
    visual: "orbit",
  },
  {
    number: "03",
    title: "Soft Evidence",
    category: "Illustration",
    year: "2024",
    description: "An illustrated visual language for the details we usually pass by: gestures, objects and quiet rituals.",
    palette: "paper",
    visual: "paper",
  },
  {
    number: "04",
    title: "New Frequency",
    category: "Art direction",
    year: "2023",
    description: "A visual toolkit for an independent radio series, tuned for motion, digital and the street.",
    palette: "ink",
    visual: "type",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanjeev — Graphic Designer & Illustrator" },
      { name: "description", content: "The portfolio of Sanjeev, a graphic designer and illustrator creating expressive identities, editorial systems, and visual worlds." },
      { property: "og:title", content: "Sanjeev — Graphic Designer & Illustrator" },
      { property: "og:description", content: "Expressive identities, editorial systems, and visual worlds by Sanjeev." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [activeWork, setActiveWork] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const visibleWorks = filter === "All" ? works : works.filter((work) => work.category === filter);
  const featured = works[activeWork];

  const chooseWork = (work: Work) => {
    const index = works.findIndex((item) => item.number === work.number);
    setActiveWork(index < 0 ? 0 : index);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="border-b border-border bg-background/95">
        <div className="mx-auto flex h-20 max-w-[1360px] items-center justify-between px-6 lg:px-10">
          <a href="#top" className="display-type flex items-center gap-3 text-sm font-bold" onClick={() => setMenuOpen(false)}>
            <span className="grid size-8 place-items-center bg-foreground text-xs text-background">S</span>
            <span>SANJEEV<span className="text-signal">.</span></span>
          </a>
          <nav className="hidden items-center gap-8 display-type text-[11px] uppercase tracking-[0.14em] md:flex">
            <a href="#work" className="text-muted-foreground transition-colors hover:text-foreground">Work</a>
            <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">About</a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</a>
          </nav>
          <Button asChild size="sm" className="hidden rounded-none bg-foreground px-4 display-type text-[11px] uppercase tracking-[0.12em] text-background hover:bg-signal hover:text-foreground md:inline-flex">
            <a href="#contact">Start a project <ArrowUpRight /></a>
          </Button>
          <Button aria-label={menuOpen ? "Close navigation" : "Open navigation"} variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border px-6 py-5 display-type text-xs uppercase tracking-[0.14em] md:hidden">
            <div className="flex flex-col gap-5">
              <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="ruled-grid border-b border-border">
          <div className="mx-auto max-w-[1360px] px-6 pb-16 pt-10 lg:px-10 lg:pb-24 lg:pt-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
              <div className="flex justify-between lg:col-span-1 lg:block">
                <div className="display-type text-[10px] uppercase tracking-[0.16em] text-muted-foreground [writing-mode:vertical-rl]">Graphic design / illustration</div>
                <div className="display-type text-[10px] uppercase tracking-[0.16em] text-muted-foreground lg:mt-28 lg:[writing-mode:vertical-rl]">Bengaluru · India</div>
              </div>
              <div className="relative lg:col-span-7">
                <div className="display-type flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"><span className="size-2 bg-signal" /> Portfolio / 2025</div>
                <h1 className="display-type mt-8 text-[clamp(4.5rem,14vw,12.8rem)] font-bold leading-[0.78] tracking-[-0.075em] text-foreground">SAN<br /><span className="text-transparent [text-stroke:1px_currentColor]">JEEV</span></h1>
                <div className="mt-10 max-w-[42rem] border-l-2 border-signal pl-5 sm:pl-7">
                  <p className="max-w-[30ch] text-xl leading-[1.18] text-foreground/85 sm:text-2xl">I make identities, illustrations and visual systems that give good ideas a sharper point of view.</p>
                  <div className="mt-7 flex flex-wrap items-center gap-5">
                    <Button asChild className="h-12 rounded-none bg-foreground px-5 display-type text-[11px] uppercase tracking-[0.12em] text-background hover:bg-signal hover:text-foreground">
                      <a href="#work">Explore selected work <ArrowDownRight /></a>
                    </Button>
                    <a href="#about" className="display-type text-[11px] uppercase tracking-[0.12em] text-muted-foreground underline decoration-signal underline-offset-4 transition-colors hover:text-foreground">The short version →</a>
                  </div>
                </div>
              </div>
              <div className="relative mt-2 lg:col-span-4 lg:mt-[-3.5rem]">
                <div className="relative ml-auto max-w-[420px] border border-border bg-studio-soft/60 p-3">
                  <div className="absolute -left-3 top-14 h-px w-20 bg-signal" />
                  <div className="absolute -right-3 bottom-20 h-20 w-px bg-foreground/25" />
                  <div className="aspect-[4/5] overflow-hidden bg-foreground/10">
                    <img src={profileAsset.url} alt="Sanjeev in profile wearing a light textured knit" className="h-full w-full object-cover object-top grayscale" />
                  </div>
                  <div className="flex items-center justify-between pt-3 display-type text-[10px] uppercase tracking-[0.14em] text-muted-foreground"><span>Fig. 01 / Self portrait</span><span className="text-signal">●</span></div>
                </div>
                <div className="absolute -bottom-5 -left-2 hidden rotate-[-5deg] bg-signal px-4 py-3 display-type text-[10px] font-bold uppercase tracking-[0.14em] sm:block lg:-left-6">Make it matter.</div>
              </div>
            </div>
          </div>
          <div className="border-t border-border bg-foreground text-background">
            <div className="mx-auto flex max-w-[1360px] flex-wrap items-center gap-x-8 gap-y-3 px-6 py-4 display-type text-[10px] uppercase tracking-[0.16em] lg:px-10"><span className="text-signal">Capabilities</span><span>Identity systems</span><span>Editorial</span><span>Illustration</span><span>Art direction</span><span>Motion-ready</span></div>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 border-b border-border">
          <div className="mx-auto max-w-[1360px] px-6 py-16 lg:px-10 lg:py-24">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div><div className="display-type flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"><span className="size-2 bg-signal" /> 01 / Selected work</div><h2 className="display-type mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">The index</h2></div>
              <div className="flex flex-wrap gap-x-5 gap-y-3 display-type text-[10px] uppercase tracking-[0.14em]">
                {["All", "Brand identity", "Editorial system", "Illustration", "Art direction"].map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? "border-b-2 border-signal pb-1 text-foreground" : "pb-1 text-muted-foreground transition-colors hover:text-foreground"}>{item}</button>)}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className={`relative min-h-[360px] overflow-hidden border border-border p-7 sm:min-h-[470px] sm:p-10 ${featured.palette === "dark" || featured.palette === "ink" ? "bg-foreground text-background" : featured.palette === "yellow" ? "bg-signal text-foreground" : "bg-studio-soft text-foreground"}`}>
                  <div className="absolute right-8 top-8 display-type text-[10px] uppercase tracking-[0.16em] opacity-60">Featured / {featured.year}</div>
                  <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-between"><div><div className="display-type text-[10px] uppercase tracking-[0.16em] opacity-60">{featured.category}</div><h3 className="display-type mt-5 max-w-[10ch] text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-7xl">{featured.title}</h3></div><div className="flex items-end justify-between gap-4"><p className="max-w-[32ch] text-sm leading-relaxed opacity-75">{featured.description}</p><span className="grid size-12 shrink-0 place-items-center border border-current"><ArrowUpRight /></span></div></div>
                  <ProjectGraphic visual={featured.visual} />
                </div>
                <div className="mt-4 flex items-center justify-between display-type text-[10px] uppercase tracking-[0.15em] text-muted-foreground"><span>Selected case / {featured.number}</span><span>Scroll to inspect <ArrowDownRight className="ml-1 inline size-3" /></span></div>
              </div>
              <div className="lg:col-span-5">
                <div className="border-t border-foreground">{visibleWorks.map((work) => <button key={work.number} onClick={() => chooseWork(work)} className={`group flex w-full items-start gap-4 border-b border-border py-5 text-left transition-colors hover:bg-studio-soft/50 ${featured.number === work.number ? "bg-studio-soft/40" : ""}`}><span className="display-type pt-1 text-[11px] text-signal">{work.number}</span><span className="min-w-0 flex-1"><span className="display-type block text-lg font-medium tracking-[-0.03em]">{work.title}</span><span className="mt-1 block display-type text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{work.category} / {work.year}</span></span><ArrowUpRight className="mt-1 size-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></button>)}</div>
                <div className="mt-10 border-l-2 border-signal pl-5"><p className="display-type text-xl font-medium leading-tight tracking-[-0.04em]">Every project starts with a question worth making visible.</p><p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-muted-foreground">From the first sketch to the last exported frame, the work is built to live beyond the presentation.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-b border-border">
          <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-24">
            <div className="lg:col-span-3"><div className="display-type flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"><span className="size-2 bg-signal" /> 02 / About</div><div className="mt-12 hidden aspect-[3/4] overflow-hidden bg-foreground lg:block"><img src={sunglassesAsset.url} alt="Sanjeev wearing sunglasses and a patterned shirt" className="h-full w-full object-cover object-top grayscale" /></div></div>
            <div className="lg:col-span-6 lg:col-start-5"><h2 className="display-type max-w-[17ch] text-4xl font-bold leading-[1.02] tracking-[-0.06em] sm:text-6xl">Good design should feel obvious only after you see it.</h2><p className="mt-10 max-w-[43ch] text-lg leading-relaxed text-foreground/75">I’m Sanjeev, a graphic designer and illustrator focused on the space between a clear idea and a memorable image. I work with people who care about the details, and turn the messy middle into something that feels inevitable.</p><div className="mt-12 grid max-w-[520px] grid-cols-2 border-t border-border sm:grid-cols-3"><div className="border-r border-border py-4"><span className="display-type block text-2xl font-bold">10+</span><span className="mt-1 block display-type text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Years making</span></div><div className="border-r border-border py-4 pl-4"><span className="display-type block text-2xl font-bold">60+</span><span className="mt-1 block display-type text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Projects shaped</span></div><div className="py-4 pl-4"><span className="display-type block text-2xl font-bold text-signal">Open</span><span className="mt-1 block display-type text-[10px] uppercase tracking-[0.12em] text-muted-foreground">For select work</span></div></div></div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-foreground text-background">
          <div className="mx-auto max-w-[1360px] px-6 py-20 lg:px-10 lg:py-28"><div className="display-type flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-background/55"><span className="size-2 bg-signal" /> 03 / Contact</div><div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end"><h2 className="display-type text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:col-span-7">Have an idea?<br /><span className="text-signal">Let’s give it form.</span></h2><div className="lg:col-span-4 lg:col-start-9"><p className="max-w-[30ch] text-base leading-relaxed text-background/70">Tell me what you’re building, what it needs to say, or just where it feels stuck.</p><Button asChild className="mt-7 h-12 rounded-none bg-signal px-5 display-type text-[11px] uppercase tracking-[0.12em] text-foreground hover:bg-background"><a href="mailto:hello@sanjeev.studio">hello@sanjeev.studio <ArrowUpRight /></a></Button></div></div></div>
        </section>
      </main>

      <footer className="bg-foreground text-background"><div className="mx-auto flex max-w-[1360px] flex-col gap-5 border-t border-background/15 px-6 py-8 display-type text-[10px] uppercase tracking-[0.14em] text-background/55 sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>© 2025 Sanjeev / Graphic designer & illustrator</span><div className="flex gap-6"><a href="#top" className="transition-colors hover:text-background">Back to top <CircleArrowUp className="ml-1 inline size-3" /></a><a href="mailto:hello@sanjeev.studio" className="transition-colors hover:text-background">Email</a></div></div></footer>
    </div>
  );
}

function ProjectGraphic({ visual }: { visual: Work["visual"] }) {
  if (visual === "sun") return <div aria-hidden="true" className="absolute -bottom-20 -right-12 size-72 rounded-full border-[3rem] border-signal opacity-90 sm:size-96"><div className="absolute -left-12 top-1/2 h-px w-[30rem] -rotate-45 bg-signal/70" /><div className="absolute -left-4 top-1/2 h-px w-[22rem] rotate-45 bg-signal/70" /></div>;
  if (visual === "orbit") return <div aria-hidden="true" className="absolute -bottom-20 -right-14 size-80 rounded-full border border-foreground/40 sm:size-[26rem]"><div className="absolute inset-8 rounded-full border border-foreground/30" /><div className="absolute inset-20 rounded-full border border-foreground/20" /><span className="absolute right-8 top-10 size-5 rounded-full bg-foreground" /></div>;
  if (visual === "paper") return <div aria-hidden="true" className="absolute bottom-[-2rem] right-[-2rem] size-64 rotate-12 border border-foreground/30 bg-background/30 sm:size-80"><div className="absolute inset-6 border border-foreground/25" /><div className="absolute left-1/2 top-0 h-full w-px bg-foreground/20" /><div className="absolute left-0 top-1/2 h-px w-full bg-foreground/20" /></div>;
  return <div aria-hidden="true" className="absolute bottom-[-1.5rem] right-[-1rem] display-type text-[12rem] font-bold leading-none opacity-20 sm:text-[16rem]">A</div>;
}