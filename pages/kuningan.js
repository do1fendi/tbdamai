// import Head from 'next/head'
// export default function kuningan() {
//     return (
//         <div>
//             <Head>
//                 <title>
//                     Kuningan
//                 </title>
//             </Head>
//             Kuningan
//         </div>
//     )
// }

import Head from 'next/head'
import Card from '../components/Card/Card'
import { useEffect, useState } from 'react'

export default function kuningan() {
    const [data, setData] = useState([])

    useEffect(() => {
        (async function fetchApi() {
            let response = await fetch("https://api.tbdamai.net/frontend/product/kuningan")
            response = await response.json()
            setData(response);
        })()
    }, [])
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

