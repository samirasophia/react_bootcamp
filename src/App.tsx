import './App.css'
import React, {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import {Route, Routes} from 'react-router-dom';
import Home from './Home.tsx';
import CharacterPick from "./CharacterPick.tsx";
import CharacterCard from "./CharacterCard.tsx";
import CreateCharacterForm from "./CreateCharacterForm.tsx";
import {FormInputType, Reponse} from "./Rickandmortydata.tsx";

export type SetCharacterProps = {
    setCharacters: React.Dispatch<React.SetStateAction<FormInputType[]>>;
}
export type CharactersProps = {
    setCharacters: React.Dispatch<React.SetStateAction<FormInputType[]>>;
    characters: FormInputType[];
}
function Mainpage() {
    return <div>
    <Home/>
    </div>;
}

function Characters({setCharacters, characters}: CharactersProps) {
    return <div>
        <CharacterPick setCharacters={setCharacters} characters={characters}/>
    </div>;
}

function Gallery() {
    return <CharacterCard character={name}/>
}

function CreateChar({setCharacters}: SetCharacterProps) {
    return <CreateCharacterForm setCharacters={setCharacters}/>
}

function App() {

    const [characters, setChars] = useState<FormInputType[]>(Reponse.results)

    return (
        <>
            <Routes>
                <Route path="/" element={<Mainpage/>} />
                <Route path="/characters" element={<Characters setCharacters={setChars} characters={characters}/>} />
                <Route path="/characterGallery/:name" element={<Gallery/>} />
                <Route path={"/create"} element={<CreateChar setCharacters={setChars} />} />
            </Routes>
        </>
    )
}

export default App
