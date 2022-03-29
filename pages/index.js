import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import MDList from "../components/MDList";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const Index = ({ allMD }) => {
  return (
    <Layout>
      <div className="container">
        <main>
          <section id="projects">
            <h3 className="title">PROJECTS</h3>
            <div className="project-container">
            <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <a 
                      href="https://the-alayna-obsession.herokuapp.com/"
                      target="_blank">
                      <img
                      src="/images/the_alayna_obsession.png"
                      class="card-img"
                      alt="The Alayna Obsession"
                      />
                    </a> 
                    <h5>click image to visit site</h5>
                  </div>
                  <div class="col-md-6 project-image">
                    <div class="card-body">
                      <div>
                        <h3 class="card-title">The Alayna Obsession</h3>
                        <p class="card-text">
                        The Alayna Obsession is a project built to showcase front-end design and mobile responsiveness. This project has many features like a slideshow, modals, and a hamburger responsive navbar, all done in React, and vanilla CSS. 
                        </p>
                      </div>
                      <hr />
                      <div className="tech-used">
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/html-5.png" />
                          <p>HTML 5</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/javascript.png" />
                          <p>JavaScript</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/react-native.png" />
                          <p>React</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/css3.png" />
                          <p>CSS 3</p>
                        </div>
                      </div>
                      <hr />
                      <div className="github-live-links">
                        <a
                          href="https://github.com/JGore99/alayna-obsessed"
                          target="_blank">
                          <i class="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <a 
                      href="https://the-vinyl-project.herokuapp.com/"
                      target="_blank">
                      <img
                      src="/images/the_vinyl_project.png"
                      class="card-img"
                      alt="The Vinyl Project"
                      />
                    </a> 
                    <h5>click image to visit site</h5>
                  </div>
                  <div class="col-md-6 project-image">
                    <div class="card-body">
                      <div>
                        <h3 class="card-title">The Vinyl Project</h3>
                        <p class="card-text">
                        The Vinyl Project is a full CRUD, MEN stack application utilizing the Discogs music API. This social media application creates a place for record collectors to find, favorite, and share their albums. Thanks to the API, users can see album covers and tracklists for an enhanced experience. Users can leave comments and recommendations for followers to see.
                        </p>
                      </div>
                      <hr />
                      <div className="tech-used">
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/javascript.png" />
                          <p>JavaScript</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/css3.png" />
                          <p>CSS3</p>
                        </div>
                        <div className="card-skill">
                          <i class="devicon-express-original colored"></i>
                          <p>Express</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/mongodb.png" />
                          <p>MongoDB</p>
                        </div>
                        <div className="card-skill">
                          <i class="devicon-nodejs-plain colored"></i>
                          <p>Node.js</p>
                      </div>
                      <div className="card-skill">
                      <img src="https://img.icons8.com/color/60/000000/google-logo.png" />
                          <p>Google OAuth2</p>
                      </div>
                      </div>
                      <hr />
                      <div className="github-live-links">
                        <a
                          href="https://github.com/JGore99/vinyl-project"
                          target="_blank">
                          <i class="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="card mb-4">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <a 
                      href="https://jgore99.github.io/connect-four/"
                      target="_blank">
                      <img
                        src="/images/connect_four_01.png"
                        class="card-img"
                        alt="Connect Four"
                      />
                    </a> 
                    <h5>click image to visit site</h5>
                  </div>
                  <div class="col-md-6 project-image">
                    <div class="card-body">
                      <div>
                        <h3 class="card-title">Connect Four</h3>
                        <p class="card-text">A browser based version of the classic game Connect Four. Designed to mimic the box art from the 1980s, to invoke feelings of nostalgia from playing this game as a child!</p>
                      </div>
                      <hr />
                      <div className="tech-used">
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/html-5.png"/>
                          <p>HTML 5</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/javascript.png" />
                          <p>JavaScript</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/css3.png"/>
                          <p>CSS 3</p>
                        </div>
                      </div>
                      <hr />
                      <div className="github-live-links">
                        <a
                          href="https://github.com/JGore99/connect-four"
                          target="_blank">
                          <i class="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <a 
                      href="https:/invibe-cocktail-guide.herokuapp.com/"
                      target="_blank">
                      <img
                      src="/images/invibe.png"
                      class="card-img"
                      alt="InVibe"
                    />
                    </a> 
                    <h5>click image to visit site</h5>
                  </div>
                  <div class="col-md-6 project-image">
                    <div class="card-body">
                      <div>
                        <h3 class="card-title">InVibe</h3>
                        <p class="card-text">
                        Invibe is a full-stack application that helps users explore cocktail bar options based on a location. Wether traveling to a new place, or just seeing what is nearby, Invibe uses the Yelp API to provide users with details and photos of the most popular cocktail bars. Users can pin bars to their profile, and then add comments, and reviews for others to see. Users can also follow friends to see their activity in the app.
                        </p>
                      </div>
                      <hr />
                      <div className="tech-used">
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/html-5.png" />
                          <p>HTML 5</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/javascript.png" />
                          <p>JavaScript</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/react-native.png" />
                          <p>React</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/css3.png" />
                          <p>CSS 3</p>
                        </div>
                        <div className="card-skill">
                          <i class="devicon-express-original colored"></i>
                          <p>Express</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/mongodb.png" />
                          <p>MongoDB</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/java-web-token.png" />
                          <p>JWT Token</p>
                        </div>
                      </div>
                      <hr />
                      <div className="github-live-links">
                        <a
                          href="https://github.com/JGore99/invibe"
                          target="_blank">
                          <i class="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <a 
                      href="https://the-project-manager-01.herokuapp.com"
                      target="_blank">
                      <img
                      src="/images/the_project_manager.png"
                      class="card-img"
                      alt="The Project Manager"
                      />
                    </a> 
                    <h5>click image to visit site</h5>
                  </div>
                  <div class="col-md-6 project-image">
                    <div class="card-body">
                      <div>
                        <h3 class="card-title">The Project Manager</h3>
                        <p class="card-text">
                          The Project Manager is a task management, to do application. Users can create, edit, delete, and track projects. They can add specific tasks to each project, assign priority levels to those task, and mark them complete when ready. 
                        </p>
                      </div>
                      <hr />
                      <div className="tech-used">
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/html-5.png" />
                          <p>HTML 5</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/css3.png" />
                          <p>CSS 3</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/javascript.png" />
                          <p>JavaScript</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/python.png" />
                          <p>Python</p>
                        </div>
                        <div className="card-skill">
                        <img src="https://img.icons8.com/color/60/000000/django.png" />
                          <p>Django</p>
                        </div>
                        <div className="card-skill">
                        <img src="https://img.icons8.com/color/60/000000/postgreesql.png" />
                          <p>PostgreSQL</p>
                        </div>
                      </div>
                      <hr />
                      <div className="github-live-links">
                        <a
                          href="https://github.com/JGore99/The-Project-Manager"
                          target="_blank">
                          <i class="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section id="skills">
            <h3 className="title">SKILLS</h3>
            <div className="skills-container">
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/html-5.png" />
                <p>HTML 5</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/css3.png" />
                <p>CSS 3</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/javascript.png" />
                <p>JavaScript</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/fluency/72/000000/python.png" />
                <p>Python</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/react-native.png" />
                <p>React</p>
              </div>
              <div className="skill">
              <img src="https://img.icons8.com/color/72/000000/bootstrap.png"/>
                <p>Bootstrap</p>
              </div>
              <div className="skill">
                <i class="devicon-nodejs-plain colored"></i>
                <p>Node.js</p>
              </div>
              <div className="skill">
                <i id="git" class="devicon-git-plain-wordmark colored"></i>
                <p>git</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/mongodb.png" />
                <p>MongoDB</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/postgreesql.png" />
                <p>PostgreSQL</p>
              </div>
              <div className="skill">
              <img className="skill-drk" src="https://img.icons8.com/ios/72/000000/django.png"/>
                <p>Django</p>
              </div>
              <div className="skill">
                <i class="devicon-express-original colored"></i>
                <p>Express</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/java-web-token.png" />
                <p>JWT Token</p>
              </div>
              <div className="skill">
                <img src="https://img.icons8.com/color/72/000000/google-logo.png" />
                <p>Google OAuth2</p>
              </div>
            </div>
          </section>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const allMD = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../markdown", true, /\.md$/));

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      allMD,
    },
  };
}

// npm run dev