import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  ListGroup,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderComments({ comments }) {
  let list = comments
    ? comments.map((comment) => {
        return (
          <ListGroup key={comment.id} type="unstyled">
            <div className="p-2">
              {comment.comment}
              <p rel="author">
                --{comment.author}, &nbsp;
                {new Intl.DateTimeFormat("en-UK", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
          </ListGroup>
        );
      })
    : null;

  return (
    <div className="col-12 col-md-5 m-1">
      <h2>Comments</h2>
      <ul className="list-unstyled">{list}</ul>
    </div>
  );
}

function RenderDish({ dish }) {
  if (dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}
const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.comments} />
      </div>
    </div>
  );
};

export default DishDetail;
