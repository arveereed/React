import { useEffect, useState } from 'react'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

interface Post {
  id: number,
  title: string
}

function App() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`)
        if (!response.ok) throw new Error('failed to fetch data')
        const posts = await response.json()

        setPosts(posts)
        
      } catch (error: any) {
        console.log(error.message)
      }      
    }

    fetchData()
  }, [])

  return (
    <div className="tutorial">
      <h1>Fetching Data</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
