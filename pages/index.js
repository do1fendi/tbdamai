import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ConversionApi from "../components/conversionApi/conversionApi";
import Card from '../components/Card/Card';

export default function Home() {
  const router = useRouter()
  const [data, setData] = useState([])
  const myref = useRef();
  const runConversion = () => {
    if (myref.current) {
      myref.current.runApi({ event_name: "PageView" });
    }
  };
  useEffect(() => {
    if (!router.isReady) return;
    runConversion();
    const getRand = async () => {
      const dt = await fetch('https://api.tbdamai.net/frontend/random')
      const res = await dt.json();
      setData(res)
    }
    getRand()
    // console.log(router.query.fbc)
  }, [router.query]);

  return (
    <div className="lg:container p-2">
      <ConversionApi ref={myref} />
      <Head>
        <title>TBDamai | Home</title>
        <link rel="icon" href="/tbdamai/favicon.ico" />
      </Head>
      {/* <div className="h-48 w-full from-blue-600 to-purple-500 bg-gradient-to-b flex justify-center items-center text-white text-2xl lg:text-6xl">Selamat Datang di Tb Damai</div> */}
      <div className="mt-5 mb-2 bg-red-500 text-white lg:text-xl text-lg w-auto inline-block p-1 px-2">
        Produk Spesial
      </div>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:flex-warp gap-2">
          <div className="inline-block">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-tombak-pattern bg-contain bg-center bg-no-repeat">
              <Link href="/coran/tombak">
                <a>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl">
                    Tombak
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="inline-block">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-hewan-pattern bg-contain bg-center bg-no-repeat">
              <Link href="/coran/hewan">
                <a>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl">
                    Hewan
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="inline-block">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-lainnya-pattern bg-contain bg-center bg-no-repeat">
              <Link href="/coran/lainnya">
                <a>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl size-sm">
                    Lainnya
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto">
        <Card data={data}></Card>
      </div>
    </div>
  );
}
