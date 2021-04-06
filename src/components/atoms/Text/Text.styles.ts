import styled from '@emotion/styled';

export const TextParagraph = styled.p`
  box-sizing: border-box;
  font-size: ${(props: any) => props.theme.size};
  width: 100%;

  line-height: 20px;
  color: ${(props: any) => props.theme.color};
  margin: ${(props: any) => props.theme.margin};
`;
