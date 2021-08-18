import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import { useEffect, useContext } from "react";
import { StoreContext } from "../store/store";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from 'next/script'

export default function Layout({ children }) {
  const ctx = useContext(StoreContext);
  const router = useRouter();
  useEffect(() => {
    // console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      (async () => {
        const rawResponse = await fetch(`${process.env.BASEURL}/verifyToken`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const res = await rawResponse.json();
        // console.log(res);
        if (res.status == "Success") {
          ctx.setLogged(true);
        } else {
          ctx.setLogged(false);
        }
      })();
    }

    // GA
    const handleRouteChange = (url) => {
      ctx.ga(url);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <>
      <Head>
        <meta
          name="facebook-domain-verification"
          content="z9wdsid8bezintv31nkcj8s6kf552r"
        />
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-140006907-2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-140006907-2', {page_path: window.location.pathname,});`,
          }}
        /> */}
      </Head>
      <Nav />
      <Header />
      {children}
      <Footer />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-140006907-2"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-140006907-2', {page_path: window.location.pathname,});`,
        }}
      />
    </>
  );
}
