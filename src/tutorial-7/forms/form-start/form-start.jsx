import React from 'react';
import { Paper, Button } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

const FormStart = ({ clicStart }) => {
  return (
    <Paper
      elevation={2}
      sx={{my: 2, mx: 'auto', p: 2, maxWidth: 500, flexGrow: 1, bgcolor: 'background.default', '& .MuiTextField-root': { my: 1 },}}
    >
      <h1>Заполнить форму</h1>
      <Button 
        variant='contained'
        color='primary'
        size="large"
        fullWidth
        startIcon={<DirectionsRunIcon />}
        onClick={() => {
          console.log('CLICK START');
          clicStart();
        }}
      >
        Начать
      </Button>
    </Paper>
  )
}

export default FormStart;