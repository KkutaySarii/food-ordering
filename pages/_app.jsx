import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

import { store } from "@/redux/store";
import Layout from "@/components/Layout";

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
