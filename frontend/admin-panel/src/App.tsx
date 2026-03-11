import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import EditionForm from './pages/EditionForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="edition/new" element={<EditionForm />} />
          <Route path="edition/edit/:id" element={<EditionForm />} />
          <Route path="archived" element={<Dashboard />} /> {/* Filter logic can be added later */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
