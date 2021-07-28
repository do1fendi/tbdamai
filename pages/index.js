import Head from "next/head";
import styles from "../styles/Home.module.css";
import { StoreContext } from "../store/store";
import { useContext, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  // const ctx = useContext(StoreContext);

  const getIp = async () => {
    const rawResponse = await fetch(
      "https://api.ipify.org/?format=json",
      {
        method: "GET",
      }
    );
    const res = await rawResponse.json();
    conversionApi(res.ip);
  };

  function conversionApi(ip) {
    (async () => {
      const data = JSON.stringify({
        data: [
          {
            event_name: "ViewContent",
            action_source: "website",
            user_data: {
              client_ip_address: ip,
              client_user_agent: navigator.userAgent,
            },
          },
        ],
        test_event_code: "TEST33861",
      });
      const rawResponse = await fetch(
        "https://api.tbdamai.net/conversionApi/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        }
      );
      const res = await rawResponse;
      console.log(res);
    })();
  }

  useEffect(() => {
    getIp();
  }, []);

  return (
    <div className="lg:container">
      <Head>
        <title>TBDamai | Home</title>
        <link rel="icon" href="/tbdamai/favicon.ico" />
      </Head>
      {/* <div className="h-48 w-full from-blue-600 to-purple-500 bg-gradient-to-b flex justify-center items-center text-white text-2xl lg:text-6xl">Selamat Datang di Tb Damai</div> */}
      <div className="mt-5 mb-2 bg-red-500 text-white lg:text-xl text-lg w-auto inline-block ml-5 p-1 px-2">
        Produk Spesial
      </div>
      {/* <div className="flex overflow-x-auto whitespace-nowrap p-4">
        <div className="w-48 md:h-56 h-48 flex justify-center items-center bg-tombak-pattern bg-contain bg-center bg-no-repeat shadow-lg">
          <Link href="/coran/tombak"><a><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl">Tombak</button></a></Link>
        </div>
        <div className="w-48 md:h-56 h-48 flex justify-center items-center bg-hewan-pattern bg-contain bg-center bg-no-repeat shadow-lg">
          <Link href="/coran/hewan"><a><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl">Hewan</button></a></Link>
        </div>
        <div className="w-48 md:h-56 h-48 flex justify-center items-center bg-lainnya-pattern bg-contain bg-center bg-no-repeat shadow-lg">
          <Link href="/coran/lainnya"><a><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl size-sm">Lainnya</button></a></Link>
        </div>
      </div> */}
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:flex-warp pl-2">
          <div className="inline-block px-3">
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
          <div className="inline-block px-3">
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
          <div className="inline-block px-3">
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
    </div>
  );
}
