import { ReactMarkdown } from "react-markdown/lib/react-markdown"

import { getDateFromUTCSeconds, getDateDiff } from "../../utils"

export function Card({ title, link, text, author, utcSeconds}) {

    function truncateText(str, num) {
        if (str.length <= num) {
            return str
          }
          // Return str truncated with '...' concatenated to the end of str.
          return str.slice(0, num) + '...'   
    }

    const postDate = getDateFromUTCSeconds(utcSeconds)

    return (
        <div onClick={() => window.open(link, '_blank')} className="hover:cursor-pointer block overflow-auto w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex flex-col gap-1">
                {
                    author && <span className="font-light text-xs text-gray-400">Posted by {author}</span> 
                }
                <span className="my-1 font-light text-xs text-gray-400">{getDateDiff(postDate)}</span>
            </div>
            <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{truncateText(title, 200)}</h6>
            <ReactMarkdown className="font-normal text-gray-700 dark:text-gray-400">{truncateText(text, 400)}</ReactMarkdown>
        </div>
    )
}