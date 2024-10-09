import React from "react";
import "./about.css";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const About = () => {
  const visitGithub = () => {
    window.location = "https://github.com/virendrap1516";
  };
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient">
        <div className="aboutSectionContainer" >
          <h1>About Me</h1>

          <div>
            <div >
              <img
                style={{ width: "10vmax", height: "14vmax", margin: "1vmax 0", borderRadius: "50px" }}
                src="https://res.cloudinary.com/dbvvkn9tm/image/upload/c_crop,w_638,h_850,ar_3:4/v1728386579/IMG-20220508-WA0000_cqt1mh.jpg"
                alt="Founder"
              />
              <h2 style={{ color: "black" }}>Virendra Pawar</h2>
              <button onClick={visitGithub} style={{ color: "black" }}>
                  Developer
              </button>
              <span style={{ fontFamily: "cursive" }}>
                Hello World !!!! this website is all about fetching data from gnews.io testing the api using postman then creating whole app's frontend as well as backend. Frontend tech stacks includes "ReactJs", "TailwindCss",  & "Bootstrap". Backend inlcudes "NodeJs", "ExpressJs", "CORS", "axios" and for hosting used "Firebase" , made by @Virendra Pawar. You can vist my github for
                sourcecode..!
              </span>
            </div>
            <div className="aboutSectionContainer2">

              <div style={{ marginTop: "20px", marginBottom: "25px", }}>
                <h2 style={{ textAlign: "center", color: "black" }}>
                  "Something About Me"
                </h2>
                <p style={{ color: "black", fontFamily: "cursive" }}>
                  "I'm a passionate Frontend Developer with a keen interest in exploring Fullstack MERN (MongoDB, Express.js, React.js, Node.js) development. My journey in the tech world began with a fascination for creating beautiful user interfaces, and it has since evolved into a quest to build robust, scalable applications that solve real-world problems"
                </p>
              </div>
              <div>

                <a
                  href="https://www.linkedin.com/in/virendra-pawar-0b0483299/"
                  target="blank"
                  style={{ color: "black" }}
                >
                  LinkedIn
                </a>
                <span>{" "}</span>
                <span>{"|"}</span>
                <span>{" "}</span>
                <a href="https://github.com/virendrap1516" style={{ color: "black" }} target="blank">
                  Github
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
