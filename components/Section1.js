import React from "react";
import Image from "next/image";
import backgroundImage from "../assets/solid-black background.jpg";
import HeaderImg from "../assets/24770099_08.jpg";

import Link from "next/link";

export default function Section1() {
    return (
        <div className="h-screen w-screen overflow-hidden mt-6 relative" data-aos="fade-down">
            <div className="absolute h-full w-full  top-0">
                <div className="">
                    <Image
                        src={backgroundImage}
                        width={1000}
                        height={1000}
                        className="w-full rounded-t-[4rem]"
                        alt="notfound"
                    />
                </div>
                <div className="text-white absolute top-0 left-0 flex items-center justify-start h-full w-full" id="sectio1-header">
                    <div className="h-full gap-12 flex items-start justify-center flex-col pl-24">
                        <div className="rounded-full text-[#343437] bg-white py-3 font-semibold px-6 flex items-center justify-center gap-2">
                            Work Life Balance
                            <span className="material-symbols-outlined">redeem</span>
                        </div>
                        <div className="text-5xl text-[#858eae] font-bold" data-aos="fade-right">
                            <span className="text-white">Build a better</span> <span>relationship</span>{" "}
                            <div>with your work</div>
                        </div>
                        <div>
                            <p className="text-gray-400 ">
                                We help feel more connected to your professional life through
                                keeping track of your time and communicating better.{" "}
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-6 text-sm">
                            <Link href={'/register'} className="bg-[#5D50C6] rounded-full py-4 px-6 text-white">
                                Get Started
                            </Link>
                            <button className="bg-white rounded-full py-4 px-6 text-black">
                                Book your couselling session
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <Image
                            src={HeaderImg}
                            alt="card-image"
                            width={900}
                            height={900}
                            className="h-full w-full object-contain rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
