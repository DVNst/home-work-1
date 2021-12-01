import React, { Component } from 'react';
import "./profile.css"

const dateToString = (dateReg) => {
  return dateReg.toLocaleString('ru-RU', {day: 'numeric', month: 'long'}) + ' ' + dateReg.getFullYear();
};

// class Profile extends Component {
//   render() {
//     const nameUser = this.props.name.split(' ')[0]
//     const registredAt = dateToString(this.props.registredAt);

//     return (
//       <div className="profile">
//         <p className="profile__name">Привет, <b>{nameUser}!</b></p>
//         <p className="profile__date">Дата регистрации: {registredAt}</p>
//       </div>
//     );
//   }
// }

const Profile = ({name: nameUser, registredAt}) => {
  nameUser = nameUser.split(' ')[0]
  registredAt = dateToString(registredAt);

  return (
    <div className="profile">
      <p className="profile__name">Привет, <b>{nameUser}!</b></p>
      <p className="profile__date">Дата регистрации: {registredAt}</p>
    </div>
  );
};

export default Profile;