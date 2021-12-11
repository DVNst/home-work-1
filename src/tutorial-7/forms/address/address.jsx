import { Box, Button, TextField } from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    city: yup.string().required('Введите название города').min(2, 'минимум 2 символа'),
    street: yup.string().required('Введите название улицы'),
    home: yup.string().required('Введите номер дома'),
  })
  .required();

const Address = ({clickHandleSubmit, clickBack, data}) => {
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      city: data.city || '',
      street: data.street || '',
      home: data.home || '',
    },
  });

  const clickResetForm = () => {
    reset({city: '', street: '', home: ''});
  };

  const onSubmit = (values) => {
    clickHandleSubmit(values);
    clickResetForm();
  };

  return (
    <Box
        component='form'
        autoComplete='off'
        sx={{my: 2, mx: 'auto', p: 2, maxWidth: 500, flexGrow: 1, bgcolor: 'background.default', '& .MuiTextField-root': { my: 1 },}}
      >
      <h2>Адрес</h2>
      <TextField
        {...register('city')}
        name='city'
        label='Город'
        helperText={formState.errors.city && formState.errors.city.message}
        error={!!formState.errors.city}
        fullWidth
      />
      <TextField
        {...register('street')}
        name='street'
        label='Улица'
        helperText={formState.errors.street && formState.errors.street.message}
        error={!!formState.errors.street}
        fullWidth
      />

      <TextField
        {...register('home')}
        name='home'
        label='Дом'
        helperText={formState.errors.home && formState.errors.home.message}
        error={!!formState.errors.home}
        fullWidth
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
          Зарегистрироваться
        </Button>
      </div>
    </Box>
  );
};

export default Address;
