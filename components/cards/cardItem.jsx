import Image from 'next/image';
import React from 'react';

const CardItem = (props) => {
    return (
        <div className="flex w-full sm:w-[300Px] gap-3  p-1 md:flex-col border-b-[1px]" >
            <div className="flex flex-col gap-3 justify-between">
                <div className="relative sm:w-full sm:h-44 h-16 w-28   rounded-md shadow-sm shadow-gray-800">
                    <Image src={props.image_items} layout='fill' objectFit="cover" 
                    className="rounded-md" />
                </div> 
                <div className="flex items-center gap-2 ">
                    <div className="relative h-6 w-6 rounded-full ">
                        <Image src={props.user_image} layout='fill' objectFit="cover" 
                        className="rounded-md" />
                    </div>

                    <div >
                        <p className="text-sm ">{props.username}</p>
                        <p className="text-sm text-gray-500">{props.user_type}</p>
                    </div>
                </div>
            </div>

            <div className=" flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="font-light text-sm">{props.name_item}</p>

                        <p className="text-sm text-orange-300">4.9 <span className="font-light text-gray-500">(500)</span></p>
                    </div>

                    <div className="text-sm items-center p-2 text-gray-700">TARIF: {props.prix}{props.devise}/{props.type}</div>
            </div>
           
        </div>
    );
}

export default CardItem;
