import styled from '@emotion/styled';

export const EmployeesGrid = styled.div`
  margin-top: 100px;
  width: 100%;
  grid-column: 1 / 3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .filters {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    label {
      margin-right: 20px;
    }
  }

  .table {
    margin-top: 20px;
    width: 100%;
    max-height: 430px;
    overflow-y: auto;

    div {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      padding: 15px 0;

      p {
        max-width: 200px;
        overflow-wrap: break-word;
        span {
          color: var(--black);
        }
        margin: 0;
        color: var(--black);
        text-align: center;
      }

      &:nth-of-type(2n + 1) {
        background-color: #f9f9f9;
      }

      &:hover {
        background-color: var(--purple);
        p {
          color: #fff;
        }
      }
    }
  }
`;
