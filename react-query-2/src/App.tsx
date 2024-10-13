import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getPosts, addPost } from "./api/posts"

interface Post {
  id: number,
  title: string
}

function App() {
  const queryClient = useQueryClient()

  const { data: posts, isLoading, isError, error, isFetching } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: obj => getPosts(obj)
  })

  const { mutate, isPending } = useMutation({
    mutationFn: (title: string) => addPost(title),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
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
      
      {!isLoading && !isError && (
        <>
          <p>
            <button disabled={isPending} onClick={() => mutate('New Post')}>
              {isPending ? 'Adding new post...' : 'Add new Post' }
            </button>
          </p>
          {posts?.map(post => (
            <div key={post.id}>{post.title}</div>
          ))}
         {isFetching && (
          <div>Adding..</div>
          )}
        </>
      )}
    </>
  )
}

export default App
