import Link from 'next/link';
import React from 'react';

import H from '../../atoms/H/H';
import SmallButton from '../../atoms/SmallButton/SmallButton';
import Text from '../../atoms/Text/Text';
import { InfoDiv } from './Info.styles';

const Info = () => {
  return (
    <InfoDiv>
      <H type="h1" uppercase={true}>
        Prueba de desarrollo
      </H>
      <Text type="main" margin="0 0 20px 0">
        Prueba de desarrollo para la empresa SORAERP, producida y probada
        por mi persona Jesús García. Aplicativo que conciste en abarcar
        estadisticas, relaciones y diferentes acciones sobre datos
        almacenados por el usuario
      </Text>
      <div className="buttons">
        <Link href="/auth/login">
          <a>
            <SmallButton color="var(--purple)" margin="0 10px 0 0">
              Ingresar
            </SmallButton>
          </a>
        </Link>

        <Link href="/auth/signup">
          <a>
            <SmallButton color="var(--black)" margin="0">
              registrarse
            </SmallButton>
          </a>
        </Link>
      </div>
    </InfoDiv>
  );
};

export default Info;
