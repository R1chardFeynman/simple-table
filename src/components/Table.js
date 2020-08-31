import React, { useState, useEffect } from 'react';
import { Table as MuiTable, useMediaQuery } from '@material-ui/core';
import Popup from 'components/Popup';
import TableHead from 'components/TableHead/TableHead';
import TableBody from 'components/TableBody';

const Table = () => {
  const popupInitialState = {
    isOpen: false,
    type: '',
    element: null,
  };

  const [data, setData] = useState([]);
  const [popupData, setPopupData] = useState(popupInitialState);

  // Get data from local storage if there's any
  useEffect(() => {
    const jsonData = localStorage.getItem('data');
    if (jsonData) {
      const parsedData = JSON.parse(jsonData);
      setData(parsedData);
    }
  }, []);
  // Write data to local storage at any data change
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);
  // Boolean needed for extra small width devices' styles
  const isExtraSmall = useMediaQuery('(max-width: 380px');

  // === Popup related functions ===
  const resetPopupData = () => {
    setPopupData(popupInitialState);
  };
  const openPopup = (type, element) => {
    setPopupData({
      ...popupData,
      type,
      isOpen: true,
      element: element || null,
    });
  };
  const handlePopupOnClose = resetPopupData;
  const handlePopupOnEdit = (editedElement) => {
    const newData = [...data];
    const elementToEditIndex = newData.findIndex((el) => {
      return el.name === popupData.element.name;
    });
    newData[elementToEditIndex] = editedElement;
    setData(newData);
    handlePopupOnClose();
  };
  const handlePopupOnAdd = (newEl) => {
    setData([...data, newEl]);
  };
  // === END Popup related functions END ===

  // === Functions related to Add/Edit/Delete actions ===
  const handleOnEdit = (element) => {
    openPopup('edit', element);
  };
  const handleOnAdd = () => {
    openPopup('add');
  };

  const handleOnDelete = (row) => {
    setData(data.filter((el) => el.name !== row.name));
  };
  // === END Functions related to Add/Edit/Delete actions END ===

  const columns = [
    {
      title: 'Name',
    },
    {
      title: 'Type',
      align: 'right',
    },
    {
      title: 'Color',
      align: 'right',
    },
    {
      title: 'Actions',
      align: 'center',
    },
  ];

  const actions = [
    {
      type: 'add',
      handleOnClick: handleOnAdd,
    },
  ];

  const rowStructure = [
    {
      key: 'name',
    },
    {
      key: 'type',
      align: 'right',
    },
    {
      key: 'color',
      align: 'right',
    },
  ];

  return (
    <MuiTable>
      <Popup
        elementToEdit={popupData.element}
        handleOnClose={handlePopupOnClose}
        handleOnAdd={handlePopupOnAdd}
        handleOnEdit={handlePopupOnEdit}
        open={popupData.isOpen}
        type={popupData.type}
        isExtraSmall={isExtraSmall}
      />
      <TableHead
        columns={columns}
        actions={actions}
        isExtraSmall={isExtraSmall}
      />
      <TableBody
        isExtraSmall={isExtraSmall}
        data={data}
        rowStructure={rowStructure}
        handleOnEdit={handleOnEdit}
        handleOnDelete={handleOnDelete}
      />
    </MuiTable>
  );
};

export default Table;
