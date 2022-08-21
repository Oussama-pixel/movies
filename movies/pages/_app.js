import '../styles/globals.scss'
import NavBar from './Components/NavBar'
import Sidebar from './Components/Sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar/>
      <Sidebar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
