import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Card from "./components/Card"
import Card2 from "./components/Card2"
import Endcard from "./components/Endcard"

import img1 from "./images/illustration-grow-together.svg"
import img2 from "./images/illustration-flowing-conversation.svg"
import img3 from "./images/illustration-your-users.svg"

import Footer from "./components/Footer"



function App() {

  return (
    <>
      <Header />
      <MainContent />

      <br /><br /><br /><b><br /><br /></b>
      <Card 
      title="Grow Together"
      src={img1}
      />

      <Card2 
      title="Flowing Conversations"
      src={img2}
      />

      <Card 
      title="Your Users"
      src={img3}
      />

      <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><b><br /><br /></b><br /><br />
      <Endcard />
      <Footer />

    </>
  )
}

export default App
