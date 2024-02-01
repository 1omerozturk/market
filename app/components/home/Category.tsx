"use client"

const Category = () => {
   
  const categoryList = [
    {
      name: "Kazak",
    },
    {
      name: "Pantolon",
    },
    {
      name: "Mont",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ceket",
    },
    {
      name: "Sweatshirt",
    },
  ]
  return (
    <div className="flex items-center px-3 md:px-10  md:py-10 justify-center gap-3 md:gap-10 py-5 md-py-8 overflow-x-auto ">
      
      {
      categoryList.map((category, index) => (
        <div key={index} className="border text-black font-bold rounded-full min-w-[120px] flex flex-1 px-4 py-2 text-center cursor-pointer items-start justify-center bg-indigo-400">
          {category.name}
        </div>
      ))
      }
      
    </div>
  )
}

export default Category;
