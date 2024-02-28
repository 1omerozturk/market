

interface HeadingProps
{
center?:boolean,
text:string,
color:string,


}


const Heading:React.FC<HeadingProps>= ({center,text,color,}) => {
  return (
    <div className={`text-${color? color:'black' }  my-3 md:my-5 px-3 text-3xl md:text-3xl font-extrabold ${center?"text-center":"text-start"}`}>{text}</div>
  )
}

export default Heading;