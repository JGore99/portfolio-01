const Footer = () => {
  return (
    <footer>
      <div id="contact-info">
            <h3 className="contact">CONTACT:</h3>
              <a
                href="https://www.linkedin.com/in/jeffgore77/"
                target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/JGore99" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <div class="email-container"
                style={{
                  fontSize: "0.82rem",
                }}>
                <i class="far fa-envelope">: </i>
                <h5 class="email">JefGore@gmail.com</h5>
              </div>
          </div>
      <p class="footer-text">© 2022 Jeffrey Gore. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
