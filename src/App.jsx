import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./../public/notes.js";
function Addnotes() {
    return (
        notes.map((note)=>
            <Note  
                key={note.key} 
                title={note.title} 
                content={note.content} 
            />)
    )
}
function App() {
    return (
        <div>
            <Header/>
            <Addnotes/>
            <Footer/>
        </div>
    )
}

export default App;