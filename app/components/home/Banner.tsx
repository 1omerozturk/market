import Image from "next/image"

const Banner = () => {
  return (
    <div className="h-[407px] bg-black flex items-center justify-center">
        <div className="h-[307px] relative w-full">
            <Image src={"/Kis.gif"} fill alt="Banner"/>
             </div>
    </div>
  )
}

export default Banner;