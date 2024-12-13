import { Link } from "react-router-dom";
import ProductGrid from "../components/products/ProductGrid";

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

  return (
    <div className="container mx-auto grid grid-cols-[200px_1fr] border-t-[1px] border-[#ccc]">
      <div className="">
        <div className="pt-[12px]">
          <p className="mb-[5px] text-[14px]">Marka</p>
        </div>
        <input type="search" name="" id="" placeholder="Marka ara" className="border-[1px] border-[#999] mb-[10px] text-[11px] px-[10px] bg-[#fafafa] h-[27px] rounded-[6px]" />
        <MarkaList items={markaList} />
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
