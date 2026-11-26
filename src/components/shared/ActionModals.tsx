import React, { useEffect, useState } from 'react';
import { CheckCircle2, Download, Calendar, MapPin, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/src/components/ui/dialog';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import { useModals } from '@/src/context/ModalContext';
import { PROGRAMS } from '@/src/data/schoolData';

export function ActionModals() {
  return (
    <>
      <BrochureDialog />
      <ApplicationDialog />
      <EventRsvpDialog />
    </>
  );
}

function BrochureDialog() {
  const { brochureOpen, brochureProgram, closeBrochure } = useModals();
  const [program, setProgram] = useState(brochureProgram);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [intake, setIntake] = useState('September 2027');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setProgram(brochureProgram);
  }, [brochureProgram]);

  const handleClose = (open: boolean) => {
    if (!open) {
      closeBrochure();
      setTimeout(() => {
        setSubmitted(false);
        setError('');
      }, 200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter your full name and a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const triggerDownload = () => {
    const content = [
      'PBS (PARIS BUSINESS SCHOOL) — ACADEMIC BROCHURE SUMMARY (2026–2027)',
      '===================================================================',
      `Requested Program: ${program}`,
      `Candidate: ${firstName} ${lastName}`,
      `Target Intake: ${intake}`,
      '',
      'Accreditations: EQUIS · AACSB · AMBA · Conference of Business Schools (CGE)',
      'Campus: Paris Latin Quarter (24 Sorbonne Street, 75005 Paris, France)',
      'Admissions Contact: admissions@pbs-paris.edu | +33 (0)1 53 36 44 00',
    ].join('\n');
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'PBS-Paris-Business-School-Brochure-2027.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={brochureOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <p className="text-xs font-medium tracking-wider uppercase text-accent">
            Academic Prospectus · 2026–2027 Edition
          </p>
          <DialogTitle>Download Program Brochure</DialogTitle>
          <DialogDescription>
            Receive the full curriculum syllabus, admissions calendar, tuition overview, and career placement report.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="space-y-5 py-4">
            <div className="flex items-start gap-3.5 rounded-md border border-border bg-background p-5">
              <CheckCircle2 className="h-5 w-5 text-[#164A3D] shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <p className="font-medium text-foreground">
                  Your prospectus is ready, {firstName}.
                </p>
                <p className="text-sm text-muted-foreground">
                  A copy for <span className="text-foreground font-medium">{program}</span> ({intake}) has been prepared for <span className="font-mono text-xs">{email}</span>.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button onClick={triggerDownload} variant="default">
                <Download className="h-4 w-4" />
                Save Prospectus File
              </Button>
              <Button onClick={() => handleClose(false)} variant="outline">
                Return to Website
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2" noValidate>
            <div className="space-y-1.5">
              <label htmlFor="brochure-program" className="text-xs font-medium text-foreground">
                Program of Interest
              </label>
              <Select value={program} onValueChange={setProgram}>
                <SelectTrigger id="brochure-program">
                  <SelectValue placeholder="Select a program" />
                </SelectTrigger>
                <SelectContent>
                  {PROGRAMS.map((p) => (
                    <SelectItem key={p.slug} value={p.title}>
                      {p.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="brochure-first" className="text-xs font-medium text-foreground">
                  First Name *
                </label>
                <Input
                  id="brochure-first"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Camille"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="brochure-last" className="text-xs font-medium text-foreground">
                  Last Name *
                </label>
                <Input
                  id="brochure-last"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Laurent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="brochure-email" className="text-xs font-medium text-foreground">
                  Email Address *
                </label>
                <Input
                  id="brochure-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="camille.laurent@email.com"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="brochure-intake" className="text-xs font-medium text-foreground">
                  Target Intake
                </label>
                <Select value={intake} onValueChange={setIntake}>
                  <SelectTrigger id="brochure-intake">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="January 2027">January 2027</SelectItem>
                    <SelectItem value="September 2027">September 2027</SelectItem>
                    <SelectItem value="September 2028">September 2028</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {error && (
              <p className="text-xs font-medium text-destructive" role="alert">
                {error}
              </p>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => handleClose(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="default">
                Access Brochure
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function ApplicationDialog() {
  const { applyOpen, applyProgram, closeApply } = useModals();
  const [step, setStep] = useState<1 | 2>(1);
  const [program, setProgram] = useState(applyProgram);
  const [campus, setCampus] = useState('Lyon — PBS Paris Campus');
  const [intake, setIntake] = useState('September 2027');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [nationality, setNationality] = useState('');
  const [education, setEducation] = useState('Undergraduate Degree (Bachelor)');
  const [statement, setStatement] = useState('');
  const [error, setError] = useState('');
  const [submittedRef, setSubmittedRef] = useState('');

  useEffect(() => {
    setProgram(applyProgram);
  }, [applyProgram]);

  const handleClose = (open: boolean) => {
    if (!open) {
      closeApply();
      setTimeout(() => {
        setStep(1);
        setSubmittedRef('');
        setError('');
      }, 200);
    }
  };

  const handleNext = () => {
    if (!fullName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !nationality.trim()) {
      setError('Please complete your full name, valid email address, and nationality.');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (statement.trim().length < 20) {
      setError('Please share a brief academic motivation statement (at least 20 characters).');
      return;
    }
    setError('');
    const code = `PBS-2027-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedRef(code);
  };

  return (
    <Dialog open={applyOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <p className="text-xs font-medium tracking-wider uppercase text-accent">
            PBS Admissions Portal · Step {submittedRef ? 'Complete' : `${step} of 2`}
          </p>
          <DialogTitle>Start Your Online Application</DialogTitle>
          <DialogDescription>
            Initiate your candidate dossier for the Admissions Jury. Our international advisors review every file within five working days.
          </DialogDescription>
        </DialogHeader>

        {submittedRef ? (
          <div className="space-y-5 py-4">
            <div className="rounded-md border border-border bg-background p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[#164A3D] font-medium">
                <CheckCircle2 className="h-5 w-5" />
                <span>Candidate Dossier Initiated</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Thank you, <span className="text-foreground font-medium">{fullName}</span>. Your application file for{' '}
                <span className="text-foreground font-medium">{program}</span> ({intake} · {campus}) has been registered.
              </p>
              <div className="pt-2 border-t border-border flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-muted-foreground">Reference Number</span>
                <span className="font-mono font-medium text-foreground tabular-nums">{submittedRef}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Next step: You will receive secure document upload instructions at <span className="font-mono text-foreground">{email}</span> to attach your transcripts, CV, and language certificate prior to scheduling your jury interview.
            </p>
            <div className="flex justify-end">
              <Button onClick={() => handleClose(false)}>Done</Button>
            </div>
          </div>
        ) : step === 1 ? (
          <div className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <label htmlFor="apply-program" className="text-xs font-medium text-foreground">
                Target Program
              </label>
              <Select value={program} onValueChange={setProgram}>
                <SelectTrigger id="apply-program">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PROGRAMS.map((p) => (
                    <SelectItem key={p.slug} value={p.title}>
                      {p.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="apply-campus" className="text-xs font-medium text-foreground">
                  Preferred Campus
                </label>
                <Select value={campus} onValueChange={setCampus}>
                  <SelectTrigger id="apply-campus">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Paris — Latin Quarter Campus">Paris — Latin Quarter Campus</SelectItem>
                    <SelectItem value="Paris — Executive Hub">Paris — Executive Hub</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="apply-intake" className="text-xs font-medium text-foreground">
                  Desired Intake
                </label>
                <Select value={intake} onValueChange={setIntake}>
                  <SelectTrigger id="apply-intake">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="January 2027">January 2027</SelectItem>
                    <SelectItem value="September 2027">September 2027</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="apply-name" className="text-xs font-medium text-foreground">
                  Full Name *
                </label>
                <Input
                  id="apply-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Elena Rostova"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="apply-email" className="text-xs font-medium text-foreground">
                  Email Address *
                </label>
                <Input
                  id="apply-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="elena.rostova@email.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="apply-nationality" className="text-xs font-medium text-foreground">
                Country of Citizenship *
              </label>
              <Input
                id="apply-nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                placeholder="France, Switzerland, Germany, India..."
              />
            </div>

            {error && (
              <p className="text-xs font-medium text-destructive" role="alert">
                {error}
              </p>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => handleClose(false)}>
                Cancel
              </Button>
              <Button type="button" onClick={handleNext}>
                Continue to Academic Profile
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2" noValidate>
            <div className="space-y-1.5">
              <label htmlFor="apply-education" className="text-xs font-medium text-foreground">
                Highest Completed or Current Qualification
              </label>
              <Select value={education} onValueChange={setEducation}>
                <SelectTrigger id="apply-education">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="High School Diploma / IB / A-Levels">
                    High School Diploma / IB / A-Levels
                  </SelectItem>
                  <SelectItem value="Undergraduate Degree (Bachelor)">
                    Undergraduate Degree (Bachelor)
                  </SelectItem>
                  <SelectItem value="Master Degree">
                    Master Degree
                  </SelectItem>
                  <SelectItem value="Executive / 5+ Years Leadership Experience">
                    Executive / 5+ Years Leadership Experience
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="apply-statement" className="text-xs font-medium text-foreground">
                Brief Academic &amp; Career Objective *
              </label>
              <textarea
                id="apply-statement"
                rows={4}
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                placeholder="Share your academic background, target specialization, and professional goals..."
                className="flex w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            {error && (
              <p className="text-xs font-medium text-destructive" role="alert">
                {error}
              </p>
            )}

            <div className="flex items-center justify-between gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button type="submit" variant="accent">
                Submit Candidate Dossier
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function EventRsvpDialog() {
  const { eventOpen, selectedEvent, closeEventRsvp } = useModals();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('1 Attendee');
  const [error, setError] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleClose = (open: boolean) => {
    if (!open) {
      closeEventRsvp();
      setTimeout(() => {
        setConfirmed(false);
        setError('');
      }, 200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter your name and a valid email address.');
      return;
    }
    setError('');
    setConfirmed(true);
  };

  if (!selectedEvent) return null;

  return (
    <Dialog open={eventOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <p className="text-xs font-medium tracking-wider uppercase text-accent">
            {selectedEvent.type} Registration
          </p>
          <DialogTitle>{selectedEvent.title}</DialogTitle>
          <DialogDescription>
            <span className="inline-flex items-center gap-1.5 mr-4">
              <Calendar className="h-3.5 w-3.5" />
              {selectedEvent.date} · {selectedEvent.time}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {selectedEvent.location}
            </span>
          </DialogDescription>
        </DialogHeader>

        {confirmed ? (
          <div className="space-y-4 py-3">
            <div className="flex items-start gap-3 rounded-md border border-border bg-background p-4">
              <CheckCircle2 className="h-5 w-5 text-[#164A3D] shrink-0 mt-0.5" />
              <div className="space-y-1 text-sm">
                <p className="font-medium text-foreground">Seat Confirmed for {name}</p>
                <p className="text-muted-foreground">
                  Your calendar invitation and campus access pass ({guests}) have been sent to{' '}
                  <span className="font-mono text-xs text-foreground">{email}</span>.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => handleClose(false)}>Close</Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2" noValidate>
            <div className="space-y-1.5">
              <label htmlFor="rsvp-name" className="text-xs font-medium text-foreground">
                Full Name *
              </label>
              <Input
                id="rsvp-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Lucas Moreau"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="rsvp-email" className="text-xs font-medium text-foreground">
                Email Address *
              </label>
              <Input
                id="rsvp-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="lucas.moreau@email.com"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="rsvp-guests" className="text-xs font-medium text-foreground">
                Attendance
              </label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger id="rsvp-guests">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1 Attendee">1 Attendee</SelectItem>
                  <SelectItem value="2 Attendees (with family/guest)">2 Attendees (with family/guest)</SelectItem>
                  <SelectItem value="Online Livestream">Online Livestream</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {error && (
              <p className="text-xs font-medium text-destructive" role="alert">
                {error}
              </p>
            )}
            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => handleClose(false)}>
                Cancel
              </Button>
              <Button type="submit">Confirm Registration</Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
