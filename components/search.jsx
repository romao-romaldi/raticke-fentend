import React,{useState} from 'react';
import { searchcategory } from './data/caterory';
import * as Bs from "react-icons/bs"
import { useRouter } from 'next/router';



const Search = () => {

    const [search, setSearch] = useState("");

    const routeur = useRouter()

    const handersearch = () => {
        if (search && search.length > 2) {

            routeur.push({
                pathname:"/search",
                query: {
                    "query":{search}
                }
    
            })
        }
        else{
            console.log("inferrieur")
        }
    }


    
    return (
        <div className="sticky top-16 flex items-center border-2 hover:border-blue-700 gap-2  rounded-3xl flex-nowrap px-1 md:w-[512px]">
            <div className="w-full relative ">   
                <input type="text" placeholder="recherche" value={search} onChange={(e) => setSearch(e.target.value)}
                className='px-1 focus:outline-hidden focus:ring-0 border-none bg-transparent w-full' />
            </div>
            <div className="h-8 w-8  bg-amber-600 flex items-center justify-center shrink-0 rounded-full cursor-pointer active:translate-y-1
                transition ease-in-out duration-75" onClick={handersearch} >    
                <Bs.BsSearch className="rotate-90" />
            </div>
        </div>
    );
}

export default Search;
