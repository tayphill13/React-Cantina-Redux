import React from 'react';
import PropTypes from 'prop-types';
import v5 from 'uuid';
import KegForm from './KegForm';

function NewKeg(props) {
  function handleAddingNewKeg(event) {
    props.onAddingKeg({
      name: event.target.name.value,
      price: event.target.price.value,
      brand: event.target.brand.value,
      origin: event.target.origin.value,
      pintsRemaining: parseInt(event.target.pintsRemaining.value),
      id: v5()
    })
  }

  return (
      <KegForm
        onLinkClick={props.onLinkClick}
        onSubmittingForm={handleAddingNewKeg}
        buttonText="Add this Keg" />
  )
}

NewKeg.propTypes = {
  onLinkClick: PropTypes.func,
  onAddingKeg: PropTypes.func
}

export default NewKeg;