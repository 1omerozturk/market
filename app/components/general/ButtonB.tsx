import { Icon } from "@mui/material";
import { IconType } from "react-icons";


interface ButtonProps{
    text:string
    color:string
    onClick:(e:React.MouseEvent<HTMLButtonElement>)=> void;
    small?:boolean
    outline?:boolean
    icon?:IconType
    disabled?:boolean
    
}

const ButtonB:React.FC<ButtonProps>=({text,onClick,small,outline,color="blue",icon:Icon, disabled})=>{
    return(
        
<button  disabled={disabled} className={`text-xl font-semibold rounded-3xl mt-2 shadow-zinc-950 hover:shadow-md hover:shadow-zinc-950 px-3 py-3 gap-3 flex justify-center items-center  w-full  ${small ? "w-[200px]" : "w-full"} ${outline ? "border text-black" : " text-white"} bg-${color}`} onClick={()=>{onClick}}>
{Icon && <Icon/>}
{text}
</button>
       
    )
}
export default ButtonB;