import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';
import {ProjectCard} from './ProjectCard';
import {CertificateCard} from './CertificateCard';
import projImg1 from '../assets/img/daraz.jpeg';
import projImg2 from '../assets/img/Robot.jpeg';
import projImg3 from '../assets/img/DM.png';
import projImg4 from '../assets/img/HealthCareHub.jpg';
import projImg5 from '../assets/img/game2.png';
import projImg6 from '../assets/img/HevenlyKaffee.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import Certi1 from '../assets/img/IntroCyber.png';
import Certi2 from '../assets/img/Intro_DBSQL.jpg';
import Certi3 from '../assets/img/MongoDB.jpg';
import Certi4 from '../assets/img/WP.png';
import Certi5 from '../assets/img/SQLInter.jpg';
import Certi6 from '../assets/img/Compitition.jpeg';
import Certi7 from '../assets/img/WebDevUstadam.jpeg';
import Certi8 from '../assets/img/Cyber-pre.jpg';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Daraz App',
      description: 'C# (.NET FrameWork)',
      imgUrl: projImg1,
      link: 'https://www.linkedin.com/posts/anza-tamveel-494400290_csharp-aspnet-oop-activity-7202671110482464768-fLQs?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: 'Line Following Robot',
      description: 'Digital Logic and Designing',
      imgUrl: projImg2,
      link: 'https://www.linkedin.com/posts/anza-tamveel-494400290_dldproject-linefollowingrobot-teamwork-activity-7198703017238401025-cDta?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: 'Discrete Math Project',
      description: 'Number/Graphs Theory',
      imgUrl: projImg3,
      link: 'https://www.linkedin.com/posts/anza-tamveel-494400290_computerscience-uetlahore-maincampus-activity-7147575052719349760-ybZ7?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: 'Health Caring Hub',
      description: 'C++ (Console base applicaiton)',
      imgUrl: projImg4,
      link: 'https://github.com/AnzaTamveel/Health-Caring-Hub-Application.git',
    },
    {
      title: 'C# game with game Library',
      description: 'Game with Implmentation of OOP principles',
      imgUrl: projImg5,
      link: 'https://github.com/AnzaTamveel/Game-Framework.git',
    },
    {
      title: 'HTML, CSS & JS Website',
      description: 'UI/UX Designing',
      imgUrl: projImg6,
      link: 'https://www.linkedin.com/posts/anza-tamveel-494400290_hevenlykaffee-website-coffeelovers-activity-7151245243554635776-VvxD?utm_source=share&utm_medium=member_desktop',
    },
  ];

  const certificate = [
    {
      title: 'Cyber Security',
      description: 'Introduction of cyber Security',
      imgUrl: Certi1,
      link: 'https://github.com/AnzaTamveel?tab=repositories',
    },
    {
      title: 'DataBase & SQL',
      description: 'Introduction of Database and SQL',
      imgUrl: Certi2,
      link: 'https://www.mygreatlearning.com/certificate/ZEZBQFYS',
    },
    {
      title: 'MongoDB',
      description: 'MongoDB Tutorial',
      imgUrl: Certi3,
      link: 'https://www.mygreatlearning.com/certificate/YMCDFUDD',
    },
    {
      title: 'WordPress',
      description: 'WordPress',
      imgUrl: Certi4,
      link: 'https://github.com/AnzaTamveel?tab=repositories',
    },
    {
      title: 'SQL',
      description: 'SQL Intermediate',
      imgUrl: Certi5,
      link: 'https://www.hackerrank.com/certificates/c5df6d679790',
    },
    {
      title: 'Competition',
      description: 'Programming Competition',
      imgUrl: Certi6,
      link: 'https://www.linkedin.com/posts/anza-tamveel-494400290_codingchallenge-programmingcompetition-techskills-activity-7194362914110160896-14RA?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: 'Course',
      description: 'Web Development with REST base web services',
      imgUrl: Certi7,
      link: 'hhttps://www.linkedin.com/posts/anza-tamveel-494400290_ustadam-webdevelopment-continuouslearning-activity-7161026284544835584-kNTk?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: 'Cyber Secuirty',
      description: 'Course Pre-assessment',
      imgUrl: Certi8,
      link: 'https://isc2.obrizum.io/org/cc/certificate/0b5339ad-1cbe-442b-bbe6-aa842431b28e',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({isVisible}) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of the projects I've worked on, showcasing a variety of skills and technologies. Explore each one to see how I tackle different challenges and design solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">
                            adfadfdsf
                        </Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificates</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map ((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                      </Tab.Pane> */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {certificate.map ((certificate, index) => (
                            <CertificateCard key={index} {...certificate} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
