import Image from "next/image";
import "./style.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between p-5 max-h-16">
      <Link className="logo items-center hidden md:flex" href="/">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </Link>
      <div className="flex justify-around items-center gap-[20px]">
        <Image
          className=""
          src="/search.svg"
          alt="Logo"
          width={26}
          height={26}
        />
        <Image className="" src="/app.svg" alt="Logo" width={26} height={26} />
        <Image
          className=""
          src="/expand.svg"
          alt="Logo"
          width={26}
          height={26}
        />
        <div className="notification flex">
          <Image
            className=""
            src="/notifications.svg"
            alt="Logo"
            width={26}
            height={26}
          />
          <span>1</span>
        </div>
        <div className="user">
          <Image
            className="rounded-full w-[26px] h-[26px] object-cover"
            src="/yash.jpg"
            alt="Logo"
            width={26}
            height={26}
          />
          <span>Yash</span>
        </div>
        <Image
          className=""
          src="/settings.svg"
          alt="Logo"
          width={26}
          height={26}
        />
      </div>
    </nav>
  );
}
