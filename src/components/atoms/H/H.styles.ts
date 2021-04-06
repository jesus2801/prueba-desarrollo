import styled from '@emotion/styled';

const template = `
  font-family: 'Montserrat', sans-serif;
  color: var(--black);
`;

export const H1 = styled.h1`
  ${template}
  size: ${(props: any) => props.theme.size};
  text-transform: ${(props: any) => props.theme.uppercase};
`;

export const H2 = styled.h2`
  ${template}
  size: ${(props: any) => props.theme.size};
  text-transform: ${(props: any) => props.theme.uppercase};
`;

export const H3 = styled.h3`
  ${template}
  size: ${(props: any) => props.theme.size};
  text-transform: ${(props: any) => props.theme.uppercase};
`;

export const H4 = styled.h4`
  ${template}
  size: ${(props: any) => props.theme.size};
  text-transform: ${(props: any) => props.theme.uppercase};
`;

export const H5 = styled.h5`
  ${template}
  size: ${(props: any) => props.theme.size};
  text-transform: ${(props: any) => props.theme.uppercase};
`;

export const H6 = styled.h6`
  ${template}
  size: ${(props: any) => props.theme.size};
  text-transform: ${(props: any) => props.theme.uppercase};
`;
