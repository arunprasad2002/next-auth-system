"use client";
import AuthInput from "@/components/UI/AuthInput";
import Button from "@/components/UI/Button";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  interface SingupFormState {
    email?: string;
    password?: string;
  }

  const [formState, setFormState] = useState<SingupFormState>();
  const router = useRouter();
  const onChangeHandelar = (e: any) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const onLogin = async () => {
    if (formState?.email?.length! > 0 && formState?.password?.length! > 0) {
      const res = await axios.post("/api/users/login", formState);
      if (res.data.success) {
        setFormState({
          email: "",
          password: "",
        });
        router.push("/profile");
      }
    }
  };

  return (
    <div className="flex w-screen h-[50vh] mt-5 flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Login</h1>
      <div className="my-5">
        <AuthInput
          name="email"
          id="email"
          type="email"
          placeholder="Enter email"
          required={true}
          onChange={onChangeHandelar}
          value={formState?.email}
        />
        <AuthInput
          name="password"
          id="password"
          type="password"
          placeholder="Enter password"
          required={true}
          onChange={onChangeHandelar}
          value={formState?.password}
        />
      </div>
      <div className="mb-5">
        <Link href={"/singup"}>Create account</Link>
      </div>
      <Button text="Submit" link="#" onClick={onLogin} />
    </div>
  );
};

export default page;
