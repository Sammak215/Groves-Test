import React, { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="container mx-auto flex justify-between items-center p-[24px] sm:py-6 sm:px-2">
        <div>
          <a href="/">
            <img src="/logo.png" width={220} />
          </a>
        </div>
        <div className="hidden sm:flex  justify-between items-center ">
          <div className="w-[150px] flex justify-between items-center mr-[23px]">
            <a href="/">
              <img src="/x.png" width={20} />
            </a>
            <a href="/">
              <img src="/tiktok.png" width={20} />
            </a>
            <a href="/">
              <img src="/insta.png" width={20} />
            </a>
            <a href="/">
              <img src="/snap.png" width={20} />
            </a>
          </div>
          <div className="mr-[20px]">
            <button
              className={`w-[120px] h-12 text-white rounded-[20px] bg-cover bg-center bg-[url('/button.png')]`}
            >
              Log in{" "}
            </button>{" "}
          </div>
          <div className="mr-[20px]">
            <a href="/">
              <img src="/arrow.png" width={20} />
            </a>
          </div>
          <div className="mr-[10px]">
            <a href="/">
              <img src="/flag.png" width={33} />
            </a>
          </div>
          <a href="/" className="text-white">
            English
          </a>
        </div>
        <div
          onClick={() => setShowMenu(true)}
          className="sm:hidden hover:cursor-pointer"
        >
          <img src="hamburger.png" />
        </div>
      </div>
      {showMenu && (
        <div className="sm:hidden z-10 absolute h-full w-full bg-gradient-to-r from-[#283606] to-[#0F1500]">
          <div className=" p-[24px]  flex items-center justify-between ">
            <a href="/">
              <img src="/logo.png" width={220} />
            </a>
            <div
              className="hover:cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <img src="/cancel.png" width={30} />
            </div>
          </div>

          <nav className="w-full mt-[20px]">
            <ul className=" flex-col justify-center  text-white tracking-widest">
              <a href="#">
                <li className="bg-transparent border-t border-opacity-50 py-4 pl-[32px]  border-white">
                  DINE WITH US
                </li>
              </a>
              <a href="#">
                <li className="bg-transparent border-t border-opacity-50 py-4 pl-[32px] border-white">
                  PLAN YOUR VISIT
                </li>
              </a>
              <a href="#">
                <li className="bg-transparent border-t border-opacity-50 py-4 pl-[32px] border-white">
                  EVENTS
                </li>
              </a>
              <a href="#">
                <li className="bg-transparent border-t border-opacity-50 py-4 pl-[32px] border-white">
                  VIEW GROVES MAP
                </li>
              </a>
              <a href="#">
                <li className="bg-transparent border-t border-opacity-50 py-4 pl-[32px] border-white">
                  OUR STORY
                </li>
              </a>
              <a href="#">
                <li className="bg-transparent border-t border-opacity-50 py-4 pl-[32px] border-b border-white">
                  CONTACT US
                </li>
              </a>
            </ul>
          </nav>

          <div className="flex p-[30px] items-center ">
            <div className="mr-[10px]">
              <a href="/">
                <img src="/arrow.png" width={20} />
              </a>
            </div>
            <div className="mr-[10px]">
              <a href="/">
                <img src="/flag.png" width={33} />
              </a>
            </div>
            <a href="/" className="text-white">
              English
            </a>
          </div>
          <div className="px-[30px]">
            <button
              className={`w-[150px] h-12 text-white rounded-[15px] bg-cover bg-center bg-[url('/button.png')]`}
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </>
  );
}
