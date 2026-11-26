import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useModals } from '@/src/context/ModalContext';

export function Footer() {
  const { openApply } = useModals();

  return (
    <footer className="bg-[#0F2B24] text-white">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        {/* Top Tagline Band */}
        <div className="pb-10 mb-10 border-b border-white/15 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            <p className="text-white">Connect disciplines,</p>
            <p className="text-[#E8A782]">shape a better future</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openApply()}
              className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#a64d1e] transition-colors cursor-pointer"
            >
              <span>Apply online</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 3-Column Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Col 1: Brand, Status, Address, Phone, Access map */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="inline-flex h-9 px-2.5 items-center justify-center bg-white font-display text-sm font-extrabold tracking-wider text-[#0F2B24] border-b-2 border-[#C25E28]">
                PBS
              </span>
              <span className="font-display text-lg font-bold text-white">
                Paris Business School
              </span>
            </Link>
            <div className="space-y-1.5 text-sm text-white/80 leading-relaxed">
              <p>Private higher education establishment</p>
              <p>24 Sorbonne Street, 75005 Paris, France</p>
              <p className="font-mono text-xs text-white/90 tabular-nums">+33 (0)1 53 36 44 00</p>
              <Link
                to="/campus-life"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8A782] hover:text-white pt-1"
              >
                <span>→ Access map &amp; campuses</span>
              </Link>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-display text-base font-bold text-white">Quick Links</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-white/80">
              <li><Link to="/international" className="hover:text-[#E8A782] transition-colors">10 reasons to study in France</Link></li>
              <li><Link to="/school#accreditations" className="hover:text-[#E8A782] transition-colors">Accreditations</Link></li>
              <li><Link to="/admissions" className="hover:text-[#E8A782] transition-colors">Admissions</Link></li>
              <li><Link to="/admissions" className="hover:text-[#E8A782] transition-colors">Admissions to PBS</Link></li>
              <li><Link to="/admissions" className="hover:text-[#E8A782] transition-colors">Entrance Examinations</Link></li>
              <li><Link to="/programs" className="hover:text-[#E8A782] transition-colors">MBA / MSc in Management</Link></li>
              <li><Link to="/programs/master-in-management" className="hover:text-[#E8A782] transition-colors">Master in Management</Link></li>
              <li><Link to="/school#accreditations" className="hover:text-[#E8A782] transition-colors">Rankings</Link></li>
            </ul>
          </div>

          {/* Col 3: Accreditations & Institutional Notice */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-display text-base font-bold text-white">Accreditations</h3>
            <div className="grid grid-cols-4 gap-2 text-center">
              {['EQUIS', 'AACSB', 'AMBA', 'CGE'].map((label) => (
                <div
                  key={label}
                  className="border border-white/25 bg-white/5 py-2.5 font-mono text-xs font-semibold tracking-wider text-white"
                >
                  {label}
                </div>
              ))}
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              PBS (Paris Business School) is an independent European Higher Education Institution holding full national quality certification for degree and corporate work-study training.
            </p>
          </div>
        </div>

        {/* Bottom Legal Notice Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/65">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/school" className="hover:text-white transition-colors">
              Legal Notice &amp; Accessibility
            </Link>
            <span>Accessibility: compliant</span>
            <Link to="/school#accreditations" className="hover:text-white transition-colors">
              Quality &amp; Data Protection
            </Link>
          </div>
          <p>© {new Date().getFullYear()} PBS — Paris Business School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
