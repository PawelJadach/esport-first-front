import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { menuItems } from "src/constants/menuItems";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Navbar: React.FC = () => {
    return (
        <div className="fixed inset-x-0 top-0 bg-black pt-5 z-50">
            <div className="navbar max-w-screen-lg mx-auto">
                <div className="navbar-start">
                    <Link href={"/"}>
                        <a className="hover:tracking-wide transition-all font-bold text-2xl">
                            <span className="text-primary">Esport</span> First
                        </a>
                    </Link>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal p-0 hidden lg:flex gap-5">
                        {menuItems.map((menuItem) =>
                            menuItem ? (
                                <MenuItem
                                    key={menuItem.id}
                                    href={menuItem.href}
                                    text={menuItem.text}
                                />
                            ) : null,
                        )}
                        <div className="divider divider-horizontal"></div>
                        <Link href="https://www.facebook.com/EsportF1rst">
                            <a className="hover:text-primary font-bold transition-colors">
                                <FontAwesomeIcon size="lg" icon={faFacebook} />
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/esportfirst/">
                            <a className="hover:text-primary font-bold transition-colors">
                                <FontAwesomeIcon size="lg" icon={faInstagram} />
                            </a>
                        </Link>
                    </ul>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-5 h-5 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-52 gap-5"
                        >
                            {menuItems.map((menuItem) => (
                                <MenuItem
                                    key={menuItem.id}
                                    href={menuItem.href}
                                    text={menuItem.text}
                                />
                            ))}
                            <div>
                                <Link href="https://www.facebook.com/EsportF1rst">
                                    <a className="hover:text-primary font-bold transition-colors mr-5">
                                        <FontAwesomeIcon
                                            size="lg"
                                            icon={faFacebook}
                                        />
                                    </a>
                                </Link>
                                <Link href="https://www.instagram.com/esportfirst/">
                                    <a className="hover:text-primary font-bold transition-colors">
                                        <FontAwesomeIcon
                                            size="lg"
                                            icon={faInstagram}
                                        />
                                    </a>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface MenuItemProps {
    href: string;
    text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, text }) => {
    return (
        <Link href={href}>
            <a className="hover:text-primary font-bold transition-colors">
                {text}
            </a>
        </Link>
    );
};
