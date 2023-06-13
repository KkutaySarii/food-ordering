import { Router, useRouter } from "next/router";

import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import nProgress from "nprogress";

import { store } from "@/redux/store";
import Layout from "@/components/Layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
