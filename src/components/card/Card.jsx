import MarkdownView from "react-showdown"

import { RxThickArrowUp, RxThickArrowDown } from 'react-icons/rx'

import { getDateFromUTCSeconds, getDateDiff } from "../../utils"

export function Card({ post }) {

    const author = post?.data?.author
    const created_utc = post?.data?.created_utc
    const url = post?.data?.url
    const title = post?.data?.title ? post?.data?.title : ""
    const selftext = post?.data?.selftext ? post?.data?.selftext : ""
    const score = post?.data?.score ? post?.data?.score : 0

    function truncateText(str, num) {
        if (str.length <= num) {
            return str
          }
          // Return str truncated with '...' concatenated to the end of str.
          return str.slice(0, num) + '...'   
    }

    const postDate = getDateFromUTCSeconds(created_utc)


    const spoilerExtension = {
        type: 'lang',
        regex: /\>\!(.*?)\!\</g,
        replace: '<span></span>',
    };

    return (
        <div className="hover:cursor-pointer block overflow-auto w-full py-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex flex-row">
                <div className="ml-4 mr-5 mt-6 flex flex-col gap-1 items-center justify-start">
                    <RxThickArrowUp />
                    <span className="font-light text-sm">{score}</span>
                    <RxThickArrowDown />
                </div>
                <div className="flex flex-col gap-1 mr-2">
                    <div className="flex flex-row gap-2 items-baseline">
                        {
                            author && <span className="font-light text-xs text-gray-400">Posted by {author}</span> 
                        }
                        <span className="my-1 font-light text-xs text-gray-400">{getDateDiff(postDate)}</span>
                    </div>
                    <h6 onClick={() => window.open(url, '_blank')}  className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{truncateText(title, 200)}</h6>
                    <div className="flex flex-col gap-2 items-start justify-center">
                        <MarkdownView markdown={selftext} extensions={[spoilerExtension]} options={{
                            strikethrough: true, // enable strikethrough syntax (~~like this~~)
                            simpleLineBreaks: true, // treat line breaks as <br> tags
                            literalMidWordUnderscores: true, // allow underscores in words
                            tables: true,
                            emoji: true,
                            extensions: [spoilerExtension]
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}