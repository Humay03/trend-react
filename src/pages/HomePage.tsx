import { Link } from "react-router-dom";
import ProductGrid from "../components/products/ProductGrid";
import React, { useState } from "react";
import { Search } from "lucide-react";


type Marka = {
  marka: string;
  href: string;
};

type ItemsType = {
  items: Marka[];
};

export default function HomePage() {
  const markaList: Marka[] = [
    { marka: "U.S Polo Assin", href: "/u.s-polo-assin" },
    { marka: "Bianco Lucci", href: "/bianco-lucci" },
    { marka: "LovelyIstanbul", href: "/lovely-istanbul" },
    { marka: "Happines Istanbul", href: "/happines-istanbul" },
    { marka: "Under Armour", href: "/under-armour" },
    { marka: "Pierre Cardin", href: "/pierre-cardin" },
    { marka: "Jack Ferrero", href: "/jack-ferrero" },
    { marka: "Armine", href: "/armine" },
    { marka: "Puma", href: "/puma" },
    { marka: "Adidas", href: "/adidas" },
    { marka: "Victoria's Journals", href: "/victorias-journals" },
    { marka: "Tonny Black", href: "/tonny-black" },
  ];

  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("");

  const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadioBtn(e.currentTarget.value);

  return (
    <div className="container mx-auto grid grid-cols-[200px_1fr] border-t-[1px] border-[#ccc]">
      <div className=" h-[100%] relative overflow-y-hidden">
        <div className="max-h-[280px] overflow-y-auto ">
          <div className="pt-[12px]">
            <p className="mb-[5px] text-[14px]">Marka</p>
          </div>
          <input type="search" name="" id="" placeholder="Marka ara" className="border-[1px] border-[#999] mb-[10px] text-[11px] px-[10px] bg-[#fafafa] h-[27px] rounded" />
          <MarkaList items={markaList} />
        </div>
        <div>
          <div className="pt-[12px]">
            <p className="mb-[5px] text-[14px]">Beden</p>
          </div>
          <input type="search" name="" id="" placeholder="Beden ara" className="border-[1px] border-[#999] mb-[10px] text-[11px] px-[10px] bg-[#fafafa] h-[27px] rounded" />
          <div>
            <ul>
              <li><Link to={'/xs'}>XS</Link></li>
              <li><Link to={''}>S</Link></li>
              <li><Link to={''}>M</Link></li>
              <li><Link to={''}>L</Link></li>
              <li><Link to={''}>XL</Link></li>
              <li><Link to={''}>2XL</Link></li>
              <li><Link to={''}></Link></li>
              <li><Link to={''}></Link></li>
              <li><Link to={''}></Link></li>
              <li><Link to={''}></Link></li>
              <li><Link to={''}></Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-[12px]  mb-[15px] border-t-[1px] border-[#ccc]">
          <p className="mb-[5px] text-[14px]">Fiyat</p>
          <div className="flex">
            <input type="number" name="" id="" className="w-[50px] h-[27px] px-[10px] mb-[5px] bg-[#fafafa] " />
            <p className="mx-[6px]">-</p>
            <input type="number" name="" id="" className="w-[50px] h-[27px] px-[10px] mb-[5px] bg-[#fafafa] " />
            <button className="w-[30px] h-[28px] bg-[#dadada] raunded inline-flex items-center text-center px-[6px] ml-[4px] mb-[5px]">
              <Search className="w-[14px] h-[14px] text-slate-50" />
            </button>
          </div>
          <ul>
            <li className="flex mb-[5px] pt-[1px]">
              <input type="radio"
                name="react-radio-btn"
                value='radio1'
                checked={isRadioSelected('radio1')}
                onChange={handleRadioClick}
              />
              <Link to={"/"} className="text-[13px] ml-[6px]">0TL-90TL</Link>
            </li>
            <li className="flex my-[5px] pt-[1px]">
              <input type="radio"
                name="react-radio-btn"
                value='radio2'
                checked={isRadioSelected('radio2')}
                onChange={handleRadioClick}
              />
              <Link to={"/"} className="text-[13px] ml-[6px]">90TL-225TL</Link>
            </li>
            <li className="flex my-[5px] pt-[1px]">
              <input type="radio"
                name="react-radio-btn"
                value='radio3'
                checked={isRadioSelected('radio3')}
                onChange={handleRadioClick}
              />
              <Link to={"/"} className="text-[13px] ml-[6px]">225TL-400TL</Link>
            </li>
            <li className="flex my-[5px] pt-[1px]">
              <input type="radio"
                name="react-radio-btn"
                value='radio4'
                checked={isRadioSelected('radio4')}
                onChange={handleRadioClick}
              />
              <Link to={"/"} className="text-[13px] ml-[6px]" >400TL-900TL</Link>
            </li>
            <li className="flex my-[5px] pt-[1px]">
              <input type="radio"
                name="react-radio-btn"
                value='radio5'
                checked={isRadioSelected('radio5')}
                onChange={handleRadioClick}
              />
              <Link to={"/"} className="text-[13px] ml-[6px]">900TL-3000TL</Link>
            </li>
            <li className="flex my-[5px] pt-[1px]">
              <input type="radio"
                name="react-radio-btn"
                value='radio6'
                checked={isRadioSelected('radio6')}
                onChange={handleRadioClick}
              />
              <Link to={"/"} className="text-[13px] ml-[6px]">3000TL-100000TL</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <ProductGrid />
      </div>
    </div>
  );
}

function MarkaList({ items }: ItemsType) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.href} className="flex items-center text-[13px]">
          <input type="checkbox" name="" id="" />
          <Link to={item.href} className=" ml-[6px] ">
            <span>{item.marka}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
