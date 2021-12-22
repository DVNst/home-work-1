import React from 'react';
import UserInfo from './components/user-info/user-info';

import axios from 'axios';

import './styles.css';

function App() {
  const { pathname } = window.location;
  const [userInfo, setUserInfo] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    if (pathname.startsWith('/login=') && pathname.slice(7) !== '') {
      getUserInfo(pathname.slice(7));
    }
  }, []);

  const getUserInfo = (userName) => {
    setUserInfo(null);
    setIsLoading(true);
    axios.get(`https://api.github.com/users/${userName}`)
      .then(({ data }) => {
        setIsError(false);
        setIsLoading(false);
        setUserInfo(data);
        window.history.pushState('', '', `login=${userName}`);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response && err.response.status === 404) {
          setIsError(`Пользователь ${userName} не найден`);
          window.history.pushState('', '', `login=${userName}`);
        }
        else {
          setIsError('Сервер github не отвечает, попробуйте позже');
        }
      });
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (e.target[0].value.trim()) {
      getUserInfo(e.target[0].value.trim());
    };
  }

  const handleInputSearch = (e) => {
    // console.log(e.target.value.trim());
  }

  return (
    <div className='app' id='app'>
      <div className='app-container'>
        <form className='app-form' onSubmit={handleSubmitSearch}>
          <input onChange={handleInputSearch} type='text' className='app-input' placeholder='Укажите GitHub-аккаунт' />
          <button className='app-form_btn' type='submit'>Найти</button>
        </form>
        <UserInfo userInfo={userInfo} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
}

export default App;
