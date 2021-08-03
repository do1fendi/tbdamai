import Head from 'next/head';

function about() {
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
            <div>
                <h2 className="mb-5 text-lg font-bold">
                    Tentang Kami
                </h2>
                <p>
                    Usaha kami bergerak dibidang penjualan alat dan bahan bangunan yang telah berdiri sejak tahun 1980. Kami menyediakan bermacam-macam alat dan bahan yang diperlukan oleh perbengkelan pagar dan teralis, seperti besi tempa, coran, kuningan dan sebagainya. Kami juga menjual bahan bangunan seperti besi behel, pipa, unp, banyak lagi lainnya.
                </p>
            </div>
            <div className="flex justify-around ">
                <div className="rounded-full bg-blue-300 w-40 h-40 lg:w-60 lg:h-60 flex items-center justify-center"><p>1</p></div>
                <div className="rounded-full bg-blue-300 w-40 h-40 lg:w-60 lg:h-60 flex items-center justify-center">2</div>
                <div className="rounded-full bg-blue-300 w-40 h-40 lg:w-60 lg:h-60 flex items-center -hue-rotate-30 justify-center border-opacity-0 shadow-2xl backdrop-blur-lg"><p>3</p></div>
            </div>

            <div className="bg-yellolg:w-400 lg:w-100 lg:h-80">

            </div>
        </div>
        </>
    )
}

export default about
