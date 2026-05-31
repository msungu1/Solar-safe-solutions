import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import Projects from '../pages/Projects';
import Gallery from '../pages/Gallery';
import Testimonials from '../pages/Testimonials';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';
import MainLayout from '../layouts/MainLayout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}
