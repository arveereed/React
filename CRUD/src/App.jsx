import Header from './components/Header';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Missing from './components/Missing';
import useAxiosFetch from './hooks/useAxiosFetch';
import { Routes, Route } from "react-router-dom";
import { useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';

function App() {
  const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/booklist");
  const setBooks = useStoreActions((actions) => actions.setBooks);

  useEffect(() => {
    setBooks(data);
  }, [data, setBooks]);

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
