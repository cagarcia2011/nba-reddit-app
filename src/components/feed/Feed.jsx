import { Card } from '../card/Card'

export function Feed({ posts }) {

    if (!Array.isArray(posts)) return <></>

    return (
        <div className='w-full flex flex-col gap-4'>
            {
                posts?.map((post, index) => (
                    <Card key={index} title={post.data?.title} link={post.data?.url} text={post.data?.selftext} author={post.data?.author} utcSeconds={post.data?.created_utc}/>
                ))
            }
        </div>
    )
}