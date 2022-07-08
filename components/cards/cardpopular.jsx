import Image from 'next/image';
import React from 'react';

const Cardpopular = (props) => {
    return (
        <div className="relative w-52 h-[280px] flex-none snap-start">
            <Image src={props.image} className="rounded-md brightness-50"
            layout='fill' objectFit='cover' objectPosition="left"
            />

            <div className="absolute text-white left-3 top-3">
                <p className="font-light " >{props.subtitle}</p>
                <h3 className="font-bold text-2xl">{props.title}</h3>
            </div>
        </div>
    );
}

export default Cardpopular;
