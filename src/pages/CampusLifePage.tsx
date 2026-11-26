import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Building2, Users } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { EditorialImage } from '@/src/components/shared/EditorialImage';
import { useModals } from '@/src/context/ModalContext';
import {
  ALUMNI_STORIES,
  CORPORATE_PARTNERS,
  MEDIA_ASSETS,
  STUDENT_ASSOCIATIONS,
} from '@/src/data/schoolData';

const FACILITIES = [
  {
    name: 'The Vaulted Library & Quiet Reading Room',
    detail: '680 seats beneath restored limestone arches with 24/7 keycard access, acoustic study pods, and 45,000 digital and archival titles.',
  },
  {
    name: 'Bloomberg & Refinitiv Market Floor',
    detail: '24 live financial terminals dedicated to fixed-income pricing, ESG portfolio analytics, and student fund management.',
  },
  {
    name: 'PBS Venture Foundry (Incubator)',
    detail: '800 m² co-working loft supporting 30 student and alumni startups annually with legal clinics, seed mentorship, and prototype stipends.',
  },
  {
    name: 'PBS Main Research Auditorium',
    detail: '420-seat acoustic timber amphitheater hosting ministerial debates, CEO forums, and international economic colloquiums.',
  },
];

export function CampusLifePage() {
  const { openApply, openBrochure } = useModals();

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0F2B24] text-white py-16 lg:py-22">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8A782]">
              PBS Paris Campus · Careers &amp; Alumni
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight">
              A civic, architectural, and professional launchpad in Paris, France
            </h1>
            <p className="text-base text-[#D4DDD9] leading-relaxed">
              Campus life at PBS extends well beyond lecture halls—combining 38 student-led societies, an active startup incubator, and a dedicated Corporate Relations center linking students with over 3,400 hiring organizations.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="accent" asChild>
                <Link to="/events">
                  Book a Campus Visit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outlineLight" onClick={() => openBrochure()}>
                Download Campus Guide
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <EditorialImage
              src={MEDIA_ASSETS.belvedereInterior}
              alt="PBS Paris Campus interior learning commons"
              aspectRatio="4/3"
              priority
            />
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 lg:py-22 border-b border-border bg-card">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
            <Building2 className="h-4 w-4" aria-hidden="true" />
            <span>Spaces &amp; Infrastructure</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FACILITIES.map((fac, idx) => (
              <div key={fac.name} className="border-t border-border pt-5 space-y-2.5">
                <span className="font-mono text-xs text-accent">0{idx + 1}.</span>
                <h2 className="font-serif text-xl font-medium text-foreground">{fac.name}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{fac.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Associations */}
      <section id="associations" className="py-16 lg:py-22 border-b border-border">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
              <Users className="h-4 w-4" aria-hidden="true" />
              <span>Student Life &amp; Governance</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
              38 student associations managing €1.2M in annual projects
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every Master in Management and Bachelor student takes an active leadership role in an accredited association—building budgeting, event governance, and team management experience from Year 1.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDENT_ASSOCIATIONS.map((assoc) => (
              <div key={assoc.name} className="border border-border bg-card p-6 space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span className="font-medium text-accent">{assoc.category}</span>
                  <span className="font-mono">{assoc.members}</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">{assoc.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{assoc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers & Corporate Relations */}
      <section id="careers" className="py-16 lg:py-22 bg-[#EFF1EE] border-b border-border">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
                <Briefcase className="h-4 w-4" aria-hidden="true" />
                <span>Careers &amp; Corporate Relations</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
                Structured career acceleration from first semester to executive alumni network
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our Career Center conducts over 2,800 one-on-one coaching sessions annually—covering technical finance and case-interview drills, work-study contract placement, and international graduate recruitment across Paris, London, Geneva, and Zurich.
              </p>
              <dl className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
                <div>
                  <dt className="text-xs text-muted-foreground">Placement</dt>
                  <dd className="font-serif text-2xl font-medium text-primary tabular-nums mt-1">96.4%</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Live Listings</dt>
                  <dd className="font-serif text-2xl font-medium text-primary tabular-nums mt-1">18,000+</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Global Alumni</dt>
                  <dd className="font-serif text-2xl font-medium text-primary tabular-nums mt-1">28,500</dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-6">
              <EditorialImage
                src={MEDIA_ASSETS.seminarLecture}
                alt="Corporate case workshop and career seminar"
                aspectRatio="4/3"
              />
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground mb-5">
              Representative Corporate &amp; Hiring Partners
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {CORPORATE_PARTNERS.map((firm) => (
                <div
                  key={firm}
                  className="border border-border bg-card px-4 py-3.5 text-center text-sm font-medium text-foreground"
                >
                  {firm}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Stories */}
      <section id="alumni" className="py-16 lg:py-22 bg-card">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                PBS Alumni Perspectives
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
                Where PBS graduates lead today
              </h2>
            </div>
            <Button onClick={() => openApply()}>Join the Next Cohort</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ALUMNI_STORIES.map((story) => (
              <figure key={story.name} className="border-t border-b border-border py-7 flex flex-col justify-between space-y-6">
                <blockquote className="font-serif italic text-lg leading-relaxed text-foreground">
                  “{story.quote}”
                </blockquote>
                <figcaption className="space-y-0.5">
                  <p className="text-sm font-semibold text-foreground">{story.name}</p>
                  <p className="text-xs text-primary font-medium">{story.role}</p>
                  <p className="text-xs text-muted-foreground">{story.degree}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
