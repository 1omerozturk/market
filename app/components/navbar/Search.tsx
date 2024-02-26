
const Search = () => {
  // return (
  //   <div className="hidden md:flex flex-1  px-5 py-2 w-4/5 text-slate-100 rounded-full border-black border-2 ">
  //       <input className=" bg-transparent text-black w-full h-full active:border-transparent border-transparent focus:border-transparent"  type="text" placeholder="Search..." />
  //       </div>
  // )

  return(
    <div className="hidden md:flex flex-1">
      <input className="py-2 px-3 rounded-sm border-none outline-none flex flex-1 text-xl font-semibold text-indigo-950"  type="text" placeholder="Arama..." />
      <button className="p-2 bg-indigo-800 mx-4 rounded-xl text-lg border border-black">Ara</button>
    </div>
  )
}

export default Search