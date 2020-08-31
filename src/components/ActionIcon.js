import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: 4,
  },
});

const ActionIcon = ({ type, size, handleOnClick }) => {
  const icons = {
    edit: EditIcon,
    delete: DeleteIcon,
    add: AddIcon,
  };
  const Icon = icons[type];
  const classes = useStyles();

  return (
    <IconButton className={classes.root} onClick={handleOnClick}>
      <Icon fontSize={size} />
    </IconButton>
  );
};

ActionIcon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  handleOnClick: PropTypes.func,
};
ActionIcon.defaultProps = {
  size: 'medium',
  handleOnClick: undefined,
};

export default ActionIcon;
