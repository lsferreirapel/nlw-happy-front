import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 300px;
  min-width: 550px;
  border-radius: 20px;
  border: 1px solid #D3E2E5;
  margin-top: 40px;

  background-color: #FFF;

  overflow: hidden;

  .description {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 82px;
    border-top: 1px solid #DDE3F0;
    padding: 0 40px;

    h2 {
      font-size: 24px;
      font-weight: bold;
      color: #4D6F80;
    }

    .icons {
      display: flex;
      justify-content: space-between;
      width: 106px;

      button {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 48px;
        height: 48px;
        border: none;
        border-radius: 16px;

        background-color: #EBF2F5;

        cursor: pointer;
      }

      svg {
        color: #15C3D6;
      }
    }

    .icon {
      button {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 48px;
        height: 48px;
        border: none;
        border-radius: 16px;

        background-color: #EBF2F5;

        cursor: pointer;
      }

      svg {
        color: #15C3D6;
      }
    }
  }
`;
