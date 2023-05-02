import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Notices } from "../constants/Notice";
import { authContext } from "../context/authContext";
import Navbar from "../components/navbar";
import { FaDownload } from "react-icons/fa";

const Dashboard = () => {
  const { state, dispatch } = useContext(authContext);

  const router = useRouter();

  useEffect(() => {
    !state.user && router.push("./");
  }, [state.user, router]);

  return (
    <div className="bg-main-global h-screen">
      <Navbar />
      <div className="w-full flex items-center justify-center pt-28">
        <div className="grid grid-cols-3 gap-20">
          {Notices.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col bg-black/50 rounded-lg w-[280px] pt-2 px-10 h-full"
              >
                <div className="text-color_brand text-5xl font-bold py-2">1</div>
                <div className="text-white text-xl font-bold pt-4 min-h-[130px]">
                  Office Hour During The Month of Ramadan 2023
                </div>
                <div className="w-full inline-flex justify-end py-6">
                  <button className="text-2xl text-color_brand hover:text-white transition-all duration-200">
                    <FaDownload />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-white text-center pt-6 text-xl capitalize">
        {`${state.user?.name}, Welcome to Purbani Document Mangement System`}
      </div>
    </div>
  );
};

export default Dashboard;