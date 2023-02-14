import { AiFillHome } from 'react-icons/ai'
import { FaHotjar } from 'react-icons/fa'
import { GiSevenPointedStar, GiPodium } from "react-icons/gi"
import { CgSearch } from 'react-icons/cg'


export const tabs = [
    {   
        id: 0,
        path: '/',
        name: 'home',
        title: 'Home',
        icon: AiFillHome
    },
    {   
        id: 1,
        path: '/new',
        name: 'new',
        title: 'New',
        icon: GiSevenPointedStar
    },
    {   
        id: 2,
        path: '/hot',
        name: 'hot',
        title: 'Hot',
        icon: FaHotjar
    },
    {   
        id: 4,
        path: '/top',
        name: 'top',
        title: 'Top',
        icon: GiPodium
    },
    { 
        id: 5,
        path: '/search',
        name: 'search',
        title: 'Search',
        icon: CgSearch
    }
]