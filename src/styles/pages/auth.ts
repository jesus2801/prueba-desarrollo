import styled from '@emotion/styled';

export const AuthForm = styled.form`
  box-sizing: border-box;
  margin: 100px auto 0 auto;
  width: 91%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: 1px 5px 9px 0px rgba(224, 224, 224, 1);
  -moz-box-shadow: 1px 5px 9px 0px rgba(224, 224, 224, 1);
  box-shadow: 1px 5px 9px 0px rgba(224, 224, 224, 1);

  a {
    margin-top: 16px;
    color: var(--black);
  }
`;
