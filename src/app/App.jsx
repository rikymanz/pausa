import { Route, Routes } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell.jsx';
import { CheckInPlaceholder } from '../features/checkin/CheckInPlaceholder.jsx';
import { HomePage } from '../features/home/HomePage.jsx';
import { NotFoundPage } from './NotFoundPage.jsx';

export function App() {
  return (
    <AppShell>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="check-in" element={<CheckInPlaceholder />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppShell>
  );
}
