import { Card } from "@components/Card/Card";
import { Navbar } from "@components/Navbar/Navbar";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { createRef, useState } from "react";
import { motion } from "framer-motion";
import { players } from "src/constants/players";

const Home: React.FC = () => {
    const ref = createRef<HTMLDivElement>();
    const [dyvision, setDivision] = useState("sr");

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const changeDyvision = (dyvisionToSet: string) => {
        resetScroll();

        setDivision(dyvisionToSet);
    };

    const scroll = (scrollOffset: number) => {
        if (ref && ref.current) {
            ref.current.scrollLeft += scrollOffset;
        }
    };

    const resetScroll = () => {
        if (ref && ref.current) {
            ref.current.scrollLeft = 0;
        }
    };

    return (
        <div className="bg-black">
            <Navbar />
            <div className="hero min-h-screen bg-cover bg-no-repeat overflow-hidden mb-20 bg-[url(/images/banner.webp)]">
                <div className="p-3 md:p-24 w-full h-full bg-black/[.60] flex justify-center items-center">
                    <motion.div
                        initial={{ x: "300%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1
                            className="mb-5 text-3xl md:text-6xl font-bold"
                            style={{ textShadow: "rgb(17 24 39) 1px 1px" }}
                        >
                            <motion.span
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                transition={{ delay: 1 }}
                            >
                                <span className="text-primary">#</span>
                            </motion.span>
                            <span className="text-white decoration-8">
                                BORN FOR ESPORT
                            </span>
                        </h1>
                    </motion.div>
                </div>
            </div>
            <main className="gap-5 max-w-screen-lg mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="tabs tabs-boxed bg-black">
                        <button
                            onClick={() => changeDyvision("sr")}
                            className={`tab ${
                                dyvision === "sr" && "tab-active"
                            }`}
                        >
                            Sim Racing
                        </button>
                        <button
                            onClick={() => changeDyvision("fifa")}
                            className={`tab ${
                                dyvision === "fifa" && "tab-active"
                            }`}
                        >
                            Fifa
                        </button>
                    </div>
                    <div className="divider"></div>
                    <div className="relative">
                        <div
                            className="gap-5 flex rounded-box w-full overflow-x-hidden scroll-smooth"
                            ref={ref}
                        >
                            {players[dyvision as keyof typeof players].map(
                                (item) => (
                                    <Card
                                        key={item.id}
                                        nick={item.nick}
                                        photo={item.photo}
                                    />
                                ),
                            )}
                            {players[dyvision as keyof typeof players].length >
                                2 && (
                                <>
                                    <button
                                        className="btn btn-square btn-primary absolute top-1/3 left-3 opacity-50 hover:opacity-70"
                                        onClick={() => scroll(-384)}
                                    >
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                    </button>
                                    <button
                                        className="btn btn-square btn-primary absolute top-1/3 right-3 opacity-50 hover:opacity-70"
                                        onClick={() => scroll(384)}
                                    >
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </main>
            <footer className="p-5 mt-48">
                <div className="footer items-center text-neutral-content max-w-screen-lg mx-auto">
                    <div className="items-center grid-flow-col">
                        <p>
                            Esport First Copyright © 2022 - All right reserved
                        </p>
                    </div>
                    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <Link href="https://www.facebook.com/EsportF1rst">
                            <a className="hover:text-primary font-bold transition-colors">
                                <FontAwesomeIcon size="2x" icon={faFacebook} />
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/esportfirst/">
                            <a className="hover:text-primary font-bold transition-colors">
                                <FontAwesomeIcon size="2x" icon={faInstagram} />
                            </a>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
