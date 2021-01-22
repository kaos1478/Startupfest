import { NextPage } from 'next'
import * as Styled from './styles'
import Button from '../Button'

const AlternativeBar: NextPage = () => {
  return (
    <Styled.Container>
      <Button variant="primary">Cadastrar Startup</Button>
    </Styled.Container>
  )
}
export default AlternativeBar
