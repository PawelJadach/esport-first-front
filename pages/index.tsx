import { Card } from "@components/Card/Card";
import { Navbar } from "@components/Navbar/Navbar";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { createRef, useState } from "react";

const Home: React.FC = () => {
    const ref = createRef<HTMLDivElement>();
    const [dyvision, setDivision] = useState("fifa");
    const scroll = (scrollOffset: number) => {
        if (ref && ref.current) {
            ref.current.scrollLeft += scrollOffset;
        }
    };

    const players = {
        fifa: [
            {
                id: 1,
                nick: "fifa1",
            },
            {
                id: 2,
                nick: "fifa2",
            },
            {
                id: 3,
                nick: "fifa3",
            },
            {
                id: 4,
                nick: "fifa4",
            },
        ],
        cs: [
            {
                id: 1,
                nick: "cs1",
            },
            {
                id: 2,
                nick: "cs2",
            },
        ],
        sr: [
            {
                id: 1,
                nick: "sr1",
            },
        ],
    };
    return (
        <>
            <Navbar />
            <div
                className="hero min-h-screen py-48 bg-cover bg-no-repeat"
                // style={{ backgroundImage: `url(/images/hero.png)` }}
            >
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-inherit">
                        <h1 className="mb-5 text-5xl font-bold">
                            <span className="text-primary">#</span>Born for
                            Esport
                        </h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <main className="gap-5 max-w-screen-lg mx-auto">
                <div>
                    <div className="tabs tabs-boxed">
                        <button
                            onClick={() => setDivision("fifa")}
                            className={`tab ${
                                dyvision === "fifa" && "tab-active"
                            }`}
                        >
                            Fifa
                        </button>
                        <button
                            onClick={() => setDivision("cs")}
                            className={`tab ${
                                dyvision === "cs" && "tab-active"
                            }`}
                        >
                            Counter Strike
                        </button>
                        <button
                            onClick={() => setDivision("sr")}
                            className={`tab ${
                                dyvision === "sr" && "tab-active"
                            }`}
                        >
                            Sim Racing
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
                                    <Card key={item.id} />
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
                </div>
                <p className="mt-10">
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
                </p>
                <p className="mt-10">
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
                </p>
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
