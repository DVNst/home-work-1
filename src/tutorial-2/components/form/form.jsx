import "./form.css";

const Form = () => {
  let user = {email: '', password: ''};

  function handleChangeInput(e) {
    //при изменении input меняем соответсвующее значение в user
    user[e.target.name] = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();

    //отбираем все пустые поля
    const emptyValuesForm = Object.keys(user).filter(i => user[i] === '');

    //если есть пустые поля, просим их заполнить
    if (emptyValuesForm.length) {
      alert(`Заполните поля ${emptyValuesForm.join(', ')}`);
    } else {
      console.log(user);
      e.target.reset();
      //сбрасываем значения переменных
      Object.keys(user).map(i => user[i] = '');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input onChange={handleChangeInput} type="text" name="email" placeholder="E-Mail" className="input"/><br />
      <input onChange={handleChangeInput} type="password" name="password" placeholder="Пароль" className="input"/><br />
      <button type="submit" className="btn">Войти </button>
    </form>
  );
};

export default Form;
