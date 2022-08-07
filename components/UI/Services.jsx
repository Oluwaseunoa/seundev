import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from '../../styles/services.module.css'
import ServicesItem from "./ServicesItem";

const Services = () =>{
    return <section id="services">
        <Container>
            <Row>
                    <Col lg="6" md="6">
                        <div className={`${classes.services__container}`}>
                            <div>
                                <ServicesItem title="App Development"
                                icon = "ri-apps-line" />
                                <ServicesItem title="Web Development"
                                icon = "ri-computer-line" />
                            </div>
                            <ServicesItem title="Full-Stack Development"
                            icon = "ri-code-s-slash-line" />

                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <SectionSubtitle subtitle = "What I do" />
                        <h3 className="mb-0 mt-4">Better Design,</h3>
                        <h3 className="mb-4">Better Experience</h3>
                        <p>
                            Apart from the fact that I design the mockup with Figma to arrive at better design,
                            my proficiency in JavaScript frameworks like ReactJS and NextJS has enabled me 
                            to build Apps that have satisfactory user experience. I love to give my best of time 
                            and resources to build softwares that catches the attention of the user who will never regret using them.
                        </p>
                    </Col>

            </Row>

        </Container>


    </section>
}
export default Services