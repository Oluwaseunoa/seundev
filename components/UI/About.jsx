import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

import img01 from "../../public/images/img-01.jpeg"
import img02 from "../../public/images/img-02.jpeg"
import img03 from "../../public/images/img-03.jpeg"
import img04 from "../../public/images/img-04.jpeg"

import classes from '../../styles/about.module.css'



const About =() =>{
    return <section id="about">
        <Container>
            <Row>
                <Col lg='6' className={'${classes.about__title}'}>
                <SectionSubtitle subtitle="About me" />
                <h3 className="mt-4">Oluwaseun</h3>
                <h3 className="mb-4">is here to help your next project</h3>
                <p>I work from the user interface to the backend where the business logic is written. 
                    I will bring to live your idea with my command of technologiesand researches. 
                    I believe every idea that can be conceived can be written as a program for the world to see and use.
                    I also believe that every program that thrives must be:
                    </p>
                <div className="d-flex align-items-center gap-5">
                    <div>
                        <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                            <span className={`${classes.about__icon}`}>
                                <i className="ri-checkbox-circle-line"></i>
                            </span>
                            Problem Solving
                        </h6>
                        <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                            <span className={`${classes.about__icon}`}>
                                <i className="ri-checkbox-circle-line"></i>
                            </span>
                            Research based
                        </h6>
                         
                    </div>
                    <div>
                        <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                            <span className={`${classes.about__icon}`}>
                                <i className="ri-checkbox-circle-line"></i>
                            </span>
                            Creative Idea
                        </h6>
                        <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                            <span className={`${classes.about__icon}`}>
                                <i className="ri-checkbox-circle-line"></i>
                            </span>
                            High Quality
                        </h6>
                        
                    </div>
                </div>

                <div className="mt-5">
                    <button className="primary__btn"><Link 
                    href="#portfolio">Portfolio</Link></button>
                    <button className="secondary__btn"><Link 
                    href="https://drive.google.com/u/0/uc?id=1sHa8JGLUNoulKVuPZmaLpQ5su5YhyO3S&export=download"
                    
                    >Download CV</Link></button>

                </div>
                </Col>

                <Col lg="6" md="6">

                    <div className={'${classes.about__img__gallery} d-flex gap-4 justify-content-end'}>
                            <div className="d-flex flex-column mb-3">
                                <div className= {`${classes.about__img} ${classes.
                                    about__img__box}`}>
                                    <Image src={img02} alt='about-img' />
                                </div>
                                <div className= {`${classes.about__img} ${classes.
                                    about__img__box}`}>
                                    <Image src={img03} alt='about-img' />
                                </div>
                            </div>
                            <div className="d-flex flex-column mb-3">
                                <div className= {`${classes.about__img} ${classes.
                                    about__img__box}`}>
                                    <Image src={img01} alt='about-img' />
                                </div>
                                <div className= {`${classes.about__img} ${classes.
                                    about__img__box}`}>
                                    <Image src={img04} alt='about-img' />
                                </div>
                            </div>


                    </div>
                </Col>
            </Row>
        </Container>
            

    </section>
}
export default About