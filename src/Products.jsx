import React from "react";
import { Card } from "react-bootstrap";
import Card1 from "./Images/Card1.jpg";
import Card2 from "./Images/Card2.jpg";
import Card3 from "./Images/Card3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

function Products() {
  return (
    <>
      <h1 className="h3c">
        <sub>
          {" "}
          <FontAwesomeIcon icon={faLongArrowAltDown} />
        </sub>
        Our Products & Services
        <sub>
          <FontAwesomeIcon icon={faLongArrowAltDown} />
        </sub>
      </h1>
      <div className="row mt-4">
        <Card className="col-md-3 cardp">
          <Card.Img variant="top" src={Card1} className="Cardimage" />
          <Card.Body>
            <Card.Title>Whole Spices</Card.Title>
            <Card.Text>
              We have a wide range of whole spices from all over india.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-md-3 cardp">
          <Card.Img variant="top" src={Card2} className="Cardimage" />
          <Card.Body>
            <Card.Title>Powdered Spices</Card.Title>
            <Card.Text>
              We provide the consumer with spices made from the best raw
              material maintaining the highest processing standards.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-md-3 cardp">
          <Card.Img variant="top" src={Card3} className="Cardimage" />
          <Card.Body>
            <Card.Title>Grinding Services</Card.Title>
            <Card.Text>
              We have high standard machines for grinding services, get your own
              mix grinded with highest processing standards.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Products;
