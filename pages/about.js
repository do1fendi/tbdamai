import Head from 'next/head';
import { useRouter } from "next/router";
import { StoreContext } from "../store/store";
import { useEffect, useContext } from "react";

function about() {
    const ctx = useContext(StoreContext);
    const router = useRouter();
    useEffect(() => {
        // conversion api
        (async function fetchIp() {
            const ip = await ctx.getIp();
            const data = {
                event_name: "PageView",
                action_source: "website",
                event_source_url: "https://tbdamai.net/about/",
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
    }, [router.query]);
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Kami menjual berbagai bahan bangunan dan pagar"
                />
                <meta
                    name="keywords"
                    content="coran, asesoris, besi, ancuran, kawat las, sambungan"
                />
                <title>TBdamai | About</title>
            </Head>
            <div className="container p-2">
                <div className="text-center p-8 text-5xl text-gray-400">
                    About Us
                </div>
                <div className="mt-5">
                    <h2 className="mb-2 text-lg font-bold">
                        Tentang Kami
                    </h2>
                    <p>
                        Usaha kami bergerak dibidang penjualan alat dan bahan bangunan yang telah berdiri sejak tahun 1980. Kami menyediakan bermacam-macam alat dan bahan yang diperlukan oleh perbengkelan pagar dan teralis, seperti besi tempa, coran, kuningan dan sebagainya. Kami juga menjual bahan bangunan seperti besi behel, pipa, unp, banyak lagi lainnya.
                    </p>
                </div>
                <div className="mt-5">
                    <h2 className="mb-2 text-lg font-bold">
                        Lokasi
                    </h2>
                    <p>
                        Toko besi kami beralamat di Jl. Perjuangan No.38/46, RT.002/RW.008, Marga Mulya, Bekasi Utara. Lokasi kami tidak jauh dari stasiun kereta bekasi, berjarak sekitar 400m dari stasiun dan terletak di depan pool taxi bluebird.
                    </p>
                </div>
                <div className="mt-5">
                    <h2 className="mb-2 text-lg font-bold">
                        Hubungi Kami
                    </h2>
                    <p>
                        Silahkan datang langsung ke tempat kami, atau hubungi kami di no 021-8842747, whatsapp +628161377557, atau melalui facebook messenger untuk menanyakan harga dan stok yang tersedia.
                    </p>
                </div>
                {/* <div className="flex justify-around ">
                    <div className="rounded-full bg-blue-300 w-40 h-40 lg:w-60 lg:h-60 flex items-center justify-center"><p>1</p></div>
                    <div className="rounded-full bg-blue-300 w-40 h-40 lg:w-60 lg:h-60 flex items-center justify-center">2</div>
                    <div className="rounded-full bg-blue-300 w-40 h-40 lg:w-60 lg:h-60 flex items-center -hue-rotate-30 justify-center border-opacity-0 shadow-2xl backdrop-blur-lg"><p>3</p></div>
                </div> */}

                {/* <div className="bg-yellolg:w-400 lg:w-100 lg:h-80">

                </div> */}
            </div>
        </>
    )
}

export default about
