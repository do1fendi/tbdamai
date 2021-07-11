import Head from 'next/head'
import Card from '../components/Card/Card'

export default function coran() {
    return (
        <div>
            <Head>
                <title>Coran</title>
            </Head>
            <Card data={[{name:'john'},{name:'mark'},{name:'Ben'}]}></Card>
        </div>
    )
}
