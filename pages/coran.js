import Head from 'next/head'
import Card from '../components/Card/Card'

export default function coran() {
    return (
        <div className="grid lg:grid-cols-7 sm:grid-cols-1 md:grid-cols-4 px-4 sm:m-auto">
            <Head>
                <title>Coran</title>
            </Head>
            <Card data={[{name:'john'},{name:'mark'},{name:'Ben'}]}></Card>
        </div>
    )
}
