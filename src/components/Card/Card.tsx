import Image from "next/image";
import React from "react";

interface CardProps {
    nick: string;
    photo: string;
}

export const Card: React.FC<CardProps> = ({ nick, photo }) => {
    return (
        <div className="card min-w-[360px] bg-neutral">
            <div className="w-100 h-96 relative">
                <Image
                    src={"/images/" + photo}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    placeholder="blur"
                    blurDataURL={"/images/" + photo}
                />
            </div>
            <div className="card-body">
                <h2 className="card-title justify-center">{nick}</h2>
            </div>
        </div>
    );
};
