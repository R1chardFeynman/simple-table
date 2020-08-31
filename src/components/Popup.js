import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Box, Button, makeStyles } from '@material-ui/core';
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types';

const inputStyles = makeStyles({
  root: {
    marginBottom: '12px',
  },
});
const dialogActionsStyles = makeStyles({
  root: {
    justifyContent: 'space-around',
  },
});

const Popup = ({
  type: popupType,
  elementToEdit,
  open,
  handleOnClose,
  handleOnAdd,
  handleOnEdit,
  isExtraSmall,
}) => {
  const initialState = {
    name: '',
    type: 'side',
    color: '#ffffff',
  };

  const inputsClasses = inputStyles();
  const dialogActionsClasses = dialogActionsStyles();

  const [fields, setFields] = useState(initialState);
  const [currentColor, setColor] = useState('#ffffff');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (elementToEdit) {
      setFields(elementToEdit);
      setColor(elementToEdit.color);
    }
  }, [elementToEdit]);

  const titles = {
    edit: 'Edit',
    add: 'Add',
  };

  const resetPopup = () => {
    setColor('#ffffff');
    setError(false);
    setFields(initialState);
  };

  const handleOnCancel = () => {
    resetPopup();
    handleOnClose();
  };
  const handleColorOnChange = (color) => {
    setColor(color.rgb);
  };
  const handleColorOnChangeComplete = (color) => {
    // Sadly this colorpicker doesn't support hex with alpha channel
    // so this is a workaround
    const hexWithAlpha = color.hex + Math.round(color.rgb.a * 255).toString(16);
    setFields({
      ...fields,
      color: hexWithAlpha,
    });
  };
  const handleOnChange = (e, fieldType) => {
    const newState = { ...fields };
    newState[fieldType] = e.target.value;
    setFields(newState);
  };
  const handleOnSubmit = () => {
    const submitHandlers = {
      add: handleOnAdd,
      edit: handleOnEdit,
    };
    const validation = () => {
      const { name } = fields;
      if (!name) {
        setError(true);
        return false;
      }
      return true;
    };

    const isValid = validation();
    if (!isValid) {
      return;
    }
    const handler = submitHandlers[popupType];
    handler(fields);
    handleOnClose();
    resetPopup();
  };

  return (
    <Dialog fullScreen={isExtraSmall} open={open}>
      <DialogTitle>{titles[popupType]}</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column">
          <TextField
            onChange={(e) => handleOnChange(e, 'name')}
            value={fields.name}
            error={error}
            label="Name"
            type="text"
            className={inputsClasses.root}
          />
          <Select
            label="Type"
            onChange={(e) => handleOnChange(e, 'type')}
            value={fields.type}
            className={inputsClasses.root}
          >
            <MenuItem value="main">main</MenuItem>
            <MenuItem value="side">side</MenuItem>
          </Select>
          <Box margin="8px auto">
            <SketchPicker
              color={currentColor}
              onChange={handleColorOnChange}
              onChangeComplete={handleColorOnChangeComplete}
            />
          </Box>
          <DialogActions className={dialogActionsClasses.root}>
            <Button onClick={handleOnSubmit}>Submit</Button>
            <Button onClick={handleOnCancel}>Cancel</Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

Popup.propTypes = {
  open: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  elementToEdit: PropTypes.objectOf(PropTypes.string),
  handleOnAdd: PropTypes.func.isRequired,
  handleOnEdit: PropTypes.func.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  isExtraSmall: PropTypes.bool.isRequired,
};

Popup.defaultProps = {
  elementToEdit: null,
};

export default Popup;
