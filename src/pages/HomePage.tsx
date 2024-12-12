import ProductGrid from "../components/products/ProductGrid";

export default function HomePage() {
  return (
    <div className=" container mx-auto grid grid-cols-[200px_1fr] border-t-[1px] border-[#ccc]">
      <div>
        salam
      </div>
      <div className="">
        <ProductGrid />
      </div>
    </div>
  )
}
