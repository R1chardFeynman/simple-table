import React from 'react';
import { TableRow, Box, TableCell, makeStyles } from '@material-ui/core';
import ActionIcon from 'components/ActionIcon';
import PropTypes from 'prop-types';

const ActionsBar = ({ actions, colAmount, isExtraSmall }) => {
  const useStyles = makeStyles({
    root: {
      borderBottom: 'none',
      padding: () => `${isExtraSmall ? '16px 8px' : '16px'}`,
    },
  });
  const classes = useStyles();

  const renderActions = () => {
    return (
      <TableCell className={classes.root}>
        <Box display="flex" justifyContent="flex-end">
          {actions.map((action) => {
            return (
              <ActionIcon
                type={action.type}
                handleOnClick={action.handleOnClick}
              />
            );
          })}
        </Box>
      </TableCell>
    );
  };

  const renderEmptyCells = () => {
    const mappingArray = Array.from({ length: colAmount - 1 }, (v, i) => i);
    return mappingArray.map(() => {
      return <TableCell className={classes.root} />;
    });
  };

  return (
    <TableRow>
      {renderEmptyCells()}
      {renderActions()}
    </TableRow>
  );
};

export const TActions = PropTypes.shape([
  {
    type: PropTypes.string,
    handleOnClick: PropTypes.func,
  },
]);

ActionsBar.defaultProps = {
  isExtraSmall: false,
};

ActionsBar.propTypes = {
  actions: TActions.isRequired,
  colAmount: PropTypes.number.isRequired,
  isExtraSmall: PropTypes.bool,
};

export default ActionsBar;
