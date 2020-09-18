import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


function KegDetails(props) {
  const { keg, onLinkClick, onDeleteClick, onUpdateClick, onServePint } = props;

  return (
    <React.Fragment>
      <h2>{keg.name}</h2>
      <p>{keg.brand}</p>
      <p>{keg.price}</p>
      <p>{keg.origin}</p>
      <p>Pints Remaining: {keg.pintsRemaining}</p>
      <Button className="secondary" variant='success' type='button' size='md' onClick={()=> onServePint(keg.id)}>Serve Pint</Button>
      <Button className="mb-3" variant='secondary' type='button' size='md' onClick={()=> onLinkClick('index')}>Back to Keg List</Button>
      <Button className="mb-3" variant='secondary' type='button' size='md' onClick={() => onUpdateClick(keg.id)}>Update Keg</Button>
      <Button variant='danger' type='button' size='md' onClick={() => onDeleteClick(keg.id)}>Delete</Button>
    </React.Fragment>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onLinkClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  onUpdateCLick: PropTypes.func,
  onServePint: PropTypes.func
}

export default KegDetails;