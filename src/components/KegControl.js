import React from 'react';
import KegList from './KegList';
import NewKeg from './NewKeg';
import UpdateKeg from './UpdateKeg';
import KegDetails from './KegDetails';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions';

class KegControl extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
  }
  
  handleAddingNewKeg = (newKeg) =>  {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleViewingDetails = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({ selectedKeg: selectedKeg});
  }

  
  handleUpdateClick = () => {
    this.setState({ editing: true });
  }

  handleUpdateKeg = (kegToUpdate) =>  {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToUpdate);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleDeleteKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
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
    let buttonText = null;
    if (this.state.editing) {
      pageToDisplay = 
        <UpdateKeg 
          keg={this.state.selectedKeg} 
          onUpdateKeg={this.handleUpdateKeg} />
          buttonText = "Return to Ticket List";
    } else if (this.state.selectedKeg != null) {
      pageToDisplay =
        <KegDetails
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeletingTicket}
          onClickingEdit={this.handleEditClick} />
          buttonText = "Return to Ticket List";
    } else if (this.props.formVisibleOnPage) {
      pageToDisplay = 
        <NewKeg 
          onAddingKeg={this.handleAddingNewKeg} />;
          buttonText = "Return to Keg List";
    } else {
      pageToDisplay = 
        <KegList 
          kegList={this.props.masterKegList} 
          onKegClick={this.handleViewingDetails} />;
          buttonText = "Add Keg";
        }

        
    return (
      <React.Fragment>
        {pageToDisplay}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;