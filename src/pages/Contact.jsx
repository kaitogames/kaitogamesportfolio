import "./Pages.css";

function Contact() {
  return (
    <section className="contact-page">
      <h1 className="page-heading">Contact</h1>

      <div className="contact-buttons">
        <a
          href="https://github.com/kaitogames"
          className="about-btn"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span>→</span>
        </a>

        <a
          href="https://gamesbykaito.itch.io"
          className="about-btn"
          target="_blank"
          rel="noreferrer"
        >
          itch.io <span>→</span>
        </a>
      </div>

      <p className="contact-email-text">
        If you want to email me, feel free to reach out at
      </p>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=kaitogames789@gmail.com"
        className="contact-email"
        target="_blank"
        rel="noreferrer"
      >
        kaitogames789@gmail.com
      </a>
    </section>
  );
}

export default Contact;