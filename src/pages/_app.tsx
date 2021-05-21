import 'styles/globals.scss'
import SnackbarProvider from "react-simple-snackbar";

import Router from "next/router";

import { BottomNav } from "components/BottomNav";
import { BookProvider } from 'src/contexts/BookContext';

import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <BookProvider>
        <SnackbarProvider>
          <Component {...pageProps} />
          <BottomNav />
        </SnackbarProvider>
      </BookProvider>
    </div>
  )
}

export default MyApp
