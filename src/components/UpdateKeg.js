import React from 'react';
import PropTypes from 'prop-types';
import KegForm from './KegForm';

function UpdateKeg(props) {
  const { keg, onLinkClick, onUpdateKeg } = props;

  function handleUpdateKeg(event) {
    onUpdateKeg({
      name: event.target.name.value,
      price: event.target.price.value,
      brand: event.target.brand.value,
      origin: event.target.origin.value,
      pintsRemaining: event.target.pintsRemaining.value,
      id: keg.id
    });
  }

  return (
    <KegForm
      onLinkClick={onLinkClick}
      onSubmittingForm={handleUpdateKeg}
      buttonText="Edit Keg"
      defaultName={keg.name}
      defaultPrice={keg.price}
      defaultBrand={keg.brand}
      defaultOrigin={keg.origin}
      defaultPintsRemaining={keg.pintsRemaining -1 } />
  )
}

UpdateKeg.propTypes = {
  keg: PropTypes.object,
  onLinkClick: PropTypes.func,
  onUpdateKeg: PropTypes.func
}

export default UpdateKeg;