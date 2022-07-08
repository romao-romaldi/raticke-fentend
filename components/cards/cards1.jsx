import Image from 'next/image';
import React from 'react';

const Cards1 = (props) => {
    return (
        <div className="relative h-24">
            <Image src={props.path} layout='fill' objectFit="cover" className="brightness-50 blur-[2px]" />

            <div className="absolute top-0 left-0 right-0 bottom-0 text-white flex items-center justify-center p-2" >
                <p className="">{props.title}</p>
            </div>
        </div>
    );
}

export default Cards1;
