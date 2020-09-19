import React from 'react';
import KegList from './KegList';
import NewKeg from './NewKeg';
import UpdateKeg from './UpdateKeg';
import KegDetails from './KegDetails';
import { connect } from 'react-redux';

class KegControl extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = (pageName) => {
    this.setState({
      currentPage: pageName
    });
  }
  
  handleAddingNewKeg = (newKeg) =>  {
    const { dispatch } = this.props;
    const { id, name, brand, origin, pintsRemaining, price } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      origin: origin,
      pintsRemaining: pintsRemaining,
      price: price,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleViewingDetails = (id) => {
    const kegToView = this.state.masterKegList.filter(kegs => kegs.id === id)[0];
    this.setState({
      currentPage: 'details',
      currentKeg: kegToView
    });
  }

  
  handleUpdateClick = (id) => {
    const kegToUpdate = this.state.masterKegList.filter(kegs => kegs.id === id)[0];
    this.setState({ 
      currentPage: 'update',
      currentKeg: kegToUpdate 
    });
  }

  handleUpdateKeg = (updatedKeg) =>  {
    const { dispatch } = this.props;
    const { id, name, brand, origin, pintsRemaining, price } = updatedKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      origin: origin,
      pintsRemaining: pintsRemaining,
      price: price,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  };

  handleDeleteKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_KEG",
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null})
  }
  handleServePint = (id) => {
    this.setState(state => {
      const masterKegList = state.masterKegList.map(keg => {
        if (keg.id === id && keg.pintsRemaining > 0) {
            return {...keg, pintsRemaining: keg.pintsRemaining - 1};
        } else if (keg.id === id && keg.pintsRemaining === 0) {
            return {...keg, pintsRemaining: "Out of Stock"};
        } else {
            return keg;
        }
    });
      this.setState({
        masterKegList: masterKegList,
        currentPage: 'index',
        currentKeg: null
      });
    });
  }

  render(){
    let pageToDisplay = null;
    if (this.state.currentPage === 'index')  {
      pageToDisplay = <KegList
        kegList = {this.state.masterKegList}
        onLinkClick = {this.handleClick}
        onKegClick = {this.handleViewingDetails} />
    } else if (this.state.currentPage === 'create') {
      pageToDisplay = <NewKeg
        onLinkClick = {this.handleClick}
        onAddingKeg = {this.handleAddingNewKeg} />
    } else if (this.state.currentPage === 'details') {
      pageToDisplay = <KegDetails
        keg = {this.state.currentKeg}
        onLinkClick = {this.handleClick}
        onDeleteClick = {this.handleDeleteKeg}
        onUpdateClick = {this.handleUpdateClick}
        onServePint = {this.handleServePint} />
    } else if (this.state.currentPage === 'update')  {
      pageToDisplay = <UpdateKeg
        keg = {this.state.currentKeg}
        onLinkClick = {this.handleClick}
        onUpdateKeg = {this.handleUpdateKeg}/>
    }
    return (
      <React.Fragment>
        {pageToDisplay}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;