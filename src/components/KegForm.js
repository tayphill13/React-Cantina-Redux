import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function KegForm(props) {
  const { onSubmittingForm, buttonText, defaultName, defaultBrand, defaultPrice, defaultOrigin, defaultPintsRemaining } = props;

  function handleSubmittingForm(event) {
    event.preventDefault();
    onSubmittingForm(event);
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-5">
          <Form onSubmit={handleSubmittingForm}>
            <Form.Group controlId="name">
              <Form.Label>Beverage</Form.Label>
              <Form.Control type='text' placeholder="Beverage Name" defaultValue={defaultName} required />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type='text' placeholder='0.00' defaultValue={defaultPrice} pattern='^\d+\.\d{2}$' required />
              </InputGroup>
              <Form.Text className='text-muted'>Format as a decimal (e.g. 3.99 or 12.49)</Form.Text>
            </Form.Group>
            <Form.Group controlId="pintsRemaining">
              <Form.Label>Pints Remaining</Form.Label>
              <Form.Control type='number' placeholder='124' defaultValue={defaultPintsRemaining} required />
            </Form.Group>
            <Form.Group controlId="origin">
              <Form.Label>Origin</Form.Label>
              <Form.Control type='text' placeholder="Planet of Origin" defaultValue={defaultOrigin} required />
            </Form.Group>
            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control type='text' placeholder="Beverage Brand" defaultValue={defaultBrand} required />
            </Form.Group>
            <Button className='mb-3' variant='success' type="submit" size='lg' >{buttonText}</Button>
          </Form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </React.Fragment>
  )
}

KegForm.propTypes = {
  onSubmittingForm: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  defaultName: PropTypes.string,
  defaultPrice: PropTypes.string,
  defaultBrand: PropTypes.string,
  defaultOrigin: PropTypes.string,
  defaultPintsRemaining: PropTypes.number
}

export default KegForm;