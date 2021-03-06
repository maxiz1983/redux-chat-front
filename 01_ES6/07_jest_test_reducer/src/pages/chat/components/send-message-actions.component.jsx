import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core';
import styles from './send-message-actions.styles';


const SendMessageActionsInner = (props) =>
  <React.Fragment>
    <TextField
      className={props.classes.textInput}
      InputProps={{
        className: props.classes.textInputInner,
      }}
      id="currentMessage"
      placeholder="Enter your message"
      value={props.currentMessage}
      onChange={onChangeTextField('currentMessage', props.onFieldChange)}
      onKeyPress={handleInputKeyPress(props.currentMessage, props.onSendMessage)}
      margin="normal"
      autoFocus
    />
    <Button
      className={props.classes.sendButton}
      variant="fab"
      color="secondary"
      onClick={props.onSendMessage}
      disabled={!props.currentMessage}
    >
      <SendIcon className={props.classes.sendIcon}/>
    </Button>
  </React.Fragment>

const onChangeTextField = (fieldId, onFieldChange) => (e) => {
  onFieldChange(fieldId)(e.target.value);
}

const handleInputKeyPress = (message, callback) => (event) => {
  if (message && event && event.key === 'Enter') {
    callback();
  }
}

SendMessageActionsInner.propTypes = {
  currentMessage: PropTypes.string.isRequired,
  onSendMessage: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

export const SendMessageActions = withStyles(styles)(SendMessageActionsInner);