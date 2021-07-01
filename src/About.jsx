import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Fmcg from "./Images/Fmcg.png";
import Fssai from "./Images/Fssai.png";
import Bikaner from "./Images/Bikaner.png";

function About() {
  return (
    <>
      <Jumbotron className="jumbo">
        <Container>
          <br />
          <br />
          <br />
          <h1>About Bikaner Masaala</h1>
          <p>
            <br />
            Bikaner Masaala is a spice processing unit set-up in khara
            industrial area in Bikaner Rajasthan. With over 20 years of
            experience in the industry, we at Bikaner Masaala Group are the
            leading manufacturers and providers of whole and Grinded Spices. Our
            list of products extends beyond Haldi, Dhania and Mirch to garam
            masaala, chaat masaala and all indian spices as well. Our team of
            dedicated experts helps us produce the finest quality products to
            meet the expectations of changing customer’s tastes and
            expectations.
          </p>
          <img src={Fssai} className="imagesL" alt="Fssai" />
          <img src={Bikaner} className="imagesL" alt="Bikaner" />
          <img src={Fmcg} className="imagesL" alt="Made in India" />
          <br />
        </Container>
      </Jumbotron>
    </>
  );
}

export default About;
