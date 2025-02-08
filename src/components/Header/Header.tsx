import { useState } from "react";
import { Globe, Heart, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);
    const navigate = useNavigate(); // Use navigate for redirection

    return (
        <nav className="bg-white shadow-md px-6 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img src="/assets/madmon-logo.png" alt="madmon logo" className="h-14" />
                </div>

                <div className="flex gap-4">
                    <div className="hidden md:flex space-x-6 text-blue-600 font-semibold">
                        <Link to="/" className="hover:text-blue-800 cursor-pointer mt-1">
                            Home
                        </Link>
                        <Link to="/about" className="hover:text-blue-800 cursor-pointer mt-1">
                            About
                        </Link>
                        <Link to="/contact" className="hover:text-blue-800 cursor-pointer mt-1">
                            Contact
                        </Link>
                        <Link to="/favourite" className="flex items-center space-x-1 cursor-pointer hover:text-blue-800">
                            <Heart className="w-5 h-5" />
                            <span>Favourite</span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4 relative">
                        <div
                            className="flex items-center space-x-1 cursor-pointer relative"
                            onClick={() => setIsLangOpen(!isLangOpen)}
                        >
                            <Globe className="w-5 h-5 text-blue-600" />
                            <span className="text-blue-600 font-semibold">EN</span>
                            <ChevronDown className="w-5 h-5 text-blue-600" />
                        </div>

                        {isLangOpen && (
                            <div className="absolute top-10 left-0 bg-white shadow-md border rounded-md w-24 text-center">
                                <button
                                    className="block w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                    onClick={() => navigate("/")}
                                >
                                    English
                                </button>
                                <button
                                    className="block w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                    onClick={() => navigate("/ar")}
                                >
                                    Arabic
                                </button>
                            </div>
                        )}

                        <div
                            className="flex items-center space-x-2 cursor-pointer relative"
                            onClick={() => setIsUserOpen(!isUserOpen)}
                        >
                            <img
                                src="/assets/user.png"
                                alt="User Avatar"
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="text-gray-700 font-medium">Omar Mohamed</span>
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        </div>

                        {isUserOpen && (
                            <div className="absolute top-12 right-0 bg-white shadow-md border rounded-md w-24 text-center">
                                <button
                                    className="block w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                    onClick={() => navigate("/log-out")}
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
