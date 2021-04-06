import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import ButtonSubmit from '../../components/atoms/ButtonSubmit/ButtonSubmit';
import H from '../../components/atoms/H/H';
import Input from '../../components/atoms/Input/Input';
import FormGroup from '../../components/molecules/FormGroup/FormGroup';
import { axiosClient } from '../../config/axios';
import { authToken, showError } from '../../functions';
import { isEmpty, isEmail } from '../../functions/validate';
import { AuthForm } from '../../styles/pages/auth';

const login = () => {
  const [data, setData] = useState({
    mail: '',
    pass: '',
  });

  const router = useRouter();

  const { mail, pass } = data;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEmpty(mail, pass)) {
      showError('Por favor rellene correctamente todos los campos');
      return;
    }

    if (!isEmail(mail)) {
      showError('Por favor ingrese un correo válido');
      return;
    }

    if (pass.length < 6) {
      showError(
        'Por favor ingrese una contraseña de 6 carácteres mínimo'
      );
      return;
    }

    try {
      const response = await axiosClient.post('/auth/login', data);
      localStorage.setItem('token', response.data.token);
      authToken(response.data.token);

      router.push('/app');
    } catch (e) {
      if (e.response.status === 400) {
        showError(e.response.data.errors[0].msg);
        return;
      }
      showError('Lo sentimos ha ocurrido un error, intente más tarde');
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <H type="h1" uppercase={true}>
        Bienvenido
      </H>

      <FormGroup label="Email:" htmlFor="mail">
        <Input
          type="text"
          placeholder="Ingresa tu email"
          onChange={handleChange}
          id="mail"
          value={mail}
        />
      </FormGroup>

      <FormGroup label="Contraseña:" htmlFor="pass">
        <Input
          type="password"
          placeholder="Ingresa tu contraseña"
          onChange={handleChange}
          id="pass"
          value={pass}
        />
      </FormGroup>

      <ButtonSubmit type="submit">Ingresar</ButtonSubmit>

      <Link href="/auth/signup">¿No tienes cuenta?</Link>
    </AuthForm>
  );
};

export default login;
