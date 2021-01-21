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
`

export const MenuItem = styled.li`
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
  }
`
