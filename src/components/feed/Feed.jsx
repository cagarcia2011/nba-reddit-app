import { Card } from '../card/Card'

export function Feed({ posts }) {

    if (!Array.isArray(posts)) return <></>

    return (
        <div className='w-full flex flex-col gap-4'>
            {
                posts?.map((post, index) => (
                    <Card key={index} post={post}/>
                ))
            }
        </div>
    )
}