import { useEffect, useRef, useState } from 'react'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

interface Post {
  id: number,
  title: string
}

function App() {
  const [error, setError]: any = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(0)  

  const abortControllerRef = useRef<AbortController | null>(null) // to abort the loadinng of the previous fetch request

  useEffect(() => {
    const fetchData = async () => {
      abortControllerRef.current?.abort()
      abortControllerRef.current = new AbortController()

      setIsLoading(true)

      try {
        const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
          signal: abortControllerRef.current?.signal
        })
        const posts = await response.json()
        setPosts(posts)
        
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.log('Aborted')
          return
        } 
        setError(error)

      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [page])

  if (error) {
    return <h1>Something went wrong! Please try again</h1>
  }

  return (
    <div className="tutorial">
      <h1>Fetching Data</h1>
      <button onClick={() => setPage(prev => prev + 1)}>Increase Page ({page})</button>
      {isLoading && (
        <h1>Loading...</h1>
      )}
      {!isLoading &&
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default App
