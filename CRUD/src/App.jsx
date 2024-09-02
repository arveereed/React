import Header from './components/Header';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Missing from './components/Missing';
import useAxiosFetch from './hooks/useAxiosFetch';
import { Routes, Route } from "react-router-dom";

function App() {
  const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/booklist");

  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/addbook' element={<AddBook/>}/>
        <Route path='*' element={<Missing />}/>
      </Routes>
    </div>
  )
}

export default App
