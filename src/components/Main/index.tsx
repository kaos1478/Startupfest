import { NextPage } from 'next'
import * as Styled from './styles'

const Main: NextPage = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>
}

export default Main
