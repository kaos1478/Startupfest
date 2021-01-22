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

interface IMenu {
  menuToggle: boolean
}

export const Menu = styled.ul<IMenu>`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 485px) {
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 0;
    height: calc(100vh - 77px);
    width: 50%;
    background: #111;
    padding-right: 50px;
    display: none;
    ${props => props.menuToggle && 'display: flex'}
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

  @media screen and (max-width: 485px) {
    width: 100%;
    display: block;

    & > a {
      display: block;
      font-style: normal;
      font-weight: 300;
      font-size: 25px;
      line-height: 40px;
      text-align: center;
      margin-top: 20px;
    }

    & > button {
      margin-top: 20px;
    }
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
