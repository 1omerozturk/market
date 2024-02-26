

interface HeadingProps
{
center?:boolean
text:string


}


const Heading:React.FC<HeadingProps>= ({center,text}) => {
  return (
    <div className={`text-slate-500 my-3 md:my-5 px-3 md:px10 md:text-3xl font-extrabold ${center?"text-center":"text-start"}`}>{text}</div>
  )
}

export default Heading;