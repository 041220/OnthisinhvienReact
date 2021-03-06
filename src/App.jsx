
import './App.css';

import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Upload from './components/Upload';


const App = () => {
  const [data, setData] = useState('')
  console.log('data', data)

  return (
    <>
      <BrowserRouter>
        <Header data={data} setData={setData} />
        <Routes>
          <Route path='/content/:userId' element={<Content data={data} setData={setData} />} />
          <Route path='/upload' element={<Upload />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
// <Header data={data} setData={setData} />

      // <Content data={data} setData={setData} />
      // <Footer />