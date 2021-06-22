import Layout from '../components/Layout'
// import '../styles/index.css'
import 'tailwindcss/tailwind.css'
import StoreContextProvider from '../store/store'

function MyApp({ Component, pageProps }) {
  return (
    <StoreContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreContextProvider>
  )
}

export default MyApp
