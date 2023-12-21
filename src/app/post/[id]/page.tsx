import Post from '@/components/Post'

export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  )
  return posts.map((post: any) => ({
    id: '' + post.id,
  }))
}

async function getPostData(id: any) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return post.json()
}

const PostPage = async ({ params }: any) => {
  const { id } = params
  const data = await getPostData(id)
  return <Post data={data} />
}

export default PostPage
