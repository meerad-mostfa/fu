import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './componants1/Footer/Footer';



function App() {
let[count,setCount]=useState(0);
 const changcount=()=>{
setCount(count+1);
  console.log(count);
 }
  return (
<>
<button onClick={changcount}>Asma'a salah {count}</button>
</>
  )
}

export default App
