import { useMemo, useState } from 'react';
import { Globe2, Home, Languages, Plane, Search } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { EditorialImage } from '@/src/components/shared/EditorialImage';
import { useModals } from '@/src/context/ModalContext';
import {
  MEDIA_ASSETS,
  PARTNER_UNIVERSITIES,
  type PartnerUniversity,
} from '@/src/data/schoolData';

const REGIONS: Array<'All' | PartnerUniversity['region']> = [
  'All',
  'Europe',
  'North America',
  'Asia-Pacific',
  'Latin America',
  'Middle East & Africa',
];

export function InternationalPage() {
  const { openApply, openBrochure } = useModals();
  const [region, setRegion] = useState<'All' | PartnerUniversity['region']>('All');
  const [search, setSearch] = useState('');

  const filteredPartners = useMemo(() => {
    return PARTNER_UNIVERSITIES.filter((u) => {
      if (region !== 'All' && u.region !== region) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (!`${u.name} ${u.city} ${u.country}`.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [region, search]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0F2B24] text-white py-16 lg:py-22">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8A782]">
              International Network &amp; Mobility
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight">
              A European campus connected to 165 universities across five continents
            </h1>
            <p className="text-base text-[#D4DDD9] leading-relaxed max-w-2xl">
              Whether you are joining PBS from abroad for a full degree or preparing for your mandatory exchange semester, our International Relations Office structures seamless academic and cultural mobility.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="accent" onClick={() => openApply()}>
                Apply as an International Student
              </Button>
              <Button variant="outlineLight" onClick={() => openBrochure()}>
                Download International Guide
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <EditorialImage
              src={MEDIA_ASSETS.internationalCollab}
              alt="Multicultural PBS cohort collaborating outdoors"
              aspectRatio="4/3"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quantitative International Proof */}
      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-medium text-primary tabular-nums">128</p>
            <p className="text-xs font-medium text-foreground mt-1">Nationalities represented</p>
            <p className="text-xs text-muted-foreground">42% international student body</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-medium text-primary tabular-nums">165</p>
            <p className="text-xs font-medium text-foreground mt-1">Academic partner institutions</p>
            <p className="text-xs text-muted-foreground">Across 48 countries worldwide</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-medium text-primary tabular-nums">24</p>
            <p className="text-xs font-medium text-foreground mt-1">International double degrees</p>
            <p className="text-xs text-muted-foreground">Europe, North America &amp; Asia</p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-medium text-primary tabular-nums">68%</p>
            <p className="text-xs font-medium text-foreground mt-1">International permanent faculty</p>
            <p className="text-xs text-muted-foreground">PhDs from leading global schools</p>
          </div>
        </div>
      </section>

      {/* Filterable Partner University Directory */}
      <section id="partners" className="py-16 lg:py-22 border-b border-border">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                Selected Exchange Partners
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
                Explore our global university network
              </h2>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search university, city, country..."
                aria-label="Search partner universities"
                className="pl-9"
              />
            </div>
          </div>

          {/* Interactive Region Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 bg-secondary p-1 rounded-md w-fit max-w-full">
            {REGIONS.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRegion(r)}
                className={`px-3.5 py-2 text-xs font-medium rounded-sm whitespace-nowrap transition-colors cursor-pointer ${
                  region === r
                    ? 'bg-card text-foreground shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((partner) => (
              <div
                key={partner.name}
                className="border border-border bg-card p-6 space-y-2.5 hover:border-[#9e998b] transition-colors"
              >
                <p className="text-xs text-accent font-medium">
                  {partner.city}, {partner.country} · {partner.region}
                </p>
                <h3 className="font-serif text-lg font-medium text-foreground">
                  {partner.name}
                </h3>
                <p className="text-xs text-muted-foreground">{partner.tracks}</p>
                <p className="font-mono text-[11px] text-muted-foreground pt-2 border-t border-border/70">
                  {partner.accreditation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incoming International Student Welcome Desk */}
      <section id="welcome" className="py-16 lg:py-22 bg-[#EFF1EE]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              The PBS Welcome Desk
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
              End-to-end relocation support in Paris, France
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every admitted international student is assigned a dedicated Welcome Officer prior to departure to simplify administrative arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card border border-border p-6 space-y-3">
              <Plane className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="font-serif text-xl font-medium text-foreground">Visa &amp; Residence Permit</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Step-by-step visa dossier support, student visa validation, and residence registration clinics during Orientation Week.
              </p>
            </div>
            <div className="bg-card border border-border p-6 space-y-3">
              <Home className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="font-serif text-xl font-medium text-foreground">Verified Housing Portal</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Reserved student residences within 15 minutes of PBS Paris Campus plus housing-subsidy application workshops.
              </p>
            </div>
            <div className="bg-card border border-border p-6 space-y-3">
              <Languages className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="font-serif text-xl font-medium text-foreground">Language Courses</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complimentary weekly language immersion classes tailored by proficiency level (A1 to C1) for all English-track students.
              </p>
            </div>
            <div className="bg-card border border-border p-6 space-y-3">
              <Globe2 className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="font-serif text-xl font-medium text-foreground">Buddy &amp; Integration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our International Student Office pairs incoming students with senior peers for airport arrival, banking setup, and cultural retreats.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
