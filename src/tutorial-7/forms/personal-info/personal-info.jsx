import { Box, Button, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    firstName: yup.string().required('Это обязательное поле').min(2, 'минимум 2 символа'),
    lastName: yup.string(),
    email: yup.string().email('Введите корректный e-mail').required('Это обязательное поле'),
    password: yup.string().required('Это обязательное поле').min(6, 'минимум 6 символов')
  })
  .required();

const PersonalInfo = ({ clickHandleSubmit, clickBack, data }) => {
  console.log('data PersonalInfo', data);
  const myForm = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: data.firstName || '',
      lastName:  data.lastName || '',
      email:  data.email || '',
      password:  data.password || '',
      about:  data.about || '',
    },
  });
  const { handleSubmit, register, formState, reset } = myForm;

  const clickResetForm = () => {
    reset({firstName: 'Igor', lastName: '', email: '', password: '', about: ''});
  };

  const onSubmit = (values) => {
    clickHandleSubmit(values);
  };

  return (
    <Box
        component='form'
        autoComplete='off'
        sx={{my: 2, mx: 'auto', p: 2, maxWidth: 500, flexGrow: 1, bgcolor: 'background.default', '& .MuiTextField-root': { my: 1 },}}
      >
      <h2>Персональная информация</h2>
      <TextField
        {...register('firstName')}
        name='firstName'
        label='Имя'
        helperText={
          formState.errors.firstName && formState.errors.firstName.message
        }
        error={!!formState.errors.firstName}
        fullWidth
      />
      <TextField
        {...register('lastName')}
        name='lastName'
        label='Фамилия'
        helperText={formState.errors.lastName && formState.errors.lastName.message}
        error={!!formState.errors.lastName}
        fullWidth
      />

      <TextField
        {...register('email')}
        name='email'
        label='E-mail'
        helperText={formState.errors.email && formState.errors.email.message}
        error={!!formState.errors.email}
        fullWidth
      />
      <TextField
        {...register('password')}
        type='password'
        label='Пароль'
        name='password'
        helperText={formState.errors.password && formState.errors.password.message}
        error={!!formState.errors.password}
        fullWidth
      />

      <TextField
        {...register('about')}
        name='about'
        label='Обо мне'
        fullWidth
        multiline
        rows={4}
      />

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
          variant='outlined'
          color='secondary'
          startIcon={<ClearIcon />}
          onClick={clickResetForm}
        >
          Очистить
        </Button>

        <Button
          variant='contained'
          color='primary'
          endIcon={<NavigateNextIcon />}
          onClick={handleSubmit(onSubmit)}
        >
          Далее
        </Button>
      </div>
    </Box>
  );
};

export default PersonalInfo;
