import "./Pages.css";

function Contact() {
  return (
    <section className="contact-page">
      <h1 className="page-heading">Contact</h1>

      <p className="contact-email-text">
        I'm always open to hearing from fellow developers, designers, and
        players. Whether you have a question, an idea, or just want to talk
        about games, feel free to reach out.
      </p>

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

        <a
          href="https://x.com/your-username"
          className="about-btn"
          target="_blank"
          rel="noreferrer"
        >
          X <span>→</span>
        </a>
      </div>

      <p className="contact-email-text">
        You can reach me about collaborations, game jams, prototypes, feedback
        on my games, or any project you'd like to build together. Feedback from
        players is especially welcome, since it helps me improve every release.
      </p>

      <p className="contact-email-text">
        My latest games and updates are available through the links above. For
        anything else, send me an email with a few details about what you have
        in mind, and I'll get back to you as soon as I can.
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