import Head from "next/head";
import styles from "../styles/Home.module.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { StoreContext } from "../store/store";
import { useContext, useEffect } from 'react'

export default function Home() {
  const ctx = useContext(StoreContext)
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      (async () => {
        const rawResponse = await fetch(`${process.env.BASEURL}/verifyToken`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        const res = await rawResponse.json();
        // console.log(res)
        if (res.status == "Success") {
          ctx.setLogged(true)
        }
      })()
    }
  });

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>TBDamai | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to Tb Damai</h1>
      <MessengerCustomerChat
        pageId={process.env.FACEBOOK_PAGE_ID}
        appId={process.env.FACEBOOK_APP_ID}
      />
    </div>
  );
}