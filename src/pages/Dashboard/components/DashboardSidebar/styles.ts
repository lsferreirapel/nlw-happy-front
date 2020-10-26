import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  padding: 32px 24px;

  background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);

  img {
    width: 48px;
    height: 56px;
  }

  .center-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 115px;
  }

  footer {

  }
`;

export const SidebarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  border-radius: 18px;
  border: none;

  background-color: #12AFCB;

  transition: all .2s;
  cursor: pointer;

  svg {
    color: #FFF;

    transition: all .2s;
  }

  &:hover {
    background-color: #FFD666;

    svg {
      color: #0089A5;
    }
  }

  &.active {
    background-color: #FFD666;

    svg {
      color: #0089A5;
    }
  }
`;
