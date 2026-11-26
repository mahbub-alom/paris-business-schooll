import { useState } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useModals } from '@/src/context/ModalContext';
import { UPCOMING_EVENTS, type SchoolEvent } from '@/src/data/schoolData';

const EVENT_TYPES: Array<'All' | SchoolEvent['type']> = [
  'All',
  'Open Day',
  'Webinar',
  'Masterclass',
  'Career Forum',
];

export function EventsPage() {
  const { openEventRsvp, openBrochure } = useModals();
  const [selectedType, setSelectedType] = useState<'All' | SchoolEvent['type']>('All');

  const filteredEvents =
    selectedType === 'All'
      ? UPCOMING_EVENTS
      : UPCOMING_EVENTS.filter((e) => e.type === selectedType);

  return (
    <div>
      {/* Header Band */}
      <section className="bg-[#0F2B24] text-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8A782]">
            Institutional Calendar · 2026–2027
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight max-w-3xl">
            Open Days, Live Webinars, Masterclasses &amp; Career Forums
          </h1>
          <p className="text-base text-[#D4DDD9] leading-relaxed max-w-2xl">
            Experience PBS classrooms firsthand in Paris, or join our admissions directors and faculty online from anywhere in the world.
          </p>
        </div>
      </section>

      {/* Filter & Schedule */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
            <div className="flex flex-wrap items-center gap-1.5 bg-secondary p-1 rounded-md">
              {EVENT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-sm whitespace-nowrap transition-colors cursor-pointer ${
                    selectedType === type
                      ? 'bg-card text-foreground shadow-xs'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {type === 'All' ? `All Events (${UPCOMING_EVENTS.length})` : type}
                </button>
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={() => openBrochure()}>
              Request Admissions Brochure
            </Button>
          </div>

          <div className="divide-y divide-border border-t border-b border-border bg-card">
            {filteredEvents.map((evt) => (
              <article
                key={evt.id}
                className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start lg:items-center"
              >
                <div className="lg:col-span-3 space-y-1.5">
                  <p className="font-mono text-base font-medium text-foreground tabular-nums">
                    {evt.date}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden="true" />
                    <span>{evt.time}</span>
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden="true" />
                    <span>{evt.location}</span>
                  </p>
                </div>

                <div className="lg:col-span-6 space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">
                    {evt.type}
                  </p>
                  <h2 className="font-serif text-2xl font-medium text-foreground leading-snug">
                    {evt.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {evt.description}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5 pt-1">
                    <Users className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>Audience: {evt.audience}</span>
                  </p>
                </div>

                <div className="lg:col-span-3 flex lg:justify-end">
                  <Button variant="default" onClick={() => openEventRsvp(evt)}>
                    Register Now
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
