import styled from '@emotion/styled';

export const StatisticsDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 118px);

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  .grid {
    width: 90%;
    height: calc(100vh - 30px - 110px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
    overflow-y: auto;

    .fourth {
      grid-row: 1 / 3;
      grid-column: 2 / 3;
    }

    .employees{
      grid-column: 1 / 3;
    }
  }
`;
