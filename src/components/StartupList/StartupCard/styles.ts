import styled from 'styled-components'
import { fadeFromLeft } from '../../../styles/animations'

export const Container = styled.div`
  width: 310px;
  height: 475px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: grid;
  grid-template-rows: 307px 1fr;
  margin: 20px;
  cursor: pointer;
  animation: ${fadeFromLeft} 1s;
  @media screen and (max-width: 512px) {
    margin: 20px 0px;
  }
`

interface IHeader {
  thumbnail: string
}

export const Header = styled.div<IHeader>`
  width: 100%;
  height: 307px;
  background-image: url(${props => props.thumbnail}), url('/imgnotfound.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: grayscale(100%);
  transition-duration: 0.5s;

  &:hover {
    filter: grayscale(0%);
  }
`

export const Rate = styled.div`
  width: 111px;
  height: 27px;
  position: absolute;
  right: 0px;
  bottom: 168px;
  background: rgba(255, 255, 255, 0.5);
  padding: 3px;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 1px;
  }
`

export const Body = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 25px;

  & > h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.025em;
    text-align: center;

    color: #000000;
    margin-bottom: 20px;
  }

  & > br {
    height: 20px;
  }

  & > span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 35px;
    letter-spacing: -0.025em;
    padding-bottom: 5px;

    color: #000000;
  }
`
