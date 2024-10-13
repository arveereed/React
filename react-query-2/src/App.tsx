import { useQuery, useMutation } from "@tanstack/react-query"
import { getPosts, addPost } from "./api/posts"

interface Post {
  id: number,
  title: string
}


function App() {
  const { data: posts, isLoading, isError, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts
  })

  const { mutate } = useMutation({
    mutationFn: (title: string) => addPost(title)
  })

  return (
    <>
    <h1>Posts List</h1>
    <p>
      <button onClick={() => mutate('New Post')}>Add new Post</button>
    </p>
    {isLoading && (
      <div>Loading...</div>
    )}
    {!isLoading && isError && (
      <div>{JSON.stringify(error)}</div>
    )}
      {posts?.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  )
}

export default App
