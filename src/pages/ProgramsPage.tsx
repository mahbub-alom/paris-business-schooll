import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Check, Scale, Search, X } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/src/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/src/components/ui/dialog';
import { EditorialImage } from '@/src/components/shared/EditorialImage';
import { useModals } from '@/src/context/ModalContext';
import { PROGRAMS, type AcademicProgram, type ProgramLevel } from '@/src/data/schoolData';

export function ProgramsPage() {
  const { openApply, openBrochure } = useModals();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialParam = searchParams.get('level');
  const resolveLevel = (val: string | null): 'All' | ProgramLevel => {
    if (val === 'Bachelor') return 'Bachelor';
    if (val === 'MSc') return 'MSc';
    if (val === 'MBA' || val === 'MBA & DBA') return 'MBA & DBA';
    if (val === 'Master in Management') return 'Master in Management';
    return 'All';
  };
  const [level, setLevel] = useState<'All' | ProgramLevel>(() => resolveLevel(initialParam));
  const [languageFilter, setLanguageFilter] = useState<'All' | '100% English' | 'Work-Study'>('All');
  const [query, setQuery] = useState('');
  const [compareSlugs, setCompareSlugs] = useState<string[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);

  useEffect(() => {
    setLevel(resolveLevel(searchParams.get('level')));
  }, [searchParams]);

  const handleLevelChange = (next: 'All' | ProgramLevel) => {
    setLevel(next);
    if (next === 'All') {
      searchParams.delete('level');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ level: next }, { replace: true });
    }
  };

  const filtered = useMemo(() => {
    return PROGRAMS.filter((p) => {
      if (level !== 'All' && p.level !== level) return false;
      if (languageFilter === '100% English' && p.language !== '100% English') return false;
      if (languageFilter === 'Work-Study' && !p.format.includes('Work-Study')) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        const hay = `${p.title} ${p.field} ${p.campus} ${p.specializations.join(' ')}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [level, languageFilter, query]);

  const comparePrograms: AcademicProgram[] = useMemo(
    () => compareSlugs.map((slug) => PROGRAMS.find((p) => p.slug === slug)).filter(Boolean) as AcademicProgram[],
    [compareSlugs]
  );

  const toggleCompare = (slug: string) => {
    setCompareSlugs((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= 3) return prev;
      return [...prev, slug];
    });
  };

  return (
    <div>
      {/* Header Band */}
      <section className="bg-[#0F2B24] text-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8A782]">
            Academic Portfolio · Paris, France
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight max-w-3xl">
            Undergraduate, Master in Management, MSc, MBA &amp; Doctoral Programs
          </h1>
          <p className="text-base text-[#D4DDD9] leading-relaxed max-w-2xl">
            Every PBS degree is structured around quantitative foundations, mandatory international exposure, and measurable corporate integration. Select up to three programs to compare requirements side by side.
          </p>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="border-b border-border bg-card sticky top-16 lg:top-[122px] z-30">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <Tabs value={level} onValueChange={(v) => handleLevelChange(v as 'All' | ProgramLevel)}>
            <TabsList aria-label="Filter by degree level">
              <TabsTrigger value="All">All Degrees ({PROGRAMS.length})</TabsTrigger>
              <TabsTrigger value="Master in Management">Master in Management</TabsTrigger>
              <TabsTrigger value="Bachelor">Bachelor</TabsTrigger>
              <TabsTrigger value="MSc">MSc</TabsTrigger>
              <TabsTrigger value="MBA & DBA">MBA &amp; DBA</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center rounded-md bg-secondary p-1 text-xs">
              {(['All', '100% English', 'Work-Study'] as const).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setLanguageFilter(opt)}
                  className={`px-3 py-1.5 rounded-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    languageFilter === opt
                      ? 'bg-card text-foreground shadow-xs'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {opt === 'All' ? 'All Tracks' : opt}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-60">
              <Search className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search field or keyword..."
                aria-label="Search programs"
                className="pl-9 h-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-mono font-medium text-foreground tabular-nums">{filtered.length}</span>{' '}
              {filtered.length === 1 ? 'program' : 'programs'}
            </p>
            {compareSlugs.length > 0 && (
              <div className="flex items-center gap-3">
                <Button size="sm" variant="accent" onClick={() => setCompareOpen(true)}>
                  <Scale className="h-4 w-4" />
                  Compare Selected ({compareSlugs.length}/3)
                </Button>
                <button
                  type="button"
                  onClick={() => setCompareSlugs([])}
                  className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 cursor-pointer"
                >
                  Clear
                </button>
              </div>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="border border-border bg-card p-12 text-center space-y-4">
              <p className="font-serif text-xl text-foreground">No programs match your current filters.</p>
              <p className="text-sm text-muted-foreground">
                Reset your search criteria or browse our full degree catalog.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setLevel('All');
                  setLanguageFilter('All');
                  setQuery('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((program) => {
                const isSelected = compareSlugs.includes(program.slug);
                return (
                  <article
                    key={program.slug}
                    className="group flex flex-col justify-between border border-border bg-card transition-colors duration-200 hover:border-[#9e998b]"
                  >
                    <div>
                      <Link to={`/programs/${program.slug}`} className="block">
                        <EditorialImage
                          src={program.image}
                          alt={program.title}
                          aspectRatio="4/3"
                          hoverZoom
                        />
                      </Link>
                      <div className="p-6 space-y-3">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                          <span className="font-medium text-accent">{program.level}</span>
                          <span aria-hidden="true">·</span>
                          <span>{program.language}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono tabular-nums">{program.ects} ECTS</span>
                        </div>
                        <h2 className="font-serif text-xl font-medium text-foreground leading-snug">
                          <Link
                            to={`/programs/${program.slug}`}
                            className="hover:text-accent transition-colors"
                          >
                            {program.title}
                          </Link>
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {program.tagline}
                        </p>

                        <dl className="pt-3 border-t border-border/70 grid grid-cols-2 gap-3 text-xs">
                          <div>
                            <dt className="text-muted-foreground">Duration</dt>
                            <dd className="font-medium text-foreground mt-0.5">{program.duration}</dd>
                          </div>
                          <div>
                            <dt className="text-muted-foreground">Campus</dt>
                            <dd className="font-medium text-foreground mt-0.5">{program.campus}</dd>
                          </div>
                          <div>
                            <dt className="text-muted-foreground">Format</dt>
                            <dd className="font-medium text-foreground mt-0.5">{program.format}</dd>
                          </div>
                          <div>
                            <dt className="text-muted-foreground">Tuition</dt>
                            <dd className="font-mono font-medium text-foreground mt-0.5 tabular-nums">
                              {program.tuitionAnnual}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-4 border-t border-border flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => toggleCompare(program.slug)}
                        disabled={!isSelected && compareSlugs.length >= 3}
                        className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                          isSelected ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {isSelected ? <Check className="h-3.5 w-3.5" /> : <Scale className="h-3.5 w-3.5" />}
                        <span>{isSelected ? 'Selected' : 'Compare'}</span>
                      </button>

                      <Link
                        to={`/programs/${program.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors whitespace-nowrap shrink-0"
                      >
                        <span>Program Details</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Advisory Band */}
      <section className="py-14 bg-[#EFF1EE] border-t border-border">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
              Unsure which degree aligns with your academic background?
            </h2>
            <p className="text-sm text-muted-foreground">
              Download our complete 2027 portfolio guide or review entry paths on our Admissions page.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => openBrochure()}>Download Prospectus</Button>
            <Button variant="outline" onClick={() => openApply()}>Start Application</Button>
          </div>
        </div>
      </section>

      {/* Comparison Modal */}
      <Dialog open={compareOpen} onOpenChange={setCompareOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Side-by-Side Comparison
            </p>
            <DialogTitle>Compare Selected PBS Programs</DialogTitle>
            <DialogDescription>
              Review duration, credits, tuition, language tracks, and graduate outcomes across your shortlisted degrees.
            </DialogDescription>
          </DialogHeader>

          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-xs uppercase tracking-wider text-muted-foreground font-medium w-36">
                    Criteria
                  </th>
                  {comparePrograms.map((p) => (
                    <th key={p.slug} className="py-3 px-4 font-serif text-base font-medium text-foreground align-top min-w-[200px]">
                      <div className="flex items-start justify-between gap-2">
                        <span>{p.shortTitle}</span>
                        <button
                          type="button"
                          onClick={() => toggleCompare(p.slug)}
                          aria-label={`Remove ${p.shortTitle} from comparison`}
                          className="text-muted-foreground hover:text-foreground cursor-pointer"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs sm:text-sm">
                <tr>
                  <td className="py-3 pr-4 text-muted-foreground">Level</td>
                  {comparePrograms.map((p) => (
                    <td key={p.slug} className="py-3 px-4 font-medium text-foreground">{p.level}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-muted-foreground">Duration</td>
                  {comparePrograms.map((p) => (
                    <td key={p.slug} className="py-3 px-4 text-foreground">{p.duration}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-muted-foreground">ECTS Credits</td>
                  {comparePrograms.map((p) => (
                    <td key={p.slug} className="py-3 px-4 font-mono tabular-nums text-foreground">{p.ects} ECTS</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-muted-foreground">Language</td>
                  {comparePrograms.map((p) => (
                    <td key={p.slug} className="py-3 px-4 text-foreground">{p.language}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-muted-foreground">Format</td>
                  {comparePrograms.map((p) => (
                    <td key={p.slug} className="py-3 px-4 text-foreground">{p.format}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-muted-foreground">Tuition</td>
                  {comparePrograms.map((p) => (
                    <td key={p.slug} className="py-3 px-4 font-mono tabular-nums text-foreground">{p.tuitionAnnual}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-muted-foreground">Placement</td>
                  {comparePrograms.map((p) => (
                    <td key={p.slug} className="py-3 px-4 text-foreground">{p.careerOutcomes.placementRate}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-muted-foreground">Action</td>
                  {comparePrograms.map((p) => (
                    <td key={p.slug} className="py-4 px-4">
                      <Button asChild size="sm" variant="outline" onClick={() => setCompareOpen(false)}>
                        <Link to={`/programs/${p.slug}`}>View Degree</Link>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
