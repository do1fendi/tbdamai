import Image from 'next/image'

function Card({ data }) {
    return (
        <>
            {data.map(dt => <div key={dt.id} className="grid grid-cols-3 gap-2 shadow-lg p-2 rounded-lg">                
                <div className="col-span-3 bg-sinbad-500 text-gray-900"><Image src={dt.url} height="400" width="400" layout="responsive"></Image></div>
                <div className="col-span-2 bg-indigo text-white rounded-2xl text-center px-2">{dt.prod_name}</div>
                <div className=""></div>
                <div className="col-span-3 bg-neptune text-white rounded-2xl px-2">Berat: {dt.prod_weight} kg</div>
                {/* <div className=""></div> */}
                <div className="col-span-3 bg-neptune text-white rounded-2xl px-2">Ukuran: {dt.prod_height} x {dt.prod_width} Cm</div>
                {/* <div className="col-span-3 bg-neptune text-white rounded-2xl px-2">{dt.prod_desc}</div> */}
                
            </div>)}

        </>
    )
}

export default Card
