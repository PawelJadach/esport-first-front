import { Card } from "@components/Card/Card";
import { Navbar } from "@components/Navbar/Navbar";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { createRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Home: React.FC = () => {
    const ref = createRef<HTMLDivElement>();
    const [dyvision, setDivision] = useState("sr");
    const scroll = (scrollOffset: number) => {
        if (ref && ref.current) {
            ref.current.scrollLeft += scrollOffset;
        }
    };

    const players = {
        fifa: [
            {
                id: 1,
                nick: "mrowa1991",
                photo: "mrowca.webp",
            },
            {
                id: 2,
                nick: "Alagher_PL",
                photo: "alagher.webp",
            },
            {
                id: 3,
                nick: "yoboski87",
                photo: "yoboski.webp",
            },
            {
                id: 4,
                nick: "sQubany_96",
                photo: "squbany.webp",
            },
            {
                id: 5,
                nick: "Franiu77621",
                photo: "franiu.webp",
            },
            {
                id: 6,
                nick: "kwiato91",
                photo: "kwiato.webp",
            },
            {
                id: 7,
                nick: "tomasz93pl",
                photo: "tomasz.webp",
            },
            {
                id: 8,
                nick: "Czejenos84",
                photo: "czejenos.webp",
            },
            {
                id: 9,
                nick: "IIOzSII",
                photo: "ozs.webp",
            },
            {
                id: 10,
                nick: "ArtursPe",
                photo: "arturspe.webp",
            },
            {
                id: 11,
                nick: "EF_GOZDZiK",
                photo: "gozdzik.webp",
            },
            {
                id: 12,
                nick: "WP_ME_MYSZA",
                photo: "mysza.webp",
            },
            {
                id: 13,
                nick: "TSP_Antek213",
                photo: "awatar.webp",
            },
            {
                id: 14,
                nick: "agalop30",
                photo: "agalop.webp",
            },
            {
                id: 15,
                nick: "xPolski_1312",
                photo: "awatar.webp",
            },
            {
                id: 16,
                nick: "ciacho93",
                photo: "ciacho.webp",
            },
            {
                id: 17,
                nick: "xKryZySx",
                photo: "kryzys.webp",
            },
            {
                id: 18,
                nick: "Tadziu1996",
                photo: "tadziu.webp",
            },
            {
                id: 19,
                nick: "XxCzarus141xX",
                photo: "awatar.webp",
            },
        ],
        sr: [
            {
                id: 1,
                nick: "Kocur",
                photo: "kocur-4.webp",
            },
            {
                id: 2,
                nick: "Mateusz Peczka",
                photo: "peczka.webp",
            },
            {
                id: 3,
                nick: "Mateusz Kędzia",
                photo: "kedzia.webp",
            },
            {
                id: 4,
                nick: "Jakub Kwiatkowski",
                photo: "awatar.webp",
            },
            {
                id: 5,
                nick: "Mateusz Grzonka",
                photo: "awatar.webp",
            },
            {
                id: 6,
                nick: "Bernard Wojtas",
                photo: "awatar.webp",
            },
        ],
    };

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return (
        <>
            <Navbar />
            <div
                className="hero min-h-screen py-48 bg-cover bg-no-repeat  overflow-hidden"
                // style={{ backgroundImage: `url(/images/hero)` }}
            >
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-inherit">
                        <motion.div
                            initial={{ x: "300%" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="mb-5 text-5xl font-bold">
                                <motion.span
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants}
                                    transition={{ delay: 1 }}
                                >
                                    <span className="text-primary">#</span>
                                </motion.span>
                                <span>Born for Esport</span>
                            </h1>
                        </motion.div>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="btn btn-primary"
                        >
                            Get Started
                        </motion.button>
                    </div>
                </div>
            </div>
            <main className="gap-5 max-w-screen-lg mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="tabs tabs-boxed">
                        <button
                            onClick={() => setDivision("sr")}
                            className={`tab ${
                                dyvision === "sr" && "tab-active"
                            }`}
                        >
                            Sim Racing
                        </button>
                        <button
                            onClick={() => setDivision("fifa")}
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
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-10"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente molestias quis corrupti cupiditate illum aut
                    consectetur tempora iusto odio autem, vitae unde
                    reprehenderit similique alias ratione voluptates? Accusamus
                    eius fuga eos ullam possimus minima cumque necessitatibus
                    obcaecati molestiae incidunt, commodi dicta, labore
                    deleniti? Quisquam consequatur quia animi deleniti magni
                    dicta, omnis iure voluptatem pariatur repellat! Temporibus
                    error eum similique dolores delectus molestiae doloribus
                    tempore eius totam odit expedita hic enim quos cumque rerum
                    sed eos inventore, veritatis autem. Debitis eaque est
                    nesciunt deleniti, rerum recusandae explicabo libero.
                    Deleniti distinctio quas consequatur harum, cupiditate ex,
                    inventore commodi repellat cumque sint ipsam?
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-10"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente molestias quis corrupti cupiditate illum aut
                    consectetur tempora iusto odio autem, vitae unde
                    reprehenderit similique alias ratione voluptates? Accusamus
                    eius fuga eos ullam possimus minima cumque necessitatibus
                    obcaecati molestiae incidunt, commodi dicta, labore
                    deleniti? Quisquam consequatur quia animi deleniti magni
                    dicta, omnis iure voluptatem pariatur repellat! Temporibus
                    error eum similique dolores delectus molestiae doloribus
                    tempore eius totam odit expedita hic enim quos cumque rerum
                    sed eos inventore, veritatis autem. Debitis eaque est
                    nesciunt deleniti, rerum recusandae explicabo libero.
                    Deleniti distinctio quas consequatur harum, cupiditate ex,
                    inventore commodi repellat cumque sint ipsam?
                </motion.p>
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
        </>
    );
};

export default Home;
