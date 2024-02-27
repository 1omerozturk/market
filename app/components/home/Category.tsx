"use client"


const Category = () => {
   


  const categoryList = [
    {
      name: "Xiaomi",
    },
    {
      name: "Apple",
    },
    {
      name: "Vestel",
    },
    {
      name: "Samsung",
    },
    {
      name: "HTC",
    },
    {
      name: "Oppo",
    },
    {
      name: "Huawei",
    },
    {
      name: "Tecno",
    },
    {
      name: "Infinix",
    },
    {
      name: "Sony",
    },
    {
      name: "Realme",
    },
    {
      name: "Alcatel",
    },
    {
      name: "Ulefone",
    },
    {
      name: "LG",
    },
  ]
 

  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-indigo-500',
    'bg-cyan-500',
    'bg-gray-500',
    'bg-teal-500',
    'bg-orange-500',
    'bg-red-600',
    'bg-blue-600',
    'bg-purple-600',
    'bg-indigo-600',
    'bg-pink-600',
    'bg-gray-600',
    'bg-teal-600',
    'bg-orange-600',
    'bg-red-700',
    'bg-blue-700',
    'bg-green-700',
    'bg-fushia-700',
    'bg-indigo-700',
    'bg-pink-700',
    'bg-gray-700',
    'bg-teal-700',
    'bg-orange-700',
  ];
  

  // Sayfa yüklendiğinde arka plan rengini değiştiren useEffect
  
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="flex items-center px-3 md:px-10 bg-a  md:py-10  justify-center gap-3 md:gap-10 py-5 md-py-8 overflow-x-auto whitespace-nowrap cursor-grab cursor-[webkit-grab] scrollbar-hide">
      
      {
        categoryList.map((category, index) => (
        
        <div key={index} className={`border text-white font-bold rounded-full min-w-[120px] flex flex-1 px-4 py-2 text-center cursor-pointer items-start justify-center ${colors[Math.floor(Math.random() * colors.length)]}`}>
          {category.name}
        </div>
      ))
      }
      
    </div>
  )
}

export default Category;
