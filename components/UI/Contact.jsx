import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Let's discuss</h3>
            <p>
            Do you have a role in your organization for which you want to 
            hire me to fill? 
            Do you have a Mobile Application, Web Application 
            or Website you need me to design or develop for you?
                            
            You can contact me to hire me, know more about my services or discuss your gig with me.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Lagos - Nigeria</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>oluwaseun.beicks@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+2348109662344</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://youtube.com/channel/UCbauRV8FluprYpakZpNpT9Q">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="https://github.com/oluwaseunoa">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://facebook.com/seun.abraham1">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/oluwaseun-osunsola-95539b175">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://www.instagram.com/oluwaseun.oa">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;












