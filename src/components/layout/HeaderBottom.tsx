import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderBottom() {
  return (
    <nav className="container mx-auto h-[34px] flex items-center justify-between">
      <div className="flex items-center">
        <Menu className="w-[18px] h-[18px]" />
        <p className="uppercase text-[14px]">Tüm kategoriler</p>
      </div>
      <div className="flex-initial">
        <ul className="flex justify-between capitalize text-[14px]">
          <li className="pr-[15px] hover:text-[#ff6600]" >
            <Link to={'/'}>Azərbaycan</Link>
          </li>
          <li className="pr-[15px] hover:text-[#ff6600]" >
            <Link to={'/'}>Ana & Uşaq</Link>
          </li>
          <li className="pr-[15px] hover:text-[#ff6600]" >
            <Link to={'/'}>Supermarket</Link>
          </li>
          <li className="pr-[15px] hover:text-[#ff6600]" >
            <Link to={'/'}>Ayaqqabı</Link>
          </li>
          <li className="pr-[15px] hover:text-[#ff6600]" >
            <Link to={'/'}>Elektronika</Link>
          </li>
          <li className="flex pl-[15px] hover:text-[#ff6600]">
            <img src="https://cdn.dsmcdn.com/web/production/top-ranking.svg" alt="" />
            <Link to={'/'}>Çok Satanlar</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
