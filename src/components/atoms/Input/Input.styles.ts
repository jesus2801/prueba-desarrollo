import styled from '@emotion/styled';

export const InputStyles = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid var(--grey);
  border-radius: 4px;
  outline: none;

  padding: 4px;
  transition: all 300ms ease;

  &:focus {
    border: 1px solid var(--lightBlue);

    -webkit-box-shadow: 0px 0px 4.5px 0.2px rgba(44, 171, 255, 0.64);
    -moz-box-shadow: 0px 0px 4.5px 0.2px rgba(44, 171, 255, 0.64);
    box-shadow: 0px 0px 4.5px 0.2px rgba(44, 171, 255, 0.64);
  }
`;
