import React from 'react';
import Table from 'components/Table';
import { Box } from '@material-ui/core';

function App() {
  return (
    <div>
      <Box
        width={{ xs: '100%', sm: '60%', md: '35%', lg: '30%' }}
        margin="0 auto"
        border="1px solid rgba(224, 224, 224, 1)"
        borderRadius="5px"
        boxSizing="border-box"
      >
        <Table />
      </Box>
    </div>
  );
}

export default App;
