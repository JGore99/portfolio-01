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
              <div class="card mb-4">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img
                      src="/images/connect_four_01.png"
                      class="card-img"
                      alt="Connect Four"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <div>
                        <h3 class="card-title">Connect Four</h3>
                        <p class="card-text">A browser based version of the classic game Connect Four. Designed to mimmic the box art from the 1980s, and to invoke the feelings and memories of playing this game as a child!</p>
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
                        <a
                          href="https://jgore99.github.io/connect-four/"
                          target="_blank">
                          <i class="fas fa-globe-americas"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img
                      src="/images/the_vinyl_project.png"
                      class="card-img"
                      alt="The Vinyl Project"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <div>
                        <h3 class="card-title">The Vinyl Project</h3>
                        <p class="card-text">
                        The Vinyl Project utilizes the Discogs API to create a full stack, social media application, focused on record collecting. Once users have created an account, they can search for, and add records to their collections. They can see track lists, and album art, thanks to the API. Users can leave comments and recommendations about records, and follow other user, to see what records they are collecting and enjoying. 
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
                        <a
                          href="https://the-vinyl-project.herokuapp.com/"
                          target="_blank">
                          <i class="fas fa-globe-americas"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img
                      src="/images/my_pantry_app.png"
                      class="card-img"
                      alt="MyPantry"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <div>
                        <h3 class="card-title">MyPantry</h3>
                        <p class="card-text">
                          Inventory your grocery items in your home and generate
                          a grocery list
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
                          <i class="devicon-express-original colored"></i>
                          <p>Express</p>
                        </div>
                        <div className="card-skill">
                          <img src="https://img.icons8.com/color/60/000000/mongodb.png" />
                          <p>MongoDB</p>
                        </div>
                      </div>
                      <hr />
                      <div className="github-live-links">
                        <a
                          href="https://github.com/jseckman90/MyPantry"
                          target="_blank">
                          <i class="fab fa-github"></i>
                        </a>
                        <a
                          href="https://jszenproject2.herokuapp.com/"
                          target="_blank">
                          <i class="fas fa-globe-americas"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img
                      src="/images/msmh_app.png"
                      class="card-img"
                      alt="Marvel Studios Movie Hub"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <div>
                        <h3 class="card-title">Marvel Studios Movie Hub</h3>
                        <p class="card-text">
                          Jump in and learn about the Marvel Cinematic Universe
                          films{" "}
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
                          <img src="https://img.icons8.com/ios-filled/60/000000/jquery.png" />
                          <p>jQuery</p>
                        </div>
                      </div>
                      <hr />
                      <div className="github-live-links">
                        <a
                          href="https://github.com/jseckman90/Marvel-Studios-Movie-Hub"
                          target="_blank">
                          <i class="fab fa-github"></i>
                        </a>
                        <a
                          href="https://marvelstudiosmoviehub-orcin.vercel.app/"
                          target="_blank">
                          <i class="fas fa-globe-americas"></i>
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

          <hr />
          </section>
          <section id="contact-info">
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
