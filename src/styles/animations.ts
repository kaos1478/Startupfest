import { keyframes } from 'styled-components'

export const fadeFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  } to {
    opacity: 1;
    transform: translateX(0px);
  }
`

export const fadein = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`
