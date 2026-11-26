import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ModalProvider } from '@/src/context/ModalContext';
import { Layout } from '@/src/components/layout/Layout';
import { HomePage } from '@/src/pages/HomePage';
import { SchoolPage } from '@/src/pages/SchoolPage';
import { ProgramsPage } from '@/src/pages/ProgramsPage';
import { ProgramDetailPage } from '@/src/pages/ProgramDetailPage';
import { AdmissionsPage } from '@/src/pages/AdmissionsPage';
import { InternationalPage } from '@/src/pages/InternationalPage';
import { ResearchPage } from '@/src/pages/ResearchPage';
import { CampusLifePage } from '@/src/pages/CampusLifePage';
import { EventsPage } from '@/src/pages/EventsPage';

export default function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/school" element={<SchoolPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:slug" element={<ProgramDetailPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/international" element={<InternationalPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/campus-life" element={<CampusLifePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </ModalProvider>
    </BrowserRouter>
  );
}
