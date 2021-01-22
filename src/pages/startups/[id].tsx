/* eslint-disable camelcase */
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import Header from '../../components/Header'
import Content from '../../components/Content'
import StartupDetails from '../../components/StartupDetails'
import SplitScreen from '../../components/SplitScreen'
import StartupRate from '../../components/StartupRate'

interface IStartup {
  startup_name: string
  category: string
  city: string
  thumbnail: string
  description: string
}

const Startup: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [startup, setStartup] = useState<IStartup>({} as IStartup)

  useEffect(() => {
    api.get(`/${id}`).then(res => {
      setStartup(res.data)
    })
  }, [id])

  return (
    <>
      <Header img={startup && startup.thumbnail} />
      <Content>
        <SplitScreen>
          {startup && (
            <StartupDetails
              name={startup.startup_name}
              city={startup.city}
              category={startup.category}
              description={startup.description}
            />
          )}
          <StartupRate />
        </SplitScreen>
      </Content>
    </>
  )
}
export default Startup
