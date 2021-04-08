import styled from '@emotion/styled';

export const NavOptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 30px;

  cursor: pointer;

  p {
    text-align: center;
    line-height: 17px;
  }

  img {
    width: 50px;
    margin-bottom: 4px;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
