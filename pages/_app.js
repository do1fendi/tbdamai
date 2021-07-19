import Layout from "../components/Layout";
import "../styles/index.css";
// import 'tailwindcss/tailwind.css'
import StoreContextProvider from "../store/store";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <StoreContextProvider>
      <Layout>
        <Component {...pageProps} />
        <MessengerCustomerChat
          pageId={process.env.FACEBOOK_PAGE_ID}
          appId={process.env.FACEBOOK_APP_ID}
        />
      </Layout>
    </StoreContextProvider>
  );
}

export default MyApp;
