import styled from 'styled-components';

export const Container = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 24px;

    h1 {
      font-size: 32px;
      font-weight: bold;
      color: #4D6F80
    }

    p {
      font-size: 16px;
      font-weight: 600;
      color: #8FA7B2
    }
  }

  .line {
    width: 100%;
    border: 1px solid #D3E2E5;
  }
`;
