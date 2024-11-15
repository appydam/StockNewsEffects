// src/components/Navbar.js
"use client";

import { Bell, User, Bookmark } from "lucide-react";
import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md py-4 px-8">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Left Section - Logo */}
                <div className="text-2xl font-bold text-gray-800 cursor-pointer">
                    <Link href="/">StockNewsEffects</Link>
                </div>

                {/* Center Section - Links */}
                <div className="flex space-x-6">
                    {/* <a href="#news" className="text-gray-700 hover:text-gray-900 font-medium">
                        News
                    </a>
                    <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">
                        Contact Us
                    </a> */}
                    {/* <a href="#signin" className="text-gray-700 hover:text-gray-900 font-medium bg-slate-100 p-2 rounded-lg">
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </a> */}
                </div>

                {/* Right Section - Icons */}
                <div className="flex space-x-4">
                    <button className="text-gray-700 hover:text-gray-900">
                        <Bell className="w-6 h-6" />
                    </button>
                    <button className="text-gray-700 hover:text-gray-900">
                        <Bookmark className="w-6 h-6" />
                    </button>
                    {/* <button className="text-gray-700 hover:text-gray-900">
                        <User className="w-6 h-6" />
                    </button> */}
                    <a href="#signin" className="text-gray-700 hover:text-gray-900 font-medium bg-slate-100 p-2 rounded-lg">
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </a>
                </div>
            </div>
        </nav>
    );
}
