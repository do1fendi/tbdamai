import Head from 'next/head'
import Card from '../components/Card/Card'
import { useEffect, useState } from 'react'

export default function coran() {
    const [data, setData] = useState([])

    useEffect(() => {
        (async function fetchApi() {
            let response = await fetch("https://api.tbdamai.net/frontend/product/coran")
            response = await response.json() 
            setData(response);
        })()
    },[])
    return (
        <div className="grid xl:grid-cols-7 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 px-4 sm:m-auto">
            <Head>
                <title>Coran</title>
            </Head>
            
            <Card data={data}></Card>
        </div>
    )
}
