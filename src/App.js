import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Crud from './Crud';
import Read from './Read';
import Update from './Update';

const App = () => {
  
  return (
    <div>
      
      <Routes>
        <Route exact path='/' element={<Crud/>}></Route>
        <Route exact path='/read' element={<Read/>}></Route>
        <Route exact path='/update' element={<Update/>}></Route>
      </Routes>
    
      
    </div>
  )
}

export default App
