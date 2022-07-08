import React from 'react';
import * as Hi from "react-icons/hi";
import * as Fc from "react-icons/fc";
import * as Ai from "react-icons/ai";
import logor from "../public/rlogo.svg";
import Image from 'next/image';

const Tabar = () => {
    return (
        <nav className="fixed bottom-0 right-0 left-0 gap-2 h-12 bg-gray-300 md:invisible items-center
            grid grid-cols-5 px-2 mt-2
            ">
            <div className="flex flex-col items-center">
                <div className="h-6 w-8 relative rounded-full bg-gray-50 p-1">
                    <Image src="/rlogo.svg" layout='fill' objectFit="content" />
                </div>
                
                <p className="text-[12px] font-medium">Acceuil</p>
            </div>
            
            <div className="flex flex-col items-center ">
                <Ai.AiFillDashboard className="h-6 w-8" /> 
                <p className="text-[12px] font-medium">Dashboard</p>
            </div>

            <div className="flex flex-col flex-col items-center ">
                <Hi.HiTicket className="h-6 w-8" />
                <p className="text-[12px] font-medium" >Ticket</p>
            </div>

            <div className="flex flex-col items-center">
                <Fc.FcOvertime className="h-6 w-8" /> 
                <p className="text-[12px] font-medium">Evenement</p>
            </div>

            <div className="flex flex-col items-center">
                <Hi.HiViewGrid className="h-6 w-8 " />
                <p className="text-[12px] font-medium">Menu</p>
            </div>
        </nav>
    );
}

export default Tabar;
