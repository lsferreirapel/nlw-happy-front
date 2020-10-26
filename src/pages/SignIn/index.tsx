/* React Imports */
import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

/* Hooks */
// import useAuth from '../../hooks/useAuth';

/* Styles */
import './styles.css';

import Logo from '../../assets/images/login-logo.svg';
import { FiArrowLeft } from 'react-icons/fi';


function SignIn() {
  // const { signIn } = useAuth();
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  function handleSignin(event: MouseEvent) {
    event.preventDefault();

    event.currentTarget.setAttribute('disabled', 'disabled');


    console.log('signed');
    event.currentTarget.removeAttribute('disabled');
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
          <label htmlFor="username">E-mail<input type="email" id="username" /></label>
          <label htmlFor="password">Senha<input type="password" id="password" /></label>
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
