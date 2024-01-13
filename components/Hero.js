import React from "react";
import { Playfair_Display } from "next/font/google";

const DM = Playfair_Display({ weight: "400", subsets: ["latin"] });

export default function Hero() {
  return (
    <>
      <div className="hidden relative">
        <div className="bg-[#000000] h-[83vh] opacity-50 max-w-[900px] absolute inset-0"></div>
        <div className="sm:max-w-[650px] mt-[180px]  text-white  flex flex-col items-start pl-[30px] sm:pl-[210px] sm:transform translate(-50%, -50%)">
          <div className="tracking-widest">KHAWAJA YANNI</div>
          <div
            className={`${DM.className} my-[18px] text-[60px] sm:text-[73px]`}
          >
            <div>The new</div>
            <div className="mt-[-20px]">era of luxury</div>
          </div>

          <div className="w-[280px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </div>
          <div className="mt-[45px]">
            <button
              className={`w-[260px] h-12 text-white rounded-[15px] bg-cover bg-center bg-[url('/button.png')]`}
            >
              <div className="flex justify-between items-center px-4">
                <div> Book Reservation Now</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="29.457"
                  viewBox="0 0 39.934 29.457"
                >
                  <path
                    id="Path_41541"
                    data-name="Path 41541"
                    d="M39.237,13.047l0,0L26.822.692A2.376,2.376,0,0,0,23.47,4.059L31.8,12.353H2.376a2.376,2.376,0,1,0,0,4.751H31.8L23.47,25.4a2.376,2.376,0,0,0,3.352,3.368L39.235,16.413l0,0A2.378,2.378,0,0,0,39.237,13.047Z"
                    fill="#fff"
                    opacity="0.486"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
