import { NextPage } from 'next'
import * as Styled from './styles'

const Container: NextPage = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>
}

export default Container
