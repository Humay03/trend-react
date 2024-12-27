import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductAdd() {
    return (
        <div className="container mx-auto px-4 bg-slate-100">
            <div className="grid grid-cols-1 gap-4 pt-[24px] ">
                <div className="col-span-1 mb-4">
                    <div className="flex justify-between items-center flex-wrap">
                        <div className="flex items-center">
                            <nav>
                                <ul className="breadcrumb flex space-x-2 text-sm text-gray-500">
                                    <li><Link to={"/admindashboard"} className="text-blue-500 hover:underline text-[18px]">Products</Link></li>
                                    <li className="text-[#324253] text-[18px] flex items-center"><ChevronRight className='w-[15px] h-[15px]' /> Add Product</li>
                                </ul>
                            </nav>
                        </div>
                        <button className='px-[8px] py-[4px] bg-[#3378ff] text-white '><Link to={"/admindashboard"} className='flex items-center text-[14px]'><ArrowLeft className='w-[18px] h-[18px] mr-[8px]' />Back</Link></button>
                    </div>
                </div>
                <div className="col-span-1 mb-3 flex justify-between">
                    <h4 className="font-bold text-[25px]">New Product</h4>
                </div>
                <div className="col-span-1">
                    <div className=" bg-white shadow rounded-lg">
                        <div className=" p-4">
                            <h5 className="font-bold mb-[16px] text-[20px]">Basic Information</h5>
                            <form className="grid grid-cols-2 gap-4">
                                <div className="col-span-1 mb-3  px-[8px] my-[16px]">
                                    <label className="block font-bold text-[#324258bf] text-[17px] mb-2">PRODUCT NAME</label>
                                    <input type="text" className="form-control border rounded-md p-2 w-full bg-slate-100" placeholder="Enter Product Name" />
                                </div>
                                <div className="col-span-1 mb-3 px-[8px] my-[16px]">
                                    <label className="block font-bold text-[#324258bf] text-[17px] mb-2 ml-[10px]">CATEGORY</label>
                                    <select className="form-select border rounded-md p-2 w-full">
                                        <option value="selected">Select Category</option>
                                        <option value="Applications">Applications</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Gadgets">Gadgets</option>
                                    </select>
                                </div>
                                <div className="col-span-1 mb-3 px-[8px] my-[16px]">
                                    <label className="block font-bold text-[#324258bf] text-[17px] mb-2">PRODUCT CODE</label>
                                    <input type="text" className="form-control border rounded-md p-2 w-full bg-slate-100" placeholder="Enter Product Code" />
                                </div>
                                <div className="col-span-1 mb-3 px-[8px] my-[16px]">
                                    <label className="block font-bold text-[#324258bf] text-[17px] mb-2">PRODUCT SKU</label>
                                    <input type="text" className="form-control border rounded-md p-2 w-full bg-slate-100" placeholder="Enter Product SKU" />
                                </div>
                                <div className="col-span-1 mb-3 px-[8px] my-[16px]">
                                    <label className="block font-bold text-[#324258bf] text-[17px] mb-2">MANUFACTURER</label>
                                    <input type="text" className="form-control border rounded-md p-2 w-full bg-slate-100" placeholder="Enter Manufacturer" />
                                </div>
                                <div className="col-span-1 mb-3 px-[8px] my-[16px]">
                                    <label className="block font-bold text-[#324258bf] text-[17px] mb-2">QUALITY</label>
                                    <input type="text" className="form-control border rounded-md p-2 w-full bg-slate-100" placeholder="Enter Quantity" />
                                </div>
                                <div className="col-span-1 mb-3 px-[8px] my-[16px]">
                                    <label className="block font-bold text-[#324258bf] text-[17px] mb-2">PRICE</label>
                                    <input type="text" className="form-control border rounded-md p-2 w-full bg-slate-100" placeholder="Enter Price" />
                                </div>
                                <div className="col-span-1 mb-3 px-[8px] my-[16px]">
                                    <label className="block font-bold text-[#324258bf] text-[17px] mb-2">TAX</label>
                                    <input type="text" className="form-control border rounded-md p-2 w-full bg-slate-100" placeholder="Enter Tax" />
                                </div>
                                <div className="col-span-2 mb-3 px-[8px] my-[16px]">
                                    <label className="block font-bold text-[#324258bf] text-[17px] mb-2">TAG</label>
                                    <select className=" border rounded-md p-2 w-full" >
                                        <option value="excellent">Excellent</option>
                                        <option value="bad">Bad</option>
                                        <option value="good">Good</option>
                                        <option value="not bad">Not Bad</option>
                                        <option value="very bad">Very Bad</option>
                                        <option value="very good">Very Good</option>
                                    </select>
                                </div>
                                <div className="col-span-2 mb-3 px-[8px] my-[16px]">
                                    <label className="block font-bold text-[#324258bf] text-[17px] mb-2">DESCRIPTION</label>
                                    <textarea className="form-control border rounded-md p-2 w-full" placeholder="Enter Description"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 ">
                    <div className=" bg-white shadow rounded-lg pb-[24px] felx justify-center">
                        <div className="flex justify-end mt-3">
                            <button className=" bg-blue-500 text-white  py-2 px-4 rounded">Create Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
