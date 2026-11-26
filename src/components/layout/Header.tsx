import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '@/src/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';
import { useModals } from '@/src/context/ModalContext';
import { PROGRAMS } from '@/src/data/schoolData';
import { cn } from '@/src/lib/utils';

type MegaKey =
  | 'school'
  | 'research'
  | 'programs'
  | 'admissions'
  | 'international'
  | 'student-services'
  | 'corporate'
  | null;

interface NavItemConfig {
  key: Exclude<MegaKey, null>;
  label: string;
  to: string;
}

const NAV_ITEMS: NavItemConfig[] = [
  { key: 'school', label: 'School', to: '/school' },
  { key: 'research', label: 'Faculty & Research', to: '/research' },
  { key: 'programs', label: 'Programs', to: '/programs' },
  { key: 'admissions', label: 'Admissions', to: '/admissions' },
  { key: 'international', label: 'International', to: '/international' },
  { key: 'student-services', label: 'Student Services', to: '/campus-life' },
  { key: 'corporate', label: 'Corporate Relations', to: '/campus-life#careers' },
];

export function Header() {
  const { pathname } = useLocation();
  const { openApply, openBrochure } = useModals();
  const [activeMega, setActiveMega] = useState<MegaKey>(null);
  const [applyDropdownOpen, setApplyDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setActiveMega(null);
    setApplyDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMega(null);
        setApplyDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleMouseEnter = (key: Exclude<MegaKey, null>) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setApplyDropdownOpen(false);
    setActiveMega(key);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveMega(null);
    }, 150);
  };

  const isRouteActive = (to: string) => {
    const cleanTo = to.split('#')[0];
    return pathname === cleanTo || (cleanTo !== '/' && pathname.startsWith(cleanTo));
  };

  return (
    <header
      onMouseLeave={handleMouseLeave}
      className="sticky top-0 z-40 w-full bg-white border-b border-border"
    >
      {/* Tier 1: Brand + Accreditations Left / Apply Dropdown + Brochure Right (100% English) */}
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-[70px] items-center justify-between gap-4">
          <div className="flex items-center gap-5 min-w-0">
            <Link
              to="/"
              className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="inline-flex h-9 px-2.5 items-center justify-center bg-[#0F2B24] font-display text-sm font-extrabold tracking-wider text-white border-b-2 border-[#C25E28]">
                PBS
              </span>
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#0F2B24]">
                Paris Business School
              </span>
            </Link>

            <div className="hidden xl:flex items-center gap-3 pl-5 border-l border-border text-[11px] font-mono font-medium tracking-wider text-muted-foreground whitespace-nowrap shrink-0">
              <span>EQUIS</span>
              <span aria-hidden="true">·</span>
              <span>AACSB</span>
              <span aria-hidden="true">·</span>
              <span>AMBA</span>
            </div>
          </div>

          {/* Right Action Controls (Desktop) */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <div className="relative">
              <button
                type="button"
                onClick={() => setApplyDropdownOpen((p) => !p)}
                aria-expanded={applyDropdownOpen}
                className="inline-flex h-10 items-center gap-2 bg-accent px-5 text-sm font-semibold text-white hover:bg-[#a64d1e] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Apply</span>
                <ChevronDown
                  className={cn('h-4 w-4 transition-transform duration-150', applyDropdownOpen && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>
              {applyDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-52 border border-border bg-white shadow-lg py-1 z-50">
                  <button
                    type="button"
                    onClick={() => {
                      setApplyDropdownOpen(false);
                      openApply();
                    }}
                    className="block w-full px-4 py-2.5 text-left text-sm font-medium text-foreground hover:bg-secondary hover:text-accent cursor-pointer"
                  >
                    Apply online
                  </button>
                  <Link
                    to="/admissions"
                    onClick={() => setApplyDropdownOpen(false)}
                    className="block w-full px-4 py-2.5 text-left text-sm font-medium text-foreground hover:bg-secondary hover:text-accent"
                  >
                    Application form &amp; guide
                  </Link>
                </div>
              )}
            </div>

            <Button
              size="sm"
              variant="default"
              onClick={() => openBrochure()}
              className="h-10 px-5 text-sm"
            >
              Brochure
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <Button size="sm" variant="accent" onClick={() => openApply()} className="h-9 px-3.5 text-xs">
              Apply
            </Button>
            <button
              type="button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center text-foreground hover:bg-secondary cursor-pointer"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Tier 2: 7-Item Institutional Navigation Bar (Desktop) */}
      <div className="hidden lg:block border-t border-border bg-[#FAFBF9]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <nav aria-label="Main navigation" className="flex items-center justify-between gap-4">
            <ul className="flex items-center gap-6 xl:gap-8">
              {NAV_ITEMS.map((item) => {
                const active = isRouteActive(item.to) || activeMega === item.key;
                return (
                  <li
                    key={item.key}
                    onMouseEnter={() => handleMouseEnter(item.key)}
                    className="relative"
                  >
                    <Link
                      to={item.to}
                      onFocus={() => handleMouseEnter(item.key)}
                      className={cn(
                        'inline-flex items-center gap-1 py-3 text-[13px] font-semibold tracking-tight transition-colors whitespace-nowrap shrink-0 border-b-2',
                        active
                          ? 'text-primary border-accent'
                          : 'text-foreground/85 border-transparent hover:text-primary hover:border-accent/50'
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 text-muted-foreground transition-transform duration-150',
                          activeMega === item.key && 'rotate-180 text-accent'
                        )}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              to="/events"
              className="text-xs font-semibold text-accent hover:text-primary transition-colors whitespace-nowrap shrink-0"
            >
              Events &amp; Open Days →
            </Link>
          </nav>
        </div>
      </div>

      {/* Desktop Mega Menu Panel */}
      <AnimatePresence>
        {activeMega && (
          <motion.div
            key={activeMega}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.14 }}
            onMouseEnter={() => {
              if (closeTimeoutRef.current) {
                window.clearTimeout(closeTimeoutRef.current);
                closeTimeoutRef.current = null;
              }
            }}
            className="hidden lg:block absolute left-0 right-0 top-full border-b-2 border-accent bg-white shadow-xl"
          >
            <div className="mx-auto max-w-[1360px] px-8 py-8">
              {activeMega === 'school' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-4 bg-primary text-white p-6 space-y-3">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#E8A782]">School</p>
                    <h3 className="font-display text-2xl font-bold leading-snug">
                      A Business School of Excellence in Paris
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Triple-accredited international business school (EQUIS, AACSB, AMBA) combining interdisciplinary expertise with global mobility.
                    </p>
                    <Link to="/school" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8A782] hover:text-white pt-1">
                      About PBS <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="col-span-4 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Identity &amp; Governance
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/school" className="hover:text-accent">About us</Link></li>
                      <li><Link to="/campus-life" className="hover:text-accent">The New Campus — Paris Latin Quarter</Link></li>
                      <li><Link to="/school#accreditations" className="hover:text-accent">Accreditation &amp; labels</Link></li>
                      <li><Link to="/school#csr" className="hover:text-accent">Our CSR Approach</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-4 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Rankings &amp; Community
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/school#accreditations" className="hover:text-accent">Rankings &amp; Distinctions</Link></li>
                      <li><Link to="/events" className="hover:text-accent">News &amp; Events</Link></li>
                      <li><Link to="/international" className="hover:text-accent">Partnerships and Networks</Link></li>
                    </ul>
                  </div>
                </div>
              )}

              {activeMega === 'research' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-4 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Faculty &amp; Research at PBS
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/research" className="hover:text-accent">Research Department Overview</Link></li>
                      <li><Link to="/research#faculty" className="hover:text-accent">Permanent Researchers Directory</Link></li>
                      <li><Link to="/research#insights" className="hover:text-accent">PBS Insights &amp; Publications</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-4 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Chairs &amp; Research Centers
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/research#chairs" className="hover:text-accent">Center for Energy Transition &amp; Climate Economics</Link></li>
                      <li><Link to="/research#chairs" className="hover:text-accent">Chair in Algorithmic Governance &amp; Responsible AI</Link></li>
                      <li><Link to="/research#chairs" className="hover:text-accent">Observatory of Heritage Economics</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-4 bg-secondary p-6 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">Academic Excellence</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Over 110 permanent research professors driving international peer-reviewed scholarship and European policy briefs.
                    </p>
                    <Link to="/research" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-primary pt-1">
                      Explore Faculty &amp; Insights <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}

              {activeMega === 'programs' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-3 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Master in Management
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link to="/programs/master-in-management" className="font-semibold hover:text-accent">
                          5-Year Curriculum (MiM)
                        </Link>
                      </li>
                      <li className="text-xs text-muted-foreground pt-1">Specializations in Year 4:</li>
                      <li><Link to="/programs/master-in-management" className="hover:text-accent">Masters in Finance</Link></li>
                      <li><Link to="/programs/master-in-management" className="hover:text-accent">Masters in Management</Link></li>
                      <li><Link to="/programs/master-in-management" className="hover:text-accent">Masters in Marketing &amp; Data</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-3 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Bachelor’s Degrees
                    </p>
                    <ul className="space-y-2 text-sm">
                      {PROGRAMS.filter((p) => p.level === 'Bachelor').map((p) => (
                        <li key={p.slug}>
                          <Link to={`/programs/${p.slug}`} className="hover:text-accent">{p.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-3 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Master of Science (MSc)
                    </p>
                    <ul className="space-y-2 text-sm">
                      {PROGRAMS.filter((p) => p.level === 'MSc').map((p) => (
                        <li key={p.slug}>
                          <Link to={`/programs/${p.slug}`} className="hover:text-accent">{p.shortTitle}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-3 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Executive Education
                    </p>
                    <ul className="space-y-2 text-sm">
                      {PROGRAMS.filter((p) => p.level === 'MBA & DBA').map((p) => (
                        <li key={p.slug}>
                          <Link to={`/programs/${p.slug}`} className="hover:text-accent">{p.title}</Link>
                        </li>
                      ))}
                      <li className="pt-2 border-t border-border">
                        <Link to="/programs" className="inline-flex items-center gap-1 font-semibold text-primary hover:text-accent">
                          View All Programs <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeMega === 'admissions' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-4 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Admissions by Program
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/admissions" className="hover:text-accent">Master in Management (MiM)</Link></li>
                      <li><Link to="/admissions" className="hover:text-accent">Bachelor’s Degree</Link></li>
                      <li><Link to="/admissions" className="hover:text-accent">Master of Science (MSc)</Link></li>
                      <li><Link to="/admissions" className="hover:text-accent">International MBA &amp; Executive DBA</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-4 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Our Admission Methods
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/admissions" className="hover:text-accent">National Admissions &amp; Entrance Exam</Link></li>
                      <li><Link to="/admissions" className="hover:text-accent">Direct International Admission</Link></li>
                      <li><Link to="/admissions#tuition" className="hover:text-accent">Tuition, Scholarships &amp; Work-Study</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-4 bg-primary text-white p-6 space-y-3">
                    <h3 className="font-display text-xl font-bold">Ready to apply?</h3>
                    <p className="text-sm text-white/80">Start your 2027 candidate application or join an upcoming campus Open Day.</p>
                    <div className="flex gap-2.5 pt-1">
                      <Button size="sm" variant="accent" onClick={() => openApply()}>Apply online</Button>
                      <Button size="sm" variant="outlineLight" onClick={() => openBrochure()}>Brochure</Button>
                    </div>
                  </div>
                </div>
              )}

              {activeMega === 'international' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-6 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Study Abroad &amp; Partnerships
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/international" className="hover:text-accent">International Vision &amp; Mobility</Link></li>
                      <li><Link to="/international#partners" className="hover:text-accent">165 Partner Universities Directory</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-6 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Incoming International Students
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/international#welcome" className="hover:text-accent">Welcome Desk: Visa, Housing &amp; Language Support</Link></li>
                      <li><Link to="/programs" className="hover:text-accent">100% English-Taught Degrees</Link></li>
                    </ul>
                  </div>
                </div>
              )}

              {(activeMega === 'student-services' || activeMega === 'corporate') && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-4 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Campus &amp; Student Services
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/campus-life" className="hover:text-accent">PBS Paris Campus Facilities</Link></li>
                      <li><Link to="/campus-life#associations" className="hover:text-accent">38 Student Societies &amp; Incubator</Link></li>
                      <li><Link to="/school#csr" className="hover:text-accent">CSR &amp; Civic Engagement</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-4 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent pb-2 border-b border-border">
                      Corporate Relations &amp; Careers
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/campus-life#careers" className="hover:text-accent">Career Center &amp; Work-Study Tracks</Link></li>
                      <li><Link to="/campus-life#careers" className="hover:text-accent">3,400+ Corporate Partners</Link></li>
                      <li><Link to="/campus-life#alumni" className="hover:text-accent">PBS Alumni Network (+28,000)</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-4 bg-secondary p-6 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">Career Events</p>
                    <p className="text-sm text-muted-foreground">
                      Over 85 recruiting firms attend our annual Job Dating and Work-Study career forums on campus.
                    </p>
                    <Link to="/events" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-primary pt-1">
                      View Upcoming Forums <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="lg:hidden border-b border-border bg-white px-4 pb-6 pt-2 max-h-[calc(100vh-4rem)] overflow-y-auto shadow-lg"
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="school">
                <AccordionTrigger className="py-3 text-sm font-semibold">School</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 pl-2">
                  <Link to="/school" className="py-1 hover:text-accent">About us</Link>
                  <Link to="/campus-life" className="py-1 hover:text-accent">PBS Paris Campus</Link>
                  <Link to="/school#accreditations" className="py-1 hover:text-accent">Accreditations &amp; Rankings</Link>
                  <Link to="/events" className="py-1 hover:text-accent">News &amp; Events</Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="programs">
                <AccordionTrigger className="py-3 text-sm font-semibold">Programs</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 pl-2">
                  <Link to="/programs" className="py-1 font-semibold text-primary">All Programs</Link>
                  {PROGRAMS.slice(0, 6).map((p) => (
                    <Link key={p.slug} to={`/programs/${p.slug}`} className="py-1 hover:text-accent">
                      {p.shortTitle}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="admissions">
                <AccordionTrigger className="py-3 text-sm font-semibold">Admissions</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 pl-2">
                  <Link to="/admissions" className="py-1 hover:text-accent">How to Join PBS</Link>
                  <Link to="/admissions#tuition" className="py-1 hover:text-accent">Tuition &amp; Scholarships</Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="more">
                <AccordionTrigger className="py-3 text-sm font-semibold">International, Research &amp; Careers</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 pl-2">
                  <Link to="/international" className="py-1 hover:text-accent">International Network</Link>
                  <Link to="/research" className="py-1 hover:text-accent">Faculty &amp; Research</Link>
                  <Link to="/campus-life#careers" className="py-1 hover:text-accent">Corporate Relations &amp; Careers</Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <Button variant="accent" onClick={() => openApply()}>Apply online</Button>
              <Button variant="default" onClick={() => openBrochure()}>Brochure</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
