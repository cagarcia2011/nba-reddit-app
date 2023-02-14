import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { fetchNBARedditListings } from '../../store/features'
import { rootPath } from '../../store/features'
import { setCurrentTab } from '../../store/features'

import { Feed } from '../feed/Feed'
import { LoadingSpinner } from '../spinner/LoadingSpinner'
import { TextInput } from 'flowbite-react'

export default function Home({ tab }) {
    const dispatch = useDispatch()
    const nbaRedditListings = useSelector(state => state.nbaRedditListings)
    const { tabMap, defaultTab } = useSelector(state => state.tabManager)

    const [searchTerm, setSearchTerm] = useState("")

    const location = useLocation()

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            setSearchTerm(e.target.value)
        }
    }

    useEffect(() => {
        const url = (tab !== "search") ?
                    `${rootPath}/${tab}`:
                    rootPath

        const searchTermValue = (tab === "search") ?
                                searchTerm :
                                null
        dispatch(fetchNBARedditListings({tab:url, searchTerm: searchTermValue}))
    }, [tab, rootPath, searchTerm])

    useEffect(() => {
        dispatch(setCurrentTab(location.pathname.replace("/", "")))
    }, [location.pathname])

    return (
        <div className="w-full p-6 bg-light dark:bg-dark text-light-txt dark:text-dark-txt">
            <div className='p-1 border-b-[1px] border-gray-200 dark:border-gray-500'>
                <h2>{tabMap[tab]?.title==="Home" ? tabMap[defaultTab]?.title : tabMap[tab]?.title}</h2>
                {
                    tab==="search" &&
                    <TextInput className='my-2' type="text" sizing="md" onKeyDown={onKeyDown} placeholder='Search Reddit r/nba'/>
                }
            </div>
            <div className='p-2 '>
                {
                    nbaRedditListings?.loading ? 
                    <LoadingSpinner /> :
                    <Feed posts={nbaRedditListings?.data}/>
                }
            </div>
        </div>
    )
}