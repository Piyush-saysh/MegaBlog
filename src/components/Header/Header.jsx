import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name:'',
            slug:'/',
            active: !authStatus
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Sign-up',
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: 'Home',
            slug: '/',
            active: authStatus,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        },
        {
            name: 'My Post',
            slug: '/my-post',
            active: authStatus,
        },
    ];

    return (
        <header className="py-4 bg-footer_header shadow-lg">
            <Container>
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="mr-6">
                        <Link to="/">
                            <Logo width="70px" />
                        </Link>
                    </div>

                    <ul className="flex items-center space-x-6 text-white">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="px-4 py-2 rounded-full hover:bg-gray-700 transition duration-200 ease-in-out"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}

                        {/* Logout Button */}
                        {authStatus && (
                            <li>
                                <LogoutBtn className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 transition duration-200 ease-in-out text-white" />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );


//    // side navbar


    // return (
    //     <aside className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white shadow-lg">
    //         <div className="flex flex-col items-center py-8">
    //             {/* Logo */}
    //             <Link to="/" className="mb-6">
    //                 <Logo width="80px" />
    //             </Link>

    //             {/* Navigation Links */}
    //             <ul className="flex flex-col space-y-4 w-full px-4">
    //                 {navItems.map((item) =>
    //                     item.active ? (
    //                         <li key={item.name}>
    //                             <button
    //                                 onClick={() => navigate(item.slug)}
    //                                 className="w-full text-left px-4 py-2 text-lg rounded-md hover:bg-gray-700 transition duration-200 ease-in-out"
    //                             >
    //                                 {item.name}
    //                             </button>
    //                         </li>
    //                     ) : null
    //                 )}

    //                 {/* Logout Button */}
    //                 {authStatus && (
    //                     <li className="mt-auto">
    //                         <LogoutBtn className="w-full px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition duration-200 ease-in-out text-white" />
    //                     </li>
    //                 )}
    //             </ul>
    //         </div>
    //     </aside>
    // );

}
