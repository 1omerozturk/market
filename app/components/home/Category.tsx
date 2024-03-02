"use client";

import React, { useState, useRef, useEffect } from "react";

const Category = () => {
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const categoryRef: any = useRef(null);

  const handleMouseDown = (event: {
    preventDefault: () => void;
    clientX: React.SetStateAction<number>;
  }) => {
    event.preventDefault(); 
    setStartX(event.clientX);
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  

  const handleMouseMove = (event:any) => {
    if (!isDragging) return;
  
    const deltaX = (event.clientX - startX) * 0.15; 
    categoryRef.current.scrollLeft -= deltaX;  
  };
  useEffect(() => {
    const handleWindowMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleWindowMouseUp);

    return () => window.removeEventListener("mouseup", handleWindowMouseUp);
  }, []);

  const categoryList = [
    { name: "Xiaomi" },
    { name: "Apple" },
    { name: "Vestel" },
    { name: "Samsung" },
    { name: "HTC" },
    { name: "Oppo" },
    { name: "Huawei" },
    { name: "Tecno" },
    { name: "Infinix" },
    { name: "Sony" },
    { name: "Realme" },
    { name: "Alcatel" },
    { name: "Ulefone" },
    { name: "LG" },
  ];

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-cyan-500",
    "bg-gray-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-red-600",
    "bg-blue-600",
    "bg-purple-600",
    "bg-indigo-600",
    "bg-pink-600",
    "bg-gray-600",
    "bg-teal-600",
    "bg-orange-600",
    "bg-red-700",
    "bg-blue-700",
    "bg-green-700",
    "bg-fuchsia-700",
    "bg-indigo-700",
    "bg-pink-700",
    "bg-gray-700",
    "bg-teal-700",
    "bg-orange-700",
  ];

  return (
    <div
      className="flex items-center md:px-10 bg-a md:py-4 justify-center gap-3 md:gap-10 border-2 rounded-3xl border-zinc-900 
       py-6 my-2 overflow-x-hidden overscroll-x-none whitespace-nowrap cursor-grab cursor-[webkit-grab]"
      ref={categoryRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {categoryList.map((category, index) => (
        <div
          key={index}
          className={`border text-white font-bold rounded-full min-w-[120px] flex flex-1 px-4 py-2 text-center cursor-pointer items-start justify-center ${
            colors[Math.floor(Math.random() * colors.length)]
          }`}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Category;
