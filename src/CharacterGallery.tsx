import {Character} from "./characters.ts";
import CharacterCard from "./CharacterCard.tsx";
import {useNavigate, useParams} from "react-router-dom";

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps) {
    const params = useParams();
    const name: string | undefined = params.name;
const navigate = useNavigate();
    return (
        <div>
            <p>
                Gallery
            </p>
             <div onClick={() => navigate("/characterGallery")}>{name}</div>
            {props.characters.map(character => <CharacterCard
                                                                key={character.id}
                                                                character={character}/>)}
        </div>
    )
}
