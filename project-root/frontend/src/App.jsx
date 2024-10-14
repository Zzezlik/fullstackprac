import { useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {

  useEffect(() => {
    const URL = "http://localhost"
    axios.get(`${URL}/api/data`)
    .then((req, res) => {
      console.log(res.data)
    })

  })

  return (
    <div>
      <h1>Fullstack Project</h1>
        <p>123</p>
    </div>
  );
}

export default App
