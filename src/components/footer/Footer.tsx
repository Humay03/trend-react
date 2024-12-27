
import { Link } from 'react-router-dom';

export default function Footer() {
    const trendyolMenu = [
        { name: "Biz Kimiz", link: "/biz-kimiz" },
        { name: "Kariyer", link: "/kariyer" },
        { name: "Sürdürülebilirlik", link: "/sürdürülebilirlik" },
        { name: "İletişim", link: "/iletisim" },
    ];

    const campaignsMenu = [
        { name: "Kampanyalar", link: "/kampanyalar" },
        { name: "Alışveriş Kredisi", link: "/trendyol-alisveris-kredisi" },
        { name: "Elit Üyelik", link: "/elit-uyelik" },
        { name: "Hediye Fikirleri", link: "/hediye-fikirleri" },
    ];

    const sellerMenu = [
        { name: "Trendyol'da Satış Yap", link: "/trendyolda-satis-yap" },
        { name: "Temel Kavramlar", link: "/temel-kavramlar" },
        { name: "Trendyol Akademi", link: "/trendyol-akademi" },
    ];

    const helpMenu = [
        { name: "Sıkça Sorulan Sorular", link: "/yardim-sorular" },
        { name: "Canlı Yardım / Asistan", link: "/yardim-sorular" },
        { name: "Nasıl İade Edebilirim", link: "/yardim-sorular" },
        { name: "İşlem Rehberi", link: "/" },
    ];

    const renderMenuItems = (menu) => {
        return menu.map((item, index) => (
            <li key={index}>
                {item.external ? (
                    <Link to={item.link} className="text-gray-600 text-sm hover:text-[#ff6600]">
                        {item.name}
                    </Link>
                ) : (
                    <Link to={item.link} className="text-gray-600 text-sm hover:text-[#ff6600]">
                        {item.name}
                    </Link>
                )}
            </li>
        ));
    };

    return (
        <div className="bg-gray-100 w-full">
            <div className="container  mx-auto py-16 box-border flex flex-col justify-center gap-8">
                <div className="container mx-auto flex">
                    <div className="flex gap-8 w-full">
                        <div className="flex flex-col gap-4 w-[240px]">
                            <Link to="/" className="text-gray-800 text-2xl font-semibold hover:text-[#ff6600]">
                                Trendyol
                            </Link>
                            <ul className="flex flex-col gap-4">{renderMenuItems(trendyolMenu)}</ul>
                        </div>


                        <div className="flex flex-col gap-4 w-[240px]">
                            <Link to="/kampanyalar" className="text-gray-800 text-2xl font-semibold hover:text-[#ff6600]">
                                Kampanyalar
                            </Link>
                            <ul className="flex flex-col gap-4">{renderMenuItems(campaignsMenu)}</ul>
                        </div>

                        <div className="flex flex-col gap-4 w-[240px]">
                            <Link
                                to="trendyolda-satis-yap"
                                className="text-gray-800 text-2xl font-semibold hover:text-[#ff6600]"
                            >
                                Satıcı
                            </Link>
                            <ul className="flex flex-col gap-4">{renderMenuItems(sellerMenu)}</ul>
                        </div>


                        <div className="flex flex-col gap-4 w-[240px]">
                            <Link to="/yardim-sorular" className="text-gray-800 text-2xl font-semibold hover:text-[#ff6600]">
                                Yardım
                            </Link>
                            <ul className="flex flex-col gap-4">{renderMenuItems(helpMenu)}</ul>
                        </div>
                        <div className="flex flex-col gap-10 w-[240px]">
                            <div className='text-gray-800 text-2xl font-semibold'>  Ülke Degistir</div>
                            <button className=" w-[166px] bg-white border border-gray-300 rounded-lg py-2 px-3 flex justify-between items-center text-gray-700 hover:border-orange-500">
                                Ülke Seç
                                <i className="text-orange-500 text-xs">→</i>
                            </button>
                            <div className="flex flex-col gap-8">
                                <div className="text-gray-800 text-lg font-semibold">Sosyal Medya</div>
                                <div className="flex gap-4">
                                    <Link to="/login">
                                        <img src="https://cdn.dsmcdn.com/web/production/footer-facebook.png" alt="Facebook" className="w-10 h-10" />
                                    </Link>
                                    <Link to="/login">
                                        <img src="https://cdn.dsmcdn.com/web/production/footer-instagram.png" alt="Instagram" className="w-10 h-10" />
                                    </Link>
                                    <Link to="/login" target="_blank">
                                        <img src="https://cdn.dsmcdn.com/web/production/footer-youtube.png" alt="YouTube" className="w-10 h-10" />
                                    </Link>
                                    <Link to="/login" >
                                        <img src="https://cdn.dsmcdn.com/web/production/footer-x.png" alt="Twitter" className="w-10 h-10" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" py-8">
                    <div className="flex">
                        <div className=" mb-8 w-[400px]">
                            <div className=" text-xl font-semibold text-gray-800">Güvenlik Sertifikası</div>
                            <ul className=" flex gap-6 flex-wrap mt-4 ">
                                <li >
                                    <div className=" flex gap-4">
                                        <Link
                                            to="/login"
                                        >
                                            <img
                                                src="https://cdn.dsmcdn.com/web/production/footer-etbis.png"
                                                alt=""
                                                className="w-16 h-16"
                                            />
                                        </Link>
                                        <Link
                                            to="/login"
                                        >
                                            <img
                                                src="https://cdn.dsmcdn.com/web/production/footer-trust-stamp.png"
                                                alt=""
                                                className=" w-16 h-16"
                                            />
                                        </Link>
                                        <img
                                            src="https://cdn.dsmcdn.com/web/production/footer-pci-dss.png"
                                            alt=""
                                            className=" w-16 h-16"
                                        />
                                        <img
                                            src="https://cdn.dsmcdn.com/web/production/footer-iso.png"
                                            alt=""
                                            className=" w-16 h-16"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className=" mb-8  w-[400px]">
                            <div className=" text-xl font-semibold text-gray-800">Güvenli Alışveriş</div>
                            <ul className=" flex gap-6 flex-wrap mt-4">
                                <li >
                                    <div className="flex gap-4">
                                        <img
                                            src="https://cdn.dsmcdn.com/web/production/footer-troy.png"
                                            alt=""
                                            className=" w-16 h-16"
                                        />
                                        <img
                                            src="https://cdn.dsmcdn.com/web/production/footer-mastercard.png"
                                            alt="MasterCard ikonu"
                                            className=" w-16 h-16"
                                        />
                                        <img
                                            src="https://cdn.dsmcdn.com/web/production/footer-visa.png"
                                            alt=""
                                            className=" w-16 h-16"
                                        />
                                        <img
                                            src="https://cdn.dsmcdn.com/web/production/footer-american-express.png"
                                            alt=""
                                            className=" w-16 h-16"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className=" mb-8 w-[400px]">
                            <div className=" text-xl font-semibold text-gray-800">Mobil Uygulamalar</div>
                            <ul className="flex gap-6 flex-wrap mt-4">
                                <li className="">
                                    <div className=" flex gap-4">
                                        <Link
                                            to="/login"

                                        >
                                            <img
                                                src="https://cdn.dsmcdn.com/web/production/footer-app-store.png"
                                                alt=""
                                                className=" w-32 h-10"
                                            />
                                        </Link>
                                        <Link
                                            to="/login"
                                        >
                                            <img
                                                src="https://cdn.dsmcdn.com/web/production/footer-google-play.png"
                                                alt=""
                                                className=" w-32 h-10"
                                            />
                                        </Link>
                                        <Link
                                            to="/login"
                                        >
                                            <img
                                                src="https://cdn.dsmcdn.com/web/production/footer-app-gallery.png"
                                                alt=""
                                                className=" w-32 h-10"
                                            />
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 py-4 flex justify-between items-center">
                <div className="flex gap-4 container mx-auto justify-between">
                    <div className="text-white text-[12px]">©2024 DSM Grup Danışmanlık İletişim ve Satış Tic. A.Ş. Her Hakkı Saklıdır.</div>
                    <div>
                        <button className="text-white text-sm">Çerez Tercihleri</button>
                        <Link to="/login" className="text-white text-[12px] ml-[15px]">
                            KVKK ve Gizlilik Politikası
                        </Link>
                        <Link to="/login" className="text-white text-[12px] ml-[15px]">
                            DSM Grup
                        </Link>
                        <Link to="/login" className="text-white text-[12px] ml-[15px]">
                            Kullanım Koşulları
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
