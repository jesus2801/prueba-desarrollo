import styled from '@emotion/styled';

export const SideBarDiv = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 270px;
  min-width: 270px;
  height: calc(100vh - 118px);

  -webkit-box-shadow: 2px 6px 6px 0px rgba(232, 232, 232, 1);
  -moz-box-shadow: 2px 6px 6px 0px rgba(232, 232, 232, 1);
  box-shadow: 2px 6px 6px 0px rgba(232, 232, 232, 1);
  z-index: 2;

  overflow: hidden;

  object {
    margin-top: 60px;
    width: 140px;
  }

  .m-bottom {
    margin-bottom: 20px;
  }

  .files-ctn {
    margin-top: 20px;
    box-sizing: border-box;
    width: 100%;
  }
`;
