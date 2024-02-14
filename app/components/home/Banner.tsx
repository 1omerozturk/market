import Image from "next/image"

const Banner = () => {
  return (
    <div className="h-[500px] bg-black flex items-center justify-center">
        <div className="h-[407px] relative w-full">
            <Image src={"/Kis.gif"} fill alt="Banner" className="object-cover"/>
             </div>
    </div>
  )
}

export default Banner;