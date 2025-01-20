
import { useState, useEffect } from "react";

interface SearchProductProps {
    searchTerm: string;  
}

export default function SearchProduct({ searchTerm }: SearchProductProps) {
    const [data, setData] = useState<any[]>([]);  
    const [filterData, setFilterData] = useState<any[]>([]);  

    
    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/datas');  
        const data = await response.json();
        setData(data); 
    };

    useEffect(() => {
        fetchData(); 
    }, []);  

   
    useEffect(() => {
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) 
        );
        setFilterData(filteredData);  
    }, [searchTerm, data]); 

    return (
        <div>
            {filterData.length === 0 ? (
                <p>No results found</p>  
            ) : (
                filterData.map(item => ( 
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
