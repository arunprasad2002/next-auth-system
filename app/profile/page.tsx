"use client";

import Button from "@/components/UI/Button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onLogout = async () => {
    const response = await axios.get("/api/users/logout");
    if (response.data.success) {
      router.push("/login");
    }
  };

  const getUserData = async () => {
    setLoading(true);
    const response = await axios.get("api/users/user");
    if (response.data.user) {
      setUser(response.data.user);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="bg-white shadow-lg p-4 rounded-md w-80 mb-2">
          <div className="space-y-1">
            <div>Name : {user?.name}</div>
            <div>Email : {user?.email}</div>
          </div>
        </div>
      )}

      {!loading && <Button text="Logout" link="#" onClick={onLogout} />}
    </div>
  );
};

export default page;
