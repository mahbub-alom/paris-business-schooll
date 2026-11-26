import { useState } from 'react';
import { ArrowRight, Check, FileText } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';
import { useModals } from '@/src/context/ModalContext';

const PATHWAYS = {
  undergraduate: {
    label: 'Undergraduate (Year 1)',
    subtitle: 'For high school seniors applying to the Master in Management (Year 1) or Bachelor degrees.',
    domestic: 'Domestic high school candidates apply through the National Admissions Portal (January – March), sit the shared analytical entrance exam, and attend an on-campus motivation interview in Paris.',
    international: 'International secondary school candidates (IB, A-Levels, US High School Diploma, or equivalent) apply directly online via the PBS Admissions Portal on a rolling basis from October through June.',
    documents: [
      'Secondary school transcripts from the past two academic years',
      'Copy of passport or national identity card',
      'English proficiency certificate (IELTS 6.0 / TOEFL iBT 80) for English tracks',
      'Curriculum Vitae and 500-word personal motivation statement',
    ],
  },
  transfer: {
    label: 'Lateral Transfer (Years 2–4)',
    subtitle: 'For university undergraduates holding 60, 120, or 180 ECTS entering Master in Management or Bachelor Year 3.',
    domestic: 'Students holding an undergraduate degree or equivalent higher education credits apply directly via our online assessment portal with academic dossier evaluation and a structured jury interview.',
    international: 'Transfer candidates submit certified ECTS or credit-hour equivalents and transcripts for automatic credit mapping by the Academic Registrar.',
    documents: [
      'Official university transcripts and course syllabus descriptions',
      'Proof of completed undergraduate credits (60 / 120 / 180 ECTS)',
      'Two academic or professional letters of recommendation',
      'English proficiency certificate for your selected program track',
    ],
  },
  msc: {
    label: 'Postgraduate (MSc)',
    subtitle: 'For 3-year or 4-year Bachelor graduates seeking specialized postgraduate mastery.',
    domestic: 'Rolling admissions across five jury rounds between November and July. Early applicants are automatically considered for PBS Academic Excellence Scholarships.',
    international: '100% online application and video jury interview with guaranteed decision turnaround within 10 working days and immediate student visa support.',
    documents: [
      'Bachelor diploma (or certificate of expected graduation) & official transcripts',
      'Detailed CV highlighting internships, projects, or analytical coursework',
      'English proficiency (IELTS 6.5 / TOEFL iBT 88; waived for native speakers or English-taught degrees)',
      'Motivation letter detailing post-MSc career trajectory',
    ],
  },
  executive: {
    label: 'MBA & Executive DBA',
    subtitle: 'For experienced managers (3+ years for MBA; 8+ years for DBA) accelerating into C-suite leadership.',
    domestic: 'Personalized admissions coaching starts with an informal CV review prior to formal Executive Committee dossier submission.',
    international: 'Flexible online assessments (GMAT, GRE, or PBS Executive Assessment) paired with an executive panel interview in Geneva, Lyon, or online.',
    documents: [
      'Bachelor or Master diploma & official transcripts',
      'Executive CV documenting leadership scope and measurable impact',
      'Two professional references from senior directors or board peers',
      'GMAT/GRE score (MBA) or 1,500-word doctoral research proposal (DBA)',
    ],
  },
};

const TUITION_ROWS = [
  { program: 'Master in Management Program', duration: '5 Years', annual: '€13,900', funding: '€0 in Years 4–5 (Employer Funded)' },
  { program: 'International Bachelor in Management', duration: '3 Years', annual: '€11,200', funding: '€0 in Year 3 (Optional)' },
  { program: 'Bachelor Tech & Quantitative Management', duration: '3 Years', annual: '€11,800', funding: 'Full-Time Track' },
  { program: 'MSc Programs (1-Year Accelerated)', duration: '12 Months', annual: '€16,800 – €18,900', funding: 'Selected MSc Tracks Eligible' },
  { program: 'International MBA', duration: '12 Months', annual: '€34,500 (Total)', funding: 'Corporate Sponsorship Eligible' },
  { program: 'Executive DBA', duration: '3 Years', annual: '€14,500 / year', funding: 'Corporate Sponsorship Eligible' },
];

const FAQS = [
  {
    q: 'Are scholarships available for international students?',
    a: 'Yes. PBS awards Excellence & Diversity Merit Scholarships covering 15% to 40% of first-year tuition for non-EU and EU candidates demonstrating strong academic transcripts or community leadership. No separate form is needed—indicate your interest during online application.',
  },
  {
    q: 'How does the Work-Study track cover tuition fees?',
    a: 'Under a corporate apprenticeship contract, students in eligible Bachelor Year 3, Master in Management Years 4–5, and MSc tracks have 100% of their tuition funded by their host company while receiving a monthly gross salary.',
  },
  {
    q: 'Can I apply before receiving my final diploma or IELTS score?',
    a: 'Yes. You may submit your current transcripts and complete your admissions interview first. Successful candidates receive a conditional offer and submit final diplomas or language test results prior to matriculation.',
  },
  {
    q: 'How long does the Admissions Jury take to issue a decision?',
    a: 'Direct international and postgraduate candidates receive an interview invitation within 5 working days of submitting a complete dossier, and a final jury decision within 7 working days following the interview.',
  },
];

export function AdmissionsPage() {
  const { openApply, openBrochure } = useModals();
  const [activeTab, setActiveTab] = useState<keyof typeof PATHWAYS>('msc');

  return (
    <div>
      {/* Header Band */}
      <section className="bg-[#0F2B24] text-white py-16 lg:py-22">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8A782]">
              Admissions &amp; Financing · 2027 Intake
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight">
              Transparent selection grounded in intellectual curiosity and trajectory
            </h1>
            <p className="text-base text-[#D4DDD9] leading-relaxed max-w-2xl">
              Select your academic profile below to view application channels, required credentials, interview format, and scholarship eligibility.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end gap-3">
            <Button variant="accent" size="lg" onClick={() => openApply()}>
              Start Online Application
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 3-Step Admissions Process */}
      <section className="border-b border-border bg-card py-14">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2 border-t border-border pt-4">
            <p className="font-mono text-xs text-accent">Step 01</p>
            <h2 className="font-serif text-xl font-medium text-foreground">Online Candidate Dossier</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Create your applicant profile, upload transcripts, CV, language certificate, and motivation statement via our secure portal.
            </p>
          </div>
          <div className="space-y-2 border-t border-border pt-4">
            <p className="font-mono text-xs text-accent">Step 02</p>
            <h2 className="font-serif text-xl font-medium text-foreground">Admissions Jury Interview</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Shortlisted applicants engage in a 30-minute conversation (on campus in Lyon/Geneva or via video) assessing analytical reasoning and goals.
            </p>
          </div>
          <div className="space-y-2 border-t border-border pt-4">
            <p className="font-mono text-xs text-accent">Step 03</p>
            <h2 className="font-serif text-xl font-medium text-foreground">Offer, Scholarship &amp; Enrollment</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Receive your admissions decision and merit scholarship award within 7 working days, followed by visa and housing onboarding.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Pathway Selector */}
      <section className="py-16 lg:py-22 border-b border-border">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              Entry Pathways
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
              Requirements by candidate profile
            </h2>
          </div>

          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as keyof typeof PATHWAYS)}>
            <TabsList>
              {Object.entries(PATHWAYS).map(([key, item]) => (
                <TabsTrigger key={key} value={key}>
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(PATHWAYS).map(([key, item]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border border-border bg-card p-6 sm:p-8 lg:p-10">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-medium text-foreground">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                          French &amp; European Track
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.domestic}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                          International Direct Track
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.international}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button onClick={() => openApply()}>Begin Application</Button>
                      <Button variant="outline" onClick={() => openBrochure()}>Download Admissions Guide</Button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-8 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                      <FileText className="h-4 w-4" aria-hidden="true" />
                      <span>Required Dossier Documents</span>
                    </div>
                    <ul className="space-y-3 text-sm text-foreground">
                      {item.documents.map((doc) => (
                        <li key={doc} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-[#164A3D] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Tuition & Financing Table */}
      <section id="tuition" className="py-16 lg:py-22 bg-card border-b border-border">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              Tuition &amp; Scholarships
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
              2026–2027 Fee Schedule &amp; Funding Pathways
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fees include full access to the Bloomberg Market Room, lifelong alumni membership, and international exchange tuition waivers at our 165 partner universities.
            </p>
          </div>

          <div className="overflow-x-auto border border-border">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-secondary/70 border-b border-border">
                <tr>
                  <th className="py-3.5 px-5 font-medium text-xs uppercase tracking-wider text-muted-foreground">
                    Program
                  </th>
                  <th className="py-3.5 px-5 font-medium text-xs uppercase tracking-wider text-muted-foreground">
                    Duration
                  </th>
                  <th className="py-3.5 px-5 font-medium text-xs uppercase tracking-wider text-muted-foreground">
                    Annual / Program Tuition
                  </th>
                  <th className="py-3.5 px-5 font-medium text-xs uppercase tracking-wider text-muted-foreground">
                    Work-Study / Funding
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {TUITION_ROWS.map((row) => (
                  <tr key={row.program} className="hover:bg-background/60 transition-colors">
                    <td className="py-4 px-5 font-medium text-foreground">{row.program}</td>
                    <td className="py-4 px-5 text-muted-foreground">{row.duration}</td>
                    <td className="py-4 px-5 font-mono text-foreground tabular-nums">{row.annual}</td>
                    <td className="py-4 px-5 text-muted-foreground">{row.funding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Admissions FAQ */}
      <section className="py-16 lg:py-22">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              Frequently Asked Questions
            </p>
            <h2 className="font-serif text-3xl font-medium text-foreground">
              Clarity before you submit
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our Paris admissions offices advise candidates across every time zone.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible defaultValue="faq-0">
              {FAQS.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
