import 'styles/globals.scss'

import { BottomNav } from "components/BottomNav";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <BottomNav />
    </div>
  )
}

export default MyApp
