"use client";

import AuthInput from "@/components/UI/AuthInput";
import Button from "@/components/UI/Button";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  interface SingupFormState {
    username?: string;
    email?: string;
    password?: string;
  }

  const [formState, setFormState] = useState<SingupFormState>();
  const router = useRouter();

  const onChangeHandelar = (e: any) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const onSingUp = async () => {
    if (
      formState?.email?.length! > 0 &&
      formState?.password?.length! > 0 &&
      formState?.username?.length! > 0
    ) {
      const res = await axios.post("/api/users/singup", formState);
      if (res.data.success) {
        setFormState({
          username: "",
          email: "",
          password: "",
        });
        router.push("/login");
      }
    }
  };

  return (
    <div className="flex w-screen h-[50vh] mt-5 flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Singup</h1>
      <div className="my-5">
        <AuthInput
          name="username"
          id="username"
          type="text"
          placeholder="Enter username"
          required={true}
          onChange={onChangeHandelar}
          value={formState?.username}
        />
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
      <Button text="Submit" link="#" onClick={onSingUp} />
    </div>
  );
};

export default page;
