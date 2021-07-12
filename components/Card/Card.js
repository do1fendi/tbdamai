import Image from 'next/image'

function Card({ data }) {
    return (
        <>
            {data.map(dt => <div key={dt.name} className="grid grid-cols-3 gap-7 shadow-lg p-2 rounded-sm">
                <div>{dt.name}</div>
                <div className="col-span-3 bg-sinbad-500 text-gray-900"><Image src="https://api.tbdamai.net/images/coran/0821/0821.jpg" height="400" width="400" layout="responsive"></Image></div>
                <div className="bg-sinbad-500 text-gray-900 ">2</div>
                <div className="col-span-2 bg-sinbad-500 text-gray-900 ">3</div>
                <div className="col-span-2 bg-sinbad-500 text-gray-900 ">4</div>
                <div className="bg-sinbad-500 text-gray-900 ">5</div>
                <div className="bg-sinbad-500 text-gray-900 ">6</div>
                <div className="col-span-2 bg-sinbad-500 text-gray-900 ">7</div>
            </div>)}

        </>
    )
}

export default Card
