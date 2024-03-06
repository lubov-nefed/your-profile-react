function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <small className="footer__copyright">Copyright © 2022</small>
        <small className="footer-contacts__text">
          Created by{" "}
          <a
            className="footer-contacts__gh-link"
            href="https://github.com/lubov-nefed"
          >
            Lubov Nefed
          </a>
        </small>
        <div className="footer__links">
          <a
            className="footer-contacts__link"
            href="https://lubov-nefed.github.io/rsschool-cv/"
          >
            <img
              className="footer-contacts__img footer-contacts__cv"
              srcSet=""
              sizes=""
              src="https://raw.githubusercontent.com/lubov-nefed/your-profile/main/images/linkedin-icon.svg"
              alt="Go to cv webpage"
            />
          </a>
          <a
            className="footer-contacts__link"
            href="https://linkedin.com/in/lubov-nefed"
          >
            <img
              className="footer-contacts__img footer-contacts__linkedIn"
              src="https://raw.githubusercontent.com/lubov-nefed/your-profile/main/images/cv-icon-31w.svg"
              alt="Go to cv webpage"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
