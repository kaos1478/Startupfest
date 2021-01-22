import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  height: 77px;
  background: #111;
  display: flex;
  flex-direction: row;
  padding: 24px;
  justify-content: center;
  align-items: center;

  & > div {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Logo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    letter-spacing: -0.025em;

    color: #ffffff;
  }
`

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 485px) {
    display: none;
  }
`

interface IMenuItem {
  acti?: boolean
}

export const MenuItem = styled.li<IMenuItem>`
  margin-left: 31px;
  & > a {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.025em;
    color: #cdcdcd;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
    ${props => props.acti && 'color: #fff;'}
  }
`

export const Burger = styled.div`
  display: flex;
  flex-direction: column;
  display: none;

  @media screen and (max-width: 485px) {
    display: block;
  }

  div {
    width: 40px;
    height: 5px;
    background: #fff;
    margin-bottom: 5px;
    border-radius: 2px;
  }
`
