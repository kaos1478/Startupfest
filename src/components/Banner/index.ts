import styled from 'styled-components'
import { fadeFromLeft } from '../../styles/animations'

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: ${fadeFromLeft} 1s;

  & > div:nth-child(1) {
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.025em;
    margin-bottom: 96px;
  }

  & > div:nth-child(2) {
    & > div {
      width: 50px;
      height: 50px;
    }

    display: flex;
    justify-content: space-between;
    width: 70%;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export default Banner
