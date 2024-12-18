
import { useState, useEffect } from "react";

interface SearchProductProps {
    searchTerm: string;  
}

export default function SearchProduct({ searchTerm }: SearchProductProps) {
    const [data, setData] = useState<any[]>([]);  
    const [filterData, setFilterData] = useState<any[]>([]);  

    // Serverdən məlumatları yükləmək üçün fetch istifadə edirik
    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/datas');  // URL-ni öz serverinizə uyğun dəyişdirin
        const data = await response.json();
        setData(data); 
    };

    useEffect(() => {
        fetchData();  // Komponent yüklənərkən məlumatları serverdən alırıq
    }, []);  // Bir dəfə yüklənir

    // Axtarış mətni dəyişəndə filtrasiya aparılır
    useEffect(() => {
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) // Məhsul adı ilə uyğun gələnləri filtr edirik
        );
        setFilterData(filteredData);  // Filtr edilmiş məlumatları state-ə saxlayırıq
    }, [searchTerm, data]);  // `searchTerm` və `data` dəyişəndə yenidən filtrasiya aparılır

    return (
        <div>
            {filterData.length === 0 ? (
                <p>No results found</p>  // Axtarış nəticəsi yoxdursa, xəbərdarlıq göstəririk
            ) : (
                filterData.map(item => (  // Filtr olunmuş verilənləri ekranda göstəririk
                    <div key={item.id} className="w-[230px] border border-[#ccc] rounded-md ml-[20px] mb-[19px]">
                    <div className="w-full h-[267px] object-cover relative">
                        <img src={item.image} alt={item.name} className="h-full rounded-md" />
                    </div>
                    <div className="p-[10px]">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.price} TL</p>
                    </div>
                </div>
                ))
            )}
        </div>
    );
}
