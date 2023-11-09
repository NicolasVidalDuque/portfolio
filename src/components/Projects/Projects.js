import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import blog_app_cover from "../../Assets/Projects/nv-blog-app-cover.png";
import image_cloud_app_cover from "../../Assets/Projects/nv-image-cloud-cover.png";
import melanoma_cover from "../../Assets/Projects/melanoma-cover.jpg";
import scheduling_cover from "../../Assets/Projects/scheduling-cover.png";
import expense_tracker_cover from "../../Assets/Projects/expense-tracker-cover.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image_cloud_app_cover}
              title="Image Cloud Storage"
              description="Discover our Image Cloud Storage Web App: Effortlessly create an account, securely upload, store, and download private images. Enjoy intuitive interfaces, robust data security, seamless downloading, powerful data visualization, TensorFlow integration, and collaborative sharing."
              ghLink="https://github.com/NicolasVidalDuque/image-cloud-nv"
              demoLink="https://nv-image-cloud.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog_app_cover}
              title="NV - Blog"
              description="A blog where anyone can create an account, publish articles and read others post's. Built with React and Node.js; enabling users to store their post's in MongoDB and AWS S3. Password and user identification via a salted and encrypted connection."
              ghLink="https://github.com/NicolasVidalDuque/blog_app"
              demoLink="https://nv-blog.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={melanoma_cover}
              title="Melanoma Cancer: CNN Detection"
              description="Trained a CNN classifier using a labeled Melanoma Data Set with Keras and tensorflow. Implemented Flask as backened. The classifier sucessfully differentiated non-melanoma moles from Melanoma cancer moles. Different models available with a max validation accuracy of 90%."
              ghLink="https://github.com/NicolasVidalDuque/melanoma_app"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scheduling_cover}
              title="Scheduling Search Metaheuristic"
              description="The University Course Timetabling algorithm employs a two-stage approach: iterative local search with a mixed-integer linear programming model for initialization. Parameter optimization via Taguchi experiments maximizes teacher preferences and minimizes subject conflicts, resulting in significant efficiency gains."
              ghLink="https://github.com/NicolasVidalDuque/pd"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense_tracker_cover}
              title="Expense Tracker"
              description="A web app that allows you to keep track of your expenses. Made exclusively for students with allowance in order to visually monitor the percentage of your monthly income. Additionally you can enable the sponsor category if someone is paying for the expense."
              ghLink="https://github.com/NicolasVidalDuque/expense-tracker"
              demoLink="https://expense-tracker-nicolas-vidal.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
