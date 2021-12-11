import React from "react";
import { Button, TextField, Box, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import "./styles.css";

const schema = yup.object({
  firstName: yup.string().required('Это обязательное поле').min(2, 'минимум 2 символа'),
  lastName: yup.string(),
  email: yup.string().email('Введите корректный e-mail').required('Это обязательное поле'),
  password: yup.string().required('Это обязательное поле').min(6, 'минимум 6 символов').matches(/[a-zA-Z]/, 'Только латинские буквы'),
}).required();

function App() {
  const { handleSubmit, register, formState, reset } = useForm({resolver: yupResolver(schema)});

  const onSubmit = (values) => {
    console.log("ФОРМА!", values);
    reset();
  };

  return (
    <div className="App">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ my: 2, mx: "auto", p: 2, maxWidth: 400, flexGrow: 1, '& .MuiTextField-root': { my: 1 } }}
      >
        <TextField
          {...register('firstName')}
          name="firstName"
          label="Имя"
          defaultValue=''
          helperText={formState.errors.firstName && formState.errors.firstName.message}
          error={!!formState.errors.firstName}
          fullWidth
        />
        <TextField
          {...register('lastName')}
          name="lastName"
          label="Фамилия"
          defaultValue=''
          helperText={formState.errors.lastName && formState.errors.lastName.message}
          error={!!formState.errors.lastName}
          fullWidth
        />

        <TextField
          {...register('email')}
          name="email"
          label="E-mail"
          defaultValue=''
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          fullWidth
        />
        <TextField
          {...register('password')}
          type="password"
          label="Пароль"
          name="password"
          defaultValue=''
          helperText={formState.errors.password && formState.errors.password.message}
          error={!!formState.errors.password}
          fullWidth
        />

        <TextField
          {...register('about')}
          name="about"
          label="Обо мне"
          fullWidth
          multiline
          rows={4}
        />
        
        <div className='row'>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
          >
            Зарегистрироваться
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => reset()}>
            Очистить
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default App;
