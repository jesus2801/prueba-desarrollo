import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import ButtonSubmit from '../../components/atoms/ButtonSubmit/ButtonSubmit';
import H from '../../components/atoms/H/H';
import Input from '../../components/atoms/Input/Input';
import FormGroup from '../../components/molecules/FormGroup/FormGroup';
import { axiosClient } from '../../config/axios';
import { authToken, showError } from '../../functions';
import { isEmail, isEmpty } from '../../functions/validate';
import { AuthForm } from '../../styles/pages/auth';

const signup = () => {
  const [data, setData] = useState({
    mail: '',
    pass: '',
    pass2: '',
  });

  const { mail, pass, pass2 } = data;

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEmpty(mail, pass, pass2)) {
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

    if (pass.trim() !== pass2.trim()) {
      showError('Las contraseñas ingresadas no coinciden');
      return;
    }

    try {
      const response = await axiosClient.post('/auth/signup', {
        mail,
        pass,
      });
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
      <H type="h1" uppercase={true} size="30px">
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

      <FormGroup label="Repite la contraseña:" htmlFor="pass2">
        <Input
          type="password"
          placeholder="Repite tu contraseña"
          onChange={handleChange}
          id="pass2"
          value={pass2}
        />
      </FormGroup>

      <ButtonSubmit type="submit">Registrarme</ButtonSubmit>

      <Link href="/auth/login">¿Ya tienes cuenta?</Link>
    </AuthForm>
  );
};

export default signup;
