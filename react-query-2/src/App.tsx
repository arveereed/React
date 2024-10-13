import { useQuery, useMutation } from "@tanstack/react-query"
import { getPosts } from "./api/posts"

interface Post {
  id: number,
  title: string
}

function App() {
  const { data: posts, isLoading, isError, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts
  })

  return (
    <>
    <h1>Posts List</h1>
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
