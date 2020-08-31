import React from 'react';
import {
  TableBody as MuiTableBody,
  TableCell,
  TableRow,
  Box,
  makeStyles,
} from '@material-ui/core';
import ActionIcon from 'components/ActionIcon';
import PropTypes from 'prop-types';

const TableBody = ({
  data,
  rowStructure,
  handleOnDelete,
  handleOnEdit,
  isExtraSmall,
}) => {
  const useStyles = makeStyles({
    root: {
      padding: () => `${isExtraSmall ? '16px 8px' : '16px'}`,
      '&.MuiTableCell-sizeSmall.MuiTableCell-paddingCheckbox:last-child': {
        padding: () => `${isExtraSmall ? '16px 8px' : '16px'}`,
      },
    },
  });
  const classes = useStyles();
  return (
    <MuiTableBody>
      {data.map((row) => {
        return (
          <TableRow>
            {rowStructure.map((el) => {
              const { key, align, padding } = el;
              return (
                <>
                  <TableCell
                    className={`${classes.root} ${classes.sizeSmall}`}
                    align={align}
                    padding={padding}
                  >
                    {row[key]}
                  </TableCell>
                </>
              );
            })}
            <TableCell
              className={classes.root}
              padding="checkbox"
              size="small"
              align="center"
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <ActionIcon
                  type="edit"
                  size="small"
                  handleOnClick={() => handleOnEdit(row)}
                />
                <ActionIcon
                  type="delete"
                  size="small"
                  handleOnClick={() => handleOnDelete(row)}
                />
              </Box>
            </TableCell>
          </TableRow>
        );
      })}
    </MuiTableBody>
  );
};

TableBody.propTypes = {
  data: PropTypes.shape([
    {
      name: PropTypes.string,
      type: PropTypes.string,
      color: PropTypes.string,
    },
  ]).isRequired,
  rowStructure: PropTypes.shape([
    {
      key: PropTypes.string,
      align: PropTypes.string,
      padding: PropTypes.string,
    },
  ]).isRequired,
  handleOnDelete: PropTypes.func.isRequired,
  handleOnEdit: PropTypes.func.isRequired,
  isExtraSmall: PropTypes.bool.isRequired,
};

export default TableBody;
