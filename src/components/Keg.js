import React from 'react';
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

function Keg(props) {
  return (
    <Card onClick={()=>props.onKegClick(props.id)}>
      <Card.Header as='h4'>{props.name}</Card.Header>
      <Card.Body>
        <Card.Text as='h5'>from {props.origin}</Card.Text>
        <Card.Text>Pints Remaining: {props.pintsRemaining}</Card.Text>
        <Card.Text>${props.price}</Card.Text>
        <Card.Text>{props.brand}</Card.Text>
      </Card.Body>
    </Card>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  origin: PropTypes.string,
  pintsRemaining: PropTypes.number,
  id: PropTypes.string,
  onKegClick: PropTypes.func
};

export default Keg;