"use client"; // for nextjs

import { LockIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar = () => {
  const [showWorks, setShowWorks] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  return (
    <div className="fixed z-40 flex h-full w-64 flex-col justify-between overflow-y-auto bg-white shadow-xl transition-all duration-300 dark:bg-black">
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* LOGO */}
        <div className="dark: z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            PROJECT LIST
          </div>
        </div>
        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              ZEE TEAM
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-4 w-4 text-gray-500 dark:text-gray-200" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Private
              </p>
            </div>
          </div>
        </div>
        {/* NAVBAR LINKS */}
      </div>
    </div>
  );
};
export default Sidebar;
