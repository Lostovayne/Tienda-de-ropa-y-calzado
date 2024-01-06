import { titleFont } from "@/config/fonts";
import Link from "next/link";

import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

export const TopMenu = () => {
    return (
        <nav className="flex px-5 justify-between items-center w-full">
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Tesla</span>
                    <span className="text-gray-600 font-medium"> | Shop</span>
                </Link>
            </div>

            {/* Center Menu */}

            <div className="hidden sm:block">
                <Link
                    className="m-2 p-2 rounded-md font-medium transition-all hover:bg-gray-100"
                    href="/category/men"
                >
                    Hombres
                </Link>
                <Link
                    className="m-2 p-2 rounded-md font-medium transition-all hover:bg-gray-100"
                    href="/category/women"
                >
                    Mujeres
                </Link>
                <Link
                    className="m-2 p-2 rounded-md font-medium transition-all hover:bg-gray-100"
                    href="/category/kids"
                >
                    Niños
                </Link>
            </div>

            {/* Search, Cart, Menu */}

            <div className="flex items-center gap-1">
                <Link href="/search">
                    <IoSearchOutline className="w-6 h-6" />
                </Link>
                <Link href="/cart">
                    <div className="relative">
                        <span className="absolute -top-1 bg-red-500 text-white rounded-full px-1 -right-2 text-xs font-bold ">
                            {" "}
                            3
                        </span>
                        <IoCartOutline className="w-6 h-6" />
                    </div>
                </Link>

                {/* Menu */}

                <button className="m-2 p-2 font-medium rounded-md transition-all hover:bg-gray-100">
                    Menú
                </button>
            </div>
        </nav>
    );
};
