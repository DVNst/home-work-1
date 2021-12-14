import React, { useState } from "react";
import { Paper, Button } from "@mui/material";

import PersonalInfo from "../../forms/personal-info/personal-info";

const Form = () => {
  const [users, setUsers] = useState([]);

  const  getUsers = async () => {
    await fetch('https://61b60621c95dd70017d40df3.mockapi.io/users')
      .then(response => {
        if (response.status === 200) {
          console.log('Загрузка данных завершена');
          return response.json();
        } else {
          throw new Error(response.status);
        }})
        .then(result => setUsers(result))
        .catch(error => console.log('EROR', error));
  };

  return (
    <Paper component="div" elevation={3} sx={{my: 2, mx: "auto", p: 4, maxWidth: 500, bgcolor: "background.default"}}>
      <Button variant="contained" color="primary" onClick={getUsers} fullWidth>
        Получить данные
      </Button>

      <PersonalInfo users={users} />
    </Paper>
  );
};

export default Form;
