import styled from '@emotion/styled';

export const FileLiStyles = styled.li`
  box-sizing: border-box;
  width: 100%;
  padding: 15px 0 15px 15px;
  list-style: none;

  cursor: pointer;
  transition: 200ms ease all;

  &.selected {
    background-color: var(--purple);
    color: #fff;
  }

  &.no-selected {
    &:hover {
      background-color: #f6f6f6;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;
