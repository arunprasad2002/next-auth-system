import Button from "@/components/UI/Button";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen w-screen">
      <h1 className="text-xl font-bold">Auth System</h1>
      <div className="flex justify-center items-center mt-5 space-x-2">
        <Button text="Singup" link="singup" />
        <Button text="Login" link="login" />
      </div>
    </div>
  );
};

export default page;
