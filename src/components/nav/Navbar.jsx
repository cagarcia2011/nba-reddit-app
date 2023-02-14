import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { FaBars } from 'react-icons/fa'
import { CiDark } from 'react-icons/ci'
import { MdLightMode } from 'react-icons/md'
import { RiCloseFill } from 'react-icons/ri'

import { toggleTheme, setCurrentTheme, goTo } from '../../store/features'

import { tabs } from '../../configuration'

import logo from '../../assets/nbaRedditLogo.svg'

export default function Navbar() {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)
    const { currentPath } = useSelector(state => state.tabManager)
    const [navbarOpen, setNavbarOpen] = useState(false)

    const onToggleMenu = (e) => {
        e.preventDefault()

        setNavbarOpen(prev => !prev)
    }

    const onThemeToggle = (e) => {
        e.preventDefault()

        dispatch(toggleTheme())
    }

    const onTabChange = (tab) => {

        dispatch(goTo(tab))
    }

    useEffect(() => {
        dispatch(setCurrentTheme())
    }, [])

    return (

        <nav className="min-h-[4rem] p-3 border-b-[1px] border-gray-200 bg-light dark:bg-dark dark:border-gray-500 w-full fixed z-50">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://nba-reddit.netlify.app/" className="flex items-baseline">
                    <img src={logo} alt="NBA Reddit App" className='w-6 mx-2' />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NBA Reddit App</span>
                </a>
                <div>
                    <button onClick={onThemeToggle} type="button" className="hover:animate-wiggle p-1 text-sm text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-theme-toggle" aria-expanded="false">
                        <span className="sr-only">Toggle theme</span>
                        {
                            theme?.selected === "light" ?
                            <MdLightMode className='text-lg'/> :
                            <CiDark className='text-lg'/>
                        }
                    </button>
                    <button onClick={onToggleMenu} data-collapse-toggle="navbar-hamburger" type="button" className={`hover:animate-wiggle inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`} aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open or close main menu</span>
                        {
                            navbarOpen ? 
                            <RiCloseFill className={`text-xl transition-all duration-300 ease-in-out`}/> :
                            <FaBars className={`text-xl transition-all duration-300 ease-in-out`}/>
                        }
                    </button>
                </div>
                <div className={`${navbarOpen ? "block" : "hidden"} w-full transition-all ease-in-out duration-[400ms]`} id="navbar-hamburger">
                    <ul className="flex flex-col mt-4 gap-2 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        {
                            tabs.map(tab => (
                                <li key={tab.id} onClick={(e) => {
                                    onToggleMenu(e)
                                    onTabChange(tab.name)
                                }}>
                                    <NavLink to={tab.path} className={`${tab.path===currentPath ? "bg-gray-300 dark:bg-gray-700" : ""} flex items-baseline justify-start gap-2 my-1 mx-1 py-2 pl-3 pr-4 text-light-txt dark:text-dark-txt rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600`} aria-current="page">
                                        <tab.icon className='text-sm'/>{tab.title}
                                    </NavLink>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </nav>

    )
}