import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import AddSlip from './component/addSlip'
import Header from './component/header'
import Pagebody from './component/pagebody'

function App() {

  const [visible,setVisible] = useState(false);

  return (
        <>
          <Header/>
          <Navbar visible={visible} setVisible={setVisible}/>
          <AddSlip visible={visible} setVisible={setVisible}/>
          <Pagebody />
        </>
      )
}

export default App
