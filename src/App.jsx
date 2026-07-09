import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Languages from './pages/Languages';
import LanguageDetails from './pages/LanguageDetails';

import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Messages from './pages/admin/Messages';
import Settings from './pages/admin/Settings';
import AdminLanguages from './pages/admin/Languages';
import Lessons from './pages/admin/Lessons';
import Pricing from './pages/admin/Pricing';

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <Routes>
      {/* Public Pages with Navbar & Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/languages/:slug" element={<LanguageDetails />} />
      </Route>

      {/* Admin Login (No Layout) */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin Pages with Sidebar Layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="languages" element={<AdminLanguages />} />
        <Route path="lessons" element={<Lessons />} />
        <Route path="users" element={<Users />} />
        <Route path="messages" element={<Messages />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
