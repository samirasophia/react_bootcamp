import {Character} from "./characters.ts";
import {useNavigate, useParams} from "react-router-dom";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {
    const params = useParams();
    const name: string | undefined = params.name;
    const navigate = useNavigate();
    return (
        <div>
            <div onClick={() => navigate("/characterGallery")}>{name}</div>
            <p>
                {props.character.name}
            </p>
            <p>
                {props.character.species}
            </p>
        </div>
    )
}
