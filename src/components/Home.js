import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Markup } from 'interweave';

const Home = () => {
  const [text,setText]=useState("")  
  const [result,setResult]=useState("")
  useEffect(()=>{
  axios.post("http://localhost:5000/markdownToHTML",{text}).then(res=>setResult(res.data)).catch(err=>console.log(err))
  },[text])
  return (
    <div>
        <label for='text'>Enter the text </label>
        <textarea name='text' onChange={(e)=>setText(e.target.value)}/>
        
        <Markup content={result} />
    </div>
  )
}

export default Home;