"use client";
import axios from "axios"
import { FaGoogle } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/ButtonB";
import Link from "next/link";
import { IoPersonAdd } from "react-icons/io5";
import toast from "react-hot-toast";
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation";


const RegisterClient = () => {

  const router=useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    
    axios.post('/api/register',data).then(()=>{
      toast.success("Kullanıcı oluşturuldu. Giriş yapabilirsiniz.");
      signIn('credentials',{
        email:data.email,
        password:data.password,
        redirect:false,
      }).then((callback)=>{
        if(callback?.ok){
          router.push('/cart');
          router.refresh();
          toast.success('Giriş işlemi başarılı ☺️☺️')
        }
        if(callback?.error){
          toast.error(callback.error)
        }
      })
    })
    .catch((err)=>{
      console.log(err);
    }
    );
    
  };
  return (
    
      <AuthContainer>
        <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md text-center">
        <div className="flex justify-center items-center gap-4">
        <IoPersonAdd color="indigo" size={40} />
          <Heading color="indigo-900" text="REGISTER" center />
        </div>
        <Input placeholder="Ad" type="text" id="name" register={register} errors={errors} required/>
              <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required/>
              <Input placeholder="Parola" type="password" id="password" register={register} errors={errors} required/>
              <Button  color="green-500" text="Kayıt Ol" onClick={handleSubmit(onSubmit)}/>
          <div
            className="flex font-bold text-lg items-center justify-center 
          text-center bg-sky-100 mx-auto w-min my-2 mt-2"
          >
            OR
          </div>
          <Button
            color="orange-500"
            text="İle Kayıt Ol"
            icon={FaGoogle}
            onClick={() => {}}
          />
          <div className="flex justify-center w-1/2 mx-auto my-3 
          text-center font-semibold text-zinc-950">
            Daha Önce Kayıt Oldum
            <Link
              className=" text-violet-500 absolute mt-6 
              hover:bg-transparent underline hover:text-violet-700 cursor-pointer"
              href="/login"
            >
              Giriş Yap 
            </Link>
          </div>
        </div>
      </AuthContainer>
      
  );
};

export default RegisterClient;
