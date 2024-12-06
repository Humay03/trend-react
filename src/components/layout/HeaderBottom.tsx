import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderBottom() {
  return (
    <nav className="container mx-auto h-[34px] flex items-center justify-between">
      <div className="flex items-center">
        <Menu  className="w-[18px] h-[18px]"/>
        <p className="uppercase text-[14px]">Tüm kategoriler</p>
      </div>
      <div className="flex-initial">
        <ul className="flex justify-between capitalize text-[14px]">
          <li className="pr-[15px]" >
            <Link>Azərbaycan</Link>
          </li>
          <li className="pr-[15px]" >
            <Link>Ana & Uşaq</Link>
          </li>
          <li className="pr-[15px]" >
            <Link>Supermarket</Link>
          </li>
          <li className="pr-[15px]" >
            <Link>Ayaqqabı</Link>
          </li>
          <li className="pr-[15px]" >
            <Link>Elektronika</Link>
          </li>
          <li className="flex pl-[15px]">
            <img src="https://cdn.dsmcdn.com/web/production/top-ranking.svg" alt="" />
            <Link>Çok Satanlar</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
