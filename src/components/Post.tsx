const Post = ({ data }: any) => {
  return (
    <div className='border-2 border-black rounded-lg m-2 p-2 bg-white text-black '>
      <div>{data.id}</div>
      <div className='text-lg font-extrabold '>{data.title}</div>
      <div className=''>{data.body}</div>
    </div>
  )
}

export default Post
