import { products } from "@/utils/contentExports";
import Image from "next/image";
import Link from "next/link";

export default function Cards(props) {
  return (
    <>
      {props.array_card.map((value, index, array) => (
        <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link href="/" className="block relative h-48 rounded-md overflow-hidden">
            <Image
              width={420}
              height={620}
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={value.image}
            />
          </Link>
          <div className="mt-4">
            <h3 className="text-sm tracking-widest title-font mb-1">
              {value.category}
            </h3>
            <h2 className="title-font text-lg font-medium">{value.name}</h2>
            <p className="mt-1">${value.price}</p>
          </div>
        </div>
      ))}
    </>
  );
}
