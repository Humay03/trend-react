import { Link } from "react-router-dom";
import ProductGrid from "../components/products/ProductGrid";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { useProducts } from "../components/context/ProductContext";
import { takeValueOfPrice } from "../components/context/utils";


export type Marka = {
  marka: string;
  href: string;
  id: number;
};
export type Price = {
  price: string;
  value: string;
  id: number;
};

type ItemsType = {
  items: Marka[];
};

const markaList: Marka[] = [
  { id: 1, marka: "Cream Co.", href: "/cream.co" },
  { id: 2, marka: "Erbatab", href: "/erbatab" },
  { id: 3, marka: "Meyra'nın ayakkabıları", href: "/meyra-nın-ayakkabıları" },
  { id: 4, marka: "CALLİEL", href: "/calliel" },
  { id: 5, marka: "Ayax", href: "/ayax" },
  { id: 6, marka: "Merry See", href: "/merry-see" },
  { id: 7, marka: "SOLDOY", href: "/soldoy" },
  { id: 8, marka: "Luis Bien", href: "/luis-bien" },
  { id: 9, marka: "Elseve", href: "/elseve" },
  { id: 10, marka: "KIKO", href: "/kiko" },
  { id: 11, marka: "The Purest Solutions", href: "/the-purest-solutions" },
  { id: 12, marka: "SİLVER HOME", href: "/silver-home" },
  { id: 13, marka: "RİOMİ", href: "/riomi" },
  { id: 14, marka: "Serstil", href: "/serstil" },
  { id: 15, marka: "Safyaşam", href: "/safyaşam" },
  { id: 16, marka: "SHE VEC", href: "/she-vec" },
  { id: 17, marka: "TBRUSH", href: "/tbrush" },
  { id: 18, marka: "Kitchen Life", href: "/kitchen-life" },
  { id: 19, marka: "Hairens", href: "/hairens" },
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
const priceRanges: Price[] = [
  { id: 1, price: "0TL - 90TL", value: "0 - 90" },
  { id: 2, price: "90TL - 225TL", value: "90 - 225" },
  { id: 3, price: "225TL - 400TL", value: "225 - 400" },
  { id: 4, price: "400TL - 900TL", value: "400 - 900" },
  { id: 5, price: "900TL - 3000TL", value: "900 - 3000" },
  { id: 6, price: "3000TL - 100000TL", value: "3000 - 100000" },
];


export default function HomePage() {

  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("");
  const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadioBtn(e.currentTarget.value);
  const { setBrancheckList } = useProducts();
  const [filteredBrands, setFilteredBrands] = useState<Marka[]>(markaList);
  const [filteredBeden, setFilteredBeden] = useState(bodyList);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { priceCheckList } = useProducts();
  const values = takeValueOfPrice(priceCheckList);

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

  const valueToNumber = () => {
    priceRanges.map((item) => {
      const min = Number(item.value.split("-")[0]);
      const max = Number(item.value.split("-")[1]);
      return [min, max];
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
              value={valueToNumber}
              onChange={(e) => {}}
              className="w-[50px] h-[27px] px-[10px] mb-[5px] bg-[#fafafa]"

            />
            <p className="mx-[6px]">-</p>
            <input
              type="number"
              value={values ? values[1] : ''}
              onChange={(e) => { }}
              className="w-[50px] h-[27px] px-[10px] mb-[5px] bg-[#fafafa]"
            />
            <button
              className="w-[30px] h-[28px] bg-[#dadada] rounded inline-flex items-center text-center px-[6px] ml-[4px] mb-[5px]"

            >
              <Search className="w-[14px] h-[14px] text-slate-50" />
            </button>
          </div>
          <PriceList items={priceRanges} />
        </div>

      </div>
      <div className="">
        <ProductGrid />
      </div>
    </div >
  );
}

function PriceList({ items }: { items: Price[] }) {
  const { setPriceCheckList } = useProducts();

  const handleCheckedPrice = (checkedItem: boolean, item: Price) => {
    setPriceCheckList((state) => {
      if (checkedItem) return [item];
      return state.filter((price) => price.id !== item.id)
    })
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li className="flex my-[5px] pt-[1px] text-[13px]" key={index}>
          <input
            type="radio"
            name="priceRange"
            value={item.value}
            onChange={(e) =>{}}
          />
          <span>{item.price}</span>
        </li>
      ))}
    </ul>
  )
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
