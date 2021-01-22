import styled from 'styled-components'

const SplitScreen = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    & > div:nth-child(2) {
      margin-top: 50px;
    }
  }
`

export default SplitScreen
