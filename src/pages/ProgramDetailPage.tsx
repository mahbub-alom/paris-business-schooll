import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Download } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';
import { EditorialImage } from '@/src/components/shared/EditorialImage';
import { useModals } from '@/src/context/ModalContext';
import { PROGRAMS } from '@/src/data/schoolData';

export function ProgramDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { openApply, openBrochure } = useModals();

  const program = PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-24 text-center space-y-5">
        <h1 className="font-serif text-3xl text-foreground">Program not found</h1>
        <p className="text-sm text-muted-foreground">
          The requested curriculum could not be located. Browse our full catalog of accredited degrees.
        </p>
        <Button asChild>
          <Link to="/programs">Return to Programs</Link>
        </Button>
      </div>
    );
  }

  const related = PROGRAMS.filter((p) => p.slug !== program.slug && p.level === program.level).slice(0, 3);
  const fallbackRelated =
    related.length > 0 ? related : PROGRAMS.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <div>
      {/* Program Hero Banner */}
      <section className="bg-[#0F2B24] text-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Link
            to="/programs"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C7D2CE] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Academic Programs</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-bold uppercase tracking-[0.16em] text-[#E8A782]">
                <span>{program.level}</span>
                <span aria-hidden="true">·</span>
                <span>{program.field}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium leading-[1.1] text-white">
                {program.title}
              </h1>
              <p className="text-base text-[#D4DDD9] leading-relaxed max-w-2xl">
                {program.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button variant="accent" size="lg" onClick={() => openApply(program.title)}>
                  Apply to This Program
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outlineLight" size="lg" onClick={() => openBrochure(program.title)}>
                  <Download className="h-4 w-4" />
                  Download Syllabus
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EditorialImage
                src={program.image}
                alt={program.title}
                aspectRatio="4/3"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Definition Strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-8">
          <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-xs">
            <div>
              <dt className="text-muted-foreground uppercase tracking-wider">Degree Awarded</dt>
              <dd className="mt-1.5 font-medium text-foreground text-sm">{program.degreeAwarded}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground uppercase tracking-wider">Duration &amp; ECTS</dt>
              <dd className="mt-1.5 font-mono font-medium text-foreground text-sm tabular-nums">
                {program.duration} ({program.ects} ECTS)
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground uppercase tracking-wider">Language</dt>
              <dd className="mt-1.5 font-medium text-foreground text-sm">{program.language}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground uppercase tracking-wider">Campus</dt>
              <dd className="mt-1.5 font-medium text-foreground text-sm">{program.campus}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground uppercase tracking-wider">Intakes</dt>
              <dd className="mt-1.5 font-medium text-foreground text-sm">{program.intakes}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground uppercase tracking-wider">Tuition</dt>
              <dd className="mt-1.5 font-mono font-medium text-foreground text-sm tabular-nums">
                {program.tuitionAnnual}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Main Content Split (Asymmetric 70/30 Editorial Layout) */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Primary Academic Narrative */}
          <div className="lg:col-span-8 space-y-14">
            {/* Overview */}
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                Program Overview
              </p>
              <h2 className="font-serif text-3xl font-medium text-foreground">
                Academic positioning &amp; learning objectives
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-prose">
                {program.overview}
              </p>
              <ul className="pt-4 space-y-3">
                {program.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-1" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum Accordion */}
            <div className="space-y-5 pt-10 border-t border-border">
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  Curriculum Architecture
                </p>
                <h2 className="font-serif text-3xl font-medium text-foreground">
                  Core coursework &amp; progression
                </h2>
              </div>

              <Accordion type="single" collapsible defaultValue={program.curriculum[0]?.year}>
                {program.curriculum.map((stage) => (
                  <AccordionItem key={stage.year} value={stage.year}>
                    <AccordionTrigger>
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-left">
                        <span className="font-mono text-xs uppercase tracking-wider text-accent shrink-0">
                          {stage.year}
                        </span>
                        <span className="font-serif text-lg font-medium text-foreground">
                          {stage.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground mb-4">{stage.summary}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {stage.modules.map((mod) => (
                          <div
                            key={mod}
                            className="border border-border bg-card px-4 py-2.5 text-xs font-medium text-foreground"
                          >
                            {mod}
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Specializations */}
            <div className="space-y-5 pt-10 border-t border-border">
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  Majors &amp; Concentrations
                </p>
                <h2 className="font-serif text-3xl font-medium text-foreground">
                  Available specialization tracks
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.specializations.map((spec, idx) => (
                  <div key={spec} className="border border-border bg-card p-5 space-y-1.5">
                    <span className="font-mono text-xs text-accent tabular-nums">
                      0{idx + 1}.
                    </span>
                    <p className="font-serif text-lg font-medium text-foreground">{spec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Outcomes */}
            <div className="space-y-6 pt-10 border-t border-border">
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  Graduate Outcomes
                </p>
                <h2 className="font-serif text-3xl font-medium text-foreground">
                  Career trajectories &amp; recruiting firms
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-card border border-border p-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Placement Rate</p>
                  <p className="mt-1 font-serif text-2xl font-medium text-primary">
                    {program.careerOutcomes.placementRate}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Compensation Benchmark</p>
                  <p className="mt-1 font-serif text-2xl font-medium text-primary">
                    {program.careerOutcomes.averageSalary}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                <div className="space-y-3">
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Target Graduate Roles
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    {program.careerOutcomes.roles.map((role) => (
                      <li key={role} className="border-b border-border/60 pb-2 last:border-b-0">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Representative Employers
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    {program.careerOutcomes.recruiters.map((rec) => (
                      <li key={rec} className="border-b border-border/60 pb-2 last:border-b-0">
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Admissions & Faculty Director */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="border border-border bg-card p-6 space-y-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                Admissions Requirements
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {program.admissionsCriteria.map((criterion) => (
                  <li key={criterion} className="flex items-start gap-2.5">
                    <span className="font-mono text-accent mt-0.5">—</span>
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-border space-y-3">
                <Button className="w-full" onClick={() => openApply(program.title)}>
                  Start Online Application
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => openBrochure(program.title)}
                >
                  Request Full Syllabus
                </Button>
                <Link
                  to="/admissions"
                  className="block text-center text-xs font-medium text-muted-foreground hover:text-primary pt-1"
                >
                  Explore Tuition &amp; Merit Scholarships
                </Link>
              </div>
            </div>

            {/* Faculty Director Pull Quote (Hairline top/bottom, no thick left bar) */}
            <div className="border-t border-b border-border py-7 space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Academic Director’s Note
              </p>
              <blockquote className="font-serif italic text-xl leading-relaxed text-foreground">
                “{program.director.quote}”
              </blockquote>
              <div>
                <p className="text-sm font-semibold text-foreground">{program.director.name}</p>
                <p className="text-xs text-muted-foreground">{program.director.role}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-14 lg:py-18 bg-[#EFF1EE] border-t border-border">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
              Related PBS Degrees
            </h2>
            <Link to="/programs" className="text-sm font-medium text-primary hover:text-accent">
              View Full Catalog
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fallbackRelated.map((rel) => (
              <Link
                key={rel.slug}
                to={`/programs/${rel.slug}`}
                className="group border border-border bg-card p-6 space-y-3 hover:border-[#9e998b] transition-colors"
              >
                <p className="text-xs text-accent font-medium">{rel.level} · {rel.duration}</p>
                <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-accent transition-colors">
                  {rel.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {rel.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
