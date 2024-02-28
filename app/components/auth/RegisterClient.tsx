"use client";

import { FaGoogle } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/ButtonB";
import Link from "next/link";
import { IoPersonAdd } from "react-icons/io5";

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
        <div className="flex justify-center items-center gap-4">
        <IoPersonAdd color="indigo" size={40} />
          <Heading color="indigo-900" text="REGISTER" center />
        </div>
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
    </div>
  );
};

export default RegisterClient;
