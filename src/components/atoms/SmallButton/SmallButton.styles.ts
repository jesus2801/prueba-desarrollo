import styled from '@emotion/styled';

export const SmallButtonStyles = styled.button`
  padding: 6px 13px;
  border: none;
  border-radius: 6px;
  outline: none;
  color: #fff;
  background-color: ${(props: any) => props.theme.color};

  margin: ${(props: any) => props.theme.margin};
  cursor: pointer;
`;
