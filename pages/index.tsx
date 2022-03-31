import { Navbar } from "@components/Navbar/Navbar";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
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
                    <div className="btn-group">
                        <button className="btn btn-active">Fifa</button>
                        <button className="btn">Counter Strike</button>
                        <button className="btn">Sim Racing</button>
                    </div>
                    <div className="divider"></div>
                    <div className="flex gap-5">
                        <div className="card w-96 bg-neutral">
                            <figure>
                                <img
                                    src="https://api.lorem.space/image/car?w=400&h=225"
                                    alt="car!"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Life hack</h2>
                                <p>How to park your car at your garage?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Learn now!
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-neutral">
                            <figure>
                                <img
                                    src="https://api.lorem.space/image/car?w=400&h=225"
                                    alt="car!"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Life hack</h2>
                                <p>How to park your car at your garage?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Learn now!
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-neutral">
                            <figure>
                                <img
                                    src="https://api.lorem.space/image/car?w=400&h=225"
                                    alt="car!"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Life hack</h2>
                                <p>How to park your car at your garage?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Learn now!
                                    </button>
                                </div>
                            </div>
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
