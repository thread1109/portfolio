import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dicen from "../../Assets/Projects/dicen.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import drumkit1 from "../../Assets/Projects/drumkit1.png";
import todo from "../../Assets/Projects/todo.png";
import simon from "../../Assets/Projects/simon2.jpg";
import keeper from "../../Assets/Projects/keeper.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TO-DO List"
              description="Users can create new tasks by entering a title or description for each item on their to-do list, Users can mark tasks as completed or mark them as incomplete, allowing them to track their progress.These functionalities provide a foundation for a functional to-do list web application."
              ghLink="splendid-cuchufli-2e2c2b.netlify.app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="Keeper-APP"
              description="Keeper App is a web application designed for note-taking and organization. It allows users to create, store, and manage notes digitally. Users can create new notes by entering a title and content for each note, Users can edit the content of existing notesThese functionalities provide a foundation for a functional Keeper App web application."
              ghLink="https://github.com/thread1109?tab=repositories"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumkit1}
              isBlog={false}
              title="Drum-Kit"
              description="A drum kit web application allows users to play virtual drums using their computer keyboard or mouse. It provides an interactive and enjoyable experience for drum enthusiasts or those who want to experiment with rhythm and beats. The specific functionalities implemented will depend on the project requirements and your desired feature set."
              ghLink="thread1109.github.io/drum_kit/"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dicen}
              isBlog={false}
              title="Dice-Game"
              description="A dice game simulates the experience of rolling dice and playing various dice-based games. It provides an interactive and entertaining platform for users to enjoy dice games virtually."
              ghLink="https://github.com/thread1109?tab=repositories"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simon}
              isBlog={false}
              title="Simon Game"
              description="The Simon game is a classic memory-based game where players need to remember and reproduce a sequence of colored buttons or tones. A Simon game web application provides a digital version of this game, allowing users to test and improve their memory skills."
              ghLink="https://thread1109.github.io/simonGame/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="A personal portfolio website showcases an individual's skills, achievements, and projects to potential clients, employers, or collaborators. It serves as a digital representation of one's professional identity and capabilities."
              ghLink="https://github.com/thread1109"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
