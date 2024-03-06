import './App.css'
import React, {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import {Route, Routes} from 'react-router-dom';
import Home from './Home.tsx';
import CharacterPick from "./CharacterPick.tsx";
import CharacterCard from "./CharacterCard.tsx";

function Mainpage() {
    return <div>
    <Home/>
    </div>;
}

function Characters() {
    return <div>
        <CharacterPick/>
    </div>;
}

function Gallery() {
    return <CharacterCard character={name}/>
}

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    return (
        <>
            <Routes>
                <Route path="/" element={<Mainpage/>} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/characterGallery/:name" element={<Gallery/>} />
            </Routes>
        </>
    )
}

export default App
