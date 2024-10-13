import posts from '../../data/posts'

function wait(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export const getPosts = async (obj: Object) => {
  console.log(obj)
  return wait(1000).then(() => [...posts])
}

const generateId = () => {
  return posts.length
          ? posts.length + 1 : 1
}

export const addPost = async (title: string) => {
  return wait(1000).then(() => posts.push({ id: generateId(), title }))
}