import { useState } from 'react';
import { Paper, Box, Typography, FormControl, InputLabel, OutlinedInput, FormHelperText, TextField, Button } from '@mui/material';

const dateToString = (dateFeedback) => {
  return dateFeedback.toLocaleString('en-GB', {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit'})
    .replace(/[,]/g, '');
};

const Feedback = ({sendFeedback}) => {
  const [inputErrors, setInputErrors] = useState({fullName: false, email: false, text: false});
  const [feedback, setFeedback] = useState({fullName: '', email: '', text: ''});

  const handleChangeInput = (e) => {
    setFeedback({...feedback, [e.target.name]: e.target.value.trim()});
    if (feedback[e.target.name]) {
      setInputErrors({ ...inputErrors, [e.target.name]: false});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback);

    let isValidForm = true;
    Object.keys(feedback).forEach((key) => {
      if (!feedback[key]) {
        setInputErrors((prevState) => ({ ...prevState, [key]: true}));
        isValidForm = false
      }
    });

    if (isValidForm) {
      const newFeedback = {...feedback, createdAt: dateToString(new Date(Date.now()))};
      setFeedback({fullName: '', email: '', text: ''});
      sendFeedback(newFeedback);
    }
  };

  return (
    <Paper sx={{ my: 2, mx: 'auto', p: 2, maxWidth: 400, flexGrow: 1 }}>
      <Typography sx={{ m: 1, textAlign: 'left', fontWeight: 'bold' }} variant='h5' component='h2'>
        Обратная связь:
      </Typography>
      <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit}>
        <FormControl sx={{ my: 0, mx: 'auto', width: '100%' }}>
          <InputLabel htmlFor='fullName' error={inputErrors.fullName}>
            Имя
          </InputLabel>
          <OutlinedInput id='fullName' name='fullName' onChange={handleChangeInput} error={inputErrors.fullName} value={feedback.fullName}/>
          <FormHelperText error={inputErrors.fullName} id='errorFullName'>{inputErrors.fullName ? 'Введите Имя' : ' '}</FormHelperText>
        </FormControl>

        <FormControl sx={{ my: 0, mx: 'auto', width: '100%' }}>
          <InputLabel htmlFor='email' error={inputErrors.email}>
            Почта
          </InputLabel>
          <OutlinedInput type='email' id='email' name='email' onChange={handleChangeInput} error={inputErrors.email} value={feedback.email}/>
          <FormHelperText error={inputErrors.email} id='errorEmail'>{inputErrors.email ? 'Введите email' : ' '}</FormHelperText>
        </FormControl>

        <TextField sx={{ my: 0, mx: 'auto', width: '100%' }} multiline rows={4} id='text'
          name='text'
          label='Текст...'
          value={feedback.text}
          onChange={handleChangeInput}
          helperText={inputErrors.text ? 'Напишите отзыв' : ' '}
          error={inputErrors.text}
        />
        <Button sx={{ m: 1, mx: 'auto', width: '100%' }} variant='contained' type='submit'>Отправить</Button>
      </Box>
    </Paper>
  );
};

export default Feedback;
