import { useState } from 'react';
import logo from '../assets/taskbuddy-logo.png';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const linkActive = "hover:text-gray-400 text-2xl bg-cyan-200 text-black font-semibold py-1 px-6 rounded shadow-xl";
    const unActive = "hover:text-gray-400 text-2xl py-1 px-6";

    return (<>
        <header className="bg-cyan-800 text-white hidden md:flex justify-between items-center px-14 w-full fixed top-0 z-50">
            <Link to='' className="flex items-center">
                <img src={logo} alt="Logo of the site, a simple geometric shape" className="h-15 w-15 mr-2" />
                <span className="text-xl font-bold">Task Buddy</span>
            </Link>
            <nav className="flex items-center space-x-4">
                {/* <a href='#' className=' '>Demo</a> */}
                <NavLink to='' className={({ isActive }) => isActive ? linkActive : unActive}>Home</NavLink>
                <NavLink to="Tasks" className={({ isActive }) => isActive ? linkActive : unActive}>Tasks</NavLink>

                {/* <   input type="text" placeholder="Search..." className="px-2 py-1 rounded border-white border-1" /> */}
            </nav>
        </header>

        <div className='md:hidden'>
            <header className="bg-cyan-800 text-white p-4 flex justify-between items-center">
                <Link to='' className="flex items-center cursor-pointer">
                    <img src={logo} alt="Logo of the site, a simple geometric shape" className="h-11 w-11 mr-2" />
                    <span className="text-xl font-bold">Task&nbsp;Buddy</span>
                </Link>
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
                        <NavLink to='' className={({ isActive }) => isActive ? linkActive : unActive} onClick={() => setSidebarOpen(false)}>Home</NavLink>
                        <NavLink to="Tasks" className={({ isActive }) => isActive ? linkActive : unActive} onClick={() => setSidebarOpen(false)}>Tasks</NavLink>
                        {/* <input type="text" placeholder="Search..." className="px-2 py-1 rounded" /> */}
                    </nav>
                </div>
            </div>
        </div>
    </>

    )
}