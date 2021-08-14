import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="text-white bg-gray-800 mt-8">
            <div className="container grid grid-cols-1 md:grid-cols-3 p-5">
                <div className="p-2 md:p-10">
                    <h3 className="text-yellow-500">ABOUT US</h3>
                    <p className="text-xs">Kami toko besi, menjual bahan bangunan dan asesoris untuk pagar</p>
                    <h3 className="text-yellow-500 mt-5">CONTACT US</h3>
                    <p className="text-xs">Phone: 021-8842747</p>
                    <p className="text-xs">WA: 08161377557</p>
                </div>
                <div className="p-2 md:p-10">
                    <h3 className="text-yellow-500">ALAMAT</h3>
                    <p className="text-xs">Jl. Perjuangan No.38/46, RT.002/RW.008, Marga Mulya, Bekasi Utara</p>
                </div>
                <div className="flex justify-around content-center p-2 md:p-10 grid grid-cols-2">
                    <div className="m-auto"><Link href="https://www.facebook.com/mytbdamai"><a><Image
                        src="https://tbdamai.net/images/fb.png"
                        alt="facebook"
                        height="60"
                        width="60"
                    ></Image></a></Link></div>
                    <div className="m-auto"><Link href="https://api.whatsapp.com/send?phone=628161377557"><a><Image
                        src="https://tbdamai.net/images/wa.png"
                        alt="whatsapp"
                        height="60"
                        width="60"
                    ></Image></a></Link></div>
                </div>
            </div>
            <div className="container">
            <hr></hr>
            </div>
            <div className='text-center text-white bg-gray-800 text-sm font-bold p-8'>
            ©TBDamai. All right reserve TBDamai 2001 - {new Date().getFullYear()}
            </div>
        </div>
    )
}
