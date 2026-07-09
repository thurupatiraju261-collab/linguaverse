import { useScrollReveal, useAnimatedCounters } from '../hooks/useAnimations';
import ContactBanner from '../components/contact/ContactBanner';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import FAQ from '../components/contact/FAQ';

export default function Contact() {
  useScrollReveal();
  useAnimatedCounters();
  return (
    <>
      <main id="main">
        <ContactBanner />
        <section className="section">
          <div className="container">
            <div className="grid contact-grid">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
        <FAQ />
      </main>
    </>
  );
}
