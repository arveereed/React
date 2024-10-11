interface Post {
  post: {
    id: number,
    title: string,
    body: string
  }
}

const PostFeed = ({ post }: Post) => {
  return (
    <article>
      <h1>{post.id}</h1>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </article>
  )
}

export default PostFeed