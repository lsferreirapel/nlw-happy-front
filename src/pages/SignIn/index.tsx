/* React Imports */
import React, { MouseEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

/* Hooks */
import useAuth from '../../hooks/useAuth';

/* Styles */
import './styles.css';

import Logo from '../../assets/images/login-logo.svg';
import { FiArrowLeft } from 'react-icons/fi';


function SignIn() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn } = useAuth();
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  async function handleSignin(event: MouseEvent) {
    event.preventDefault();

    const button = event.currentTarget;

    button.setAttribute('disabled', 'disabled');

    if (email && password) {
      try {
        await signIn(email, password);
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert('Email e senha não informados!');
    }
    button.attributes.removeNamedItem('disabled');
  }

  return (
    <div className="content-wrapper">
      <div className="logo-wrapper">
        <div className="logo">
          <img src={Logo} alt="Happy logo"/>
          <div className="login-location">
            <strong>Rio Grande do Sul</strong>
            <span>Pelotas</span>
          </div>
        </div>
      </div>
      <div className="form-wrapper">
        <button type="button" className="go-back" onClick={handleGoBack}>
          <FiArrowLeft size={24} color="#15C3D6" />
        </button>
        <form className="login-form">
          <legend>Fazer login</legend>

          <label htmlFor="email">
            E-mail
            <input
              type="email"
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </label>


          <label htmlFor="password">
            Senha
            <input
              type="password"
              id="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </label>
          <div className="form-control">
            <label htmlFor="checkbox" className="checkbox"><input type="checkbox" id="checkbox"/>Lembrar-me</label>
            <span className="forgot-password">Esqueci minha senha</span>
          </div>
          <button
            disabled={false}
            onClick={handleSignin}
            className="submit-button"
            type="submit"
          >Entrar</button>
        </form>
      </div>

    </div>
  )
}

export default SignIn;
