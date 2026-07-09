export default function FAQ() {
  return (
    <section className="section section-alt">
      <div className="container" style={{ maxWidth: '760px' }}>
        <div className="section-header reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list reveal">
          <div className="faq-item">
            <button className="faq-question" aria-expanded="false" aria-controls="faq-1">Is the Starter plan really free forever? <i
                className="fa-solid fa-plus"></i></button>
            <div className="faq-answer" id="faq-1">
              <p>Yes — the Starter plan has no time limit and no credit card required. You can upgrade to Pro whenever
                you're ready for full access.</p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" aria-expanded="false" aria-controls="faq-2">Can I switch between languages? <i className="fa-solid fa-plus"></i></button>
            <div className="faq-answer" id="faq-2">
              <p>Pro and Lifetime members get unlimited access to all six languages and can switch anytime from their
                dashboard.</p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" aria-expanded="false" aria-controls="faq-3">Do you offer refunds? <i className="fa-solid fa-plus"></i></button>
            <div className="faq-answer" id="faq-3">
              <p>Yes, we offer a 14-day money-back guarantee on all paid plans — just reach out to our support team.</p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" aria-expanded="false" aria-controls="faq-4">Is there a mobile app? <i className="fa-solid fa-plus"></i></button>
            <div className="faq-answer" id="faq-4">
              <p>LinguaVerse is fully responsive and works great in any mobile browser, with a dedicated app on our
                roadmap.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
