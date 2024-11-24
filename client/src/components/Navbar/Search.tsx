import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Search() {
  const [search, setsearch] = useState('');
  return(
    <div className="border-[2px]
        py-2 px-3
        w-[40vw]
        rounded-full
         shadow-sm
          hover:shadow-md
          transition
         cursor-pointer ">
<label className=" flex items-center gap-2">
  
  <input type="text" className="
  pl-2 w-[40vw]
        py-2 
        rounded-full
         shadow-sm
          hover:shadow-md
          transition
         cursor-pointer " value={search}
         onChange={(e)=>{setsearch(e.target.value)}}
         placeholder="Search eg,Dubai" />
  <Link to={'/searchplace/'+search}
 
  className=" p-2 bg-rose-500 rounded-full text-white"><BiSearch size={18}/></Link>
</label></div>
  )
}
