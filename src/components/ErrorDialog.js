import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DismissDialog from './DismissDialog.js';
import { dismissError } from '../store/exampleSlice.js';

const ErrorDialog = props => {
  const sendClose = () => props.dispatch(dismissError());
  return (
    <DismissDialog title="Message" show={props.showError} onDismiss={sendClose} className="error-modal">
      {props.errorMsg}
    </DismissDialog>
  )
};

ErrorDialog.propTypes = {
  showError: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
}

const mapStateToProps = (state, props) => ({
  showError: state.example.showError,
  errorMsg: state.example.errMessage || "",
});

export const ErrorDialogTestable = ErrorDialog;
export default connect(mapStateToProps)(ErrorDialog);
