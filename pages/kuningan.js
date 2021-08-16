import Head from 'next/head'
import { useRouter } from 'next/router'
import Card from '../components/Card/Card'
import { useEffect, useState, useContext } from 'react'
import { StoreContext } from "../store/store";

export default function kuningan() {
    const [data, setData] = useState([]);
    const ctx = useContext(StoreContext);
    const router = useRouter();

    useEffect(() => {
        (async function fetchApi() {
            let response = await fetch("https://api.tbdamai.net/frontend/product/kuningan")
            response = await response.json()
            setData(response);
        })();
        // conversion api
        (async function fetchIp() {
            const ip = await ctx.getIp();
            const data = {
                event_name: "PageView",
                action_source: "website",
                event_source_url: "https://tbdamai.net/kuningan/",
                user_data: {
                    client_ip_address: ip,
                    client_user_agent: navigator.userAgent
                        .toString()
                        .replace(/([1-9][1-9]|[1-9])_\w+/g, "$1"),
                },
            }
            localStorage.getItem("tbEmail") ? data.user_data.em = ctx.hash(localStorage.getItem("tbEmail")) : '';
            router.query.fbclid ? data.user_data.fbc = `fb.1.${Date.now()}.${router.query.fbclid}` : '';
            ctx.conversionApi(data);
        })();

        //GA
        // const handleRouteChange = (url) => {
        //     ctx.ga(url)
        // }
        // router.events.on('routeChangeStart', handleRouteChange)
        // return () => {
        //     router.events.off('routeChangeStart', handleRouteChange)
        // }
    }, [router.query])
    return (
        <div className="container mx-auto p-5">
            <Head>
                <meta
                    name="description"
                    content="Menjual berbagai macam model kuningan untuk asesoris"
                />
                <meta
                    name="keywords"
                    content="kuningan, asesoris, r pion, pentol, belimbing"
                />
                <title>TBdamai | Kuningan</title>
            </Head>
            <div className="text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5">Kuningan</div>
            <div className="grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto">
                <Card data={data}></Card>
            </div>

        </div>
    )
}

