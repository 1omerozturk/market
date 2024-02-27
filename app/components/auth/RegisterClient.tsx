"use client";


import { FaGoogle } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/ButtonB";

const RegisterClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <AuthContainer>
        <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md text-center">
          <Heading text="Register" center />
          <Input
            placeholder="Ad"
            type="text"
            id="name"
            register={register}
            errors={errors}
            required
          />
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
            text="Kayıt Ol"
            onClick={handleSubmit(onSubmit)}
          />
          <div className="flex font-bold text-lg items-center justify-center 
          text-center bg-sky-100 mx-auto w-min my-2">
            OR
          </div>
          <Button
            color="orange-500"
            text="Google ile Üye ol"
            icon={FaGoogle}
            onClick={()=>{}}
          />
        </div>
      </AuthContainer>
    </div>
  );
};

export default RegisterClient;
