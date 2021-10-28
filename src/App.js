import { useState, useEffect} from "react";
import axios from "axios";

import "./App.css";

function App () {
    const  [argonaute, setArgonaute] = useState([])
    const  [newMember, setNewMember] = useState('')

const getDataArgonaute = async () => {
    const resData = await axios.get('http://localhost:4242/argonaute')
    console.log(resData)
    setArgonaute(resData.data)
}

useEffect(() => {

getDataArgonaute()
}, []
)

const postData = async (e) => {
  // e.preventDefault()
  const resData = await axios.post('http://localhost:4242/argonaute',{
newMember
  })
  console.log(newMember)
  getDataArgonaute()
}

return(
<div className="App">
<header>
  <h1>
    <img 
    src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
    Les Argonautes
  </h1>
</header>


<main>
  <h2>Ajouter un(e) Argonaute</h2>
  <form onSubmit={postData} className="new-member-form">
    <label for="name">Nom de l&apos;Argonaute</label>
    <input 
    onChange={(e) => setNewMember(e.target.value)}
    id="name" 
    name="name" 
    type="text" 
    placeholder="Entrez votre nom" />
    <button type="submit">Envoyer</button>
  </form>
  
  <h2>Membres de l'équipage</h2>
  <section className="member-list">
    {argonaute.map((argonaute) => (
      <div key={argonaute.id} className="argonaute-item">
        {argonaute.name}
      </div>
    ))}
  </section>
</main>

<footer>
  <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
</footer>
</div>
)}

export default App;
