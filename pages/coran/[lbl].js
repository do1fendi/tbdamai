import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useContext } from "react";
import Card from "../../components/Card/Card";
import { StoreContext } from "../../store/store";

export const getStaticPaths = () => {
  const paths = [
    { params: { lbl: "tombak" } },
    { params: { lbl: "hewan" } },
    { params: { lbl: "lainnya" } },
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const lbl = context.params.lbl;
  const res = await fetch(
    `https://api.tbdamai.net/frontend/product/coran/${lbl}`
  );
  const data = await res.json();
  return {
    props: { data, lbl },
  };
};

function cat({ data, lbl }) {
  const ctx = useContext(StoreContext);
  const router = useRouter();

  useEffect(() => {
    // conversion api
    (async function fetchIp() {      
      const ip = await ctx.getIp();
      const fbclid = ctx.getUrlParameter("fbclid");
      const data = {
        event_name: "PageView",
        action_source: "website",
        event_source_url: `https://tbdamai.net/coran/${lbl}`,
        user_data: {
          client_ip_address: ip,
          client_user_agent: navigator.userAgent
            .toString()
            .replace(/([1-9][1-9]|[1-9])_\w+/g, "$1"),
        },
      }
      localStorage.getItem("tbEmail") ? data.user_data.em = ctx.hash(localStorage.getItem("tbEmail")):'';
      fbclid ? (data.user_data.fbc = `fb.1.${Date.now()}.${fbclid}`) : "";
      ctx.conversionApi(data);
    })();
  }, [router.query]);

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
      <div className="uppercase text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5">
        {data[0].prod_label1}
      </div>
      <div className="grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto">
        <Card data={data}></Card>
      </div>
    </div>
  );
}

export default cat;
