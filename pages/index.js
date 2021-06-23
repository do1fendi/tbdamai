import Head from "next/head";
import styles from "../styles/Home.module.css";
import MessengerCustomerChat from "react-messenger-customer-chat";

export default function Home() {
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
