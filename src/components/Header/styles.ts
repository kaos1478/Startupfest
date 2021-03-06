import styled from 'styled-components'
import { fadein } from '../../styles/animations'
export const Container = styled.div`
  width: 100%;
  height: 284px;
  background-image: url('./abstractbkg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 90px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${fadein} 2s;

  & > h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: -0.025em;

    color: #ffffff;
  }

  & > h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: -0.025em;

    color: #ffffff;
  }
`
