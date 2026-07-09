export default function ContactForm() {
  return (
    <div className="reveal">
      <form action="https://api.web3forms.com/submit" method="POST" className="contact-form" id="contactForm" noValidate>
        <input type="hidden" name="access_key" value="3cc99315-1366-4015-b7ec-82e05e33e696" />
        <h3 style={{ marginBottom: 'var(--space-md)' }}>Send us a message</h3>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Tell us more..." required></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Send Message <i
            className="fa-solid fa-paper-plane"></i></button>
        <p className="form-status" role="status"></p>
      </form>
    </div>
  );
}
