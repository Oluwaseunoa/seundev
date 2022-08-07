import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import Slider from "react-slick";
import network from "../../public/images/Connected world.png";

import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/test_walid.jpeg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Walid Amir</h6>
                    <h6>Pet Care Specialist</h6>
                  </div>
                </div>

                <p>
                    Oluwaseun Osunsola built 
                    the website my company, Paw Peace of Mind, 
                    in Dubai uses in marketing. I enjoy a 
                    good service while working with him.
                    https://www.pawpeace.ae                
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/test_unique.jpeg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Unique Ayomide</h6>
                    <h6>Digital Marketer</h6>
                  </div>
                </div>

                <p>
                Working with Oluwaseun came with a new 
                experience in web design, he handled my 
                Two Company websites without error or hassle and delivered 
                within agreed date. I can boldly recommend him to anyone 
                who needs his service. 
                https://www.uniquedigitals.com
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/test_walid.jpeg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Walid Amir </h6>
                    <h6>Pet Care Specialist</h6>
                  </div>
                </div>
                <p>
                    Oluwaseun Osunsola built 
                    the website my company, Paw Peace of Mind, 
                    in Dubai uses in marketing. I enjoy a 
                    good service while working with him.
                    https://www.pawpeace.ae                
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
