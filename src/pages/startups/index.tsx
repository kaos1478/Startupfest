import { NextPage } from 'next'
import StartupList from '../../components/StartupList'
import Header from '../../components/Header'
import Content from '../../components/Content'
import AlternativeBar from '../../components/AlternativeBar'

const Startups: NextPage = () => {
  return (
    <div>
      <Header
        title="Lista de StartUps Cadastradas"
        subtitle="Hey, Não esqueça de avaliar as StartUps ;)"
        img="./abstractbkg.jpg"
      />
      <Content>
        <AlternativeBar />
        <StartupList />
      </Content>
    </div>
  )
}

export default Startups
