import { Paper, Button, TextField } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ReplayIcon from '@mui/icons-material/Replay';

const Result = ({clickBack, clickReplay, data}) => {
  return (
    <Paper
      elevation={2}
      sx={{my: 2, mx: 'auto', p: 2, maxWidth: 500, flexGrow: 1, bgcolor: 'background.default', '& .MuiTextField-root': { my: 1 },}}
    >
      <h2>Персональная информация</h2>
      <ul>
        <li>{data.firstName}</li>
        <li>{data.lastName}</li>
        <li>{data.email}</li>
        <li>{data.password}</li>
        <li>{data.about}</li>
      </ul>
      <hr></hr>
      <h2>Адрес</h2>
      <ul>
        <li>{data.city}</li>
        <li>{data.street}</li>
        <li>{data.home}</li>
      </ul>

      <div className='row'>
        <Button
          variant='contained'
          color='secondary'
          startIcon={<ArrowBackIosIcon />}
          onClick={clickBack}
        >
          Назад
        </Button>

        <Button
          variant='contained'
          color='primary'
          endIcon={<ReplayIcon />}
          onClick={clickReplay}
        >
          Заново
        </Button>
      </div>
    </Paper>
  );
};

export default Result;
