import { Facebook, Google } from "@mui/icons-material";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Subscribe() {
    const { login } = useAuth()

    const handleFormsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        if (email !== "" || email !== null || password !== "" || password !== null) {
            const res = await login(String(email), String(password));
        }


    }
    return (
        <div className=" bg-[#f7f7f7] flex flex-col items-center justify-center px-4 py-12 ">
            <div className="text-center mb-6">
                <h1 className="text-xl font-bold text-gray-800  pb-2">Salam,</h1>
                <h3 className="text-sm text-gray-500 mt-2  pb-2">
                    Trendyol-a daxil ol və ya hesab yarat, endirimləri qaçırma!
                </h3>
            </div>

            <div className="flex">
                <Link to={'/login'}>
                    <button className="w-[205px] h-12 relative bottom-0 bg-[#f2f2f2]">
                        Daxil ol
                    </button>
                </Link>
                <button className="bg-white w-[205px] h-12 text-[#ff6600] border-b-0 border-r border-t border-l border-[#e6e6e6] relative bottom-0 ml-[5px]">
                    Abunə ol
                </button>
            </div>

            <div className="w-[415px] bg-white  border border-[#e2e2e2]  p-8">
                <form className="space-y-6" onSubmit={handleFormsubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            E-poçt
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
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
                            name="password"
                            className="mt-1 block w-[333px] px-4 py-3 border border-[#bdbdbd] rounded-md  bg-[#fafafa] text-sm"
                        />
                    </div>
                    <p className="text-[12px]">Şifrəniz ən azı 10 simvoldan ibarət olmalıdır.O, 1 böyük hərf, 1 kiçik hərf və rəqəmdən ibarət olmalıdır.</p>
                    <div className="flex flex-col mt-[20px]">
                        <div className="flex items-start mb-[5px]">
                            <label htmlFor="" className="text-[14px]">Cinsiyyət (məcburi deyil)</label>
                        </div>
                        <div className="flex  items-center">
                            <button className="w-[205px] h-12 bg-[#fafafa] border border-[#e6e6e6]">Qadın</button>
                            <button className="w-[205px] h-12 bg-[#fafafa] border border-[#e6e6e6]">Kişi</button>
                        </div>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <div className="mr-[8px] mb-[5px]">
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="text-[12px]">
                            Mən sərfəli təkliflər təklif etmək üçün şəxsi məlumatlarımın emalı və paylaşılmasına <span>razıyam.</span>
                        </div>
                    </div>
                    <div className="flex items-center mt-[13px] cursor-pointer">
                        <div className="mr-[8px]">
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="flex mb-[8px] text-[12px] ">
                            Mesajların göndərilməsini təsdiq edirəm.
                        </div>
                    </div>
                    <div className="flex items-center mt-[13px] cursor-pointer">
                        <div className="mr-[8px] mb-[5px]">
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="text-[12px]">
                            Üzvlük Müqaviləsini qəbul etməklə,
                            <span>məlumat mətni</span>  çərçivəsində şəxsi məlumatlarımın işlənməsinə razıyam.
                        </div>
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
                                <Link to={'subscribe'} className=""><Facebook size={14} /></Link>
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
                                <Link to={'subscribe'} className=" "><BsGoogle size={13} /></Link>
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
