const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-grid">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="nav-details">
              <a className="navbar-brand" href="/">
                Jeff Gore
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="#about">
                      About Me
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#skills">
                      Skills
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link" href="/blog">
                      Blog
                    </a>
                  </li> */}
                  <li class="nav-item">
                    <a class="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div id="profile-img">
            <img src="/images/portrait-02.png" alt="profile_pic" />
          </div>
          <div className="bio-card">
              <h1 className="card-title">Jeff Gore</h1>
              <h4>Full Stack Developer</h4>  
              <h3 id="about-me-text" className="card-text">
              Having recently completed a 15 week software engineering intensive, I am eager to pair my background in architectural design engineering, project management, and art with my newly developed software engineering skills. With a strong work ethic that has often been noticed, and compliment throughout my career, an ability to work well with others, and refined sense of both time, and project management, I look forward to developing into an asset to my next team.
              </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
