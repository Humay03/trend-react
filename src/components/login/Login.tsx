import { Google } from "@mui/icons-material";
import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className=" bg-[#f7f7f7] flex flex-col items-center justify-center px-4 py-12 ">
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold text-gray-800  pb-2">Salam,</h1>
        <h3 className="text-sm text-gray-500 mt-2  pb-2">
          Trendyol-a daxil ol və ya hesab yarat, endirimləri qaçırma!
        </h3>
      </div>

      <div className="flex">
        <button className="bg-white w-[205px] h-12 text-[#ff6600] border-b-0 border-r border-t border-l border-[#e6e6e6] relative bottom-0 mr-[5px]">
          Daxil ol
        </button>
        <button className="w-[205px] h-12 relative bottom-0">
          Abunə ol
        </button>
      </div>

      <div className="w-[415px] bg-white  border border-[#e2e2e2]  p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-poçt
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-[333px] px-4 py-3 border border-[#ccc] rounded-md  bg-[#fafafa] text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Parol
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-[333px] px-4 py-3 border border-[#bdbdbd] rounded-md  bg-[#fafafa] text-sm"
            />
          </div>

          <div className="flex justify-end mt-2">
            <Link className="text-sm  underline">Parolumu unutdum</Link>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#ff6600] text-white font-semibold rounded-md hover:bg-[#e65c00] transition-all"
          >
            DAXİL OL
          </button>
        </form>
        <div className="mt-6 space-y-4">
          <div className="flex space-x-4">
            <div className=" w-[159px] mr-[15px] h-[48px] bg-white text-sm rounded-[6px] border border-[#e6e6e6] py-2 px-3 flex items-start self-start leading-[14px] cursor-pointer transition-all duration-300 ease-in-out">
              <div className="mr-4 w-[30px] h-[30px] flex items-center justify-center rounded-[4px]  bg-[#3b5998] text-white">
                <Link className=""><Facebook size={14} /></Link>
              </div>
              <div>
                <div className="">
                  Facebook
                </div>
                <span className="text-[12px]  text-slate-400 mr-[15px] whitespace-nowrap"> ilə qoşul</span>
              </div>
            </div>
            <div className=" h-[48px]   w-[159px] bg-white text-sm rounded-[6px] border border-[#e6e6e6] py-2 px-3 flex items-start self-start leading-[14px] cursor-pointer transition-all duration-300 ease-in-out">
              <div className="mr-4 w-[30px] h-[30px] flex items-center justify-center rounded-[4px]  bg-[#db4437] text-white">
                <Link className=" "><Google size={13} /></Link>
              </div>
              <div>
                <div>
                  Goggle
                </div>
                <span className="text-[12px]  text-slate-400  whitespace-nowrap"> ilə qoşul</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-gray-500">
          <p>
            Abunə olmadan verilən sifarişləri izləmək üçün
            <Link className="underline" to="/">
              klikleyin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
