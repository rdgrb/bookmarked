import 'styles/globals.scss'

import { BottomNav } from "components/BottomNav";
import { BookProvider } from 'src/contexts/BookContext';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <BookProvider>
        <Component {...pageProps} />
        <BottomNav />
      </BookProvider>
    </div>
  )
}

export default MyApp
