import { Link } from "react-router-dom"

const elements = [
    {
        name: "Indirim Kuponlari",
        href: "/"
    },
    {
        name: "Trendyol,da Satis Yap",
        href: "/"
    },
    {
        name: "Hakkimizda",
        href: "/"
    },
    {
        name: "Yardim & Destek",
        href: "/"
    }
]



export default function HeaderTop() {
    return (
        <nav className="pt-[5px] container mx-auto h-[20px]">
            <ul className="flex justify-end">
                {elements?.map((item, index) => (
                    <li key={index} className="ml-[30px]"><Link to={item.href} className="text-[12px] text-[#999]">{item.name}</Link></li>
                ))}
            </ul>
        </nav>
    )
}
