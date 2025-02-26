import { useState } from 'react';
import logo from '../assets/taskbuddy-logo.png';

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (<>
        <header className="bg-cyan-800 text-white p-4 hidden md:flex justify-between items-center px-14 w-full">
            <div className="flex items-center">
                <img src={logo} alt="Logo of the site, a simple geometric shape" className="h-15 w-15 mr-2" />
                <span className="text-xl font-bold">Site Name</span>
            </div>
            <nav className="flex items-center space-x-4">
                <a href="#" className="hover:text-gray-400 text-2xl">Home</a>
                <a href="#" className="hover:text-gray-400 text-2xl">Tasks</a>
                <input type="text" placeholder="Search..." className="px-2 py-1 rounded border-white border-1" />
            </nav>
        </header>

        <div className='md:hidden'>
            <header className="bg-cyan-800 text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo of the site, a simple geometric shape" className="h-10 w-10 mr-2" />
                    <span className="text-xl font-bold">Site Name</span>
                </div>
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white focus:outline-none md:hidden">
                    <i className="fas fa-bars"></i>
                </button>
            </header>

            <div className={`fixed inset-0 bg-cyan-800 bg-opacity-75 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="bg-white w-64 h-full p-4">
                    <button onClick={() => setSidebarOpen(false)} className="text-cyan-400 focus:outline-none mb-4">
                        <i className="fas fa-times"></i>
                    </button>
                    <nav className="flex flex-col space-y-4">
                        <a href="#" className="hover:text-gray-400">Home</a>
                        <a href="#" className="hover:text-gray-400">Tasks</a>
                        <input type="text" placeholder="Search..." className="px-2 py-1 rounded" />
                    </nav>
                </div>
            </div>
        </div>
    </>

    )
}