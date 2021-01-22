import { NextPage } from 'next'
import * as Styled from './styles'

interface IStartupDetails {
  name: string
  city: string
  category: string
  description: string
}

const StartupDetails: NextPage<IStartupDetails> = ({
  name,
  city,
  category,
  description
}) => {
  return (
    <Styled.Container>
      <h1>{name}</h1>
      <span>Cidade: {city}</span>
      <br />
      <span>Categoria: {category}</span>
      <br />
      <br />
      <br />
      <h2>Descrição: </h2>
      <span>{description}</span>
    </Styled.Container>
  )
}

export default StartupDetails
