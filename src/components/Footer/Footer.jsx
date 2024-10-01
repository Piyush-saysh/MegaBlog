import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

export default function Footer() {
    return (
        <footer className="py-10 bg-footer_header border-t-4 border-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -m-6">
                    {/* Logo and Copyright Section */}
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 flex items-center">
                                <Logo width="100px" />
                            </div>
                            <p className="text-sm text-gray-400">
                                &copy; Copyright 2023. All Rights Reserved by DevUI.
                            </p>
                        </div>
                    </div>

                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-widest mb-6">
                                Company
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-widest mb-6">
                                Support
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Legal Section */}
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-widest mb-6">
                                Legals
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
