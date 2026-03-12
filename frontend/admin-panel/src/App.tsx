import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import AddEdition from './pages/AddEdition';
import EditEdition from './pages/EditEdition';
import ArchivedEditions from './pages/ArchivedEditions';
import LoginPage from './pages/LoginPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="edition/new" element={<AddEdition />} />
          <Route path="edition/edit/:id" element={<EditEdition />} />
          <Route path="editions/edit" element={<EditEdition />} />
          <Route path="archived" element={<ArchivedEditions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
