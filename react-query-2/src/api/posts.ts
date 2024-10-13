import posts from '../../data/posts'

function wait(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export const getPosts = () => {
  return wait(1000).then(() => [...posts])
}