import { Link } from 'react-router-dom';
import { ArrowRight, Award, Leaf, ShieldCheck, Compass } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { EditorialImage } from '@/src/components/shared/EditorialImage';
import { useModals } from '@/src/context/ModalContext';
import { ACCREDITATIONS, KEY_FIGURES, MEDIA_ASSETS } from '@/src/data/schoolData';

const MILESTONES = [
  { year: '1974', title: 'Founding in Paris', detail: 'Established by European industrialists and economists to train internationally mobile managers.' },
  { year: '1998', title: 'Conference of Business Schools (CGE)', detail: 'Admitted to the selective CGE network with state-recognized Master-level degree accreditation.' },
  { year: '2014', title: 'Executive Finance & Luxury Hub Opens', detail: 'Launch of our executive hub focusing on sustainable finance and fine watchmaking leadership.' },
  { year: '2022', title: 'Triple Crown Accreditation', detail: 'Awarded EFMD EQUIS alongside AACSB and AMBA, entering the top 1% of global business schools.' },
  { year: '2025', title: 'Inauguration of PBS Paris Campus', detail: 'Opening of the 18,000 m² renovated interdisciplinary campus in central Paris.' },
];

export function SchoolPage() {
  const { openApply, openBrochure } = useModals();

  return (
    <div>
      {/* Editorial Page Header */}
      <section className="bg-[#0F2B24] text-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8A782]">
              About PBS (Paris Business School)
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight text-white">
              An independent European business school built at the crossroads of management and humanities
            </h1>
            <p className="text-base text-[#D4DDD9] leading-relaxed max-w-2xl">
              For over five decades, PBS has rejected narrow technical silos. We educate executives who pair financial and quantitative fluency with geopolitical discernment and long-term ecological responsibility.
            </p>
          </div>
          <div className="lg:col-span-5">
            <EditorialImage
              src={MEDIA_ASSETS.heroCampus}
              alt="PBS (Paris Business School) architectural facade"
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* Mission & Pillars */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                Educational Philosophy
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
                Three convictions that govern every classroom
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                As a state-recognized non-profit higher education institution, all tuition and endowment revenues are reinvested into faculty scholarship, student scholarships, and campus infrastructure.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div className="border-t border-border pt-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                <span className="sm:col-span-2 font-mono text-sm text-accent">01.</span>
                <div className="sm:col-span-10 space-y-2">
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    Interdisciplinary Rigor
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every undergraduate and Master in Management cohort combines accounting, econometrics, and strategy with mandatory seminars in European institutional history, climate physics, and applied ethics.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                <span className="sm:col-span-2 font-mono text-sm text-accent">02.</span>
                <div className="sm:col-span-10 space-y-2">
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    Practice Informed by Scholarship
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Permanent research professors teach alongside practicing partners from finance, industry, and consulting so theory is continuously stress-tested against live economic realities.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                <span className="sm:col-span-2 font-mono text-sm text-accent">03.</span>
                <div className="sm:col-span-10 space-y-2">
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    Social Opening &amp; Merit Access
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Over 34% of our students benefit from need-based grants, merit scholarships, or employer-funded work-study contracts that eliminate tuition barriers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations & Rankings */}
      <section id="accreditations" className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              Accreditations &amp; Governance
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
              Internationally audited academic standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ACCREDITATIONS.map((acc) => (
              <div key={acc.code} className="border border-border bg-background p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-medium text-primary">{acc.code}</span>
                  <Award className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-sans text-sm font-semibold text-foreground">
                  {acc.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {acc.description}
                </p>
              </div>
            ))}
          </div>

          {/* Institutional Figures Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 pt-8 border-t border-border">
            {KEY_FIGURES.map((fig) => (
              <div key={fig.label} className="space-y-1">
                <p className="font-serif text-3xl font-medium text-primary tabular-nums">{fig.value}</p>
                <p className="text-xs font-medium text-foreground">{fig.label}</p>
                <p className="text-xs text-muted-foreground">{fig.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR & Climate Transition Charter */}
      <section id="csr" className="py-16 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <EditorialImage
                src={MEDIA_ASSETS.belvedereInterior}
                alt="PBS Paris Campus daylight-lit learning atrium"
                aspectRatio="4/3"
              />
            </div>
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                CSR &amp; Ecological Transition Charter
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
                100% of graduates trained in carbon accounting and planetary boundaries
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Under our 2030 Climate &amp; Civic Plan, PBS embeds quantitative sustainability across core finance, operations, and strategy courses—not as an elective footnote, but as a mandatory requirement for graduation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-border">
                <div className="space-y-1.5">
                  <Leaf className="h-5 w-5 text-[#164A3D]" aria-hidden="true" />
                  <p className="font-mono text-lg font-medium text-foreground tabular-nums">-52%</p>
                  <p className="text-xs text-muted-foreground">Campus energy intensity since 2019 renovation</p>
                </div>
                <div className="space-y-1.5">
                  <ShieldCheck className="h-5 w-5 text-[#164A3D]" aria-hidden="true" />
                  <p className="font-mono text-lg font-medium text-foreground tabular-nums">€2.8M</p>
                  <p className="text-xs text-muted-foreground">Annual social &amp; merit scholarship disbursement</p>
                </div>
                <div className="space-y-1.5">
                  <Compass className="h-5 w-5 text-[#164A3D]" aria-hidden="true" />
                  <p className="font-mono text-lg font-medium text-foreground tabular-nums">40 hrs</p>
                  <p className="text-xs text-muted-foreground">Mandatory civic mission for all Year 1 students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Timeline */}
      <section className="py-16 lg:py-24 bg-[#EFF1EE]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              Institutional Heritage
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
              Five decades of European academic evolution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {MILESTONES.map((m) => (
              <div key={m.year} className="border-t-2 border-primary pt-4 space-y-2">
                <p className="font-mono text-base font-medium text-accent tabular-nums">{m.year}</p>
                <h3 className="font-serif text-lg font-medium text-foreground">{m.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-foreground font-medium">
              Interested in visiting PBS Paris Campus or meeting our Dean of Admissions?
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => openApply()}>Apply Now</Button>
              <Button variant="outline" onClick={() => openBrochure()}>Download Prospectus</Button>
              <Button asChild variant="ghost">
                <Link to="/campus-life">
                  Explore Campus Life
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
