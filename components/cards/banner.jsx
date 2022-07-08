import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (

        <div className="bg-blue-800 h-80 md:h-auto  pt-4 pb-8 ">
       
            <div className="relative flex  items-center justify-between  h-full w-full  pulse z-10">
                <div className="text-white p-4 md:p-8 w-3/4 md:w-2/4 ">
                    <h3 className="font-bold text-lg md:text-3xl">TROUVEZ TOUT CE QUE VOUS AVEZ BESOIN POUR LA REUSSITE 
                    DE VOTRE EVENEMENT</h3>
                    <p className="text-sm md:text-xl font-light">Creer, vendrer, controler votre évenement et trouver des
                        partenaires qui vous aideront à réussir votre évenement</p>

                    <div className="mt-2 sm:mt-8 flex flex-col md:flex-row gap-2 md:gap-4">
                        <button className="py-1 px-1 md:px-3  rounded-xl text-center text-base md:text-lg bg-amber-600
                          shadow-sm shadow-amber-800">Creer évenement</button>
                        <button className="py-1 px-1 md:px-3 border-[1px] text-center rounded-xl text-base md:text-lg
                         border-amber-600 text-amber-500 shadow-sm shadow-amber-600">Trouver partenaire</button>
                    </div>
                </div>
                

                <div className="relative hidden md:flex md:h-80 md:w-80  lg:h-72 lg:w-80 bg-slate-50 sm:mr-10 md:mr-10 lg:mr-24 rounded-lg p-1 shadow-xl shadow-current shadow-black">

                    <div className="h-full w-full relative">
                        <Image src="/ilust.svg" layout='fill' objectFit='cover' className="" />
                    </div>
                    
                </div>
            
            </div>





        </div>
    );
}

export default Banner;
