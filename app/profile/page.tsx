"use client";

import Button from "@/components/UI/Button";
import React from "react";
import axios from "axios";
const onLogout = async () => {
  const response = await axios.get("/api/users/logout");
  console.log(response);
};

const page = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="bg-white shadow-lg p-4 rounded-md w-80 mb-2">
        <div className="space-y-1">
          <div>Name : Arun</div>
          <div>Email : arunprasad5051@gmail.com</div>
        </div>
      </div>

      <Button text="Logout" link="#" onClick={onLogout} />
    </div>
  );
};

export default page;
