import '../styles/styles.css'
import initFirebase from '../firebase/initFirebase'

initFirebase()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
