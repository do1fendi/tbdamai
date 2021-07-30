import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function Card({ data }) {
  let [isOpen, setIsOpen] = useState(false);
  const openUrl = (nm, id) => {
    let name = nm.toString().replace(/ /g, "_");
    Router.push(`/detail/${name}/?id=${id}`);
  };
  return (
    <>
      {data.map((dt) => (
        <div
          key={dt.id}
          className="grid grid-cols-3 gap-2 shadow-lg p-2 rounded-lg border-2 border-blue-100 border-opacity-25"
        >
          <div className="col-span-3">
            <Image
              src={dt.url}
              height="400"
              width="400"
              layout="responsive"
            ></Image>
          </div>
          <div className="col-span-3 bg-blue-400 text-white text-center px-2">
            {dt.prod_name}
          </div>
          <div className=""></div>
          {/* <div className="col-span-3 text-gray-900 rounded-2xl px-2">Berat: {dt.prod_weight} {dt.prod_unit_weight}</div> */}
          {/* <div className=""></div> */}
          {dt.prod_weight > 0 ? (
            <div className="col-span-3 text-gray-900 rounded-2xl px-2">
              Berat: {dt.prod_weight} {dt.prod_unit_weight}
            </div>
          ) : (
            ""
          )}
          {dt.prod_height > 0 ? (
            <div className="col-span-3 textgray-900 rounded-2xl px-2">
              Ukuran: {dt.prod_height} x {dt.prod_width} {dt.prod_unit_size}
            </div>
          ) : (
            ""
          )}
          {dt.prod_available_size != "" ? (
            <div className="col-span-3 textgray-900 rounded-2xl px-2">
              Tersedia Ukuran: {dt.prod_available_size} {dt.prod_unit_size}
            </div>
          ) : (
            ""
          )}
          {/* <Link href={`/detail/${dt.id}`}>
            <a> */}
              <button
                onClick={() => openUrl(dt.prod_name, dt.id)}
                className="col-span-3 text-white font-bold bg-red-500 hover:bg-red-600 rounded-md h-8"
              >
                Lihat
              </button>
            {/* </a>
          </Link> */}
          {/* <div className="col-span-3 bg-neptune text-white rounded-2xl px-2">{dt.prod_desc}</div> */}
        </div>
      ))}
    </>
  );
}

export default Card;
