import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/src/components/ui/dialog';
import { EditorialImage } from '@/src/components/shared/EditorialImage';
import { useModals } from '@/src/context/ModalContext';
import {
  ALUMNI_STORIES,
  DEAN_CONVERSATION,
  LATEST_NEWS,
  MEDIA_ASSETS,
  PROGRAMS,
  type NewsItem,
} from '@/src/data/schoolData';

export function HomePage() {
  const { openApply } = useModals();

  // Interactive Modal States
  const [finderOpen, setFinderOpen] = useState(false);
  const [filmOpen, setFilmOpen] = useState(false);
  const [deanOpen, setDeanOpen] = useState(false);
  const [activeNews, setActiveNews] = useState<NewsItem | null>(null);
  const [activeAlumni, setActiveAlumni] = useState<(typeof ALUMNI_STORIES)[number] | null>(null);

  // Program Orientation Tool State
  const [eduLevel, setEduLevel] = useState<'highschool' | 'bachelor' | 'experienced'>('bachelor');
  const [interest, setInterest] = useState<'general' | 'tech' | 'finance' | 'luxury'>('general');

  const recommendedPrograms = PROGRAMS.filter((p) => {
    if (eduLevel === 'highschool') {
      return p.level === 'Bachelor' || p.level === 'Master in Management';
    }
    if (eduLevel === 'experienced') {
      return p.level === 'MBA & DBA';
    }
    if (interest === 'tech') return p.slug.includes('ai') || p.level === 'Master in Management';
    if (interest === 'finance') return p.slug.includes('finance') || p.level === 'Master in Management';
    if (interest === 'luxury') return p.slug.includes('luxury') || p.level === 'Master in Management';
    return p.level === 'MSc' || p.level === 'Master in Management';
  }).slice(0, 3);

  const bigNews = LATEST_NEWS[0];
  const smallNews = LATEST_NEWS.slice(1, 5);
  const smallNewsImages = [
    MEDIA_ASSETS.heroCampus,
    MEDIA_ASSETS.belvedereInterior,
    MEDIA_ASSETS.internationalCollab,
    MEDIA_ASSETS.seminarLecture,
  ];

  return (
    <div className="bg-white text-foreground">
      {/* =================================================================== */}
      {/* SECTION 1: FULL VIEWPORT HEIGHT (100vh) HERO BANNER                 */}
      {/* =================================================================== */}
      <section className="relative min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-115px)] flex flex-col justify-between bg-[#0F2B24] text-white overflow-hidden">
        <div className="absolute inset-0">
          <EditorialImage
            src={MEDIA_ASSETS.heroCampus}
            alt="PBS (Paris Business School) architectural campus courtyard"
            className="h-full w-full object-cover object-center"
            containerClassName="h-full w-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B201B]/90 via-[#0F2B24]/65 to-[#0F2B24]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B201B]/75 via-transparent to-transparent" />
        </div>

        {/* Main Hero Centered Vertical Composition */}
        <div className="relative flex-1 flex items-center mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-6"
          >
            <div className="font-display text-5xl sm:text-7xl lg:text-[5.25rem] font-extrabold leading-[0.94] tracking-tight text-white">
              <span className="block">Paris</span>
              <span className="block">Business</span>
              <span className="block text-[#E8A782]">School</span>
            </div>

            <h1 className="font-sans text-xl sm:text-2xl font-semibold text-white/95 tracking-normal">
              PBS · School of Business &amp; Management
            </h1>

            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <Button
                asChild
                size="lg"
                variant="default"
                className="bg-white text-[#0F2B24] hover:bg-[#EFF1EE] font-bold h-12 px-8"
              >
                <Link to="/programs">
                  Our programs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="accent"
                onClick={() => openApply()}
                className="font-bold h-12 px-8"
              >
                Apply online
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outlineLight"
                className="font-bold h-12 px-7"
              >
                <Link to="/campus-life">Our new campus</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Anchored "Discover our new campus!" Feature Ribbon inside 100vh */}
        <div className="relative border-t border-white/15 bg-[#0A1E19]/85 backdrop-blur-sm">
          <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <p className="font-display text-lg font-bold text-white">
                Discover our new campus!
              </p>
              <p className="text-sm text-white/80">
                PBS (Paris Business School) welcomes students in the 5th district of Paris — a unique place designed by and for students.
              </p>
            </div>
            <Link
              to="/campus-life"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#E8A782] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 2: "Our programs" — EXACT 5-TILE STAIRCASE + ORIENTATION    */}
      {/* =================================================================== */}
      <section className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-22">
        <div className="flex items-center gap-3 pb-3 border-b-2 border-accent mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F2B24]">
            Our programs
          </h2>
          <ArrowRight className="h-7 w-7 text-accent shrink-0" aria-hidden="true" />
        </div>

        {/* Row 1: 3 Equal Color-Block Tiles (Primary Pine / Copper Accent / Cool Stone) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <Link
            to="/programs/master-in-management"
            className="group bg-[#0F2B24] text-white p-9 sm:p-11 min-h-[220px] flex flex-col justify-between transition-opacity hover:opacity-95"
          >
            <h3 className="font-display text-2xl font-bold leading-snug">
              Master in Management
              <span className="block text-base font-normal text-white/80 mt-2">
                Undergraduate cycle
              </span>
            </h3>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8A782] group-hover:translate-x-1 transition-transform">
              <span>Discover</span>
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <Link
            to="/programs/master-in-management"
            className="group bg-[#C25E28] text-white p-9 sm:p-11 min-h-[220px] flex flex-col justify-between transition-opacity hover:opacity-95"
          >
            <h3 className="font-display text-2xl font-bold leading-snug">
              Master in Management
              <span className="block text-base font-normal text-white/90 mt-2">
                Master’s degree
              </span>
            </h3>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:translate-x-1 transition-transform">
              <span>Discover</span>
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <Link
            to="/programs?level=Bachelor"
            className="group bg-[#EFF1EE] text-[#0F2B24] p-9 sm:p-11 min-h-[220px] flex flex-col justify-between transition-colors hover:bg-[#e3e7e1]"
          >
            <h3 className="font-display text-2xl font-bold leading-snug">
              Bachelors
              <span className="block text-base font-normal text-muted-foreground mt-2">
                International Management &amp; Tech
              </span>
            </h3>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform">
              <span>Discover</span>
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        {/* Row 2: Staggered 2-Tile Offset (col-2 spacer + col-4 Obsidian + col-4 Charcoal) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          <div className="hidden md:block md:col-span-2" aria-hidden="true" />
          <Link
            to="/programs?level=MSc"
            className="group md:col-span-4 bg-[#161A19] text-white p-9 sm:p-11 min-h-[220px] flex flex-col justify-between transition-opacity hover:opacity-95"
          >
            <h3 className="font-display text-2xl font-bold leading-snug">
              MSc / Masters of Science
              <span className="block text-base font-normal text-white/75 mt-2">
                Specialized Postgraduate Degrees
              </span>
            </h3>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8A782] group-hover:translate-x-1 transition-transform">
              <span>Discover</span>
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <Link
            to="/programs?level=MBA"
            className="group md:col-span-4 bg-[#363E3B] text-white p-9 sm:p-11 min-h-[220px] flex flex-col justify-between transition-opacity hover:opacity-95"
          >
            <h3 className="font-display text-2xl font-bold leading-snug">
              Executive Education
              <span className="block text-base font-normal text-white/80 mt-2">
                International MBA &amp; Executive DBA
              </span>
            </h3>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8A782] group-hover:translate-x-1 transition-transform">
              <span>Discover</span>
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <div className="hidden md:block md:col-span-2" aria-hidden="true" />
        </div>

        {/* "Which programme is right for you?" Orientation Tool Banner */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-12 items-stretch bg-[#0F2B24] text-white overflow-hidden">
          <div className="md:col-span-5">
            <EditorialImage
              src={MEDIA_ASSETS.seminarLecture}
              alt="PBS students exploring degree pathways"
              containerClassName="h-full min-h-[220px]"
            />
          </div>
          <div className="md:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Which programme is right for you?
            </h3>
            <p className="text-base text-white/85 max-w-xl leading-relaxed">
              Find the programme that best matches your goals with our orientation tool.
            </p>
            <div className="pt-1">
              <Button variant="accent" size="lg" onClick={() => setFinderOpen(true)}>
                <Compass className="h-4 w-4" />
                Find your programme
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 3: "A Business School of excellence in Paris" (EXACT 7/5)   */}
      {/* Positioned directly after Our programs (replacing Discover section) */}
      {/* =================================================================== */}
      <section className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-16 lg:py-22">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-0">
          {/* Left Col 7: Deep Primary Pine Block */}
          <div className="lg:col-span-7 bg-[#0F2B24] text-white p-9 sm:p-12 lg:p-16 flex flex-col justify-center space-y-5">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.1] text-white">
              A Business School of excellence in Paris
            </h2>
            <p className="text-base text-white/90 leading-relaxed">
              Established as a leading international business institution, PBS (Paris Business School) holds the prestigious triple accreditation from <strong className="text-white">EQUIS, AACSB, and AMBA</strong>. Based in Paris, it is recognized worldwide for academic rigor and executive employability.
            </p>
            <p className="text-base text-white/85 leading-relaxed">
              Backed by an international network spanning management, design, arts, and technology, the School stands out for its distinctive teaching approach, combining interdisciplinary expertise with rich multicultural experiences.
            </p>
            <p className="text-base text-white/85 leading-relaxed">
              This unique positioning empowers students to stand out and develop innovative ideas that create lasting impact for businesses and society.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-white/15">
              <div className="flex items-center gap-4 font-mono text-xs tracking-widest text-[#E8A782]">
                <span>EQUIS</span>
                <span aria-hidden="true">·</span>
                <span>AACSB</span>
                <span aria-hidden="true">·</span>
                <span>AMBA</span>
              </div>
              <Link
                to="/school"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#E8A782] transition-colors"
              >
                <span>Learn about PBS</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Col 5: Playable Campus Film Preview */}
          <div className="lg:col-span-5 relative group bg-[#161A19] min-h-[320px] flex items-center justify-center overflow-hidden">
            <EditorialImage
              src={MEDIA_ASSETS.belvedereInterior}
              alt="PBS Paris Campus architectural interior and library"
              containerClassName="absolute inset-0 h-full w-full"
              hoverZoom
            />
            <div className="absolute inset-0 bg-[#0F2B24]/45 group-hover:bg-[#0F2B24]/30 transition-colors" />
            <button
              type="button"
              onClick={() => setFilmOpen(true)}
              aria-label="Play PBS institutional campus film"
              className="relative z-10 flex flex-col items-center gap-3 text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg group-hover:scale-105 transition-transform">
                <Play className="h-6 w-6 fill-current ml-0.5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-white">
                Watch Campus Film · 02:15
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 4: "How to join PBS (Paris Business School)?" (EXACT 3/3/6) */}
      {/* =================================================================== */}
      <section className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-16 lg:py-22">
        <div className="flex items-center gap-3 pb-3 border-b-2 border-accent mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F2B24]">
            How to join PBS (Paris Business School)?
          </h2>
          <ArrowRight className="h-7 w-7 text-accent shrink-0" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Col 1 (3 cols): 1st year Master in Management */}
          <div className="lg:col-span-3 bg-[#EFF1EE] p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <span className="font-display text-5xl font-extrabold text-accent leading-none tabular-nums">
                  1<sup className="text-2xl">st</sup>
                </span>
                <h3 className="font-display text-lg font-bold text-[#0F2B24] leading-snug">
                  year of the Master in Management
                </h3>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Apply through the National Admissions Portal and entrance exam—composed of a written analytical test followed by an individual motivation interview held on our Paris campus.
              </p>
            </div>
            <Button asChild variant="default" size="sm" className="w-full">
              <Link to="/admissions">More info</Link>
            </Button>
          </div>

          {/* Col 2 (3 cols): 1st year Bachelor in International Management */}
          <div className="lg:col-span-3 bg-[#EFF1EE] p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <span className="font-display text-5xl font-extrabold text-[#0F2B24] leading-none tabular-nums">
                  1<sup className="text-2xl">st</sup>
                </span>
                <h3 className="font-display text-lg font-bold text-[#0F2B24] leading-snug">
                  year of the Bachelor in International Management
                </h3>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Apply directly through our undergraduate admissions channel. Selection consists of a thorough academic file review followed by a motivation interview on campus or online.
              </p>
            </div>
            <Button asChild variant="default" size="sm" className="w-full">
              <Link to="/admissions">More info</Link>
            </Button>
          </div>

          {/* Col 3 (6 cols): Admission Procedure for the other programs */}
          <div className="lg:col-span-6 bg-[#EFF1EE] p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-[#0F2B24]">
                  Admission Procedure
                </h3>
                <p className="text-sm font-semibold text-accent mt-0.5">
                  for the other programs (Transfers, MSc, MBA, DBA)
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                <div className="space-y-2 border-t-2 border-accent pt-3">
                  <p className="font-display text-base font-bold text-[#0F2B24]">1. Application</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    You can apply directly via the{' '}
                    <button
                      type="button"
                      onClick={() => openApply()}
                      className="font-semibold text-accent underline underline-offset-4 hover:text-[#0F2B24] cursor-pointer"
                    >
                      Application page
                    </button>{' '}
                    on our website.
                  </p>
                </div>
                <div className="space-y-2 border-t-2 border-[#0F2B24] pt-3">
                  <p className="font-display text-base font-bold text-[#0F2B24]">2. Interview</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Once candidates are eligible, they are invited for a motivation interview on our Paris campus or online.
                  </p>
                </div>
                <div className="space-y-2 border-t-2 border-[#0F2B24] pt-3">
                  <p className="font-display text-base font-bold text-[#0F2B24]">3. Enrollment</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Once admitted, future students finalize their enrollment by completing the Application Form sent by Admissions.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border">
              <span className="text-xs text-muted-foreground">
                International admissions decisions issued within 7 working days.
              </span>
              <Button variant="accent" size="sm" onClick={() => openApply()}>
                Apply online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 5: "International" + 3 KEY FIGURE BLOCKS + 3 ALUMNI CARDS   */}
      {/* =================================================================== */}
      <section className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-16 lg:py-22">
        <div className="max-w-4xl space-y-4 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-accent">
            International
          </h2>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            PBS (Paris Business School) has built its international presence around student exchange programs, international partnerships, and strategic alliances—all of which encourage student mobility. Experience abroad is enhanced by the intercultural dimension of our Paris campus. Much more than acquiring language skills, it means coming face to face with different working methods that are a real career booster.
          </p>
          <Link
            to="/international"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2B24] hover:text-accent transition-colors"
          >
            <span>Explore our 165 international partner universities</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 3 Equal Color-Blocked Key Figures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-14">
          <div className="bg-[#0F2B24] text-white py-14 px-8 text-center space-y-2">
            <p className="font-display text-5xl sm:text-6xl font-extrabold tabular-nums">+4,250</p>
            <p className="text-base font-medium text-white/85">students</p>
          </div>
          <div className="bg-[#C25E28] text-white py-14 px-8 text-center space-y-2">
            <p className="font-display text-5xl sm:text-6xl font-extrabold tabular-nums">1974</p>
            <p className="text-base font-medium text-white/90">founding of Paris Business School</p>
          </div>
          <div className="bg-[#161A19] text-white py-14 px-8 text-center space-y-2">
            <p className="font-display text-5xl sm:text-6xl font-extrabold tabular-nums">+28,000</p>
            <p className="text-base font-medium text-white/80">alumni</p>
          </div>
        </div>

        {/* 3-Column Alumni Portrait Cards (`bg-[#EFF1EE]`) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {ALUMNI_STORIES.map((alumni, index) => {
            const cardImages = [
              MEDIA_ASSETS.internationalCollab,
              MEDIA_ASSETS.seminarLecture,
              MEDIA_ASSETS.belvedereInterior,
            ];
            return (
              <article
                key={alumni.name}
                className="bg-[#EFF1EE] flex flex-col justify-between"
              >
                <div>
                  <EditorialImage
                    src={cardImages[index % cardImages.length]}
                    alt={`${alumni.name}, ${alumni.role}`}
                    aspectRatio="4/3"
                  />
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#0F2B24]">
                        {alumni.name}
                      </h3>
                      <p className="text-xs font-semibold text-accent mt-0.5">
                        {alumni.role}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {alumni.degree}
                      </p>
                    </div>
                    <p className="text-sm text-foreground/85 leading-relaxed line-clamp-4">
                      “{alumni.quote}”
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Button variant="outline" size="sm" onClick={() => setActiveAlumni(alumni)}>
                    More info
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 6: "Our latest news" — DEAN'S CONVERSATION + BIG/SMALL GRID */}
      {/* =================================================================== */}
      <section className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-22 lg:pb-28">
        <div className="flex items-center justify-between gap-4 pb-3 border-b-2 border-accent mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F2B24]">
            Our latest news
          </h2>
          <Link
            to="/events"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-[#0F2B24]"
          >
            <span>All the news</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Featured Row: Dean's Conversation (col-4 media + col-8 editorial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-14 mb-14 border-b border-border">
          <div className="lg:col-span-4 relative group bg-[#0F2B24] overflow-hidden">
            <EditorialImage
              src={MEDIA_ASSETS.researchAuditorium}
              alt="Dean's Conversation episode preview"
              aspectRatio="4/3"
              hoverZoom
            />
            <div className="absolute inset-0 bg-[#0F2B24]/40 group-hover:bg-[#0F2B24]/30 transition-colors" />
            <button
              type="button"
              onClick={() => setDeanOpen(true)}
              aria-label="Open Dean's Conversation episode"
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg group-hover:scale-105 transition-transform">
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </span>
            </button>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F2B24] inline-flex items-center gap-2.5">
              <span>Dean’s Conversation</span>
              <ArrowRight className="h-6 w-6 text-accent shrink-0" aria-hidden="true" />
            </h3>
            <p className="text-base text-foreground/85 leading-relaxed">
              {DEAN_CONVERSATION.description}
            </p>
            <div className="pt-1 space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">
                For this second episode:
              </p>
              <p className="font-display text-xl font-bold text-[#0F2B24]">
                {DEAN_CONVERSATION.episodeTitle}
              </p>
            </div>
            <div className="pt-2">
              <Button variant="default" size="sm" onClick={() => setDeanOpen(true)}>
                Watch Episode Highlights
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Asymmetric News Grid: Big Card (Left 5 cols) + 2x2 Small Cards (Right 7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <article className="lg:col-span-5 group bg-[#EFF1EE] flex flex-col justify-between overflow-hidden">
            <div>
              <EditorialImage
                src={MEDIA_ASSETS.researchAuditorium}
                alt={bigNews.title}
                aspectRatio="4/3"
                hoverZoom
              />
              <div className="p-7 space-y-3">
                <p className="font-mono text-xs text-muted-foreground tabular-nums">{bigNews.date}</p>
                <h3 className="font-display text-2xl font-bold text-[#0F2B24] leading-snug">
                  <button
                    type="button"
                    onClick={() => setActiveNews(bigNews)}
                    className="text-left hover:text-accent transition-colors cursor-pointer"
                  >
                    {bigNews.title}
                  </button>
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {bigNews.summary}
                </p>
              </div>
            </div>
            <div className="px-7 pb-7 flex items-center justify-between text-xs">
              <span className="font-bold text-accent">{bigNews.category}</span>
              <button
                type="button"
                onClick={() => setActiveNews(bigNews)}
                className="inline-flex items-center gap-1 font-bold text-[#0F2B24] hover:text-accent cursor-pointer"
              >
                <span>Read more</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </article>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {smallNews.map((item, idx) => (
              <article
                key={item.id}
                className="group bg-[#EFF1EE] flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <EditorialImage
                    src={smallNewsImages[idx % smallNewsImages.length]}
                    alt={item.title}
                    aspectRatio="16/9"
                    hoverZoom
                  />
                  <div className="p-5 space-y-2">
                    <p className="font-mono text-[11px] text-muted-foreground tabular-nums">
                      {item.date}
                    </p>
                    <h3 className="font-display text-base font-bold text-[#0F2B24] leading-snug">
                      <button
                        type="button"
                        onClick={() => setActiveNews(item)}
                        className="text-left hover:text-accent transition-colors cursor-pointer"
                      >
                        {item.title}
                      </button>
                    </h3>
                  </div>
                </div>
                <div className="px-5 pb-5 flex items-center justify-between text-xs">
                  <span className="font-semibold text-accent">{item.category}</span>
                  <button
                    type="button"
                    onClick={() => setActiveNews(item)}
                    className="inline-flex items-center gap-1 font-bold text-[#0F2B24] hover:text-accent cursor-pointer"
                  >
                    <span>Read</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/events">
              All the news
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* =================================================================== */}
      {/* INTERACTIVE MODALS                                                  */}
      {/* =================================================================== */}

      {/* 1. Program Orientation Finder Modal */}
      <Dialog open={finderOpen} onOpenChange={setFinderOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Orientation Tool</p>
            <DialogTitle>Which programme is right for you?</DialogTitle>
            <DialogDescription>
              Select your current education level and field of interest to see matching PBS (Paris Business School) degrees.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 pt-2">
            <div className="space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                1. Your current academic profile
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'highschool', label: 'High School Graduate' },
                  { id: 'bachelor', label: 'Bachelor Graduate' },
                  { id: 'experienced', label: '3+ Years Experience' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setEduLevel(opt.id as typeof eduLevel)}
                    className={`px-4 py-3 text-xs font-semibold border text-left transition-colors cursor-pointer ${
                      eduLevel === opt.id
                        ? 'bg-[#0F2B24] text-white border-[#0F2B24]'
                        : 'bg-secondary text-foreground border-border hover:border-[#0F2B24]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {eduLevel === 'bachelor' && (
              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                  2. Preferred specialization focus
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'general', label: 'Management' },
                    { id: 'finance', label: 'Finance' },
                    { id: 'tech', label: 'AI & Data' },
                    { id: 'luxury', label: 'Luxury & Brand' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setInterest(opt.id as typeof interest)}
                      className={`px-3 py-2.5 text-xs font-semibold border transition-colors cursor-pointer ${
                        interest === opt.id
                          ? 'bg-accent text-white border-accent'
                          : 'bg-secondary text-foreground border-border hover:border-accent'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3 pt-2 border-t border-border">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">
                Recommended PBS Degrees
              </p>
              <div className="space-y-2.5">
                {recommendedPrograms.map((prog) => (
                  <Link
                    key={prog.slug}
                    to={`/programs/${prog.slug}`}
                    onClick={() => setFinderOpen(false)}
                    className="flex items-center justify-between gap-4 border border-border bg-[#EFF1EE] p-4 hover:border-[#0F2B24] transition-colors"
                  >
                    <div>
                      <p className="font-display font-bold text-[#0F2B24]">{prog.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {prog.duration} · {prog.language} · {prog.campus}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-accent shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 2. Campus Institutional Film Modal */}
      <Dialog open={filmOpen} onOpenChange={setFilmOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Paris Latin Quarter Campus
            </p>
            <DialogTitle>Inside PBS — Paris Business School</DialogTitle>
            <DialogDescription>
              An architectural and academic walkthrough of our 18,000 m² Paris campus, Bloomberg market floor, and student laboratories.
            </DialogDescription>
          </DialogHeader>
          <EditorialImage
            src={MEDIA_ASSETS.heroCampus}
            alt="PBS Paris Campus architectural overview"
            aspectRatio="16/9"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
            <div className="bg-secondary p-4 space-y-1">
              <p className="font-bold text-[#0F2B24]">00:00 — Architecture</p>
              <p className="text-muted-foreground">Historic 19th-century limestone halls fused with glass learning studios.</p>
            </div>
            <div className="bg-secondary p-4 space-y-1">
              <p className="font-bold text-[#0F2B24]">00:55 — Student Hubs</p>
              <p className="text-muted-foreground">38 student societies, Venture Foundry incubator, and quiet library.</p>
            </div>
            <div className="bg-secondary p-4 space-y-1">
              <p className="font-bold text-[#0F2B24]">01:40 — Global Reach</p>
              <p className="text-muted-foreground">128 nationalities preparing for international careers across Europe.</p>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button asChild variant="outline" onClick={() => setFilmOpen(false)}>
              <Link to="/campus-life">Explore Campus Life</Link>
            </Button>
            <Button onClick={() => setFilmOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 3. Dean's Conversation Episode Modal */}
      <Dialog open={deanOpen} onOpenChange={setDeanOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Dean’s Conversation · {DEAN_CONVERSATION.episodeLabel}
            </p>
            <DialogTitle>{DEAN_CONVERSATION.episodeTitle}</DialogTitle>
            <DialogDescription>
              {DEAN_CONVERSATION.deanName}, {DEAN_CONVERSATION.deanRole}
            </DialogDescription>
          </DialogHeader>
          <EditorialImage
            src={MEDIA_ASSETS.researchAuditorium}
            alt="Dean's Conversation in PBS Auditorium"
            aspectRatio="16/9"
          />
          <div className="space-y-3 text-sm text-foreground/85 leading-relaxed">
            <p>{DEAN_CONVERSATION.description}</p>
            <ul className="space-y-2 pt-2 border-t border-border">
              {DEAN_CONVERSATION.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="font-bold text-accent">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button asChild variant="outline" onClick={() => setDeanOpen(false)}>
              <Link to="/research">Explore Research Chairs</Link>
            </Button>
            <Button onClick={() => setDeanOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 4. News Reader Modal */}
      <Dialog open={Boolean(activeNews)} onOpenChange={(o) => !o && setActiveNews(null)}>
        <DialogContent className="max-w-2xl">
          {activeNews && (
            <div className="space-y-4">
              <DialogHeader>
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  {activeNews.date} · {activeNews.category}
                </p>
                <DialogTitle>{activeNews.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm sm:text-base text-foreground/85 leading-relaxed">
                {activeNews.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="flex justify-end pt-3 border-t border-border">
                <Button variant="outline" onClick={() => setActiveNews(null)}>Close</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* 5. Alumni Portrait Modal */}
      <Dialog open={Boolean(activeAlumni)} onOpenChange={(o) => !o && setActiveAlumni(null)}>
        <DialogContent className="max-w-xl">
          {activeAlumni && (
            <div className="space-y-4">
              <DialogHeader>
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  PBS Alumni Portrait
                </p>
                <DialogTitle>{activeAlumni.name}</DialogTitle>
                <DialogDescription>
                  {activeAlumni.role} · {activeAlumni.degree}
                </DialogDescription>
              </DialogHeader>
              <blockquote className="text-base text-foreground leading-relaxed bg-[#EFF1EE] p-6">
                “{activeAlumni.quote}”
              </blockquote>
              <div className="flex justify-end gap-3 pt-2">
                <Button asChild variant="outline" onClick={() => setActiveAlumni(null)}>
                  <Link to="/campus-life#alumni">More Alumni Stories</Link>
                </Button>
                <Button onClick={() => setActiveAlumni(null)}>Close</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
