import Image from "next/image"

const Banner = () => {
  return (
    <div className="h-[500px] md:h-[500px] bg-black flex items-center justify-center">
        <div className="h-full relative w-full">
            <Image src={"/Kış.png"} fill alt="Banner" className="object-cover"/>
             </div>
    </div>
  )
}

export default Banner;