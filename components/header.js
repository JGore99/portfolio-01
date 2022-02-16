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
                    <a class="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#skills">
                      Skills
                    </a>
                  </li>
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
              <h4>Software Engineer | Designer</h4>  
              <h3 id="about-me-text" className="card-text">
              A creative and hardworking software engineer with a background in architectural design, project management, and art. An effective leader and collaborator who enjoys problem-solving and developing clever/esthetically pleasing solutions.
              </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
