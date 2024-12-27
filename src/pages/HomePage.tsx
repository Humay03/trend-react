import { Link } from "react-router-dom";
import ProductGrid from "../components/products/ProductGrid";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { useProducts } from "../components/context/ProductContext";


export type Marka = {
  marka: string;
  href: string;
  id: number;
};

type ItemsType = {
  items: Marka[];
};

const markaList: Marka[] = [
  { id: 1, marka: "U.S Polo Assin", href: "/u.s-polo-assin" },
  { id: 2, marka: "Bianco Lucci", href: "/bianco-lucci" },
  { id: 3, marka: "LovelyIstanbul", href: "/lovely-istanbul" },
  { id: 4, marka: "CALLİEL", href: "/calliel" },
  { id: 5, marka: "Under Armour", href: "/under-armour" },
  { id: 6, marka: "Merry See", href: "/merry-see" },
  { id: 7, marka: "SOLDOY", href: "/soldoy" },
  { id: 8, marka: "Armine", href: "/armine" },
  { id: 9, marka: "Elseve", href: "/elseve" },
  { id: 10, marka: "Adidas", href: "/adidas" },
  { id: 11, marka: "Victoria's Journals", href: "/victorias-journals" },
  { id: 12, marka: "Tonny Black", href: "/tonny-black" },
  { id: 13, marka: "RİOMİ", href: "/riomi" },
];
const bodyList = [
  { id: 1, beden: "XS" },
  { id: 2, beden: "S" },
  { id: 3, beden: "M" },
  { id: 4, beden: "L" },
  { id: 5, beden: "XL" },
  { id: 6, beden: "2XL" },
  { id: 7, beden: "3XL" },
  { id: 8, beden: "S-M" },
  { id: 9, beden: "L-XL" },
  { id: 10, beden: "2XL-3XL" },
  { id: 11, beden: "6-9 Ay" },
  { id: 12, beden: "2-3 Yaş" },
  { id: 13, beden: "4-5 Yaş" },
  { id: 14, beden: "6-7 Yaş" },
  { id: 15, beden: "8-9 Yaş" },
  { id: 16, beden: "10-11 Yaş" },
  { id: 17, beden: "Standart" },
];
const priceRanges = [
  { id: 1, label: "0TL - 90TL", min: 0, max: 90 },
  { id: 2, label: "90TL - 225TL", min: 90, max: 225 },
  { id: 3, label: "225TL - 400TL", min: 225, max: 400 },
  { id: 4, label: "400TL - 900TL", min: 400, max: 900 },
  { id: 5, label: "900TL - 3000TL", min: 900, max: 3000 },
  { id: 6, label: "3000TL - 100000TL", min: 3000, max: 100000 },
];


export default function HomePage() {

  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("");
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadioBtn(e.currentTarget.value);
  const { setBrancheckList } = useProducts();
  const [filteredBrands, setFilteredBrands] = useState<Marka[]>(markaList);
  const [filteredBeden, setFilteredBeden] = useState(bodyList);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilteredBrands = (value: string) => {
    setFilteredBrands(state => {
      if (value !== '') {
        return state.filter(brand => brand.marka.toLocaleUpperCase().includes(value.toLocaleUpperCase()));
      }
      else return markaList;
    });
  }
  const handleFilteredBeden = (value: string) => {
    setFilteredBeden((state) => {
      if (value !== "") {
        return state.filter((body) =>
          body.beden.toLocaleUpperCase().includes(value.toLocaleUpperCase())
        );
      } else return bodyList;
    });
  };



  return (
    <div className="container mx-auto grid grid-cols-[200px_1fr] border-t-[1px] border-[#ccc]">
      <div className=" h-[100%] relative overflow-y-hidden">
        <div >
          <div className="pt-[12px]">
            <p className="mb-[5px] text-[14px]">Marka</p>
          </div>
          <input type="search" onChange={e => handleFilteredBrands(e.target.value)} placeholder="Marka ara" className="border-[1px] border-[#999] mb-[10px] text-[11px] px-[10px] bg-[#fafafa] h-[27px] rounded" />
          <MarkaList items={filteredBrands} />
        </div>
        <div>
          <div className="pt-[12px]">
            <p className="mb-[5px] text-[14px]">Beden</p>
          </div>
          <input
            type="search"
            onChange={(e) => handleFilteredBeden(e.target.value)}
            placeholder="Beden ara"
            className="border-[1px] border-[#999] mb-[10px] text-[11px] px-[10px] bg-[#fafafa] h-[27px] rounded"
          />
          <div className="max-h-[270px] overflow-y-auto">
            <ul>
              {filteredBeden.map((body) => (
                <li key={body.id} className="flex mb-[5px] pt-[1px]">
                  <input type="checkbox" name="" id="" />
                  <Link to={`/${body.beden.toLowerCase()}`} className="text-[13px] ml-[6px]">
                    {body.beden}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-[12px] mb-[15px] border-t-[1px] border-[#ccc]">
          <p className="mb-[5px] text-[14px]">Fiyat</p>
          <div className="flex">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-[50px] h-[27px] px-[10px] mb-[5px] bg-[#fafafa]"
              min={0}
            />
            <p className="mx-[6px]">-</p>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-[50px] h-[27px] px-[10px] mb-[5px] bg-[#fafafa]"
              min={0}
            />
            <button
              className="w-[30px] h-[28px] bg-[#dadada] rounded inline-flex items-center text-center px-[6px] ml-[4px] mb-[5px]"

            >
              <Search className="w-[14px] h-[14px] text-slate-50" />
            </button>
          </div>

          <ul>
            {priceRanges.map((range, index) => (
              <li className="flex my-[5px] pt-[1px]" key={index}>
                <input
                  type="radio"
                  name="priceRange"
                  value={`radio${index}`}
                  checked={selectedRadioBtn === `radio${index}`}
                  onChange={() => {
                    setMinPrice(range.min);
                    setMaxPrice(range.max);
                  }}
                />
                <Link to={"/"} className="text-[13px] ml-[6px]">
                  {range.label}
                </Link>
              </li>
            ))}
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
  const { setBrancheckList } = useProducts();

  const handleOnChecked = (checkedItem: boolean, item: Marka) => {
    setBrancheckList(state => {
      if (checkedItem) return [...state, item];
      return state.filter(brand => brand.id !== item.id)
    });
  }
  return (
    <ul className="max-h-[270px] overflow-y-auto ">
      {items.map((item) => (
        <li key={item.href} className="flex items-center text-[13px] mb-[5px] pt-[1px]">
          <input type="checkbox"
            onChange={(e) => handleOnChecked(e.target.checked, item)}
          />
          <Link to={item.href} className=" ml-[6px] ">
            <span>{item.marka}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
