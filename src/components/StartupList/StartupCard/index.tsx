/* eslint-disable camelcase */
import { NextPage } from 'next'
import * as Styled from './styles'
import StarFi from '../../../assets/starfi.svg'
import StarUnf from '../../../assets/starunf.svg'
import Link from 'next/link'
import { IStartupCard } from '../index'
const StartupCard: NextPage<IStartupCard> = ({
  id,
  startup_name,
  category,
  city,
  thumbnail
}) => {
  return (
    <Link href={`/startups/${id}`}>
      <Styled.Container>
        <Styled.Header thumbnail={thumbnail}></Styled.Header>
        <Styled.Body>
          <Styled.Rate>
            <StarFi />
            <StarUnf />
            <StarUnf />
            <StarUnf />
            <StarUnf />
          </Styled.Rate>
          <h3>{startup_name}</h3>
          <span>Cidade: {city}</span>
          <br />
          <span>Categoria: {category}</span>
        </Styled.Body>
      </Styled.Container>
    </Link>
  )
}

export default StartupCard
