import React from 'react';
import styles from './Login.module.css';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import googleLogo from '../../assets/GoogleLogo.svg';
import facebookLogo from '../../assets/FacebookLogo.svg';
import appleLogo from '../../assets/AppleLogo.svg';
import Button from '../Button/Button';
import '../Button/Button.module.css';

const schema = Yup.object().shape({
  user: Yup.string().required('Campo Obrigatório'),
  password: Yup.string().required('Senha Obrigatória'),
});

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Faça o seu Login</h1>
        <h2>
          Seja bem vindo de volta, <br />
          Sentimos sua Falta!
        </h2>
      </div>
      <Formik
        initialValues={{
          user: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.formulario}>
            <div>
              <Field
                className={styles.input}
                type="text"
                id="user"
                name="user"
                placeholder="Usuário"
              />
              {errors.user && touched.user ? (
                <div className={styles.erro}>{errors.user}</div>
              ) : null}
            </div>
            <div>
              <Field
                className={styles.input}
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
              />
              {errors.password && touched.password ? (
                <div className={styles.erro}>{errors.password}</div>
              ) : null}
            </div>
            <Link to="/" className={styles.action}>
              Esqueceu a senha ?
            </Link>
            <Button type="submit">Entrar</Button>
          </Form>
        )}
      </Formik>
      <span className={styles.span}>or</span>
      <div className={styles.linkSocials}>
        <a
          className={styles.hyperlink}
          href="https://google.com"
          target="_blank"
        >
          <img className={styles.google} src={googleLogo} alt="" />
        </a>
        <a
          className={styles.hyperlink}
          href="https://facebook.com"
          target="_blank"
        >
          <img className={styles.facebook} src={facebookLogo} alt="" />
        </a>
        <a
          className={styles.hyperlink}
          href="https://apple.com"
          target="_blank"
        >
          <img className={styles.apple} src={appleLogo} alt="" />
        </a>
      </div>
      <span className={styles.registerAction}>
        Não possui uma conta ? <Link to="/register">Cadastre-se aqui</Link>
      </span>
    </div>
  );
};

export default Login;
