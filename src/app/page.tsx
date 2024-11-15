"use client";

import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  const [time, setTime] = useState("24:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = 18 - now.getHours();
      const minutes = 59 - now.getMinutes();
      const seconds = 59 - now.getSeconds();
      setTime(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div>
          <h1 className='bg-slate-500'>{time}</h1>
          <Image src={"/FcRWMnnaMAAekhm.png"} alt="FcRWMnnaMAAekhm" width={100} height={150} />
        </div>
    </>
  );
};

export default Home;
