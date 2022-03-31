import Image from "next/image";
import React from "react";

export const Card: React.FC = () => {
    return (
        <div className="card min-w-[360px] bg-neutral">
            <div className="w-100 h-96 relative">
                <Image
                    src="/images/kemot.webp"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="card-body">
                <h2 className="card-title justify-center">Kemot</h2>
            </div>
        </div>
    );
};
