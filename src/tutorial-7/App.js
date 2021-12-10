import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Box, Grid } from "@mui/material";

import "./styles.css";

function App() {
  const { handleSubmit, register, formState, reset } = useForm();

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
          name="firstName"
          label="Имя"
          {...register("firstName", {
            validate: (value) => value !== "admin" || "Nice try!",
          })}
          helperText={
            formState.errors.firstName && formState.errors.firstName.message
          }
          error={!!formState.errors.firstName}
          fullWidth
        />
        <TextField
          name="lastName"
          label="Фамилия"
          {...register("lastName", {
            required: "Это обязательное поле!",
          })}
          helperText={
            formState.errors.lastName && formState.errors.lastName.message
          }
          error={!!formState.errors.lastName}
          fullWidth
        />

        <TextField
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
              message: "Это неверная почта!",
            },
          })}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          name="email"
          label="E-Mail"
          defaultValue=""
          fullWidth
        />
        <TextField
          {...register("password", {
            required: "Это обязательное поле!",
          })}
          helperText={
            formState.errors.password && formState.errors.password.message
          }
          error={!!formState.errors.password}
          name="password"
          type="password"
          label="Пароль"
          fullWidth
        />

        <TextField
          name="about"
          label="Обо мне"
          fullWidth
          multiline
          rows={4}
        />
        
        <div className='row'>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="primary"
          >
            Зарегистрироваться
          </Button>

          <Button variant="contained" color="secondary" onClick={() => reset()}>
            Очистить
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default App;
