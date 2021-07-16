import Head from "next/head";
import styles from "../styles/Home.module.css";
import { StoreContext } from "../store/store";
import { useContext, useEffect } from 'react'
import Link from "next/link";

export default function Home() {
  const ctx = useContext(StoreContext)
  
  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     (async () => {
  //       const rawResponse = await fetch(`${process.env.BASEURL}/verifyToken`, {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem('token')}`
  //         }
  //       });
  //       const res = await rawResponse.json();
  //       // console.log(res)
  //       if (res.status == "Success") {
  //         ctx.setLogged(true)
  //       }
  //     })()
  //   }
  // },[]);

  return (
    <div>
      <Head>
        <title>TBDamai | Home</title>
        <link rel="icon" href="/tbdamai/favicon.ico" />
      </Head>
      <div className="bg-blue-200 h-screen">Welcome to Tb Damai</div>
      <div>
        <Link href="/coran/tombak"><a><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tombak</button></a></Link>
      </div>
    </div>
  );
}
