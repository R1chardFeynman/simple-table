import React from 'react';
import {
  TableHead as MuiTableHead,
  TableRow,
  TableCell,
  makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import ActionsBar from 'components/TableHead/ActionsBar';
import { TActions } from './ActionsBar';

const TableHead = ({ columns, actions, isExtraSmall }) => {
  const useStyles = makeStyles({
    root: {
      padding: () => `${isExtraSmall ? '16px 8px' : '16px'}`,
    },
  });
  const classes = useStyles();

  const renderColumns = () => {
    return columns.map((col) => {
      return (
        <TableCell
          className={classes.root}
          align={col.align}
          padding={col.padding}
        >
          {col.title}
        </TableCell>
      );
    });
  };

  return (
    <MuiTableHead>
      <ActionsBar
        isExtraSmall={isExtraSmall}
        colAmount={columns.length}
        actions={actions}
      />
      <TableRow>{renderColumns()}</TableRow>
    </MuiTableHead>
  );
};

const TColumns = PropTypes.shape([
  {
    title: PropTypes.string,
    align: PropTypes.string,
    padding: PropTypes.string,
  },
]);

TableHead.defaultProps = {
  isExtraSmall: false,
};

TableHead.propTypes = {
  columns: TColumns.isRequired,
  actions: TActions.isRequired,
  isExtraSmall: PropTypes.bool,
};

export default TableHead;
