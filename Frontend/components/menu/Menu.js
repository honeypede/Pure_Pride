import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import { menus } from "@/utils/contentExports";

export default function Menu() {
  return (
    <div className="menu">
      {menus.map((value, index, array) => (
        <div className="item" key={value.id}>
          <span className="title">{value.title}</span>
          {value.links.map((value_link) => (
            <Link
              className="flex listitem"
              href={"/" + value_link.url}
              key={value_link.id}
            >
              <Image src={value_link.image} alt="Home" width={26} height={26} />
              <span className="ListItemTitle">{value_link.name}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
