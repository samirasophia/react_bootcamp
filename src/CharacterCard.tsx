import {Character} from "./characters.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {
    const params = useParams();
    const name: string | undefined = params.name;
    const [comment, setComment] = useState('');
    const navigate = useNavigate();
    const [comments, setComments] = useState<String[]>([]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setComments(comments => {
            console.log(comment)
            return [...comments, comment];
        });
        setComment('');
    };

    return (
        <div>
            <div onClick={() => navigate("/characterGallery")}>{name}</div>
            <p>
                {props.character.name}
            </p>
            <p>
                {props.character.species}
            </p>

            <form onSubmit={

                handleCommentSubmit
            }
            >
                <input
                    type="text"
                    id="comment"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit">Kommentar hinzufügen</button>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <div key={index}>
                            <div>{comment}</div>
                        </div>
                    ))
                ) : (
                    <div>No commentsfound</div>
                )}
            </form>
        </div>
    );
}
