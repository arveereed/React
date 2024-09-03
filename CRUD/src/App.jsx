import Header from './components/Header';
import Home from './components/Home';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import Missing from './components/Missing';
import useAxiosFetch from './hooks/useAxiosFetch';
import { Routes, Route } from "react-router-dom";
import { useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';
import BookDetails from './components/BookDetails';

function App() {
  const { data, fetchError, isLoading } = useAxiosFetch("https://render-json-server-jfsy.onrender.com/booklist");
  const setBooks = useStoreActions((actions) => actions.setBooks);

  useEffect(() => {
    setBooks(data);
  }, [data, setBooks]);

  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Home fetchError={fetchError} isLoading={isLoading}/>}/>
        <Route path='/addbook' element={<AddBook/>}/>
        <Route path='/edit/:id' element={<EditBook/>}/>
        <Route path='/readmore/:id' element={<BookDetails/>}/>
        <Route path='*' element={<Missing />}/>
      </Routes>
    </div>
  )
}

export default App
