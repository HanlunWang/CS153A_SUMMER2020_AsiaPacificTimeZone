import React from 'react';
import {
  Card,
  Button,
  ListGroup
} from 'react-bootstrap';
import PropTypes from 'prop-types';


const ItemCard = ({ sales }) => {
    return(
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={sales.img.src} />
        <Card.Body>
          <Card.Title>{`${sales.name}`}</Card.Title>
          <Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>{`Price: ${sales.price}`}</ListGroup.Item>
            <ListGroup.Item>{`Phone: ${sales.phone}`}</ListGroup.Item>
            <ListGroup.Item>{`Email: ${sales.email}`}</ListGroup.Item>
            <ListGroup.Item>{`Detail: ${sales.detail}`}</ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    );
}

ItemCard.propTypes = {
    sales: PropTypes.object.isRequired
}
export default ItemCard;