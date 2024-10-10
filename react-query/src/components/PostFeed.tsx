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
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </article>
  )
}

export default PostFeed