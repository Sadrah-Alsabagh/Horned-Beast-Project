import React from "react";
import HornedBeast from "./HornedBeast";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <Row xs={1} md={3} className="g-4">
        {this.props.allBeast.map((item) => (
          <Col>
            <HornedBeast
              title={item.title}
              imageURL={item.image_url}
              description={item.description}
              displayModel={this.props.displayModel}
              data={item}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

export default Main;
