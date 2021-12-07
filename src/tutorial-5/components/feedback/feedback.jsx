import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Box, Typography, FormControl, InputLabel, OutlinedInput, FormHelperText, TextField, Button } from '@mui/material';

const dateToString = (dateFeedback) => {
  return dateFeedback
    .toLocaleString('en-GB', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
    })
    .replace(/[,]/g, '');
};

let feedback = { fullName: '', email: '', createdAt: ' ', text: '' };

const Feedback = ({sendFeedback}) => {
  const [inputError, setInputError] = useState({fullName: false, email: false, text: false});

  const handleChangeInput = (e) => {
    feedback[e.target.name] = e.target.value.trim();
    if (feedback[e.target.name]) {
      setInputError((prevState) => ({ ...prevState, [e.target.name]: false}));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValidForm = true;
    Object.keys(feedback).forEach((key) => {
      if (!feedback[key]) {
        setInputError((prevState) => ({ ...prevState, [key]: true}));
        isValidForm = false
      }
    });

    if (isValidForm) {
      let newFeedback = {...feedback, createdAt: dateToString(new Date(Date.now()))};
      e.target.reset();
      feedback = { fullName: '', email: '', createdAt: ' ', text: '' };
      sendFeedback(newFeedback);
    }
  };

  return (
    <Paper sx={{ my: 2, mx: 'auto', p: 2, maxWidth: 400, flexGrow: 1 }}>
      <Typography
        sx={{ m: 1, textAlign: 'left', fontWeight: 'bold' }}
        variant='h5'
        component='h2'
      >
        Обратная связь:
      </Typography>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <FormControl sx={{ my: 0, mx: 'auto', width: '100%' }}>
          <InputLabel htmlFor='fullName' error={inputError.fullName}>
            Имя
          </InputLabel>
          <OutlinedInput
            id='fullName'
            name='fullName'
            onChange={handleChangeInput}
            error={inputError.fullName}
          />
          <FormHelperText error={inputError.fullName} id='errorFullName'>{inputError.fullName ? 'Введите Имя' : ' '}</FormHelperText>
        </FormControl>

        <FormControl sx={{ my: 0, mx: 'auto', width: '100%' }}>
          <InputLabel htmlFor='email' error={inputError.email}>Почта</InputLabel>
          <OutlinedInput
            type='email'
            id='email'
            name='email'
            onChange={handleChangeInput}
            error={inputError.email}
          />
          <FormHelperText error={inputError.email} id='errorEmail'>{inputError.email ? 'Введите email' : ' '}</FormHelperText>
        </FormControl>

        <TextField
          sx={{ my: 0, mx: 'auto', width: '100%' }}
          id='text'
          name='text'
          label='Текст...'
          multiline
          rows={4}
          onChange={handleChangeInput}
          helperText={inputError.text ? 'Напишите отзыв' : ' '}
          error={inputError.text}
        />
        <Button
          sx={{ m: 1, mx: 'auto', width: '100%' }}
          variant='contained'
          type='submit'
        >
          Отправить
        </Button>
      </Box>
    </Paper>
  );
};

export default Feedback;
