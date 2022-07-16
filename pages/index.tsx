import type { NextPage } from 'next'
import Bookmarks from '../components/bookmarks'
// import CategoryList from '../components'
import Layout from './styled'

const Home: NextPage = () => {
  return (
  <>
  <Layout>
    <Bookmarks />
  </Layout>
  </>
  )
}

export default Home
