"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import AuthContainer from "../containers/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Button from "../general/ButtonB"


const RegisterClient = () => {


  const{
    register,
    handleSubmit,
    watch,
    formState:{errors},

  }=useForm<FieldValues>()
  const onSubmit:SubmitHandler<FieldValues>=(data)=>{console.log(data)
  }
  return (
    <div>

    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md text-center">
        <Heading text="Register" center />
       <Input placeholder="Ad" type="text" id="name" register={register} errors={errors} required />
       <Input placeholder="Email" type="email" id="email" register={register} errors={errors} required />
       <Input placeholder="Şifre" type="password" id="password" register={register} errors={errors} required />
       <Button color="blue-600" text="Kayıt Ol" onClick={()=>handleSubmit(onSubmit)}/>
       <div>OR</div>
       <Button color="orange-600" text="Google ile Üye ol" onClick={()=>{}}></Button>
      </div>

      </AuthContainer>
    </div>
  )
}

export default RegisterClient