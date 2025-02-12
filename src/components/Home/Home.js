import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Lottie from "lottie-react";
import animation from "./animation.json";
import { Dropdown, DropdownButton } from "react-bootstrap";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaAws,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Home = () => {
  const skills = [
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Services", icon: <FaAws /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Python", icon: <FaPython /> },
  ];

  const styles = {
    skillIcon: {
      fontSize: "1.5rem",
      marginBottom: "4px",
    },

    dropdownItem: {
      display: "flex",
      alignItems: "center",
      fontSize: "1.1rem",
      color: "#1e3c56",
    },
  };

  return (
    <>
      <div className="cont container home_container pd-tp">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2 className="text-blue">Welcome to My Portfolio</h2>

            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>
              I'm an enthusiastic and aspiring developer who is passionate about
              technology and eager to learn and grow in the field of software
              development. My portfolio showcases my journey as a developer,
              highlighting my early projects and explorations.
            </p>

            <div className="d-flex btn_div mt-4">
              <a href="https://cvlite.netlify.app/" target="_blank">
                <Button variant="info" className="text-blue font resume hovr">
                  {" "}
                  Resume{" "}
                </Button>{" "}
              </a>

              <ButtonGroup
                className="soc-links"
                aria-label="Basic example"
                style={{ backgroundColor: "#1e3c56" }}
              >
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                  target="_blank"
                >
                  <Button
                    className="mylnks"
                    variant="secondary"
                    style={{ backgroundColor: "#1e3c56" }}
                  >
                    <i
                      className="fa-brands fa-g"
                      style={{ color: "white" }}
                    ></i>
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/maria-nayab-6bb4a0278/"
                  target="_blank"
                >
                  <Button
                    className="mylnks lnk-style"
                    variant="secondary"
                    style={{ backgroundColor: "#1e3c56" }}
                  >
                    <i
                      className="fa-brands fa-linkedin"
                      style={{ color: "white" }}
                    ></i>
                  </Button>
                </a>

                <a href="https://github.com/marianayab" target="_blank">
                  <Button
                    className="mylnks"
                    variant="secondary"
                    style={{ backgroundColor: "#1e3c56" }}
                  >
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "white" }}
                    ></i>
                  </Button>
                </a>
              </ButtonGroup>

              <DropdownButton id="dropdown-basic-button" title="Tech Stack">
                {skills.map((skill, index) => (
                  <Dropdown.Item key={index} style={styles.dropdownItem}>
                    <span style={styles.skillIcon}>{skill.icon}</span>
                    {skill.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
          </div>

          <div className="right_div">
            <Lottie animationData={animation} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
