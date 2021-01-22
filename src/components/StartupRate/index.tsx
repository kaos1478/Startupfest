import { NextPage } from 'next'
import * as Styled from './styles'
import StarFi from '../../assets/starfi.svg'
import StarUnf from '../../assets/starunf.svg'

const StartupRate: NextPage = () => {
  return (
    <Styled.Container>
      <h1>Avalie esta Startup</h1>

      <span>
        Proposta <StarFi />
        <StarUnf />
        <StarUnf />
        <StarUnf />
        <StarUnf />
      </span>
      <span>
        Apresentação <StarFi />
        <StarUnf />
        <StarUnf />
        <StarUnf />
        <StarUnf />
      </span>
    </Styled.Container>
  )
}

export default StartupRate
