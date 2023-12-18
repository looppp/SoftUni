import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

export default function Recipe({ _id, recipeName, imgUrl }) {
  return (
    <Col className="justify-content-lg-evenly">
      <div className="holder">
        <Card className="mt-4">
          <Card.Img style={{ height: "200px" }} src={imgUrl} />
          <Card.Body>
            <Card.Title>{recipeName}</Card.Title>
            <Link to={`/recipes/${_id}`} className="btn btn-primary">
              Read More
            </Link>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
}
