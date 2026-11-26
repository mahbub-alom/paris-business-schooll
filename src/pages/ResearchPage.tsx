import { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, Search } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/src/components/ui/dialog';
import { EditorialImage } from '@/src/components/shared/EditorialImage';
import {
  FACULTY_DIRECTORY,
  INSIGHTS_ARTICLES,
  MEDIA_ASSETS,
  RESEARCH_CHAIRS,
  type FacultyMember,
  type ResearchArticle,
} from '@/src/data/schoolData';

const DEPARTMENTS: Array<'All' | FacultyMember['department']> = [
  'All',
  'Finance & Economics',
  'Strategy & Governance',
  'Data & Technology',
  'Marketing & Heritage',
];

export function ResearchPage() {
  const [department, setDepartment] = useState<'All' | FacultyMember['department']>('All');
  const [query, setQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<ResearchArticle | null>(null);

  const filteredFaculty = useMemo(() => {
    return FACULTY_DIRECTORY.filter((f) => {
      if (department !== 'All' && f.department !== department) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        if (!`${f.name} ${f.expertise} ${f.phd}`.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [department, query]);

  return (
    <div>
      {/* Header Band */}
      <section className="bg-[#0F2B24] text-white py-16 lg:py-22">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8A782]">
              Faculty &amp; Applied Research
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight">
              Scholarship bridging empirical rigor and European economic transition
            </h1>
            <p className="text-base text-[#D4DDD9] leading-relaxed max-w-2xl">
              PBS’s 110 permanent research professors publish in leading international management journals while advising European policymakers, central banks, and corporate boards.
            </p>
          </div>
          <div className="lg:col-span-5">
            <EditorialImage
              src={MEDIA_ASSETS.researchAuditorium}
              alt="PBS annual economics research symposium auditorium"
              aspectRatio="16/9"
              priority
            />
          </div>
        </div>
      </section>

      {/* Research Chairs */}
      <section id="chairs" className="py-16 lg:py-22 border-b border-border bg-card">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              Interdisciplinary Research Centers
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
              Three research chairs addressing structural transitions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {RESEARCH_CHAIRS.map((chair, idx) => (
              <div key={chair.id} className="border border-border bg-background p-7 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="font-mono text-xs text-accent">0{idx + 1}.</span>
                  <h3 className="font-serif text-2xl font-medium text-foreground leading-snug">
                    {chair.name}
                  </h3>
                  <p className="text-xs font-medium text-primary">{chair.focus}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{chair.summary}</p>
                </div>
                <div className="pt-4 border-t border-border space-y-1 text-xs">
                  <p className="text-foreground font-medium">{chair.director}</p>
                  <p className="font-mono text-muted-foreground">{chair.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PBS Insights Journal */}
      <section id="insights" className="py-16 lg:py-22 border-b border-border">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              PBS Insights
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
              Recent faculty essays &amp; working papers
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {INSIGHTS_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="group border border-border bg-card flex flex-col justify-between hover:border-[#9e998b] transition-colors"
              >
                <div>
                  <EditorialImage
                    src={article.image}
                    alt={article.title}
                    aspectRatio="16/9"
                    hoverZoom
                  />
                  <div className="p-6 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-medium text-accent">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-foreground leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-4 border-t border-border/70 flex items-center justify-between gap-4">
                  <span className="text-xs text-muted-foreground truncate">{article.author}</span>
                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Read Essay</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Searchable Permanent Faculty Directory */}
      <section id="faculty" className="py-16 lg:py-22 bg-[#EFF1EE]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                Academic Faculty
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
                Permanent research faculty directory
              </h2>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search professor or topic..."
                aria-label="Search faculty"
                className="pl-9"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-card border border-border p-1 rounded-md w-fit max-w-full">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setDepartment(dept)}
                className={`px-3.5 py-2 text-xs font-medium rounded-sm whitespace-nowrap transition-colors cursor-pointer ${
                  department === dept
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFaculty.map((member) => (
              <div key={member.id} className="bg-card border border-border p-6 space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl font-medium text-foreground">{member.name}</h3>
                  <span className="text-xs font-medium text-accent">{member.department}</span>
                </div>
                <p className="text-sm font-medium text-primary">{member.title}</p>
                <p className="text-xs text-muted-foreground">{member.phd}</p>
                <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/70">
                  <span className="text-foreground font-medium">Research Focus: </span>
                  {member.expertise}
                </p>
                <p className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden="true" />
                  <span>Recent Publication: {member.recentWork}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Essay Reader Modal */}
      <Dialog open={Boolean(activeArticle)} onOpenChange={(open) => !open && setActiveArticle(null)}>
        <DialogContent className="max-w-3xl">
          {activeArticle && (
            <div className="space-y-6">
              <DialogHeader>
                <p className="text-xs font-medium uppercase tracking-widest text-accent">
                  {activeArticle.category} · {activeArticle.date} · {activeArticle.readTime}
                </p>
                <DialogTitle className="text-2xl sm:text-3xl leading-snug">
                  {activeArticle.title}
                </DialogTitle>
                <DialogDescription>By {activeArticle.author}</DialogDescription>
              </DialogHeader>

              <EditorialImage
                src={activeArticle.image}
                alt={activeArticle.title}
                aspectRatio="16/9"
              />

              <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed max-w-prose">
                {activeArticle.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-primary'
                        : undefined
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-border flex justify-end">
                <Button variant="outline" onClick={() => setActiveArticle(null)}>
                  Close Essay
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
