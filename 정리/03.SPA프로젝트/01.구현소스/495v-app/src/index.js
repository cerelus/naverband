import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './495v/Layout';
import Main from './495v/Main';
import Story from './495v/Story';
import Product from './495v/Product';
import Recipe from './495v/Recipe';

export default function App() {

 
  return(

<BrowserRouter basename={process.env.PUBLIC_URL}>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Main />} />
           <Route path="st" element={<Story />} />
           <Route path="pr" element={<Product />} />
           <Route path="re" element={<Recipe />} />
         </Route>
       </Routes>
</BrowserRouter>

  )
} //////// App ////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
