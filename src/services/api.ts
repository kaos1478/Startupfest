import axios from 'axios'

const url = 'https://5pnnhw5h8d.execute-api.us-east-1.amazonaws.com/v1'

const api = axios.create({
  baseURL: url,
  headers: { 'x-api-key': 'gWhX2S1Qzj2SJVpFuSITV2FFBryWwCdf3T4FtAee' }
})
export default api
