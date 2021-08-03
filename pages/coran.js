import Head from "next/head";
import Card from "../components/Card/Card";
import { useEffect, useState, useContext } from "react";
import { StoreContext } from "../store/store";

export default function coran() {
  const [data, setData] = useState([]);
  const ctx = useContext(StoreContext);

  useEffect(() => {
    (async function fetchApi() {
      let response = await fetch(
        "https://api.tbdamai.net/frontend/product/coran"
      );
      response = await response.json();
      setData(response);
    })();

    // conversion api
    (async function fetchIp() {
      let ip = await ctx.getIp();
      ctx.conversionApi({
        event_name: "PageView",
        action_source: "website",
        event_source_url: "https://tbdamai.net/coran/",
        user_data: {
          client_ip_address: ip,
          client_user_agent: navigator.userAgent
            .toString()
            .replace(/([1-9][1-9]|[1-9])_\w+/g, "$1"),
        },
      });
    })();
  }, []);
  return (
    <div className="container mx-auto p-5">
      <Head>
        <meta
          name="description"
          content="Menjual berbagai macam model coran untuk bahan pagar"
        />
        <meta
          name="keywords"
          content="coran, asesoris, hewan, ancuran, tombak"
        />
        <title>TBdamai | Coran</title>
      </Head>
      <div className="text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5">
        Tombak
      </div>
      <div className="grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto">
        <Card data={data.filter((dt) => dt.prod_label1 == "tombak")}></Card>
      </div>
      <div className="text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-10 mb-5">
        Hewan
      </div>
      <div className="grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto">
        <Card data={data.filter((dt) => dt.prod_label1 == "hewan")}></Card>
      </div>
      <div className="text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-10 mb-5">
        Lain-lain
      </div>
      <div className="grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto">
        <Card
          data={data.filter(
            (dt) => dt.prod_label1 != "hewan" && dt.prod_label1 != "tombak"
          )}
        ></Card>
      </div>
    </div>
  );
}
