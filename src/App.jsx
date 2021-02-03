import React from 'react';
import {
  CheckField,
  Header,
  InputField,
  SelectField,
  Footer,
} from './components/index';
import './App.scss';
import { CityApiService } from './services/city-api-service';

const cityApiService = new CityApiService();
const data = cityApiService.getBigCitiesOnly();

const initialState = {
  city: data[0].city,
  password: '',
  password2: '',
  email: '',
  agree: false,
  lastCommitDate: new Date(2012, 11, 15, 13, 15, 20),
  errors: [],
};

export const App = () => {
  const [logIn, setLogIn] = React.useState(initialState);

  const validateForm = ({ password, password2, email }) => {
    const errors = [];
    // Password compation
    if (password !== password2) {
      errors.push({ for: 'password2', msg: 'Пароли не совпадают' });
    }
    // No password or email error

    if (!password && !password2) {
      errors.push({ for: 'password', msg: 'Укажите пароль' });
      errors.push({ for: 'password2', msg: 'Укажите пароль' });
    }

    if (!password && password2) {
      errors.push({ for: 'password', msg: 'Укажите пароль' });
    }

    if (password && password2 && password.length < 5 && password2.length < 5) {
      errors.push({ for: 'password', msg: 'Используйте не менее 5 символов' });
    }

    if (!email) {
      errors.push({ for: 'email', msg: 'Укажите E-mail' });
    }

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email && !re.test(String(email).toLowerCase())) {
      errors.push({ for: 'email', msg: 'Неверный E-mail' });
    }

    return errors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(logIn);
    if (errors.length === 0) {
      setLogIn({ ...logIn, errors: [], lastCommitDate: new Date() });
      console.log({
        city: logIn.city,
        password: logIn.password,
        email: logIn.email,
        agree: logIn.agree,
      });
    } else {
      setLogIn({ ...logIn, errors });
    }
  };

  return (
    <div className="app-container">
      <Header name="Пользователь" />
      <form className="app-form" onSubmit={onSubmit} noValidate>
        <SelectField
          onChangeSelect={(city) => setLogIn({ ...logIn, city })}
          id="cities"
          labelText="Ваш город"
          options={data}
        />
        <hr />
        <InputField
          errors={logIn.errors}
          onChangeInput={(password) => setLogIn({ ...logIn, password })}
          value={logIn.password}
          id="password"
          type="password"
          labelText="Пароль"
          moreInfo="Ваш новый пароль должен содержать не менее 5 символов."
        />
        <InputField
          errors={logIn.errors}
          onChangeInput={(password2) => setLogIn({ ...logIn, password2 })}
          value={logIn.password2}
          id="password2"
          type="password"
          labelText="Повторите пароль"
          moreInfo="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."
        />
        <hr />
        <InputField
          errors={logIn.errors}
          onChangeInput={(email) => setLogIn({ ...logIn, email })}
          value={logIn.email}
          id="email"
          type="email"
          labelText="Электронная почта"
          moreInfo="Можно изменить адрес, указанный при регистрации."
        />
        <CheckField onChecked={(agree) => setLogIn({ ...logIn, agree })} />
        <Footer lastCommitDate={logIn.lastCommitDate} />
      </form>
    </div>
  );
};
