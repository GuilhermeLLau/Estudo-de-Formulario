import React from 'react';
import styles from './Register.module.css';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../Button/Button';
import '../Button/Button.module.css';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo Obrigatório'),
  bussinesName: Yup.string().required('Campo Obrigatório'),
  password: Yup.string().required('Senha Obrigatória'),
  phone: Yup.number().required('Número Inválido'),
  email: Yup.string().email('Email Inválido').required('Campo Obrigatório'),
});

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.header}>
        <h1>
          Vamos faz o seu <br /> Cadastro
        </h1>
        <h2>Seja bem vindo, esperamos que você tenha uma ótima experiência</h2>
      </div>
      <Formik
        initialValues={{
          name: '',
          bussinesName: '',
          phone: '',
          email: '',
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
                id="name"
                type="text"
                placeholder="Nome"
                name="name"
              />
              {errors.name && touched.name ? (
                <div className={styles.erro}>{errors.name}</div>
              ) : null}
            </div>
            <div>
              <Field
                className={styles.input}
                id="bussinesName"
                type="text"
                placeholder="Sobrenome"
                name="bussinesName"
              />
              {errors.bussinesName && touched.bussinesName ? (
                <div className={styles.erro}>{errors.bussinesName}</div>
              ) : null}
            </div>
            <div>
              <Field
                className={styles.input}
                id="phone"
                type="number"
                placeholder="Celular"
                name="phone"
              />
              {errors.phone && touched.phone ? (
                <div className={styles.erro}>{errors.phone}</div>
              ) : null}
            </div>
            <div>
              <Field
                className={styles.input}
                id="email"
                type="text"
                placeholder="Email"
                name="email"
              />
              {errors.email && touched.email ? (
                <div className={styles.erro}>{errors.email}</div>
              ) : null}
            </div>
            <div>
              <Field
                className={styles.input}
                id="password"
                type="password"
                placeholder="Senha"
                name="password"
              />
              {errors.password && touched.password ? (
                <div className={styles.erro}>{errors.password}</div>
              ) : null}
            </div>
            <Button type="submit">Entrar</Button>
          </Form>
        )}
      </Formik>
      <span className={styles.registerAction}>
        Já possui uma Conta ? <Link to="/login">Entre aqui</Link>
      </span>
    </div>
  );
};

export default Register;
