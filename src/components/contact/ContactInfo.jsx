export default function ContactInfo() {
  return (
    <div className="reveal">
      <div className="contact-info-list">
        <div className="contact-info-item">
          <div className="icon-wrap info-card" style={{ padding: '0' }}><i className="fa-solid fa-location-dot"></i></div>
          <div>
            <h4>Our Office</h4>
            <p>Lawyerpet,Ongole,Andhra Pradesh, Pin:523001, India</p>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="icon-wrap info-card" style={{ padding: '0' }}><i className="fa-solid fa-envelope"></i></div>
          <div>
            <h4>Email Us</h4>
            <p>thurupatiraju261@gmail.com</p>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="icon-wrap info-card" style={{ padding: '0' }}><i className="fa-solid fa-phone"></i></div>
          <div>
            <h4>Call Us</h4>
            <p>+91 8008385330</p>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="icon-wrap info-card" style={{ padding: '0' }}><i className="fa-solid fa-clock"></i></div>
          <div>
            <h4>Working Hours</h4>
            <p>Mon — Fri: 9:00 AM — 6:00 PM IST<br />Sat: 10:00 AM — 2:00 PM IST</p>
          </div>
        </div>
      </div>

      <div className="map-container" style={{ marginTop: 'var(--space-md)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15345.22!2d79.8440!3d15.5057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb459a3f0e7e2f1%3A0x4a3b1e6e7c8f9d0a!2sLawyerpet%2C%20Ongole%2C%20Andhra%20Pradesh%20523001!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: '0', display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="LinguaVerse Office Location — Lawyerpet, Ongole, Andhra Pradesh">
        </iframe>
      </div>
    </div>
  );
}
