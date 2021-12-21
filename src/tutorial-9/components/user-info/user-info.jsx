import Spinner from '../spinner/spinner';

const UserInfo = ({ userInfo, isLoading, isError }) => {
  const divisionThousands = (n) => {
    if (n >= 1000000) {
      return (`${(n / 1000000).toFixed(1)}кк`);
    } else if (n >= 1000) {
      return (`${(n / 1000).toFixed(1)}к`);
    };
    return n;
  };

  return (
    <div className='app-user'>
      {userInfo && (
        <>
          <div className='app-user_info'>
            <div className='app-user_image'>
              <img src={userInfo.avatar_url} alt='' width='90px' height='90px' />
            </div>
            <div className='app-user_data'>
              <h1 className='app-user_name'>
                {userInfo.name}
                <span><a href={userInfo.html_url} target='_blank' rel='noreferrer'>@{userInfo.login.toLowerCase()}</a></span>
              </h1>
              <p className='app-user_about'>
                {userInfo.bio}
              </p>
            </div>
          </div>
          <ul className='app-user_stats'>
            <li className='app-user_stats-item'>
              Репозитории &nbsp;
              <span>{divisionThousands(userInfo.public_repos)}</span>
            </li>
            <li className='app-user_stats-item'>
              Подписчиков &nbsp;
              <span>{divisionThousands(userInfo.followers)}</span>
            </li>
            <li className='app-user_stats-item'>
              Подписан &nbsp;
              <span>{divisionThousands(userInfo.following)}</span>
            </li>
          </ul>
          <ul className='app-user_location'>
            <li className='app-user_location-item'>{userInfo.location}</li>
            <li className='app-user_location-item'>
              <a href={userInfo.blog} target='_blank' rel='noreferrer'>{userInfo.blog}</a>
            </li>
          </ul>
        </>)}
        {isLoading && <Spinner />}
        {isError && <p1>{isError}</p1>}
    </div>
  );
};

export default UserInfo;

