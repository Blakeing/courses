import 'styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0'
// import Nav from 'components/Nav'

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      {/* <Nav /> */}
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
