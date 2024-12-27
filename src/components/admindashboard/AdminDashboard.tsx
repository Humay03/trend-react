import { Download, Pencil, Search, Trash2 } from "lucide-react";
import { useProducts } from "../context/ProductContext";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
    const { filteredProducts } = useProducts();
    return (
        <div className="container mx-auto pt-[30px] px-[24px] bg-slate-100">
            <div className="flex justify-between mb-[24px]">
                <h4 className="text-[25px] font-semibold">Product</h4>
                <div className="flex">
                    <div className="flex justify-between py-[8px] px-[16px] border border-[#ccc] rounded-md w-[350px]">
                        <input type="search" placeholder="Search Product..." className="w-full px-2" />
                        <button><Search className="w-[15px] h-[15px]" /></button>
                    </div>
                    <button className="bg-[#3378ff] text-white py-[8px] px-[24px] rounded-md ml-[20px]">
                        <Link to={"/productadd"}> + Add Product</Link>
                    </button>
                </div>
            </div>
            <div>
                <div className="flex justify-between px-[16px] pt-[16px] bg-white">
                    <h5 className="text-[20px] font-semibold">Product List</h5>
                    <button className="py-[4px] px-[8px] flex items-center text-[14px] bg-[#8f9fbc] text-white rounded-md">
                        <Download className="w-[13px] h-[13px] mr-[4px]" /> Export
                    </button>
                </div>

                <div className="flex justify-between bg-white h-[61px] pt-[20px] pl-[24px]">
                    <div className="w-[181px] items-center">
                        <label className="flex items-center">
                            <p className="text-[15px] text-gray-600 mr-[4px]">Show</p>
                            <select className="flex py-[4px] pl-[6px] pr-[25px] border border-zinc-200">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <p className="text-[15px] text-gray-600 ml-[4px]">entries</p>
                        </label>
                    </div>
                    <div className="pr-[24px]">
                        <label className="flex items-center">
                            <p className="mr-[4px]">Search:</p>
                            <input type="search" className="py-[4px] px-[8px] bg-slate-100" />
                        </label>
                    </div>
                </div>
                <div className="bg-white">
                    <table className="min-w-full table-auto">
                        <thead className="bg-[#f3f4f6]">
                            <tr className="text-left text-sm font-semibold text-gray-600">
                                <th className="py-3 px-6">Product Name</th>
                                <th className="py-3 px-6">Description</th>
                                <th className="py-3 px-6">Price</th>
                                <th className="py-3 px-6">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map((item) => (
                                <tr key={item.id} className="border-t py-[16px]">
                                    <td className="py-4 px-6 flex items-center space-x-3">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
                                        <span>{item.name}</span>
                                    </td>
                                    <td className="py-4 px-6">{item.description}</td>
                                    <td className="py-4 px-6">{item.price} ₼</td>
                                    <td className="py-4 px-6 space-x-3">
                                        <button className=" py-1 px-3 rounded"><Pencil className=" text-[#8f9fbc] w-[16px] h-[16px]" /></button>
                                        <button className=" py-1 px-[8px] rounded bg-[#c03221] text-white"><Trash2 className="w-[16px] h-[16px]" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
