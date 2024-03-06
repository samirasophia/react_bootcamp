import {Reponse} from "./Rickandmortydata.tsx";
import {JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState} from "react";
import {useNavigate} from "react-router-dom";


function CharacterPick() {
    const [characters, setChars] = useState([...Reponse.results])
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setChars(Reponse.results.filter((d) => d.name.startsWith(searchTerm)));
    }
    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    }

    const handlePreviousPage = () => {
        setPage((prevPage) => prevPage - 1);
    }
    const startIdx = (page - 1) * 5;
    const endIdx = startIdx + 5;
    const currentCharacters = characters.slice(startIdx, endIdx);
    const navigate = useNavigate()

    return ( <div className="parent" style={{ padding: '30px', margin: '20px' }}>
            <input type="text" placeholder="Search characters" onChange={handleSearch} />
            {currentCharacters.length > 0 ? (
                currentCharacters.map((character, index) => (
                <div>
                    <div key={index}>{character.name}</div>
                    <button onClick={() => navigate("/characterGallery/"+ character.name)}>search</button>
                </div>
                ))
            ) : (
                <div>No characters found</div>
            )}
            <button onClick={handlePreviousPage}>Back</button>
            <button onClick={handleNextPage}>Next</button>

    </div>
    );
}

export default CharacterPick;