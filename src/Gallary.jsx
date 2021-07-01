import React from "react";
import { Carousel } from "react-bootstrap";
import Gal1 from "./Images/Gal1.jpg";
import Gal2 from "./Images/Gal2.jpg";
import Gal3 from "./Images/Gal3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMortarPestle,
  faPepperHot,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

function Gallary() {
  return (
    <>
      <Carousel className="glry galShowBig">
        <Carousel.Item className="min-vh-100">
          <img src={Gal1} alt="First slide" />
          <Carousel.Caption>
            <h3>
              <FontAwesomeIcon icon={faMortarPestle} /> High Quality Grinded
              Spices <FontAwesomeIcon icon={faMortarPestle} />
            </h3>
            <p>
              Our facility is equiped with latest machines for fine and clean
              grinding of spices at right temperature and speed to preserve
              taste, smell and of course neutrients!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Gal2} alt="Second slide" />
          <Carousel.Caption>
            <h3>
              <FontAwesomeIcon icon={faPepperHot} /> Variety of Chilli{" "}
              <FontAwesomeIcon icon={faPepperHot} />
            </h3>
            <p>
              From kashmir to kanyakumari name the mirch, we've got all of them.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Gal3} alt="Third slide" />
          <Carousel.Caption>
            <h3>
              <FontAwesomeIcon icon={faLeaf} /> Best Whole Spices{" "}
              <FontAwesomeIcon icon={faLeaf} />
            </h3>
            <p>
              Need Khade masaale! we have wide range of best quality spices
              handpicked from all across India.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Gallary;
