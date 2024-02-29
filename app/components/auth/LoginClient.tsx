"use client";


import { FaGoogle } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/ButtonB";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";
import toast from "react-hot-toast";
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation";

const LoginClient = () => {

  const router=useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
   
    signIn('credentials',{
      ...data,
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
  }
  return (
    <div>
      <AuthContainer>
        <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md text-center">
        <div className="flex justify-center items-center gap-5">
        <IoPerson color='blue' size={40} />
          <Heading color="blue-700" text="LOGİN" center />
        </div>
          <Input
            placeholder="Email"
            type="text"
            id="email"
            register={register}
            errors={errors}
            required
          />
          <Input
            placeholder="Şifre"
            type="text"
            id="password"
            register={register}
            errors={errors}
            required
          />
          <Button
            color="blue-600"
            text="Giriş Yap"
            onClick={handleSubmit(onSubmit)}
          />
          <div className="flex font-bold text-lg items-center justify-center 
          text-center bg-sky-100 mx-auto w-min my-2">
            OR
          </div>
          <Button
            color="orange-500"
            text="İle Giriş Yap"
            icon={FaGoogle}
            onClick={()=>{}}
          />
          <div className="flex justify-center w-1/2 mx-auto  my-3 
          text-center font-semibold text-zinc-950">
            Daha Önce Kayıt Olmadım
            <Link className="text-sky-500 absolute mt-6 
            hover:bg-transparent underline hover:text-sky-600 cursor-pointer" 
            href="/register">Kayıt Ol</Link>
          </div>
        </div>
      </AuthContainer>
    </div>
  );
};

export default LoginClient;
