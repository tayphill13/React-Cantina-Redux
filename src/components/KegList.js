import React from 'react';
import PropTypes from 'prop-types';
import Keg from "./Keg";
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';


function KegList(props) {
  return (
    <React.Fragment>
      <CardColumns>
        {Object.values(props.kegList).map((keg) =>
          <Keg
            onKegClick={props.onKegClick}
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            origin={keg.origin}
            pintsRemaining= {keg.pintsRemaining}
            id={keg.id}
            key={keg.id} />
            )}
      
      </CardColumns>
      <Button variant='secondary' type='button' size='md' onClick={()=>props.onLinkClick('create')}>Add Keg</Button>
    </React.Fragment>
  )
}
KegList.propTypes = {
  kegList: PropTypes.object,
  onLinkClick: PropTypes.func,
  onKegClick: PropTypes.func,
  onServePint: PropTypes.func
}


export default KegList;