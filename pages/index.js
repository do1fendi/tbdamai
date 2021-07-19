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
      {/* <div className="h-48 w-full from-blue-600 to-purple-500 bg-gradient-to-b flex justify-center items-center text-white text-2xl lg:text-6xl">Selamat Datang di Tb Damai</div> */}
      <div className="mt-5 mb-2 bg-red-500 text-white lg:text-xl text-lg w-auto inline-block ml-5 p-1 px-2">Produk Spesial</div>
      <div className="flex w-full mt-8">
        <div className="w-1/3 md:h-56 h-48 flex justify-center items-center bg-tombak-pattern bg-contain bg-center bg-no-repeat shadow-lg">
          <Link href="/coran/tombak"><a><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl">Tombak</button></a></Link>
        </div>
        <div className="w-1/3 md:h-56 h-48 flex justify-center items-center bg-hewan-pattern bg-contain bg-center bg-no-repeat shadow-lg">
          <Link href="/coran/hewan"><a><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl">Hewan</button></a></Link>
        </div>
        <div className="w-1/3 md:h-56 h-48 flex justify-center items-center bg-lainnya-pattern bg-contain bg-center bg-no-repeat shadow-lg">
          <Link href="/coran/"><a><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl size-sm">Lainnya</button></a></Link>
        </div>

      </div>
    </div>
  );
}
