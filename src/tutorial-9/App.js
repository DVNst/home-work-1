import React from 'react';
import UserInfo from './components/user-info/user-info';

import axios from 'axios';

import './styles.css';

function App() {
  const [userInfo, setUserInfo] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  
  const getUserInfo = async (userName) => {
    await axios.get(`https://api.github.com/users/${userName}`)
      .then(({data}) => {
        setIsError(false);
        setIsLoading(false);
        setUserInfo(data);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response && err.response.status === 404) {
          setIsError(`Пользователь ${userName} не найден`);
        }
        else {
          setIsError('Сервер github не отвечает, попробуйте позже');
        }
      });
  };

  const clickSearch = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      // console.log('ЗАГРУЗКА', e.target[0].value);
      setUserInfo({});
      setIsLoading(true);
      getUserInfo(e.target[0].value);
    };
  }

  return (
    <div className='app' id='app'>
      <div className='app-container'>
        <form className='app-form' onSubmit={clickSearch}>
          <input type='text' className='app-input' placeholder='Укажите GitHub-аккаунт' />
          <button className='app-form_btn' type='submit'>Найти</button>
        </form>
        <UserInfo userInfo={userInfo} isLoading={isLoading} isError={isError}/>
        {console.log('userInfo', userInfo)}
      </div>
    </div>
  );
}

export default App;
