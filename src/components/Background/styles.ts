import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 77px); // Subtração do tamanho do topbar
  background-image: url('./background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1920px) {
    background: #fff;
  }
`
