import React from 'react';
import PropTypes from 'prop-types';
import Keg from "./Keg";
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

function KegList(props) {
  return (
    <React.Fragment>
      <CardColumns>
        {props.kegList.map((kegs) =>
          <Keg
            onKegClick={props.onKegClick}
            name={kegs.name}
            brand={kegs.brand}
            price={kegs.price}
            origin={kegs.origin}
            pintsRemaining= {kegs.pintsRemaining}
            id={kegs.id}
            key={kegs.id} />
            )}
      
      </CardColumns>
      <Button variant='secondary' type='button' size='md' onClick={()=>props.onLinkClick('create')}>Add Keg</Button>
    </React.Fragment>
  )
}
KegList.propTypes = {
  kegList: PropTypes.array,
  onLinkClick: PropTypes.func,
  onKegClick: PropTypes.func,
  onServePint: PropTypes.func
}


export default KegList;