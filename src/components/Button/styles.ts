import styled, { css } from 'styled-components'
import { IButton } from './index'

const ButtonPrimary = css`
  background: var(--color-primary);
  border: none;
  color: #ffffff;
  transition-duration: 0.5s;

  &:hover {
    background: var(--color-primary-dark);
  }
`

const ButtonSecundary = css`
  background: transparent;
  border: 2px solid var(--color-primary);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  color: var(--color-primary);
  transition-duration: 0.5s;

  &:hover {
    border: 4px solid var(--color-primary);
  }
`

const ButtonPrimaryBig = css`
  ${ButtonPrimary}
  width: 290px;
  height: 63px;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`

const ButtonSecundaryBig = css`
  ${ButtonSecundary}
  width: 290px;
  height: 63px;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`

const ButtonVariants = {
  primary: ButtonPrimary,
  secundary: ButtonSecundary,
  primaryBig: ButtonPrimaryBig,
  secundaryBig: ButtonSecundaryBig
}

export const Container = styled.button<IButton>`
  padding: 0px 10px;
  height: 32px;
  border-radius: 11px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.025em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: block;
  cursor: pointer;

  ${props => ButtonVariants[props.variant]}
`
