import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Startup: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  return <h1>{id}</h1>
}
export default Startup
