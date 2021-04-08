import styled from '@emotion/styled';

export const ProfileCtn = styled.div`
  img {
    width: 70px;
    cursor: pointer;

    transition: transform 300ms ease;

    &.active {
      transform: rotate(360deg);
    }
  }

  div {
    width: 180px;
    position: absolute;
    background-color: #fff;
    top: 104px;
    right: 0;

    -webkit-box-shadow: 1px 3px 4px 0px rgba(232, 232, 232, 1);
    -moz-box-shadow: 1px 3px 4px 0px rgba(232, 232, 232, 1);
    box-shadow: 1px 3px 4px 0px rgba(232, 232, 232, 1);

    opacity: 0;
    visibility: hidden;

    transition: all 200ms ease;
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      box-sizing: border-box;
      width: 100%;
      padding: 9px 15px;
      list-style: none;
      color: var(--black);

      &.click {
        cursor: pointer;

        &:hover {
          background-color: #f6f6f6;
        }
      }
    }
  }

  img.active + div {
    opacity: 1;
    visibility: visible;
  }
`;
