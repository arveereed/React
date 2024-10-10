import { useMutation, useQuery } from "@tanstack/react-query"
import PostFeed from "./components/PostFeed"
import { useEffect } from "react"

const BASE_URL = 'https://jsonplaceholder.typicode.com'

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

function App() {
  const { 
    data: posts,
    isError,
    isLoading
   } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => fetch(`${BASE_URL}/posts`).then(res => res.json())
  })

  const { mutate, isPending, isError: isMutationError, isSuccess } = useMutation({
    mutationFn: (newPost: Omit<Post, 'id'>) => fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    }).then(res => res.json())
  })

  useEffect(() => {
    if (posts) {
      console.log(posts)
    }
  }, [posts])

  return (
    <>
      <button onClick={() => mutate({
        userId: 4,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      })} disabled={isPending}>{isPending ? 'Adding..' : 'Add Post'}</button>

      <h1>Posts List</h1>

      {isLoading && (
        <h1>Loading...</h1>
      )}
      {isError || isMutationError && !isLoading && (
        <h1>There was an error</h1>
      )}
      {!isLoading && (
        <div className="posts-container">
          {posts?.map((post: Post) => (
            <PostFeed key={post.id} post={post}/>
          ))}
        </div>
      )}
    </>
  )
}

export default App
