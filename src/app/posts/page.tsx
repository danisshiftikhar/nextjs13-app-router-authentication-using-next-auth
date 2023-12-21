import Post from '@/components/Post'
import Link from 'next/link'
async function getPostsData() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
  return posts.json()
}

const Home = async () => {
  const posts = await getPostsData()
  return (
    <div>
      {posts.map((d: any, i: number) => {
        return (
          <Link className='cursor-pointer' href={`/post/${d.id}`} key={i}>
            <Post data={d} />
          </Link>
        )
      })}
    </div>
  )
}

export default Home
